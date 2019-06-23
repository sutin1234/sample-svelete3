<script>
  import { register } from "svelte-custom-elements"; // use custom elements

  export let name; // name of prop main.js
  const pkg = {
    name: "svelte",
    version: 3,
    speed: "blazing",
    website: "https://svelte.dev"
  };

  // used components
  import HelloWithProps from "./components/hello-with-props.svelte";
  import DynamicAttribute from "./components/dynamic-attibute.svelte";
  import NestComponent from "./components/nest-component.svelte";
  import ParseHtml from "./components/parse-html.svelte";
  import CountEvent from "./components/event-binding.svelte";
  import Declaration from "./components/auto-redeclared.svelte";
  import AutoRenderWithCondition from "./components/auto-render-condition.svelte";
  import AutoUpdateArray from "./components/auto-update-array.svelte";
  import SpreadProps from "./components/spread-props.svelte";
  import If from "./components/if.svelte";
  import IfElse from "./components/if-else.svelte";
  import Foreach from "./components/foreach.svelte";
  import AsyncAwait from "./components/async-await.svelte";

  //register( 'hello-component', Hello, []); // register custom elements
</script>

<style>
  h1 {
    color: purple;
  }
  /* hello-component::part(textPartCSS){
		color: red;
	 } */
</style>

<h1>
  Hello with props from main.js
  <strong>{name}!</strong>
</h1>

<HelloWithProps data="sutin" />
<DynamicAttribute />
<NestComponent />
<ParseHtml />
<CountEvent />
<Declaration />
<AutoRenderWithCondition />
<AutoUpdateArray />
<SpreadProps {...pkg} />
<If />
<IfElse />
<Foreach />
<AsyncAwait />
