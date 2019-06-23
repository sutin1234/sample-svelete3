<script>
  let count = 1;
  function handleClick(e) {
    count++;
  }
</script>

<div class="data-binding">
  <button on:click={handleClick}>count {count} </button>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</div>
