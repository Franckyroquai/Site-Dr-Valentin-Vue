<template>
  <!-- ici ta structure Html -->

  <footer class="footer_area">
    <div class="container">
      <div class="row">
        <!-- Single Widget-->
        <div class="col-12 col-sm-6 col-lg">
          <div class="single-footer-widget">
            <!-- Footer Logo-->
            <div class="footer-logo mb-3"></div>
            <h5>V. Valentin</h5>
            <!-- Adress Text-->
            <div class="adress-text mb-5">
              <p class="mb-0">7 rue Alexandre Castueil</p>
              <p class="mb-0">Rez rez-de-chaussée</p>
              <p class="mb-0">
                <span style="font-family: arial, sans-serif">83400</span> Hyères
              </p>
              <p class="mb-0">
                Tél :
                <a href="tel:+33686978613" style="font-family: arial, sans-serif"
                  >06 86 97 86 13</a
                >
              </p>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg">
            <div class="single-footer-widget">
              <!-- Footer Logo-->
              <div class="footer-logo mb-3"></div>
              <h5>A propos</h5>
              <br>
              <!-- Footer Menu-->
              <div class="footer_menu mb-3">
                
                  <p class="mb-0"><router-link to="/mentions-legales">Mentions Légales</router-link></p>
                  <br>
                  <p class="mb-0"><router-link to="/login">Espace administrateur</router-link></p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name:
    "FooterComponent" /*
  le nom du composant
  dans le html du parent il se "source" de la maniere suivante : <footer-component>
  dans le scripting (JS) du parent il se declare avec FooterComponent et doit etre importé
  */,
  props: {},
  data() {
    return {};
  },
};
</script>

<style>
    /* ici le css */
    footer{
        margin-top:auto;
    }
    .footer_menu{
        color: #747794;
    }
  
    .footer_area {
    position: relative;
    margin-top:auto;
    margin-bottom: 0px;
    z-index: 1;
    overflow: hidden;
webkit-box-shadow: 0 8px 48px 8px rgba(47, 91, 234, 0.175);
    box-shadow: 0 8px 48px 8px rgba(47, 91, 234, 0.175);
    padding:10px;
}
.footer_area .row {
  margin-left: -25px;
  margin-right: -25px;
}
.footer_area .row .col {
  padding-right: 25px;
  padding-left: 25px;
}

.single-footer-widget {
  position: relative;
  z-index: 1;
}
.single-footer-widget .adress-text a {
  color: #747794;
  font-size: 1rem;
}
.single-footer-widget .adress-text a:hover,
.single-footer-widget .adress-text a:focus {
  color: #3f43fd;
}
.single-footer-widget .widget-title {
  margin-bottom: 1.5rem;
}
.single-footer-widget .footer_menu li a {
  color: #747794;
  margin-bottom: 1rem;
  display: block;
  font-size: 1rem;
}
.single-footer-widget .footer_menu li a:hover,
.single-footer-widget .footer_menu li a:focus {
  color: #3f43fd;
}
.single-footer-widget .footer_menu li:last-child a {
  margin-bottom: 0;
}

@-webkit-keyframes bi-cycle {
  0% {
    left: 0;
  }
  100% {
    left: 100%;
  }
}

@keyframes bi-cycle {
  0% {
    left: 0;
  }
  100% {
    left: 100%;
  }
}
ol li,
ul li {
  list-style: none;
}

ol,
ul {
  margin: 0;
  padding: 0;
}
</style>
