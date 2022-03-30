<template>
  <h1 class="hero2 italic">Gestion des citations</h1>
  <main>
    <h1>Nombre : <span style="font-family: arial">{{ count }}</span></h1>
    <br />
    <button class="btn btn-info" v-if="list.length" @click="list = []">
      Masquer la liste
    </button>
    <br /><br />
    <h3 v-if="list.length">Liste :</h3>
    <p class="italic" v-if="!list.length">
      Cliquez sur le bouton pour accéder à la liste
    </p>
    <button
      class="btn btn-info italic"
      v-if="!list.length"
      @click="getListOfQuotes"
    >
      Afficher les citations
    </button>
    <br />
    <ul class="list">
      <li v-for="elem in list" :key="elem" class="take-parent-width">
        <div class="take-parent-width">
          <h5 class="bold">Auteur : {{ elem.author }}</h5>
          <p class="font-italic" style="text-align: center">
            "{{ elem.text }}"
          </p>
          <div class="btn-container">
            <button
              class="btn btn-success btn-lst-custom"
              @click="deleteQuoteInList(elem._id, elem.author)"
            >
              Supprimer la citation
            </button>
          </div>
          <br /><br />
        </div>
      </li>
    </ul>
    <br />
    <h3>Enregistrer une nouvelle citation dans la liste :</h3>
    <div class="container">
      <form>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" aria-label="autheur">Auteur</span>
          </div>
          <input type="text" class="form-control" v-model="author" />
        </div>
        <br />
        <div class="input-group mb-3">
          <textarea
            class="form-control"
            v-model="text"
            placeholder="Ecrivez ici la citation"
          />
        </div>
      </form>
    </div>
    <br />
    <button class="btn btn-primary" @click="sendQuote">
      Envoyer la citation
    </button>
    <br /><br /><br />
    <!-- <button class="btn btn-danger" @click="flushQuotes">Effacer toutes les citations</button> -->
    <br /><br />
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
        confirm(
          "il y a eu une erreur serveur lors de l'aquisition des citations."
        );
      }
    },
    async sendQuote() {
      try {
        await securedRequest("/quote/create-one", "post", { text: this.text, author: this.author });
        this.getListOfQuotes();
      } catch (error) {
        let msg = error.response.data;
        if (msg.includes("text field is required")) {
          msg = "le champ texte de la citation ne peut pas etre vide";
        } else if (msg.includes("duplicated quote text")) {
          msg = "le texte de la citation existe deja";
        } else if (error.response.status === 500) {
          msg = "le serveur a rencontre une erreur inconue";
        }
        confirm(
          `il y a eu une erreur serveur lors de l'enregistrement de la citation.\n\t${msg}`
        );
      }
    },
    async flushQuotes() {
      try {
        await securedRequest("/quote/flush", "delete");
        this.getListOfQuotes();
      } catch (error) {
        confirm(
          "il y a eu une erreur serveur lors de l'effacement des citations."
        );
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

<style>
.btn-lst-custom {
  /* display: flex; */
  /* align-self: right; */
  /* float: right; */
  /* justify-content: flex-end; */
  /* flex-flow: row-reverse; */
}
.btn-container {
  display: flex;
  /* align-items: right; */
  justify-content: flex-end;
}
.take-parent-width {
  width: 100%;
}
</style>
