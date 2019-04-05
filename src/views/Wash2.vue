<template>
  <div ref="page" tabindex="0" @keydown="keyDown">
    <video autoplay muted loop id="video">
      <source src="../assets/gotomoto_menu_wash_screen_main2.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
import router from '../router'
const axios = require("axios")

export default {
  name: 'Wash',

  methods: {
    vend: function () {
        axios.get("http://localhost:3000/relay1")
    },

    keyDown: function (event) {
      switch (event.keyCode) {
        case 49:
          router.push('/')
          break;
        case 50:
          router.push('/wash1')
          break;
        case 51:
          router.push('/wash2')
          break;
        case 52:
          router.push('/wash3')
          break;
      }
    }

  },

  mounted () {
    this.vend()
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
