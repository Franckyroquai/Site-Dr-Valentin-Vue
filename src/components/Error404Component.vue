<template>
    <h1>Cette page n'est pas attribuée...</h1>
    <div class="image-404">
            <img src="../assets/Images/404ariane1.jpg" class="d-block w-100" alt="Erreur 404 image de fil d'ariane coupé">
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
    .image-404{
         height:100vh;
    background-position: center;
    background-size: cover;
    }

</style>

