import { writable, get } from "svelte/store";

export const access_token = writable(null);

export const user = writable(null);

export const authenticating = writable(false);

export const loginError = writable(null);

const API_URL = "https://api.engmedapp.com/";

async function getNewAccess() {
  try {
    const res = await fetch(API_URL + "accounts/login/refresh/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const data = await res.json();
      access_token.set(data.access);
      authenticate();
    } else {
      const data = await res.json();
      console.log(data);
      if (data.code === "token_not_valid") {
        localStorage.removeItem("logged-in");
        window.location.href("/login");
      }
    }
  } catch (err) {
    console.log("");
  }
}

void (async function main() {
  console.log(user);
  if (localStorage.getItem("logged-in")) {
    await getNewAccess();
  }
})();

export const logout = async () => {
  user.set(null);
  localStorage.removeItem("logged-in");
  await fetch(API_URL + "accounts/logout/", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const login = async (email, password) => {
  authenticating.set(true);
  try {
    const res = await fetch(API_URL + "accounts/login/", {
      method: "POST",
      credentials: "include",
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
      access_token.set(data.access);
      authenticate();
    } else if (res.status === 401 && res.body) {
      loginError.set("Incorrect E-mail or Password.");
      authenticating.set(false);
    } else {
      console.log(res.status + res.statusText);
      authenticating.set(false);
    }
  } catch (err) {
    console.log(err);
  }
};

export async function authenticate() {
  try {
    await getCredentials();

    localStorage.setItem("logged-in", "true");

    authenticating.set(false);
  } catch (err) {
    console.log(err);
  }
}

async function getCredentials() {
  try {
    const res = await fetch(API_URL + "auth/users/me/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT " + get(access_token),
      },
    });
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("data", data);
      user.set(data);
    } else if (!res.ok && res.status === 401) {
      getNewAccess();
    } else if (res.code === "user_inactive") {
      console.log("Inactive");
      loginError.set("Account Inactive");
    } else {
      console.log(res.status + res.statusText);
    }
  } catch (err) {
    console.log(err);
  }
}
