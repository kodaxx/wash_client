<template>
  <div ref="page" tabindex="0" @keydown="keyDown">
    <video autoplay muted loop id="video">
      <source src="../assets/gotomoto_menu_homescreen2.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'Home',

  methods: {
    keyDown: function (event) {
      switch (event.keyCode) {
        case 49:
          router.push('/air')
          break;
        case 50:
          router.push('/wash')
          break;
        case 51:
          router.push('/shop')
          break;
        case 52:
          router.push('/map')
          break;
      }
    }

  },

  mounted () {
    this.$refs.page.focus()
  }
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
