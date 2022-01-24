<template>
     <!-- Barre de navigation-->
    <div class="navbar">
      <a href="">Accueil</a>
      <a href="">Rencontre</a>
      <a href="">Qui suis-je ?</a>
      <a href="">Méthodes</a>
      <a href="">Points éthiques</a>
      <a href="">Liens vidéos</a>
      <a href="">Modalités pratiques et tarifs</a>
      <a href="">Téléconsultation</a>
      <a href="">Blog</a>
      <a href="">Contact</a>
      <!-- <link-component Link="wwww.google.fr" linkName="le nom du lien"></link-component> -->
   </div>
</template>

<script>
// import LinkComponent from './LinkComponent.vue'
export default {
  name: 'NavbarComponent',
   /*
  le nom du composant
  dans le html du parent il se "source" de la maniere suivante : <default-component>
  dans le scripting (JS) du parent il se declare avec DefaultComponent et doit etre importé
  */
 components: {
    //  LinkComponent
 },
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
    .navbar{ position: relative;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 5em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    display: flex;
    justify-content:space-around;
    align-items: center;
    border: 3px solid rgb(248, 234, 248);
    border-radius:10px;
    padding: 20px;
    background-color:lightgray;
}
</style>


