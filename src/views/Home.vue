<template>
  <div tabindex="0" @keydown="keyDown">
    <video autoplay muted loop id="video">
      <source src="../assets/gotomoto_menu1.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
import router from '../router'

const axios = require("axios")
export default {
  name: 'Home',

  data() {
    return {
      timer: null,
      totalTime: (3 * 60),
      resetButton: false
    }
  },

  methods: {
    keyDown: function (event) {
      switch (event.keyCode) {
        case 49:
          this.navbar(1)
          break;
        case 50:
          this.navbar(2)
          break;
        case 51:
          this.navbar(3)
          break;
        case 52:
          this.navbar(4)
          break;
      }
      console.log(event.keyCode)
    },

    navbar: function (id) {
      console.log('keypress!')
      if (id !== this.activeId) {
        this.activeId = id
        router.push(`/${this.activeId}`)
      }
    }
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
