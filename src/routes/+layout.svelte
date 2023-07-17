<script>
  import "../app.css";
</script>

<main>
  <div class="">
    <slot />
  </div>
  <div
    class="absolute -z-50 w-screen h-screen left-0 top-0 flex flex-col justify-center items-center"
  >
    <img class="w-full h-full object-cover" src="/365days/cloud.png" />
  </div>
</main>

<style>
</style>
