<script lang="ts">
  import { onMount } from "svelte";
  import { createScene } from "./scene";

  let element: HTMLCanvasElement;

  onMount(() => {
    createScene(element);
  });
</script>

<canvas bind:this={element} />
