<script>
  import { user, authenticating } from "./store";
  import { url } from "@roxi/routify";
</script>

<ul>
  <li>
    {#if $authenticating}
      authenticating...
    {:else if $user}
      <a href={$url("/user")}>{$user.username}</a>
    {:else}
      <a href={$url("/login")}>Login</a>
    {/if}
  </li>
</ul>

<style>
  ul.nested {
    /* display: none; */
    position: absolute;
  }
  ul.root:hover ul.nested {
    display: block;
  }
  li {
    margin-left: 6px;
    list-style: none;
  }

  label[for="form-field-first_name"],
  label[for="form-field-middle_in"],
  label[for="form-field-last_name"],
  label[for="form-field-email"],
  label[for="form-field-field_741630c"],
  label[for="form-field-field_3c9cc3c"],
  label[for="form-field-field_4ca1e38"],
  label[for="form-field-field_1306f45"],
  label[for="form-field-field_b70865d"] {
    display: none;
  }
</style>
