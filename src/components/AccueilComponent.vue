<template>
  <img src="../assets/Images/Pilat.png" class="hero" alt="Dune de sable" />

  <main>
    <display-quote-component></display-quote-component>
    <h1 class="i">Bienvenue</h1>
    <br />
    <h2 class="i">
      « J’ouvrirai une école de vie intérieure, et j’écrirai sur la porte :
      école d’art. »<br />Max Jacob
    </h2>
    <section class="premier">
      <article class="flex-item w50">
        <p>
          Nous sommes amenés dans notre vie, à traverser des périodes houleuses,
          des expériences compliquées, douloureuses. Nous pouvons, dans ces
          moments-là, nous sentir fragilisé(e). Et si les obstacles s’accumulent
          ou reviennent de manière récurrente, tout cela peut nous sembler
          subitement insoluble ou nous donner l’impression de ne plus arriver à
          avancer.
        </p>

        <p>
          Quelques soient les difficultés que vous rencontrez, les questions que
          vous vous posez, germe peut-être au fond de vous, le désir de
          transformer votre horizon personnel pour aller vers un mieux-être, ou
          mieux, vers un plus d’Etre.
        </p>
      </article>
      <article class="flex-item img w30">
        <img
          src="../assets/Images/Pierres.jpg"
          class="hero border15"
          alt="Pierres empilées devant la mer"
        />
      </article>
    </section>
    <h2 class="i">
      « Un voyage de mille lieux commence toujours par un premier pas »<br />Lao
      Tseu
    </h2>
    <br />
    <section class="premier">
      <article class="flex-item img w40">
        <img
          src="../assets/Images/lotus.jpg"
          class="hero border15"
          alt="fleur de lotus"
        />
      </article>
      <article class="flex-item w50">
        <p>Aussi je vous propose de faire le point avec vous.</p>
        <p>
          Mes consultations sont ouvertes à tous, <router-link to="/therapie-enfant" class="g">enfants</router-link>, <router-link to="/therapie-adolescent" class="g">adolescents</router-link>, <router-link to="/therapie-adulte" class="g">adultes,
          séniors</router-link>, ainsi que <router-link to="/therapie-de-couple" class="g">couples</router-link> et <router-link to="/therapie-familiale" class="g">familles</router-link>.
        </p>
        <p>
          Je pratique essentiellement la psychothérapie
          <router-link to="/emdr" class="g">EMDR</router-link>, le
          <router-link to="/brainspotting" class="g">Brainspotting</router-link
          >, diverses approches en
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
    <h2 class="i">
      « Le possible est juste un tout petit peu après l’impossible, un seul pas
      peut suffire pour le rencontrer »<br />J. Salomé
    </h2>
    <br />
    <img
      src="../assets/Images/balance.jpg"
      class="hero border15"
      alt="Pierres empilées devant coucher de soleil"
    />
    <br />
    <h1 class="i">L'approche Thérapeutique</h1>
    <br />
    <section class="second">
    <article class="flex-item w40">
      <p>
        Tout travail thérapeutique commence d’abord par une rencontre, la nôtre,
        celle qui vous permettra de sentir que dans cet « accordage » entre
        nous, vous pouvez vous y sentir en confiance.
      </p>
      <p>
        Les méthodes que je vous proposerai alors, entrent dans le cadre d’une
        approche
        <span class="g">intégrative</span>, un authentique cousu main, car cela
        revient à prendre appui sur les « outils » les mieux adaptés à vous,
        compte tenu de vos besoins, vos objectifs, votre personnalité.
      </p>
      <p>
        Je me réfère aujourd’hui principalement aux avancées des neurosciences
        concernant les thérapies
        <router-link to="/emdr" class="g">EMDR</router-link> et
        <router-link to="/brainspotting" class="g">Brainspotting</router-link>
        principalement.
      </p>
      <p>
        Je m’appuie sur une approche humaniste avec l’assurance pour chacun de
        mes clients, petits et grands, en leur potentiel de croissance, de
        créativité, de réalisation. C’est dans ce cadre-là que j’intègre la
        <router-link to="/therapie-psychocorporelle" class="g"
          >Dimension PsychoCorporelle</router-link
        >
        de la personne, son vécu émotionnel, ses ressentis.
      </p>
      </article>
      <article class="flex-item w40">
      <p>
        <router-link to="/approche-systemique" class="g"
          >La Thérapie Systémique</router-link
        >
        s'inscrit dans une démarche globale qui consiste à décrypter les
        interactions verbales et émotionnelles au sein d’un groupe pour
        débusquer les blocages enfouis et retisser les liens endommagés. C’est
        l’accompagnement que je propose aux couples ou aux familles qui viennent
        vers moi.
      </p>
      <p class="ig">
        Mes connaissances sont constamment actualisées, à la fois en clinique
        humaine et dans la recherche scientifique.
      </p>
    </article>
    </section>
  </main>
</template>

<script>
import DisplayQuoteComponent from "./DisplayQuoteComponent.vue";
export default {
  components: {
    DisplayQuoteComponent,
  },
  name: "AccueilComponent",
};
</script>

<style>
main {
  min-height: 75.9vh;
  margin: 10px 40px;
  padding: 0% 8vw;
  font-size: 20px;
  line-height: 1.6;
}
 body{
   /* background-image: url("../assets/Images/Pilat.png");
    height: auto;
    background-position: center;
    background-size: cover;*/
    background: linear-gradient(rgb(246, 246, 191), rgb(245, 222, 179));
} 
.bord{
border: 2px solid grey;
border-radius: 15px;
list-style-type: disc;
}
.hero {
  width: 100%;
}
.i {
  font-style: italic;
}
.g {
  font-weight: bold;
}
.s {
  text-decoration: underline;
}
.is {
  font-style: italic;
  text-decoration: underline;
}
.ig {
  font-style: italic;
  font-weight: bold;
}
.igs {
  font-style: italic;
  font-weight: bold;
  text-decoration: underline;
}
.flex {
  display: flex;
  flex-wrap: wrap;
}
.flex-item.img.w30 {
  width: 30%;
  border-radius: 100%;
}
.flex-item.imgw40 {
  width: 40%;
}
.flex-item.w30 {
  width: 30%;
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
.border3{
  border-radius: 3%;
}
.border15{
  border-radius: 15px;
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
@media screen and (max-width: 992px) {
  main{
    margin: 10px 10px;
    padding: 0% 2vw;
  }
  .premier{
    flex-direction: column;
  }
  .second{
    flex-direction: column;
  }                          /*remplacer les classes 1,2 par section ?*/
  .flex-item.w60{
    width: 100%;
  }
  .flex-item.w50{
    width: 100%;
  }
  .flex-item.w40{
    width: 100%;
  }
  .flex-item.img.w40 {
    width: 100%;
  }
  .flex-item.img.w30 {
    width: 100%;
  }
  .map{
    width: 325px;
    height: 400px;
  }
}
</style>
