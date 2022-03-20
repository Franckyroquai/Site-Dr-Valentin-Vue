<template>
  <main>
    <h1>Nombre de citations: {{ count }}</h1>
    <button @click="flushQuotes">Effacer toutes les citations</button>
    <h3>Liste des Citation:</h3>
    <p v-if="!list.length">non chargées</p>
    <button v-if="!list.length" @click="getListOfQuotes">
      Charger la liste des citations
    </button>
    <button v-if="list.length" @click="list = []">Masquer la liste</button>
    <ul>
      <li v-for="elem in list" :key="elem">
        <div id="quoteContainer">
          <h6>auteur: {{ elem.author }}</h6>
          <p>
            {{ elem.text }}
          </p>
          <button @click="deleteQuoteInList(elem._id, elem.author)">del</button>
        </div>
      </li>
    </ul>
    <h3>Créer une nouvelle citation:</h3>
    <form>
      <input v-model="author" placeholder="Auteur" />
      <textarea v-model="text" placeholder="Citation" />
    </form>
    <button @click="sendQuote">Envoyer la citation</button>
  </main>
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
    this.countQuotes();
  },
  methods: {
    async getListOfQuotes() {
      try {
        const response = await securedRequest("/quote/all");
        this.list = response.data.quotes;
        this.count = this.list.length;
      } catch (error) {
        confirm("il y a eu une erreur serveur lors de l'aquisition des citations.");
      }
    },
    async sendQuote() {
      try {
        const quote = { text: this.text, author: this.author };
        const response = await securedRequest("/quote/create-one", "post", quote);
        const retQuote = {
          author: response.data.quote.author,
          text: response.data.quote.text,
        };
        if (
          quote.text === retQuote.text &&
          (quote.author === retQuote.author || retQuote.author === "anonyme")
        ) {
          this.getListOfQuotes();
        }
      } catch (error) {
        confirm("il y a eu une erreur serveur lors de l'enregistrement de la citation.");
      }
    },
    async flushQuotes() {
      try {
        await securedRequest("/quote/flush", "delete");
        this.getListOfQuotes();
      } catch (error) {
        confirm("il y a eu une erreur serveur lors de l'effacement des citations.");
      }
    },
    async countQuotes() {
      const response = await securedRequest("/quote/count");
      this.count = response.data.count;
    },
    async deleteQuoteInList(id, author) {
      if (confirm("Confirmer la suppression de la citation ?")) {
        try {
          const response = await securedRequest("/quote/id", "delete", { id });
          if (id === response.data._id) {
            this.getListOfQuotes();
          } else {
            confirm(
              `il y a eu une erreur serveur lors de l'effacement de la citation de ${author}`
            );
          }
        } catch (error) {
          confirm(
            `il y a eu une erreur serveur lors de l'effacement de la citation de ${author}`
          );
        }
      }
    },
  },
};
</script>

<style></style>
