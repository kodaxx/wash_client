<template>
  <div ref="page" tabindex="0" @keydown="keyDown">
    <video autoplay muted loop id="video">
      <source src="../assets/gotomoto_menu_wash_screen_Card_reader.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'Pay',

  methods: {

    keyDown: function (event) {
      let audio = new Audio(require('../assets/upshift.mp3'))
      audio.play()

      switch (event.keyCode) {
        case 49:
          router.push('/')
          break;
        case 53:
          router.push('/ad')
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
