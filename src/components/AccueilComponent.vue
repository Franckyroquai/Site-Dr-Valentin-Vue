<template>
  <div>
    <div
      class="parallax titre"
      :style="{ 'background-image': `url(${img.acceuil.parallax1})` }"
    >
      <h1 class="italic">Véronique Valentin</h1>
      <h2>Psychologue</h2>
    </div>
    <main>
      <br />
      <display-quote-component></display-quote-component>
      <br />
      <h1 class="italic">Bienvenue</h1>
      <div v-if="msgStatus">
        <h3>Message Important</h3>
        <p>{{ msg }}</p>
      </div>
      <br />
      <h2 class="italic">
        "J’ouvrirai une école de vie intérieure,<br />et j’écrirai sur la porte : école
        d’art."
      </h2>
      <h3 class="author">Max Jacob</h3>
      <br />
      <section class="premier">
        <article class="flex-item w50 bg1">
          <p>
            Nous sommes amenés dans notre vie, à traverser des périodes houleuses, des
            expériences compliquées, douloureuses. Nous pouvons, dans ces moments-là, nous
            sentir fragilisé(e). Et si les obstacles s’accumulent ou reviennent de manière
            récurrente, tout cela peut nous sembler subitement insoluble ou nous donner
            l’impression de ne plus arriver à avancer.
          </p>
          <p>
            Quelles que soient les difficultés que vous rencontrez, les questions que vous
            vous posez, germe peut-être au fond de vous, le désir de transformer votre
            horizon personnel pour aller vers un mieux-être, ou mieux, vers un plus
            d’Etre.
          </p>
        </article>
        <article class="flex-item img w40">
          <img
            src="../../public/assets/Images/coeurs.jpg"
            class="hero"
            alt="coeurs découpés dans du bois"
          />
        </article>
      </section>
      <br />
      <h2 class="italic">
        "Un voyage de mille lieux commence<br />toujours par un premier pas"
      </h2>
      <h3 class="author">Lao Tseu</h3>
      <br />
      <section class="premier">
        <article class="flex-item img w40">
          <img
            src="../../public/assets/Images/lotus.jpg"
            class="hero"
            alt="fleur de lotus"
          />
        </article>
        <article class="flex-item w50 bg1">
          <p>Aussi je vous propose de faire le point avec vous.</p>
          <p>
            Mes consultations sont ouvertes à tous,
            <router-link to="/therapie-enfant" class="g">enfants</router-link>,
            <router-link to="/therapie-adolescent" class="g">adolescents</router-link>,
            <router-link to="/therapie-adulte" class="g">adultes, séniors</router-link>,
            ainsi que
            <router-link to="/therapie-de-couple" class="g">couples</router-link>
            et
            <router-link to="/therapie-familiale" class="g">familles</router-link>.
          </p>
          <p>
            Je pratique essentiellement la psychothérapie
            <router-link to="/emdr" class="g">EMDR</router-link>, le
            <router-link to="/brainspotting" class="g">Brainspotting</router-link>,
            diverses approches en
            <router-link to="/therapie-psychocorporelle" class="g"
              >thérapie PsychoCorporelle</router-link
            >
            et la
            <router-link to="/approche-systemique" class="g"
              >pratique Systémique</router-link
            >.
          </p>
        </article>
      </section>
      <br />
      <h2 class="italic">
        "Le possible est juste un tout petit peu après l’impossible,<br />un seul pas peut
        suffire pour le rencontrer"
      </h2>
      <h3 class="author">J. Salomé</h3>
      <br />
      <!-- <img
      src="../../public/assets/Images/balance.jpg"
      class="hero"
      alt="Pierres empilées devant coucher de soleil"
    /> -->
      <div
        class="parallax2"
        :style="{ 'background-image': `url(${img.acceuil.parallax2})` }"
      ></div>
      <br />
      <h1 class="italic">L'approche Thérapeutique</h1>
      <br />
      <section class="second">
        <article class="flex-item w40 bg1">
          <p>
            Tout travail thérapeutique commence d’abord par une rencontre, la nôtre, celle
            qui vous permettra de sentir que dans cet « accordage » entre nous, vous
            pouvez vous y sentir en confiance.
          </p>
          <p>
            Les méthodes que je vous proposerai alors, entrent dans le cadre d’une
            approche
            <span class="bold">intégrative</span>, un authentique cousu main, car cela
            revient à prendre appui sur les « outils » les mieux adaptés à vous, compte
            tenu de vos besoins, vos objectifs, votre personnalité.
          </p>
          <p>
            Je me réfère aujourd’hui principalement aux avancées des neurosciences
            concernant les thérapies
            <router-link to="/emdr" class="g">EMDR</router-link> et
            <router-link to="/brainspotting" class="g">Brainspotting</router-link>
            principalement.
          </p>
        </article>
        <article class="flex-item w40 bg1">
          <p>
            Je m’appuie sur une approche humaniste avec l’assurance pour chacun de mes
            clients, petits et grands, en leur potentiel de croissance, de créativité, de
            réalisation. C’est dans ce cadre-là que j’intègre la
            <router-link to="/therapie-psychocorporelle" class="g"
              >Dimension PsychoCorporelle</router-link
            >
            de la personne, son vécu émotionnel, ses ressentis.
          </p>
          <p>
            <router-link to="/approche-systemique" class="g"
              >La Thérapie Systémique</router-link
            >
            s'inscrit dans une démarche globale qui consiste à décrypter les interactions
            verbales et émotionnelles au sein d’un groupe pour débusquer les blocages
            enfouis et retisser les liens endommagés. C’est l’accompagnement que je
            propose aux couples ou aux familles qui viennent vers moi.
          </p>
        </article>
      </section>
      <br />
      <p class="italic bold">
        Mes connaissances sont constamment actualisées, à la fois en clinique humaine et
        dans la recherche scientifique.
      </p>
      <br />
    </main>
  </div>
</template>

<script>
import DisplayQuoteComponent from "./DisplayQuoteComponent.vue";
import { publicRequest } from "../services/requester";
import { ref } from "vue";

export default {
  components: {
    DisplayQuoteComponent,
  },
  beforeCreate() {
    this.getMsgStatus().then((result) => {
      console.log("result");
      console.log(result.data.boolStatus);
      this.msgStatus = result.data.boolStatus;
      if (this.msgStatus) {
        console.log("----------------------------");
        this.getMsg().then((result) => {
          console.log(result.data);
          this.msg = result.data.msg;
        });
      }
    });
  },
  setup() {
    const msgStatus = ref(false);
    const msg = ref("");
    const getMsgStatus = async () => {
      const response = await publicRequest("/message-infos/status");
      console.debug(response);
      return response;
    };
    const getMsg = async () => {
      const response = await publicRequest("/message-infos");
      return response;
    };
    return {
      img: require("../../public/assets/imagesUrl.json"),
      msg,
      getMsg,
      msgStatus,
      getMsgStatus,
    };
  },
  name: "AccueilComponent",
};
</script>

<style>
main {
  min-height: 73vh;
  padding: 0% 8vw;
  font-size: 20px;
  line-height: 1.6;
}
p {
  padding: 15px 15px 15px 15px;
}
li {
  padding: 5px 20px 5px 0px;
  text-align: left;
}
body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
img {
  margin-bottom: 15px;
}
.logo {
  margin-right: 10px;
}
.author {
  display: flex;
  justify-content: center;
  padding-left: 500px;
  font-size: 1.2em;
  font-style: italic;
}
.parallax {
  /* background-image: url(`${img.acceuil.background}`); */
  background-image: url(../../public/assets/Images/Pilat.jpg);
  min-height: 50rem;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  padding-right: 10%;
  filter: opacity(80%);
}
.parallax2 {
  background-image: url(../../public/assets/Images/balance.jpg);
  min-height: 40rem;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  padding-right: 10%;
}
.titre {
  margin-top: -125px;
  margin-right: -440px;
  animation: slidein 2000ms forwards;
}
@keyframes slidein {
  0% {
    margin-right: -800px;
  }
  20% {
    margin-right: -800px;
  }
  /* 35% { margin-right:-600px; }
    50% { margin-right:-400px; }
    65% { margin-right:-200px; } 
    80% { margin-right: 0px; }*/
  100% {
    margin-right: 0px;
  }
}
.hero {
  width: 100%;
  margin-bottom: 20px;
}
.hero2 {
  background-color: #ffffff;
  background-image: url(../../public/assets/Images/Pilatbandeau.png);
  background-position: center;
  background-size: cover;

  padding: 2em;
  text-align: center;
}
.bg1 {
  background-color: rgba(128, 128, 128, 0.05);
  padding-top: 5px;
}
.italic {
  font-style: italic;
}
.bold {
  font-weight: bold;
}
.underline {
  text-decoration: underline;
}
.flex {
  display: flex;
  flex-wrap: wrap;
}
.flex-item.img.w25 {
  width: 25%;
}
.flex-item.img.w30 {
  width: 30%;
}
.flex-item.img.w40 {
  width: 40%;
}
.flex-item.w30 {
  width: 30%;
}
.flex-item.w35 {
  width: 35%;
}
.flex-item.w40 {
  width: 40%;
}
.flex-item.w50 {
  width: 50%;
}
.flex-item.w60 {
  width: 60%;
}
.premier {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.second {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin-bottom: 30px;
}
@media screen and (max-width: 992px) {
  main {
    margin: 10px 10px;
  }
  .author {
    padding-left: 200px;
  }
  .parallax2 {
    min-height: 13rem;
    background-position: center;
  }
  .premier {
    flex-direction: column;
  }
  .second {
    flex-direction: column;
  }
  .flex-item.w60 {
    width: 100%;
  }
  .flex-item.w50 {
    width: 100%;
  }
  .flex-item.w40 {
    width: 100%;
  }
  .flex-item.img.w40 {
    width: 100%;
  }
  .flex-item.img.w30 {
    width: 100%;
  }
  .flex-item.img.w25 {
    width: 100%;
  }
  .map {
    width: 325px;
    height: 400px;
  }
}
</style>
