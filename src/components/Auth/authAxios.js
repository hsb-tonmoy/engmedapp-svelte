import axios from "axios";

import { get } from "svelte/store";

import { access_token } from "./store.js";

const API_URL = "https://api.engmedapp.com/";

const authAxios = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: "JWT " + get(access_token),
  },
});

authAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (typeof error.response === "undefined") {
      alert(
        "A server/network error occurred. " +
          "Looks like CORS might be the problem. " +
          "Sorry about this - we will get it fixed shortly."
      );
      return Promise.reject(error);
    }

    if (error.response.status === 401) {
      return authAxios
        .post("accounts/login/refresh/", { withCredentials: true })
        .then((response) => {
          if (response.status === 200) {
            access_token.set(response.data.access);

            authAxios.defaults.headers["Authorization"] =
              "JWT " + response.data.access;
            originalRequest.headers["Authorization"] =
              "JWT " + response.data.access;

            return authAxios(originalRequest);
          } else if (response.status === 401) {
            console.log("Refresh token is expired");
            window.location.href = "/login/";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);

export default authAxios;
