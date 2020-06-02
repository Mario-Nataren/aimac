<template>
  <div id="app">
    <div>
      <navbar/>
      <slider/>
    </div>
    <router-view/>
    <c-footer/>
  </div>
</template>
<script>
import slider from '@/components/Slider.vue'
import navbar from '@/components/Header.vue'
import footer from '@/components/Footer.vue'
export default {
  components:{
    'slider': slider,
    'navbar': navbar,
    'c-footer': footer
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
