<script>
  import { onMount } from "svelte";
  import BeforeUpdateComponent from './before-update.svelte'



  let photos = [];

  onMount(async () => {
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=3`
    );
    photos = await resp.json();
  });
</script>

<h4>LifeCycle ==> onMount</h4>

<div class="row">
  {#each photos as photo}
    <div class="col s4">
      <div class="card">
        <div class="card-image">
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <a href="/#" class="btn-floating halfway-fab waves-effect waves-light red">
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


<BeforeUpdateComponent />