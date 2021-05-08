import { writable } from "svelte/store";
import { get } from "svelte/store";

export const access_token = writable(null);

export const user = writable(null);

export const authenticating = writable(false);

export const loginError = writable(null);

const API_URL = "https://api.engmedapp.com/";

async function getNewAccess() {
  try {
    const res = await fetch(API_URL + "accounts/auth/token/refresh/", {
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
      if (data.code === "token_not_valid") {
        // window.location.href("/login");
        console.log(data);
      }
    }
  } catch (err) {
    console.log("");
  }
}

void (async function main() {
  if (localStorage.getItem("logged-in")) {
    await getNewAccess();
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
  localStorage.removeItem("logged-in");
};

export const login = async (email, password) => {
  authenticating.set(true);
  try {
    const res = await fetch(API_URL + "accounts/auth/token/", {
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
      access_token.set(data.access);
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
  localStorage.setItem("logged-in", "true");
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
