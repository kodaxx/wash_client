<template>
  <div>
    <h2>FREE AIR</h2>
  </div>
</template>

<script>
const axios = require("axios")
export default {
  name: 'Air',

  data() {
    return {
      timer: null,
      totalTime: (3 * 60),
      resetButton: false
    }
  },

  methods: {
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000)
      this.resetButton = true
      console.log("start air")
      this.vend()

    },
    vend: function () {
        axios.get("http://localhost:3000/relay1")
    },
    resetTimer: function() {
      this.totalTime = (3 * 60)
      clearInterval(this.timer)
      this.timer = null;
      this.resetButton = false
      console.log("stop air")
    },
    padTime: function(time) {
      return (time < 10 ? '0' : '') + time
    },
    countdown: function() {
      if (this.totalTime >= 1) {
        this.totalTime--
      } else {
        this.totalTime = 0
        this.resetTimer()
      }
    }
  },

  created () {
    this.vend()
  },

  computed: {
    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60)
      return this.padTime(minutes)
    },
    seconds: function() {
      const seconds = this.totalTime - (this.minutes * 60)
      return this.padTime(seconds)
    },
    end: function () {
      if (this.totalTime === 0) {
        console.log("stop air")
      }
    }
  },

  beforeDestroy() {
    if (this.resetButton === true) {
      this.resetTimer()
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
