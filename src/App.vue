<template>
<div id="app">
  <div class="inner" tabindex="0" @keydown="keyDown" >
     <transition name="fade">
      <router-view />
    </transition>
  </div>
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

<style>
#app {
  -webkit-font-smoothing: antialiased;
}
body {
  font-family: "Helvetica";
  padding:0px;
  margin:0px;
  background: #ededed;
}

button:focus {
  outline: none;
}

.inner {
  width:95%;
  height:95%;
  position: absolute;
  bottom: 2.5%;
  left: 2.5%;
  margin:0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow:0 4px 2px 2px rgba(0,0,0,0.1);
  background: #fafafa;
}

ul {
  list-style: none;
  display:table;
  background:  linear-gradient(to left, #c2e59c , #64b3f4);
  width:100%;
  height:100px;
  margin:0px;
  padding:0px;
  text-align: center;
  position: absolute;
  bottom:0px;
  left:0px;
  border-top: 1px solid rgba(0,0,0,0.5);
}

ul .splash {
  position: absolute;
  top:0px;
  left: 0px;
  height: 100%;
  width:25%;
  background: black;
  transition:  all 0.1s linear;
  opacity: 0.3;
}

li {
  display: table-cell;
  padding:8px;
  text-align: center;
  vertical-align: middle;
  width:25%;
  height:101px;
  position: relative;
  border-left: 1px solid rgba(0,0,0,0.5);
}

.activeId {
  bottom: 24px;
  border-left: none;
}

li .icon {
  width: auto;
  height: 100px;
  transition: all 0.1s linear;
}

li .text {
  /* opacity: 0; */
  font-size: 100%;
  font-weight: bold;
  color:white;
  transition: all 0.1s linear;
}

.fade-enter-active {
  transition: all .3s ease;
}

.fade-leave-active {
  transition: opacity 0s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(10px);
}
</style>
