<script>
  let src = "assets/images/svelte-logo.png";
  let alt = "image logo svelte3";
  let title = 'Rick Astley'
</script>

<style>
  img {
    width: 48px;
    height: 48px;
  }
</style>

<div>
  <h2>Passed attribute <strong>SRC</strong></h2>
  <img {src} {alt} {title}/>
</div>
