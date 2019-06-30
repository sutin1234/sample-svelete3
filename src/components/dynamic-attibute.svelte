<script>
  let src = "assets/images/svelte-logo.png";
  let alt = "image logo svelte3";
  let title = "Rick Astley";

</script>

<style>
  .img {
    width: 48px;
    height: 48px;
  }

</style>


<div class="test-scss">
  <div class="my-sass">my SASS</div>
  <h2>
    Passed attribute
    <strong>SRC</strong>
  </h2>
  <img class="img" {src} {alt} {title} />
</div>
