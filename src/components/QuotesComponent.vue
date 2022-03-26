<template>
<h1 class="hero2 i">Gestion des citations</h1>
  <main>
    <h1>Nombre : {{ count }}</h1>
    <br>
    <h3>Liste :</h3>
    <p class="i" v-if="!list.length">Cliquez sur le bouton pour accéder à la liste</p>
    <button class="btn btn-info i" v-if="!list.length" @click="getListOfQuotes">
      Afficher les citations
    </button>
    <br>
    <button class="btn btn-info" v-if="list.length" @click="list = []">Masquer la liste</button>
    <br><br>
    <ul class="list">
      <li v-for="elem in list" :key="elem">
        <div id="quoteContainer">
          <h5 class="g" >Auteur : {{ elem.author }}</h5>
          <p class="i">"{{ elem.text }}"</p>
          <button class="btn btn-success" @click="deleteQuoteInList(elem._id, elem.author)">Supprimer la citation</button>
          <br><br>
        </div>
      </li>
    </ul>
    <br>
    <h3>Enregistrer une nouvelle citation dans la liste :</h3>
    <div class="container">
             <form>
                 <div class="input-group mb-3">
                           <div class="input-group-prepend"><span class="input-group-text" aria-label="autheur">Autheur</span></div>
      <input type="text" class="form-control" v-model="author" placeholder="Auteur" />
                 </div>
                 <br>
<div class="input-group mb-3">
      <textarea class="form-control" v-model="text" placeholder="Citation" />
</div>
    </form>
    </div>
    <br>
    <button class="btn btn-primary" @click="sendQuote">Envoyer la citation</button>
    <br><br><br>
    <!-- <button class="btn btn-danger" @click="flushQuotes">Effacer toutes les citations</button> -->
    <br><br>
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
