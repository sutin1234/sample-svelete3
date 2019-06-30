<script>
    import ChildEventDispacher from './child-event-dispacher.svelte';
    
    function handleMessage(e){
        // effected from child called
       console.log(e.detail)
       alert(e.detail.text)
    }
</script>

<!-- bind event to child then callback handleMessage Function  -->
<ChildEventDispacher on:message={handleMessage} />

<!-- Event Forwarding -->
<ChildEventDispacher on:messageForward={handleMessage} />