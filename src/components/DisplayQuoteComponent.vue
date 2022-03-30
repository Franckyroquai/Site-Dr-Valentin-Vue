<template>
<div class="bg1">
  <h2 class="italic"> "{{ text }}" </h2>
  <h3 v-if="author" class="author"> {{ author }}</h3>
  <!-- permet d'afficher le compte à rebours -->
  <!-- <h1>{{timeout}}</h1> -->  
</div> 
</template>

<script>
import { publicRequest } from "../services/requester";

export default {
  name: "DisplayQuoteComponent",

  data() {
    return {
      timeout: 15,
      text: "",
      author: "",
      fetchingQuotes: false,
    };
  },
  mounted() {
    this.fetchingQuotes = true;
    this.getQuote();
    this.countdown(); //FIXME: bad implementation , when routing out countdown is still live
  },
  unmounted() {
    this.fetchingQuotes = false
  },
  methods: {
    async getQuote() {
      try {
        const response = await publicRequest("/quote/random-js");
        this.text = response.data.text;
        this.author = (response.data.author === "anonyme" ? null : response.data.author); //fonction ternaire
        console.log("this author", this.author);
      } catch (error) {
        console.error(error); //TODO: remove before Prod
      }
    },
    countdown() {
      // console.log(this.fetchingQuotes);
      if (this.fetchingQuotes) {
        if (this.timeout > 0) {
          this.timeout--;
          setTimeout(this.countdown, 1000);
        } else {
          this.getQuote();
          this.timeout = 15;
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
