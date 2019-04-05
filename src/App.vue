<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import router from './router'

export default {
  name: 'app',

  data () {
    return {
      activeId: 1
    }
  },

  computed: {
    position: function () {
      return `${25 * (this.activeId - 1)}%`
    }
  },

  methods: {
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
}
body {
  font-family: "Helvetica";
  padding:0px;
  margin:0px;
  background: #000;
}

button:focus {
  outline: none;
}

.fade-enter-active {
  transition: all .5s ease;
}

.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(10px);
}
</style>
