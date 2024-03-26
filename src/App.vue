<template>

  <div>

    <Auth/>

    <Header/>
    <ConteinerMain/>
  </div>

</template>

<script>
import Auth from './components/Auth.vue'
import Header from './components/Header.vue'
import ConteinerMain from './components/ConteinerMain.vue'

export default {
  name: 'App',
  components: {
    Auth,
    Header,
    ConteinerMain
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
</style>
