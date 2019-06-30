<script>
    let m = { x: 0, y: 0 };
    let m2 = m;
    function onmousemove(e) {
        m.x= e.clientX;
        m.y = e.clientY;
    }
</script>

<style>
    .box-position {
        border: 1px dashed red;
        padding: 10px;
    }
</style>


<div class="box-position" on:mousemove={onmousemove}>
    the mouse position <strong>{m.x}px</strong> x <strong>{m.y}px</strong>
</div>

<div>Event with arrow function</div>
<div class="box-position" on:mousemove={e => m2 = { x: e.clientX, y: e.clientY}}>
    the mouse position <strong>{m2.x}px</strong> x <strong>{m2.y}px</strong>
</div>