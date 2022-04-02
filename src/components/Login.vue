<template>
  <div>
    <h1 class="hero2 italic">Connexion</h1>

    <main>
      <div class="container">
        <form>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" aria-label="Email">Email</span>
            </div>
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              id="email"
              v-model="state.email"
            />
          </div>
            <span v-if="v$.email.$error">
              {{ v$.email.$errors[0].$message }}
            </span>
          <br />
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" aria-label="mot de pass"
                >Mot de passe</span
              >
            </div>
            <input
              type="password"
              class="form-control"
              placeholder="Mot de passe"
              v-model="state.password.value"
            />
            </div>
            <span v-if="v$.password.value.$error">
              {{ v$.password.value.$errors[0].$message }}
            </span>
          <br />
        </form>
        <button class="btn btn-primary" @click="submitForm">Envoyer</button>
      </div>
      <br />
      <p>Pas encore inscrite ?</p>
      <router-link to="/register"
        ><span class="italic">Cliquez ici !</span></router-link
      >
    </main>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import { reactive, computed } from "vue";
import { required, email, minLength } from "@vuelidate/validators";
import { publicRequest } from "../services/requester";
export default {
  name: "LoginComponent",
  setup() {
    const state = reactive({
      email: "",
      password: {
        value: "",
      },
    });
    const rules = computed(() => {
      return {
        email: { required, email },
        password: {
          value: { required, minLength: minLength(6) },
        },
      };
    });
    const v$ = useValidate(rules, state);
    return { state, v$ };
  },

  methods: {
    async submitForm() {
      this.v$.$validate(); // vérifie les inputs
      if (!this.v$.$error) {
        try {
          const httpResponse = await publicRequest("login", "post", {
            email: this.state.email,
            password: this.state.password.value,
          });
          if (httpResponse.status === 200) {
            localStorage.setItem("token", httpResponse.data.access_token);
            this.emitter.emit("user-logged");
            if (
              confirm(
                "Vous avez bien ete loggue\nVoulez-vous acceder a l'interface d'administration?"
              )
            ) {
              this.$router.push("/quotes-management");
            } else {
              this.$router.push("/");
            }
          }
        } catch (error) {
          console.warn({ error }); //TODO: remove before prod
          confirm(error.response.data.message);
        }
      } else {
        this.v$.$errors.forEach((error) => console.warn(error.$message));
        console.error("Form failed validation");
      }
    },
  },
};
</script>

<style>
.container {
  background-color: #fff;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  width: 400px;
}
</style>
