<template>
  <div class="bg1">
    <h2 class="italic">"{{ text }}"</h2>
    <h3 v-if="author" class="author">{{ author }}</h3>
  </div>
</template>

<script>
import { publicRequest } from "../services/requester";

export default {
  name: "DisplayQuoteComponent",

  data() {
    return {
      baseTimeout: 15, //TODO: can be set from env or config file
      timeout: 0,
      text: "",
      author: "",
      isQuotesCountdownActive: false,
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
        const response = await publicRequest("/quote/random-js");
        this.text = response.data.text;
        this.author = response.data.author === "anonyme" ? null : response.data.author; //fonction ternaire
      } catch (error) {
        console.error(error.data.message);
      }
    },
    countdown() {
      if (this.isQuotesCountdownActive) {
        if (this.timeout > 0) {
          this.timeout--;
          setTimeout(this.countdown, 1000);  //appel récursif de fonction avec un délai d'1 s.
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
</style>
