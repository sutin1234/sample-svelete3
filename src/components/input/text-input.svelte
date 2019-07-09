<script>
  // import marked from 'marked';

  // input
  let name = "sutin";

  // range
  let min = 0;
  let max = 10;
  let init = 5;

  // checkbox
  let check_yes = true;

  // radio button group
  let datas = ["thinnycode.com", "angular8", "Svelte3"];
  let selectdata = 2;

  // textarea
  let textareaValue = `Some words are *italic*, some are **bold**`;

  // select
  let html = `<p> Write some text!</p>`;
</script>

้
<h4>one way data binding</h4>
<div class="row">
  <div class="input-field col s6">
    <input id="first_name2" type="text" class="validate" bind:value={name} />
    <label class="active" for="first_name2">First Name</label>
  </div>
</div>
<div class="row">
  <div class="input-field col s6">
    <input type="range" class="validate" {min} {max} bind:value={init} />
    <label class="active" for="first_name2">{init}</label>
  </div>
</div>
<div class="row">
  <div class="input-field col s6">
    <p>
      <label>
        <input type="checkbox" bind:checked={check_yes} />
        <span>{check_yes ? 'Checked' : 'UnCheck'}</span>
      </label>
    </p>
  </div>
</div>
<div class="row">
  <div class="input-field col s6">
    <p>
      {#each datas as data}
        <label>
          <input
            type="radio"
            bind:group={selectdata}
            value={data}
            name={selectdata} />
          <span>{data}</span>
        </label>
      {/each}
    </p>
  </div>
</div>

<div class="row">
  <form class="col s12">
    <div class="row">
      <div class="input-field col s12">
        <textarea
          id="textarea1"
          class="materialize-textarea"
          bind:value={textareaValue} />
        <label for="textarea1">Textarea</label>
      </div>
    </div>
  </form>
</div>


