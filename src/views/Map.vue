<template>
  <div>
    <video autoplay muted loop id="video">
      <source src="../assets/gotomoto_menu1.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: 'Map'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#video {
  position: fixed;
  right: 0;
  bottom: 0;
  max-width: 100%;
  max-height: 100%;
}
</style>
