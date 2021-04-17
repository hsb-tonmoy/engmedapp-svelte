<script>
  export let title;
</script>

<nav id="navbar-main" class="navbar is-fixed-top">
  <div class="navbar-brand">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="navbar-item is-hidden-desktop jb-aside-mobile-toggle">
      <span class="icon"><i class="mdi mdi-forwardburger mdi-24px" /></span>
    </a>
    <div class="navbar-item has-control">
      <div class="control">
        <input placeholder="Search everywhere..." class="input" />
      </div>
    </div>
  </div>
  <div class="navbar-brand is-right">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a
      class="navbar-item is-hidden-desktop jb-navbar-menu-toggle"
      data-target="navbar-menu"
    >
      <span class="icon"><i class="mdi mdi-dots-vertical" /></span>
    </a>
  </div>
  <div class="navbar-menu fadeIn animated faster" id="navbar-menu">
    <div class="navbar-end">
      <a href="/" target="_blank" class="navbar-item has-divider">
        <span>Visit Site</span>
      </a>

      <div
        class="navbar-item has-dropdown has-dropdown-with-icons has-divider has-user-avatar is-hoverable"
      >
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="navbar-link is-arrowless">
          <div class="is-user-avatar">
            <img
              src="https://avatars.dicebear.com/api/initials/sd.svg?r=50&m=10"
              alt="Username"
            />
          </div>
          <div class="is-user-name"><span>SirDarknight</span></div>
          <span class="icon"><i class="mdi mdi-chevron-down" /></span>
        </a>
        <div class="navbar-dropdown">
          <!-- svelte-ignore a11y-missing-attribute -->
          <a href="profile.html" class="navbar-item">
            <span class="icon"><i class="mdi mdi-account" /></span>
            <span>My Profile</span>
          </a>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="navbar-item">
            <span class="icon"><i class="mdi mdi-settings" /></span>
            <span>Settings</span>
          </a>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="navbar-item">
            <span class="icon"><i class="mdi mdi-email" /></span>
            <span>Messages</span>
          </a>
          <hr class="navbar-divider" />
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="navbar-item">
            <span class="icon"><i class="mdi mdi-logout" /></span>
            <span>Log Out</span>
          </a>
        </div>
      </div>

      <!-- svelte-ignore a11y-missing-attribute -->
      <a
        href="/about"
        title="About"
        class="navbar-item has-divider is-desktop-icon-only"
      >
        <span class="icon"><i class="mdi mdi-help-circle-outline" /></span>
        <span>About</span>
      </a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a title="Log out" class="navbar-item is-desktop-icon-only">
        <span class="icon"><i class="mdi mdi-logout" /></span>
        <span>Log out</span>
      </a>
    </div>
  </div>
</nav>

<aside class="aside is-placed-left is-expanded">
  <div class="aside-tools">
    <div class="aside-tools-label">
      <span><b>EngMedApp</b> Admin</span>
    </div>
  </div>
  <div class="menu is-menu-main">
    <p class="menu-label">General</p>
    <ul class="menu-list">
      <li>
        <a
          href="/adminpage/dashboard"
          class="is-active router-link-active has-icon"
        >
          <span class="icon"><i class="mdi mdi-desktop-mac" /></span>
          <span class="menu-item-label">Dashboard</span>
        </a>
      </li>
    </ul>
    <p class="menu-label">Question Database</p>
    <ul class="menu-list">
      <li>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a href="/adminpage/questions/" rel="prefetch" class="has-icon">
          <span class="icon has-update-mark"><i class="fas fa-th-list" /></span>
          <span class="menu-item-label">Question List</span>
        </a>
      </li>
      <li>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a href="/adminpage/questions/create" class="has-icon">
          <span class="icon"><i class="fas fa-pen" /></span>
          <span class="menu-item-label">Add Question</span>
        </a>
      </li>

      <li>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="has-icon has-dropdown-icon">
          <span class="icon"><i class="fas fa-th" /></span>
          <span class="menu-item-label">Categories</span>
          <div class="dropdown-icon">
            <span class="icon"><i class="mdi mdi-plus" /></span>
          </div>
        </a>
        <ul>
          <li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a href="#void">
              <span>Board</span>
            </a>
          </li>
          <li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a href="#void">
              <span>Level</span>
            </a>
          </li>
          <li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a href="#void">
              <span>Paper</span>
            </a>
          </li>
          <li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a href="#void">
              <span>Year</span>
            </a>
          </li>
          <li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a href="#void">
              <span>Session</span>
            </a>
          </li>
        </ul>
      </li>
      <li>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a href="forms.html" class="has-icon">
          <span class="icon"><i class="mdi mdi-square-edit-outline" /></span>
          <span class="menu-item-label">Explanations</span>
        </a>
      </li>
    </ul>
    <p class="menu-label">Quiz</p>
    <ul class="menu-list">
      <li>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a target="_blank" class="has-icon">
          <span class="icon"><i class="mdi mdi-credit-card-outline" /></span>
          <span class="menu-item-label">Quizzes</span>
        </a>
      </li>
      <li />
      <li>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a target="_blank" class="has-icon">
          <span class="icon"><i class="fas fa-question-circle" /></span>
          <span class="menu-item-label">Questions</span>
        </a>
      </li>
      <li>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="has-icon">
          <span class="icon"><i class="fas fa-th" /></span>
          <span class="menu-item-label">Categories</span>
        </a>
      </li>
    </ul>
  </div>
</aside>
<section class="section is-title-bar">
  <div class="level">
    <div class="level-left">
      <div class="level-item">
        <ul>
          <li>Admin</li>
          <li>{title}</li>
        </ul>
      </div>
    </div>
  </div>
</section>
