<script>
    import Child from "./child.svelte";
    let data = 'data from parent comp';
</script>

<style>
#nest-components {
    width: 100%;
}
</style>

<div id="nest-components">
    <Child />
</div>