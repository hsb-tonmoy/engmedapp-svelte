<script>
  import { user } from "../../components/Auth/store.js";
  import { goto } from "@roxi/routify";

  if ($user && $user.id) {
    $goto(`/profile/${$user.username}`);
  } else {
    $goto(`/login`);
  }
</script>
