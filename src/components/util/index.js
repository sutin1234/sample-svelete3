import { onDestroy } from 'svelte'

let seconds = 0;
const interval = setInterval(() => {
    seconds += 1;
}, 1000)
onDestroy(() => clearInterval(interval))