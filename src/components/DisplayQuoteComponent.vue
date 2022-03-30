<template>
  <div class="bg1">
    <h2 class="italic">"{{ text }}"</h2>
    <h3 v-if="author" class="author">{{ author }}</h3>
    <!-- permet d'afficher le compte à rebours -->
  </div>
</template>

<script>
import { publicRequest } from "../services/requester";

export default {
  name: "DisplayQuoteComponent",

  data() {
    return {
      baseTimeout: 3,
      timeout: 0,
      text: "",
      author: "",
      isQuotesCountdownActive: false,
      ifCounter: 0,
      elseCounter: 0,
    };
  },
  mounted() {
    this.isQuotesCountdownActive = true;
    this.timeout = this.baseTimeout;
    this.getQuote();
    this.countdown();
  },
  unmounted() {
    this.isQuotesCountdownActive = false;
  },
  methods: {
    async getQuote() {
      try {
        const response = await publicRequest("/quote/random-js-bis");
        this.text = response.data.text;
        this.author = response.data.author === "anonyme" ? null : response.data.author; //fonction ternaire
        console.log("this author", this.author);
      } catch (error) {
        console.error(error.data.message);
      }
    },
    countdown() {
      if (this.isQuotesCountdownActive) {
        if (this.timeout > 0) {
          this.timeout--;
          setTimeout(this.countdown, 1000);
        } else {
          this.timeout = this.baseTimeout;
          this.getQuote();
          this.countdown();
        }
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
