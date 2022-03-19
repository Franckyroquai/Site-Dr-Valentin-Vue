<template>
  <nav
    class="navbar sticky-top shadow-sm navbar-expand-lg navbar-light bg-light style=background-color: #e3f2fd;"
  >
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">V. Valentin <img src="../assets/Images/psy2.png" width="40" alt="logo psychologue" /></router-link>
      <button v-if="isTokenPresent" @click="delogUser">deconnexion</button>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- pour aligner les menus à gauche, remplacer ms-auto par me-auto, centrer mx-auto -->
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page"
              >Accueil</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Qui suis-je ?
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link to="/about" class="dropdown-item"
                  >Mon parcours, ma pratique</router-link
                >
              </li>
              <li>
                <router-link to="/points-ethiques" class="dropdown-item"
                  >Points Ethiques</router-link
                >
              </li>
              <li>
                <router-link to="/diplomes" class="dropdown-item"
                  >Diplômes et Certifications</router-link
                >
              </li>
              <li>
                <router-link to="/liens-videos" class="dropdown-item"
                  >Liens Vidéos</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Méthodes
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link to="/approche-systemique" class="dropdown-item"
                  >Approche Systémique</router-link
                >
              </li>
              <li><router-link to="/emdr" class="dropdown-item">EMDR</router-link></li>
              <li>
                <router-link to="/brainspotting" class="dropdown-item"
                  >Brainspotting</router-link
                >
              </li>
              <li>
                <router-link to="/therapie-psychocorporelle" class="dropdown-item"
                  >Thérapie PsychoCorporelle</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Thérapies
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link to="/therapie-enfant" class="dropdown-item"
                  >Thérapie de l'Enfant</router-link
                >
              </li>
              <li>
                <router-link to="/therapie-adolescent" class="dropdown-item"
                  >Thérapie de l'Adolescent</router-link
                >
              </li>
              <li>
                <router-link to="/therapie-adulte" class="dropdown-item"
                  >Thérapie de l'Adulte</router-link
                >
              </li>
              <li>
                <router-link to="/therapie-de-couple" class="dropdown-item"
                  >Thérapie de couple</router-link
                >
              </li>
              <li>
                <router-link to="/therapie-familiale" class="dropdown-item"
                  >Thérapie Familiale</router-link
                >
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <router-link to="/modalites-pratiques" class="nav-link"
              >Modalités Pratiques</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      isTokenPresent: false,
    };
  },
  created (){
    this.emitter.on('user-logged', this.verifyPresenceOfToken);
    this.verifyPresenceOfToken();
  },
  methods: {
    verifyPresenceOfToken() {
      const tokenFromLocalStorage = localStorage.getItem("token");
      if (tokenFromLocalStorage === null) {
        this.isTokenPresent = false;
      } else if (typeof tokenFromLocalStorage === "string") {
        this.isTokenPresent = true;
      }
    },
    delogUser() {
      localStorage.removeItem("token");
      this.verifyPresenceOfToken();
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
