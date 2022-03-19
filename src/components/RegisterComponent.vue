<template>
  <main>
    <h2>Créez un compte</h2>
    <div class="root">
      <p>
        <input type="text" placeholder="Email" v-model="state.email" />
        <span v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}
        </span>
      </p>
      <p>
        <input type="password" placeholder="Password" v-model="state.password.value" />
        <span v-if="v$.password.value.$error">
          {{ v$.password.value.$errors[0].$message }}
        </span>
      </p>
      <p>
        <input
          type="password"
          placeholder="Confirm Password"
          v-model="state.password.confirm"
        />
        <span v-if="v$.password.confirm.$error">
          {{ v$.password.confirm.$errors[0].$message }}
        </span>
      </p>
      <button @click="submitForm">Envoyer</button>
    </div>
  </main>
</template>

<script>
import useValidate from "@vuelidate/core";
import { reactive, computed } from "vue";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { publicRequest } from "../services/requester";

export default {
  name: "RegisterComponent",
  setup() {
    const state = reactive({
      email: "",
      password: {
        value: "",
        confirm: "",
      },
    });
    const rules = computed(() => {
      return {
        email: { required, email },
        password: {
          value: { required, minLength: minLength(6) },
          confirm: { required, sameAs: sameAs(state.password.value) },
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
          const httpResponse = await publicRequest("/register", "post", {
            email: this.state.email,
            password: this.state.password.value,
          });
          if (httpResponse.status === 200) {
            alert(
              "vous avez bien ete enregistre.\nVous allez etre redirige vers la page de login"
            );
            this.$router.push("/login");
          }
        } catch (error) {
          console.error(error);
          alert("Login failed");
        }
      } else {
        // TODO: refaco before prod
        this.v$.$errors.forEach((error) => console.warn(error.$message));
      }
    },
  },
  validations() {
    return {
      email: { required },
      password: {
        value: { required },
        confirm: { required },
      },
    };
  },
};
</script>

<style>
.root {
  width: 400px;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px;
  margin-top: 100px;
  border-radius: 20px;
}

input {
  border: none;
  outline: none;
  border-bottom: 1px solid #ddd;
  font-size: 1em;
  padding: 5px 0;
  margin: 10px 0 5px 0;
  width: 100%;
}

button {
  background-color: #3498db;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  color: white;
}
</style>
