<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher('message2')

    function sayHello2(){
        // createCustomevent message
        dispatch('messageForward', {
            text: 'Hello EventDispatch Forward!'
        })
    }

</script>

<button class="waves-effect waves-light btn-small" on:click={sayHello2}>
    sayHello Forward
</button>