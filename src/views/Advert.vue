<template>
  <div ref="page" tabindex="0" @keydown="keyDown">
    <video autoplay loop id="video">
      <source src="../assets/wyo2017.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
import router from '../router'
const axios = require("axios")

export default {
  name: 'Advert',

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
