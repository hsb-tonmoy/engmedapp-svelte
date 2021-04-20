<script>
  import { createEventDispatcher } from "svelte";
  const API_URL = "https://api.engmedapp.com/";
  const dispatch = createEventDispatcher();
  const baseURL = API_URL + "api/";
  let email, password;

  async function login() {
    try {
      const res = await fetch(baseURL + "token/", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          Authorization: localStorage.getItem("access_token")
            ? "JWT " + localStorage.getItem("access_token")
            : null,
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        dispatch("success");
      } else {
        error = "An error occurred";
      }
    } catch (err) {
      console.log(err);
    }
  }
</script>

<svelte:head>
  <title>EngMedApp - Admin Login</title>
</svelte:head>

<main>
  <section class="container">
    <div class="columns is-multiline is-justify-content-center">
      <div class="column is-4 login">
        <div class="columns">
          <div class="column right has-text-centered">
            <h1 class="title is-4">Admin Login</h1>
            <form on:submit|preventDefault={login}>
              <div class="field">
                <div class="control">
                  <input
                    bind:value={email}
                    class="input is-medium"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input
                    bind:value={password}
                    class="input is-medium"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
              </div>

              <button
                type="submit"
                class="button is-block is-fullwidth is-primary is-default"
                >Login</button
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  :root {
    --brandColor: #45969b;
    --background: rgb(247, 247, 247);
    --textDark: #16345c;
    --textLight: #0660a9;
  }

  main {
    background: var(--background);
    height: 100vh;
    color: var(--textDark);
  }

  .field:not(:last-child) {
    margin-bottom: 1rem;
  }

  .login {
    margin-top: 10rem;
    background: white;
    border-radius: 10px;
  }

  .right {
    padding: 4.5rem;
  }

  .right .title {
    font-weight: 800;
    letter-spacing: -1px;
  }

  input {
    font-size: 1rem;
  }

  input:focus {
    border-color: var(--brandColor) !important;
    box-shadow: 0 0 0 1px var(--brandColor) !important;
  }
</style>
