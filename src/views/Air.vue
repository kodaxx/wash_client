<template>
<div class="container">
  <div id="timer">
    <span id="minutes">{{ minutes }}</span>
    <span id="middle">:</span>
    <span id="seconds">{{ seconds }}</span>
  </div>
  <div id="buttons">
    <button id="start" class="button green" v-if="!timer" @click="startTimer">
      GO
    </button>
    <button id="reset" class="button red" v-if="resetButton" @click="resetTimer">
      <!-- <i class="fas fa-undo"></i> -->
      X
    </button>
  </div>

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

<style scoped>
.container {
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center;
  /* background: #283E4C; */
  background: rgb(81,190,255);
  background: linear-gradient(56deg, rgba(81,190,255,1) 0%, rgba(20,121,180,0.861782212885154) 50%, rgba(82,115,208,1) 100%);
}

.button {
  margin-top: 1vh;
  color: #fff;
  background: #55A747;
  border: none;
  font-size: 3vw;
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  box-shadow: 4px 2px #31383d;
}

.green {
  background: #55A747;
}

.red {
  background: #DC3C45;
}

#buttons {
  position: relative;
  z-index: 2;
}

#timer {
  position: relative;
  z-index: 0;
  top: 2.5%;
  font-size: 20vw;
  color: #fff;
  text-shadow: 4px 4px 10px #31383d;
}
</style>
