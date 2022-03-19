<template>
  <h1>Tentez votre chance</h1>
  <button class="favorite styled btn btn-primary" type="button" v-on:click="getQuote">
    Cliquez ici
  </button>
  <h3>auteur : {{ author }}</h3>
  <p>citation : {{ text }}</p>
</template>

<script>
import { publicRequest } from "../services/requester";

export default {
  name: "DisplayQuoteComponent",

  data() {
    return {
      text: "",
      author: "",
    };
  },
  mounted() {
    this.getQuote();
  },
  methods: {
    async getQuote() {
      try {
        const response = await publicRequest("/quote/random-js");
        this.text = response.data.text;
        this.author = response.data.author;
      } catch (error) {
        console.error(error); //TODO: remove before Prod
      }
    },
  },
};
</script>

<style>
.styled {
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: rgba(220, 0, 0, 1);
  background-image: linear-gradient(
    to top left,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 30%,
    rgba(0, 0, 0, 0)
  );
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
}

.styled:hover {
  background-color: rgba(255, 0, 0, 1);
}

.styled:active {
  box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6),
    inset 2px 2px 3px rgba(0, 0, 0, 0.6);
}
</style>
