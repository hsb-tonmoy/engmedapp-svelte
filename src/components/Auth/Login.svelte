<script>
  import { login, authenticating, user } from "./store.js";
  import { getAuthURL } from "./socialStore.js";

  let email, password;

  const handleSubmit = () => login(email, password);
</script>

<section class="container">
  <div class="columns is-justify-content-center is-multiline">
    <div class="column is-4 login">
      <div class="columns">
        <div class="column right has-text-centered">
          <h1 class="title is-4">Login</h1>

          <form on:submit|preventDefault={handleSubmit}>
            <div class="field">
              <div class="control">
                <input
                  class="input is-medium"
                  id="email"
                  type="email"
                  name="email"
                  title="email"
                  placeholder="Email"
                  required
                  bind:value={email}
                />
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input
                  class="input is-medium"
                  id="password"
                  type="password"
                  name="password"
                  title="password"
                  placeholder="Password"
                  required
                  bind:value={password}
                />
              </div>
            </div>
            {#if !$authenticating && !$user}
              <button
                type="submit"
                class="button is-block is-primary is-fullwidth is-medium"
                >Login</button
              >
              <button
                on:click={() =>
                  getAuthURL(
                    "google-oauth2",
                    "http://localhost:5000/auth/social/google"
                  )}
                class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                type="button">Login with Google</button
              >
            {:else}
              <button class="btn">Logging In</button>
            {/if}
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  :root {
    --brandColor: hsl(166, 67%, 51%);
    --background: rgb(247, 247, 247);
    --textDark: hsla(0, 0%, 0%, 0.66);
    --textLight: hsla(0, 0%, 0%, 0.33);
  }

  .field:not(:last-child) {
    margin-bottom: 1rem;
  }

  .login {
    margin-top: 10rem;
    background: white;
    border-radius: 10px;
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
