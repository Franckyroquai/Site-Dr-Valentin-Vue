<template>
    <h1>Tentez votre chance</h1>


    <button class="favorite styled btn btn-primary" type="button" v-on:click="getQuote">Cliquez ici</button>
    <p>citation : {{quote}}</p>
    <h6>auteur : {{author}}</h6>






    <!-- ici ta structure Html -->
</template>

<script>
import axios from 'axios';

export default {

  name: 'ChanceComponent',

  data() {
      return {
          quote : "",
          author: "",
          variable2: "ceci est une variable du composant (passable aux composants enfants)",
          biduarr: [
              "bob",
              "barbu",
          ],
      }
  },

  methods: {
      async getQuote() {
          try {
              const response = await axios.get(`http://localhost:3006/pepo`)
              console.log(response.data.quote);
              this.quote = response.data.quote;
              this.author = response.data.author;
              return response.data;
          } catch (error) {
              console.error(error);
              return null;
          }
      },
      testBindButton () {
          console.log('test ok');
          return {
              message : "test ok",
              moreInfos: {
                  message: "more infos ok",
                  id : 145,
                  metadata : {
                      message: "metadata ok",
                      Url: "google.com"
                  }
              }
          }
      }
  },
  mounted() {
      axios
      .get('https://mocki.io/v1/0c9926c9-d9aa-4397-99dc-192ed1ff44b2')
      .then((res) => {
          this.quote = res.data.quote;
          this.author = res.data.author;
      })
      .catch((err) => {
          console.error(err.message);
      })
  }
}

</script>

<style>
    /* ici le css */
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
    background-image: linear-gradient(to top left,
                                      rgba(0, 0, 0, .2),
                                      rgba(0, 0, 0, .2) 30%,
                                      rgba(0, 0, 0, 0));
    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),
                inset -2px -2px 3px rgba(0, 0, 0, .6);
}

.styled:hover {
    background-color: rgba(255, 0, 0, 1);
}

.styled:active {
    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
                inset 2px 2px 3px rgba(0, 0, 0, .6);
}

</style>

