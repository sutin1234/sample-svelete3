<script>
  import { beforeUpdate, afterUpdate } from "svelte";
  let photos = [];
  let proccess = '';

  beforeUpdate(() => {
    console.log("beforeUpdate " + new Date())
    //proccess = 'beforeUpdate...'
  });
  afterUpdate(() => {
    console.log("afterUpdate " + new Date());
    proccess = 'afterUpdate...'
  });
  async function onFetchPhoto() {
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=3`
    );
    photos = await resp.json();
  }
</script>

<h4>LifeCycle ==> beforeUpdate</h4>

<a href="/#" class="waves-effect waves-light btn" on:click={onFetchPhoto}>
  fetch photo
</a>
<div>{proccess}</div>
<div class="row">
  {#each photos as photo}
    <div class="col s4">
      <div class="card">
        <div class="card-image">
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <a
            href="/#"
            class="btn-floating halfway-fab waves-effect waves-light red">
            <i class="material-icons">add</i>
          </a>
        </div>
        <div class="card-content">
          <p> {photo.title} </p>
        </div>
      </div>
    </div>
  {/each}
</div>
