<script>
  import Login from "./_login.svelte";

  const redirectToDashboard = () => {
    window.location.replace("/adminpage/dashboard");
  };
</script>

<main>
  <Login on:success={redirectToDashboard} />
</main>
