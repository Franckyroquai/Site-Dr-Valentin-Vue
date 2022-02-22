<template>
  <!-- <HeaderComponent></HeaderComponent> -->
  <Navbar-Component></Navbar-Component>  
  <router-view></router-view>
  <!-- <footer-component> -->
</template>

<script>
// import HeaderComponent from './components/HeaderComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue'


export default {
  name: 'App',
  components: {
    //HeaderComponent,
    NavbarComponent,
    // CarouselComponent,
    // AccueilComponent,
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: Georgia;
  text-align: center;
  color: #000000;
  margin-top: 0px;
}
</style>
