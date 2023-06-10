<script lang="ts">
  import "./app.css";
  import Content from "./lib/Content.svelte";
  import Orbit from "./lib/Orbit.svelte";
</script>

<svelte:head>
  <title>Python Verona</title>
</svelte:head>

<main
  class="min-w-screen grid min-h-screen w-full grid-cols-2 dark:bg-page-dark"
>
  <Content />
  <Orbit />
</main>
