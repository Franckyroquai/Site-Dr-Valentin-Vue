<template>
  <HeaderComponent></HeaderComponent>
  <Navbar-Component></Navbar-Component>
  <CarouselComponent></CarouselComponent>
  <AccueilComponent></AccueilComponent>
  <img alt="Vue logo" src="./assets/logo.png">
  
  
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue'
import CarouselComponent from './components/CarouselComponent.vue'
import AccueilComponent from './components/AccueilComponent.vue'


export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavbarComponent,
    CarouselComponent,
    AccueilComponent,
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
