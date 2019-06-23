<script>
  let user = { loggedIn: false };

  function toggle() {
    user.loggedIn = !user.loggedIn;
  }
</script>
<h1>If Else statement</h1>
{#if user.loggedIn}
  <button on:click={toggle}>Log out</button>

{:else}
  <button on:click={toggle}>Log in</button>
{/if}
