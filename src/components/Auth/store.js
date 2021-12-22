import { writable } from "svelte/store";

export const user = writable(null);

export const authenticating = writable(false);

export const login_error = writable(false);

export const register_status = writable(null);

const API_URL = import.meta.env.VITE_API_URL;

async function getNewAccess() {
  try {
    const res = await fetch(API_URL + "auth/jwt/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: localStorage.getItem("refresh"),
      }),
    });
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("access", data.access);
    } else {
      console.log(res.status + res.statusText);
    }
  } catch (err) {
    console.log("");
  }
}

const verifyAccess = async () => {
  try {
    const res = await fetch(API_URL + "auth/jwt/verify/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("access"),
      }),
    });
    if (res.ok) {
      return true;
    } else if (!res.ok && res.status === 401) {
      await getNewAccess();
    } else {
      console.log(res.status + res.statusText);
    }
  } catch (err) {
    console.log("Verifying");
  }
};

void (async function main() {
  if (
    localStorage.getItem("refresh") &&
    localStorage.getItem("access") &&
    localStorage.getItem("user")
  ) {
    let access_token = localStorage.getItem("access");
    let refresh_token = localStorage.getItem("refresh");
    const accessTokenParts = JSON.parse(atob(access_token.split(".")[1]));
    const refreshTokenParts = JSON.parse(atob(refresh_token.split(".")[1]));
    const now = Date.now().valueOf() / 1000;

    if (
      typeof accessTokenParts.exp !== "undefined" &&
      accessTokenParts.exp < now
    ) {
      console.log("Token should be expired now");
      await getNewAccess();
      await authenticate();
    } else {
      await authenticate();
      console.log("You're logged back in.");
    }
    if (
      typeof refreshTokenParts.exp !== "undefined" &&
      refreshTokenParts.exp < now
    ) {
      console.log("Refresh token should be expired now");
      await logout();
    }
  } else {
    localStorage.clear();
  }
})();

export const logout = async () => {
  localStorage.removeItem("user");
  user.set(null);
  await fetch(API_URL + "accounts/logout/", {
    method: "POST",
    body: JSON.stringify({
      refresh: localStorage.getItem("refresh"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
};

export const login = async (email, password) => {
  authenticating.set(true);
  try {
    const res = await fetch(API_URL + "auth/jwt/create/", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      authenticate();
    } else if (
      res.status === 401 &&
      data.detail === "No active account found with the given credentials"
    ) {
      login_error.set("incorrect");
      authenticating.set(false);
    } else {
      console.log(res.status + res.statusText);
      authenticating.set(false);
    }
  } catch (err) {
    console.log(err);
  }
};

export const register = async (
  email,
  first_name,
  last_name,
  password,
  re_password
) => {
  register_status.set("registering");
  try {
    const res = await fetch(API_URL + "auth/users/", {
      method: "POST",
      body: JSON.stringify({
        email,
        first_name,
        last_name,
        password,
        re_password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.ok) {
      register_status.set("success");
    } else if (res.status === 400) {
      console.log(data);
      if (
        data.email &&
        data.email[0] === "Account with this Email Address already exists."
      ) {
        register_status.set("email_exists");
      } else if (
        data.password &&
        data.password[0] === "The two password fields didn't match."
      ) {
        register_status.set("password_mismatch");
      } else if (
        data.password &&
        data.password[0] === "The password is too similar to the Email Address."
      ) {
        register_status.set("password_similar");
      } else if (
        data.password &&
        data.password[0] ===
          "This password is too short. It must contain at least 8 characters."
      ) {
        register_status.set("password_short");
      } else if (
        data.password &&
        data.password[0] === "This password is too common."
      ) {
        register_status.set("password_common");
      } else if (
        data.password &&
        data.password[0] === "This password is entirely numeric."
      ) {
        register_status.set("password_numeric");
      }
    } else {
      console.log(res.status + res.statusText);
    }
  } catch (err) {
    console.log(err);
  }
};

export async function authenticate() {
  await getCredentials();
  authenticating.set(false);
}

export async function getCredentials() {
  try {
    const res = await fetch(API_URL + "auth/users/me/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT " + localStorage.getItem("access"),
      },
    });
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("user", data);
      user.set(data);
    } else if (!res.ok && res.status === 401) {
      getNewAccess();
    } else {
      console.log(res.status + res.statusText);
    }
  } catch (err) {
    console.log(err);
  }
}

export function saveCurrentLocation() {
  localStorage.setItem("currentLocation", window.location.href);
}
