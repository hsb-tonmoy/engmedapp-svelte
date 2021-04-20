import { writable } from "svelte/store";
export const user = writable(null);
export const authenticating = writable(false);

const API_URL = "https://api.engmedapp.com/";

if (localStorage.getItem("refresh") && localStorage.getItem("access")) {
  authenticate();
}

export const logout = () => {
  user.set(null);
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
    } else {
      console.log(res.status + res.statusText);
      authenticating.set(false);
    }
  } catch (err) {
    console.log(err);
  }
};

function authenticate() {
  getCredentials();
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
    } else {
      console.log(res.status + res.statusText);
    }
  } catch (err) {
    console.log(err);
  }
}
