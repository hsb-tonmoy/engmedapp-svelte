import { authenticating, access_token, authenticate } from "./store.js";

const API_URL = "https://api.engmedapp.com/";

export async function getAuthURL(provider, redirect_uri) {
  try {
    const res = await fetch(
      `${API_URL}accounts/o/${provider}/?redirect_uri=${redirect_uri}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.ok) {
      const data = await res.json();
      window.location.replace(data.authorization_url);
    } else {
      console.log(res.status + res.statusText);
    }
  } catch (err) {
    console.log(err);
  }
}

export async function socialLogin(provider, code) {
  authenticating.set(true);
  const res = await fetch(API_URL + "accounts/social/", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      provider,
      code,
    }),
  });
  if (res.ok) {
    const data = await res.json();
    access_token.set(data.token);
    await authenticate();
  } else if (res.status === 400) {
    loginError.set("Please try again.");
    authenticating.set(false);
    window.location.replace("/login");
  } else {
    console.log(res.status + res.statusText);
    authenticating.set(false);
  }
}
