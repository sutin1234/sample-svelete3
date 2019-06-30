<script>
  let promise = fetchData();

  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const text = await res.json();

    if (res.status == 200 && res.ok) {
      return text;
    } else {
      throw new Error(text);
    }
  }
  function handleClick() {
    promise = fetchData();
  }
</script>

<style lang="scss">
  ul > li {
    padding: 10px;
  }
</style>

{#await promise}
  <p>loading...</p>
{:then results}
  <h2>Results</h2>
  <ul>
    {#each results as result, i}
      <li>
         {i + 1}
        <strong>{result.username}</strong>
        : {result.name} :
        <strong>{result.phone}</strong>
        : {result.company.name}
      </li>
    {/each}
  </ul>
{:catch error}
  <p>{error.message}</p>
{/await}
