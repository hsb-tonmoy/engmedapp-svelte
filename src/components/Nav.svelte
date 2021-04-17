<script>
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
      <a href="/adminpage" class="navbar-item">Admin</a>
    </div>
    <div class="navbar-end">
      <a href="/adminpage/logout" class="navbar-item">Logout</a>
    </div>
  </div>
</nav>
