<template>
  <div ref="page" tabindex="0" @keydown="keyDown">
    <video autoplay muted loop id="video">
      <source src="../assets/gotomoto_menu_airscreen2.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
import router from '../router'
const axios = require("axios")

export default {
  name: 'Air',

  methods: {
    vend: function () {
        axios.get("http://localhost:3000/relay?id=0&time=180")
    },

    keyDown: function (event) {
      let audio = new Audio(require('../assets/upshift.mp3'))
      audio.play()

      if (event.keyCode === 49) {
        router.push('/')
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
