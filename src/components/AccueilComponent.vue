<template>
  <main>
    <!-- <carousel-component></carousel-component> -->
    <chance-component></chance-component>

    <article>
      <h1 class="i">Bienvenue</h1>
      <br />
      <h2 class="i">
        « J’ouvrirai une école de vie intérieure, et j’écrirai sur la porte :
        école d’art. »<br />Max Jacob
      </h2>
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
      <h2 class="i">
        « Un voyage de mille lieux commence toujours par un premier pas »<br />Lao
        Tseu
      </h2>
      <p>Aussi je vous propose de faire le point avec vous.</p>
      <p>
        Mes consultations sont ouvertes à tous, enfants, adolescents, adultes,
        séniors, ainsi que couples et familles.
      </p>
      <p>
        Je pratique essentiellement la psychothérapie EMDR, le Brainspotting,
        diverses approches en thérapie psychocorporelle et la pratique
        Systémique.
      </p>
      <h2 class="i">
        « Le possible est juste un tout petit peu après l’impossible, un seul
        pas peut suffire pour le rencontrer »<br />J. Salomé
      </h2>
      <br />
    </article>

    <h1 class="i">L'approche Thérapeutique</h1>
    <br />
    <article>
      <p>
        Tout travail thérapeutique commence d’abord par une rencontre, la nôtre,
        celle qui vous permettra de sentir que dans cet « accordage » entre
        nous, vous pouvez vous y sentir en confiance.
      </p>
      <p>
        Les méthodes que je vous proposerai alors, entrent dans le cadre d’une
        approche <span class="g">intégrative</span>, un authentique cousu main,
        car cela revient à prendre appui sur les « outils » les mieux adaptés à
        vous, compte tenu de vos besoins, vos objectifs, votre personnalité.
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
      <p>
        <router-link to="/approche-systemique" class="g">La Thérapie Systémique</router-link>
        s'inscrit dans une démarche globale qui consiste à décrypter les
        interactions verbales et émotionnelles au sein d’un groupe pour
        débusquer les blocages enfouis et retisser les liens endommagés. C’est
        l’accompagnement que je propose aux couples ou aux familles qui viennent
        vers moi.
      </p>
      <p>
        Mes connaissances sont constamment actualisées, à la fois en clinique
        humaine et dans la recherche scientifique.
      </p>
    </article>
  </main>
</template>

<script>
// import CarouselComponent from './CarouselComponent.vue'
import ChanceComponent from "./ChanceComponent.vue";
export default {
  components: {
    // CarouselComponent,
    ChanceComponent,
  },

  name: "AccueilComponent" /*
  le nom du composant
  dans le html du parent il se "source" de la maniere suivante : <default-component>
  dans le scripting (JS) du parent il se declare avec DefaultComponent et doit etre importé
  */,
};
</script>

<style>
main {
  min-height: 75.9vh;
  margin: 10px 50px;
  font-size: 17px;
  line-height: 1.6;
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

/* body{
    background-image: url("../assets/Images/PontBrume.jpg");
    height:100vh;
    background-position: center;
    background-size: cover;

} */
</style>

