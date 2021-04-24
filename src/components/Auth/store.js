import { writable } from "svelte/store";

export const user = writable(null);

export const authenticating = writable(false);

export const loginError = writable(null);

const API_URL = "https://api.engmedapp.com/";

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
  if (localStorage.getItem("refresh") && localStorage.getItem("access")) {
    let access_token = localStorage.getItem("access");
    const tokenParts = JSON.parse(atob(access_token.split(".")[1]));
    const now = Date.now().valueOf() / 1000;

    if (typeof tokenParts.exp !== "undefined" && tokenParts.exp < now) {
      console.log("Token should be expired now");
      await getNewAccess();
      await authenticate();
    }
  }
})();

export const logout = async () => {
  user.set(null);
  await fetch(API_URL + "accounts/logout/blacklist/", {
    method: "POST",
    body: JSON.stringify({
      refresh: localStorage.getItem("refresh"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  localStorage.removeItem("user");
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
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      authenticate();
    } else if (res.status === 401 && res.body) {
    } else {
      console.log(res.status + res.statusText);
      authenticating.set(false);
    }
  } catch (err) {
    console.log(err);
  }
};

async function authenticate() {
  await getCredentials();
  authenticating.set(false);
}

async function getCredentials() {
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
