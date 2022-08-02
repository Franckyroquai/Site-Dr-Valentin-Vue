<template>
  <footer class="footer_area">
    <div class="container2">
      <div class="row">
        <!-- Single Widget-->
        <div class="col-12 col-sm-6 col-lg">
          <div class="single-footer-widget">
            <!-- Footer Logo-->
            <div class="footer-logo mb-3"></div>
            <h5>V. Valentin</h5>
            <!-- Adress Text-->
            <div class="adress-text mb-5">
              <div class="mb-0">7 rue Alexandre Castueil</div>
              <div class="mb-0">Rez-de-chaussée</div>
              <div class="mb-0">
                <span style="font-family: arial, sans-serif">83400</span> Hyères
              </div>
              <div class="mb-0">
                Tél :
                <a
                  href="tel:+33686978613"
                  style="font-family: arial, sans-serif"
                  >06 86 97 86 13</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg">
          <div class="single-footer-widget">
            <!-- Footer Logo-->
            <div class="footer-logo mb-3"></div>
            <h5>A propos</h5>
            <br />
            <!-- Footer Menu-->
            <div class="footer_menu mb-3">
              <div class="mb-0">
                <router-link to="/mentions-legales"
                  >Mentions Légales</router-link
                >
              </div>
              <br />
            <!--  <div class="mb-0">
                <router-link v-if="!isUserLogged" to="/login"
                  >Espace administrateur</router-link
                >
                <router-link v-if="isUserLogged" to="/quotes-management"
                  >Espace administrateur</router-link
                >
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      isUserLogged: false,
    };
  },
  created() {
    this.emitter.on("user-logged", () => {
      this.isUserLogged = true;
    });
    this.emitter.on("user-unlogged", () => {
      this.isUserLogged = false;
    });
    this.verifyPresenceOfToken();
  },
  methods: {
    verifyPresenceOfToken() {
      if (localStorage.getItem("token")) {
        this.isUserLogged = true;
      } else {
        this.isUserLogged = false;
      }
    },
  },
};
</script>

<style>
footer {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 18px;
  background-color: rgb(128, 128, 128, 0.15);
}
.footer_menu {
  color: #747794;
}

.footer_area {
  position: relative;
  margin-top: auto;
  margin-bottom: 0px;
  z-index: 1;
  overflow: hidden;
  /* box-shadow: 0 8px 48px 8px rgba(47, 91, 234, 0.175); */
  padding: 10px;
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

/* @-webkit-keyframes bi-cycle {
  0% {
    left: 0;
  }
  100% {
    left: 100%;
  }
} */

/* @keyframes bi-cycle {
  0% {
    left: 0;
  }
  100% {
    left: 100%;
  }
} */
/* ol li,
ul li {
  list-style: none;
} */

/* ol,
ul {
  margin: 0;
  padding: 0;
} */
</style>
