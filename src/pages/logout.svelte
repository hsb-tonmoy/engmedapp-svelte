<script>
  import { logout, user } from "../components/Auth/store.js";
  import { goto } from "@roxi/routify";

  if ($user) {
    logout();
    $goto("/");
  } else {
    $goto("/login");
  }
</script>
