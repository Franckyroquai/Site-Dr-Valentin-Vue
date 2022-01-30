<template>
  <HeaderComponent></HeaderComponent>
  <Navbar-Component></Navbar-Component>  
  <router-view></router-view>
  <!-- <footer-component> -->
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue'


export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavbarComponent,
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: verdana, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
