<template>
  <button @click="disconnect">disconnect</button>
  <h1>Nombre de citations: {{ count }}</h1>
  <button @click="flushQuotes">Effacer toutes les citations</button>
  <h3>Liste des Citation:</h3>
  <p v-if="!list.length">non chargees</p>
  <button v-if="!list.length" @click="getListOfQuotes">
    Charger la liste des citations
  </button>
  <button v-if="list.length" @click="list = []">decharger</button>
  <ul>
    <li v-for="elem in list" :key="elem">
      <div id="quoteContainer">
        <h6>auteur: {{ elem.author }}</h6>
        <p>
          {{ elem.text }}
        </p>
        <button @click="deleteQuoteInList(elem._id)">del</button>
      </div>
    </li>
  </ul>
  <h3>Creer une nouvelle citation:</h3>
  <form>
    <input v-model="author" placeholder="Auteur" />
    <input v-model="text" placeholder="Citation" />
  </form>
  <button @click="sendQuote">Envoyer la citation</button>
</template>

<script>
import { securedRequest } from "../services/requester";
export default {
  name: "QuoteComponent",

  data() {
    return {
      list: [],
      count: 0,
      text: "",
      author: "",
    };
  },
  mounted() {
    this.updateQuotes("number"); //TODO: on peux choisir de n'update que le nombre ou la liste avec si l'on veut
  },
  methods: {
    async getListOfQuotes() {
      const response = await securedRequest("/quote/all");
      this.list = response.data.quotes;
      this.updateQuotes("number");
    },
    async sendQuote() {
      const quote = { text: this.text, author: this.author };
      const response = await securedRequest("/quote/create-one", "post", quote);
      void response;
      this.updateQuotes();
    },
    disconnect() {
      localStorage.clear();
      this.$router.push("/login"); //TODO: ou acceuil ?
    },
    async flushQuotes() {
      const response = await securedRequest("/quote/flush", "delete");
      console.log(response === response);
      this.updateQuotes("number");
    },
    async countQuotes() {
      const response = await securedRequest("/quote/count");
      this.count = response.data.count;
    },
    async deleteQuoteInList(id) {
      if (confirm("pour sur ?")) {
        console.log("Confirmation");
      }
      const response = await securedRequest("/quote/id", "delete", { id });
      console.log("by id");
      console.log(response);
      this.updateQuotes();
    },
    async updateQuotes(opt) {
      if (opt === "number") {
        this.countQuotes();
      } else if (opt === "list") {
        this.getListOfQuotes();
      } else {
        this.getListOfQuotes();
        this.countQuotes();
      }
    },
  },
};
</script>

<style>
/* ici le css */
</style>
