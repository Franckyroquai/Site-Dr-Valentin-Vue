<template>
     <!-- Barre de navigation-->
    <div class="navbar">
      <!-- <a href="">Accueil</a> -->
      <router-link to="/">Accueil</router-link>
      <!-- <a href="">Rencontre</a> -->
      <router-link to="/about">A Propos</router-link>
      <router-link to="/approche-systemique">Approche Systémique</router-link>
      <router-link to="/emdr-brainspotting">EMDR-Brainspotting</router-link>
      <router-link to="/emdr">EMDR</router-link>
      <router-link to="/brainspotting">Brainspotting</router-link>
      <router-link to="/therapie-enfant">Thérapie de l'Enfant</router-link>
      <router-link to="/therapie-adolescent">Thérapie de l'Adolescent</router-link>
      <router-link to="/therapie-familiale">Thérapie Familiale</router-link>
      <router-link to="/therapie-de-couple">Thérapie de couple</router-link>
      <router-link to="/therapie-psychocorporelle">Thérapie PsychoCorporelle</router-link>
      <router-link to="/points-ethiques">Points Ethiques</router-link>
      <router-link to="/liens-videos">Liens Vidéos</router-link>
      <router-link to="/diplomes">Diplômes et Certifications</router-link>
      <router-link to="/teleconsultation">Téléconsultation</router-link>
      <router-link to="/contact">Contact</router-link>
      

      <!-- <link-component Link="wwww.google.fr" linkName="le nom du lien"></link-component> -->
   </div>
   <!-- <router-view></router-view> -->
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


