<script>
  import { createEventDispatcher } from "svelte";
  import EventForward from "./event-forward.svelte";

  const dispatch = createEventDispatcher("message");

  function sayHello() {
    // createCustomevent message
    dispatch("message", {
      text: "Hello EventDispatch!"
    });
  }
</script>

<button class="waves-effect waves-light btn-small" on:click={sayHello}>
  sayHello
</button>

<div>
  <h4>Event Forwarding</h4>
  <EventForward on:messageForward />
</div>
