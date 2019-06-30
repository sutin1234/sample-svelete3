<script>
  let count = 0;
  $: if (count >= 10) {
    alert("counter is dangerously high!");
    console.log(`the count is ${count}`);
    count = 9;
  }

  function handleClick() {
    count++;
  }
</script>

<button on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
