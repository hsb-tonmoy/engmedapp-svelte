import axios from "axios";

const API_URL = "https://api.engmedapp.com/";

const authAxios = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null,
  },
});

authAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem("refresh");

    if (typeof error.response === "undefined") {
      alert(
        "A server/network error occurred. " +
          "Looks like CORS might be the problem. " +
          "Sorry about this - we will get it fixed shortly."
      );
      return Promise.reject(error);
    }

    if (error.response.status === 401) {
      return axiosInstance
        .post("/token/refresh/", { refresh: refreshToken })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("access", response.data.access);

            axiosInstance.defaults.headers["Authorization"] =
              "JWT " + response.data.access;
            originalRequest.headers["Authorization"] =
              "JWT " + response.data.access;

            return axiosInstance(originalRequest);
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
