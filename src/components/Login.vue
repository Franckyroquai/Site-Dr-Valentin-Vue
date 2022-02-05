<template>
    <h1>Connexion</h1>
    <form>
  <div class="form-group">
    <label for="exampleInputName1">Nom</label>
    <input type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Votre nom">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Adresse Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Votre email">
    <small id="emailHelp" class="form-text text-muted">Nous ne communiquons pas votre adresse email à des tiers.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Mot de passe</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Votre mot de passe">
  </div>
  <button type="submit" class="btn btn-primary">Envoyer</button>
</form>
    <!-- ici ta structure Html -->
</template>

<script>
export default {
  name: 'LoginComponent', /*
  le nom du composant
  dans le html du parent il se "source" de la maniere suivante : <login-component>
  dans le scripting (JS) du parent il se declare avec LoginComponent et doit etre importé
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

