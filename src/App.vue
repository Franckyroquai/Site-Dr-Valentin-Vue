<template>
  <!-- <HeaderComponent></HeaderComponent> -->
  <Navbar-Component></Navbar-Component>
  <!-- <quotes-component></quotes-component> -->
  <router-view></router-view>
  <footer-component></footer-component>
  <!-- TODO: je crois que pour ton footer il faut mettre ici un filler -->
</template>

<script>
// import HeaderComponent from './components/HeaderComponent.vue'
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
// import QuotesComponent from "./components/QuotesComponent.vue";

export default {
  name: "App",
  components: {
    //HeaderComponent,
    NavbarComponent,
    FooterComponent,
    // QuotesComponent,
    // CarouselComponent,
    // AccueilComponent,
  },
};
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
