<template>
  <div>
    <h1 class="hero2 italic">Gestion des citations</h1>
    <main>
      <h1>Nombre : {{ count }}</h1>
      <br />
      <button class="btn btn-info" v-if="list.length" @click="list = []">
        Masquer la liste
      </button>
      <br /><br />
      <h3 v-if="list.length">Liste :</h3>
      <p class="italic" v-if="!list.length">
        Cliquez sur le bouton pour accéder à la liste
      </p>
      <button class="btn btn-info italic" v-if="!list.length" @click="getListOfQuotes">
        Afficher les citations
      </button>
      <br />
      <ul class="list">
        <li v-for="elem in list" :key="elem" class="take-parent-width">
          <div class="take-parent-width">
            <h5 class="bold">Auteur : {{ elem.author }}</h5>
            <p class="italic text-center">"{{ elem.text }}"</p>
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
      <button class="btn btn-primary" @click="sendQuote">Envoyer la citation</button>
      <br />
      <!-- <button class="btn btn-danger" @click="flushQuotes">
        Effacer toutes les citations
      </button> -->
      <br />
      <h3>Gestion du message d'information</h3>
      <!-- <p style="white-space: pre-line">{{ message }}</p> -->
      <div class="container">
        <form>
          <div class="input-group mb-3">
            <textarea
              class="form-control"
              v-model="message"
              placeholder="Ecrivez ici le message d'information"
            />
          </div>
        </form>
        <button class="btn btn-primary" @click="sendMessage">Changer le message</button>
      </div>
      <div class="container">
        <form>
          <div class="input-group mb-3">
            <div>
              <input type="checkbox" id="checkbox" v-model="msgIsActive" />
              <label for="checkbox"
                >le message est-il actif sur la page d'acceuil ?</label
              >
            </div>
            <h4>{{ msgstatus() }}</h4>
          </div>
        </form>
        <button class="btn btn-primary" @click="updateMsgStatus">
          Changer le status du message d'information
        </button>
      </div>
      <br /><br />
    </main>
  </div>
  <div>
    <button class="btn btn-primary" @click="getMsgStatus">msgstat</button>
  </div>
</template>

<script>
import { securedRequest, publicRequest } from "../services/requester";
export default {
  name: "QuoteComponent",
  data() {
    return {
      list: [],
      count: 0,
      text: "",
      author: "",
      message: "",
      msgIsActive: false, // recuperer depuis API
    };
  },
  beforeMount() {
    this.countQuotes();
    this.getMsgStatus().then((result) => {
      this.msgIsActive = result.data.boolStatus;
    });
    this.getMsg().then((result) => {
      this.message = result.data.msg;
      console.log("-*-*-*-*-*-*-*-*-*-*-*-*-");
      console.log(result.data);
      console.log(this.message);
    });
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
    async sendMessage() {
      try {
        const response = await securedRequest("/message-infos/update", "post", {
          text: this.message,
        });
        console.log(response);
        if (response.status === 200) {
          alert("le message a ete mis a jour");
        }
      } catch (error) {
        console.log("bidu");
        console.log(error.toJSON());
        console.log(Object.keys(error));
        console.log("bidu");
        confirm("il y a eu une erreur serveur lors de la mise a jour du message d'infos");
      }
    },
    msgstatus() {
      return this.msgIsActive ? "Oui" : "Non";
    },
    async getMsgStatus() {
      const response = await publicRequest("/message-infos/status");
      console.debug(response);
      return response;
    },
    async getMsg() {
      const response = await publicRequest("/message-infos");
      console.debug(response);
      return response;
    },
    async updateMsgStatus() {
      const response = await securedRequest("/message-infos/update-status", "post", {
        isActive: this.msgIsActive,
      });
      console.debug(response);
      return response;
    },
    async sendQuote() {
      try {
        await securedRequest("/quote/create-one", "post", {
          text: this.text,
          author: this.author,
        });
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

<style>
.btn-container {
  display: flex;
  justify-content: flex-end;
}
.take-parent-width {
  width: 100%;
}
</style>
