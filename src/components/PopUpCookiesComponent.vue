<template>
    <h1>Pop Up Cookies</h1>
    <!-- ici ta structure Html -->
</template>

<script>
export default {
  name: 'PopUpCookiesComponent', /*
  le nom du composant
  dans le html du parent il se "source" de la maniere suivante : <popupcookies-component>
  dans le scripting (JS) du parent il se declare avec PopUpCookiesComponent et doit etre importé
  */
  props: {
      variable1: String // type de variable (string,integer,...)
  },
  data() {
      return {
          variable2: "ceci est une variable du composant (passable aux composants enfants)"
      }
  } 
}
</script>

<style>
    /* ici le css */
</style>

