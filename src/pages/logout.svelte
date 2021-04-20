<script>
  import { logout, user } from "../components/Auth/store.js";
  import { goto } from "@roxi/routify";

  if ($user) {
    logout();
  } else {
    $goto("/login");
  }
</script>
