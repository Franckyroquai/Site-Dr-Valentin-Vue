<template>
  <navbar-component></navbar-component>
  <router-view></router-view>
  <footer-component></footer-component>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
    FooterComponent,
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
