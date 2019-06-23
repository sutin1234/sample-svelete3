<script>
  let user = { loggedIn: false };

  function toggle() {
    user.loggedIn = !user.loggedIn;
  }
</script>

<h1>If Else statement</h1>
{#if user.loggedIn}
  <button class="waves-effect waves-light btn-large btn red" on:click={toggle}>
    <i class="material-icons  left">check</i>
    Log out
  </button>

{:else}
  <button class="waves-effect waves-light btn-large btn" on:click={toggle}>
    <i class="material-icons  left">clear</i>
    Log in
  </button>
{/if}
