<script>
  let count = 1;
  $: double = count * 2; // auto update & render DOM  when vartiable changed

  function handleClick(e) {
    count++;
  }
</script>

<div class="data-binding">
  <button on:click={handleClick}>increment</button>
  Clicked {count} {count === 1 ? 'time' : 'times'}
  <p>{count} doubled is {double}</p>
</div>
