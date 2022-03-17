<template>
<main>
  <h1>Cette page n'est pas attribuée...</h1>
  <div class="image-404">
    <img
      src="../assets/Images/404ariane1.jpg"
      class="d-block w-100"
      alt="Erreur 404 image de fil d'ariane coupé"
    />
  </div>
  <h2>retour a la page d'accueil dans : {{ timeout }}s</h2>
</main>
</template>

<script>
export default {
  name: "Error404Component",
  data() {
    return {
      timeout: 8,
    };
  },
  mounted() {
    this.countdown();
  },
  methods: {
    returnToHomePage() {
      console.log("badumba");
      this.$router.push("/");
    },
    countdown() {
      console.log("get into check flag");
      console.log(this.timeout);
      if (this.timeout > 0) {
        this.timeout--;
        setTimeout(this.countdown, 1000);
      } else {
        this.returnToHomePage();
      }
    },
  },
};
</script>

<style>
.image-404 {
  /* height: 100vh; */
  background-position: center;
  background-size: cover;
}
</style>
