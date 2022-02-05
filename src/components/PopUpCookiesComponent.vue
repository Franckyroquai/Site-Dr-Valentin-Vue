<template>
    <h1>Pop Up Cookies</h1>
    <div class="d-flex justify-content-center mt-5 h-100">
    <div class="d-flex align-items-center align-self-center card p-3 text-center cookies"><img src="https://i.imgur.com/Tl8ZBUe.png" width="50"><span class="mt-2">We use third party cookies to personalize content, ads and analyze site traffic.</span><a class="d-flex align-items-center" href="#">Learn more<i class="fa fa-angle-right ml-2"></i></a> <button class="btn btn-dark mt-3 px-4" type="button">Okay</button> </div>
</div>
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
    .card {
    width: 350px;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #d2d2dc;
    border-radius: 6px;
    -webkit-box-shadow: 0px 0px 5px 0px rgb(249, 249, 250);
    -moz-box-shadow: 0px 0px 5px 0px rgba(212, 182, 212, 1);
    box-shadow: 0px 0px 5px 0px rgb(161, 163, 164)
}

.cookies a {
    text-decoration: none;
    color: #000;
    margin-top: 8px
}

.cookies a:hover {
    text-decoration: none;
    color: blue;
    margin-top: 8px
}
</style>

