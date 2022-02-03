<template>
    <h1>Erreur 404</h1>
    <div class="image-404">
            <img src="../assets/Images/Page-Erreur-404.jpg" class="d-block w-100" alt="Erreur 404">
    </div>
    <!-- ici ta structure Html -->
</template>

<script>
export default {
  name: 'Error404Component', /*
  le nom du composant
  dans le html du parent il se "source" de la maniere suivante : <error404-component>
  dans le scripting (JS) du parent il se declare avec Error404Component et doit etre importé
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

