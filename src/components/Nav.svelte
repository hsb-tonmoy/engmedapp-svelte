<script>
  import { authenticating, user } from "./Auth/store.js";
  const mobileMenuToggle = () => {
    let menu = document.querySelector("#nav-links");
    let burger = document.querySelector("#burger");
    menu.classList.toggle("is-active");
    burger.classList.toggle("is-active");
  };
</script>

<nav class="navbar has-shadow is-white">
  <div class="navbar-brand">
    <a href="/" class="navbar-item">
      <img src="/images/EMA-fullColor.png" alt="" /></a
    >
    <a
      href=" "
      class="navbar-burger"
      id="burger"
      aria-label="menu"
      on:click={mobileMenuToggle}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>
  <div class="navbar-menu" id="nav-links">
    <div class="navbar-start">
      <a href="/" class="navbar-item">Home</a>

      <a href="/questions" class="navbar-item">Questions</a>
      <a href="/profile" class="navbar-item">Profile</a>
      <a href="/adminpage" class="navbar-item">Admin</a>
    </div>
    <div class="navbar-end">
      {#if $user}
        <a href="/logout" class="navbar-item">Logout</a>
      {:else}
        <a href="/login" class="navbar-item">Login</a>
      {/if}
    </div>
  </div>
</nav>
