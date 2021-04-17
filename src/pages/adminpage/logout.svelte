<script>
  const API_URL = "https://engmedapp.herokuapp.com/";

  const baseURL = API_URL + "api/";

  async function logout() {
    try {
      const res = await fetch(baseURL + "account/logout/blacklist/", {
        method: "POST",
        body: JSON.stringify({
          refresh_token: localStorage.getItem("refresh_token"),
        }),
        headers: {
          Authorization: localStorage.getItem("access_token")
            ? "JWT " + localStorage.getItem("access_token")
            : null,
          "Content-Type": "application/json",
        },
      });
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      window.location.replace("/adminpage/");
    } catch (err) {
      console.log(err);
    }
  }
  logout();
</script>
