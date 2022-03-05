<template>
     <!-- Barre de navigation-->

    <nav class="navbar sticky-top shadow-sm navbar-expand-lg navbar-light bg-light style=background-color: #e3f2fd;">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand">V. Valentin</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- pour aligner les menus à gauche, remplacer ms-auto par me-auto, centrer mx-auto -->
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page">Accueil</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Qui suis-je ?
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/about" class="dropdown-item">Mon parcours, ma pratique</router-link></li>
            <li><router-link to="/points-ethiques" class="dropdown-item">Points Ethiques</router-link></li>
            <li><router-link to="/diplomes" class="dropdown-item">Diplômes et Certifications</router-link></li>
            <li><router-link to="/liens-videos" class="dropdown-item">Liens Vidéos</router-link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Méthodes
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <!-- <li><router-link to="/approche-therapeutique" class="dropdown-item">Approche Thérapeutique</router-link></li> -->
            <li><router-link to="/approche-systemique" class="dropdown-item">Approche Systémique</router-link></li>
            <li><router-link to="/emdr" class="dropdown-item">EMDR</router-link></li>
            <li><router-link to="/brainspotting" class="dropdown-item">Brainspotting</router-link></li>
            <li><router-link to="/therapie-psychocorporelle" class="dropdown-item">Thérapie PsychoCorporelle</router-link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Thérapies
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/therapie-enfant" class="dropdown-item">Thérapie de l'Enfant</router-link></li>
            <li><router-link to="/therapie-adolescent" class="dropdown-item">Thérapie de l'Adolescent</router-link></li>
            <li><router-link to="/therapie-adulte" class="dropdown-item">Thérapie de l'Adulte</router-link></li>
            <li><router-link to="/therapie-de-couple" class="dropdown-item">Thérapie de couple</router-link></li>
            <li><router-link to="/therapie-familiale" class="dropdown-item">Thérapie Familiale</router-link></li>
          </ul>
        </li>
      
        <li class="nav-item">
          <router-link to="/modalites-pratiques" class="nav-link">Modalités Pratiques</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
        </ul>
    </div>
  </div>
</nav>
     
    <!-- <div class="navbar">
      <router-link to="/">Accueil</router-link>
      <router-link to="/about">A Propos</router-link>
      <router-link to="/approche-systemique">Approche Systémique</router-link>
      <router-link to="/approche-therapeutique">Approche Thérapeutique</router-link>
      <router-link to="/emdr">EMDR</router-link>
      <router-link to="/brainspotting">Brainspotting</router-link>
      <router-link to="/therapie-enfant">Thérapie de l'Enfant</router-link>
      <router-link to="/therapie-adolescent">Thérapie de l'Adolescent</router-link>
      <router-link to="/therapie-adulte">Thérapie de l'Adulte</router-link>
      <router-link to="/therapie-familiale">Thérapie Familiale</router-link>
      <router-link to="/therapie-de-couple">Thérapie de couple</router-link>
      <router-link to="/therapie-psychocorporelle">Thérapie PsychoCorporelle</router-link>
      <router-link to="/points-ethiques">Points Ethiques</router-link>
      <router-link to="/liens-videos">Liens Vidéos</router-link>
      <router-link to="/diplomes">Diplômes et Certifications</router-link>
      <router-link to="/modalites-pratiques">Modalités Pratiques</router-link>
      <router-link to="/contact">Contact</router-link>
      

      <link-component Link="wwww.google.fr" linkName="le nom du lien"></link-component>
   </div> -->
   <!-- <router-view></router-view> -->
</template>

<script>
// import LinkComponent from './LinkComponent.vue'
export default {
  name: 'NavbarComponent',
  
 components: {
    //  LinkComponent
 },
  props: {

  },
  data() {
      return {
      }
  } 
}
</script>

<style>
    /* .navbar{ position: relative;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 6em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    display: flex;
    justify-content:space-around;
    align-items: center;
    border: 3px solid rgb(248, 234, 248);
    border-radius:10px;
    padding: 20px;
    background-color:rgb(211, 211, 211);
} */
/* .navbar-nav > li{
  
  margin-left:25px;
  margin-right:25px;
} */

</style>


