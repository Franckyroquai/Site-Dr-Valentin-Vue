<template>
  <h1>Connexion</h1>
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Adresse Email</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Votre email"
      />
      <small id="emailHelp" class="form-text text-muted"
        >Nous ne communiquons pas votre adresse email à des tiers.</small
      >
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Mot de passe</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Votre mot de passe"
      />
    </div>
    <button type="submit" class="btn btn-primary">Envoyer</button>
  </form>
  <router-link to="/register">Pas encore inscrit ? cliquez ici !</router-link>
  <!-- ici ta structure Html -->
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
    };
  },
};
</script>

<style>
/* ici le css */
</style>

