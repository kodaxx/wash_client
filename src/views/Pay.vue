<template>
  <div ref="page" tabindex="0" @keydown="keyDown">
    <video autoplay muted loop id="video">
      <source src="../assets/gotomoto_menu_wash_screen_Card_reader.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
import router from '../router'
const axios = require("axios")

export default {
  name: 'Pay',

  methods: {

    vend: function () {
      // setTimeout(function, milliseconds, param1, param2, ...)
      this.degrease()
      setTimeout(this.glass, 302000)
    },

    degrease: function () {
      axios.get('http://localhost:3000/relay?id=1&time=300')
    },

    glass: function () {
      axios.get('http://localhost:3000/relay?id=2&time=300')
    },

    keyDown: function (event) {
      let audio = new Audio(require('../assets/upshift.mp3'))
      audio.play()

      switch (event.keyCode) {
        case 49:
          router.push('/')
          break;
        case 53:
          this.vend()
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
