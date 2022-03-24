<template>
  <h1 class="hero2 i">La thérapie psycho-corporelle</h1>
  <main>
    <br />
    <h2>Une approche corporelle douce</h2>
    <br />
    <img
      src="../../public/assets/Images/CorpsAccord.jpg"
      width="300"
      alt="Femme qui écarte les bras face au soleil"
    />

    <article>
      <p class="i">Pour un « CORPS ACCORD »</p>

      <p class="bg1">
        Notre corps est une <span class="g">mémoire vivante</span> qui porte en
        lui les traces de notre vécu, de notre histoire émotionnelle et
        affective depuis notre conception, de notre héritage familial. C'est par
        et avec notre corps que nous sommes présents au monde et que nous
        l'habitons.
        <span class="g"
          >C’est par notre corps que nous agissons, c’est dans et par notre
          corps que nous souffrons</span
        >.
      </p>
      <ul class="bg1 list">
        <li>
          Si vous vous posez des milliards de questions sur vous, votre vie et
          que le mental s’emballe…
        </li>
        <li>
          Si vous sentez que vous avez du mal à vous habiter, à accéder à vos
          ressentis et donc à votre corps….
        </li>
        <li>
          Ou qu’il vous joue des tours d’une façon ou d’une autre (maladie,
          douleurs, tensions, angoisse, blocages…)
        </li>
      </ul>
      <p class="g">Il est certainement temps de vous mettre à son écoute.</p>
      <br />
      <button
        class="i btn btn-primary btn-lg"
        @click="isMoreInfo = !isMoreInfo"
      >
        Pour en Savoir plus
      </button>
      <section v-if="isMoreInfo">
        <br />
        <h2 class="i">"L’inconscient est structuré comme un langage"</h2>
        <h3 class="author">(J. LACAN)</h3>
        <h2 class="i">… et le corps en est son creuset.</h2>
        <br />
        <article class="bg1">
          <p>
            Toute thérapie passant par le corps s’appuie sur un principe cher à
            Wilhelm Reich, selon lequel les souvenirs douloureux sont refoulés
            dans l’inconscient et enregistrés dans le corps, formant une
            véritable cuirasse.
          </p>
          <p>
            Les blocages corporels inconscients (tensions musculaires
            chroniques, zones douloureuses, verrouillage des articulations,
            altération de la respiration, …) ne sont ni plus ni moins qu’un
            témoignage de l’histoire de la personne et des défenses qu’elle a
            édifiées pour s’adapter à son environnement. Autrement dit, ce qui
            n’a pu s’exprimer émotionnellement, s’imprime dans le corps ou finit
            par s’exprimer par des maux qu’il s’agisse de maux physiques,
            psychiques ou par un
            <span class="g">"mal à l’âme"</span> indéfinissable.
          </p>
          <p>
            Comprenons que, dès notre conception, notre organisme enregistre
            chaque expérience vécue. Il garde, au plus profond de ses tissus,
            les traces des épreuves non digérées qui entravent son développement
            naturel et ce sous forme de tensions qui deviennent chroniques. Tout
            cela est inconscient.
            <span class="g"
              >En dissolvant ces marques du passé, les schémas sclérosés peuvent
              alors se dénouer en douceur</span
            >. Le corps s’en trouve apaisé et ressourcé.
          </p>
          <p>
            <span class="g"
              >Permettre à la personne une réappropriation progressive de
              lui-même et de ses potentialités</span
            >
            afin de lui restituer sa pleine capacité à sentir, à éprouver, aimer
            et agir, telle paraît bien être la perspective thérapeutique
            première de cette reconnection intime Psyche-Soma.
          </p>
          <p>
            Les pratiques que je suis amenée à vous proposer seront variées et
            adaptées aux besoins de chacun(e).
          </p>
          <p>
            Il peut s’agir d’exercices de relaxation, de respiration, de
            postures ou de toucher du corps par exemple, ce toucher
            thérapeutique si précieux car il vient en point d’appui pour
            permettre à la personne de se connecter à elle-même, en premier lieu
            afin de retrouver une base de sécurité et bien au-delà, apaiser ses
            parts blessées.
          </p>
          <p>
            Bien sûr, il n'est pas toujours nécessaire de toucher directement au
            corps pour <span class="g">travailler avec le corps</span>.
            L'accueil des <span class="g">ressentis</span> et des
            <span class="g">émotions</span> ainsi que l’accès à leur contenu
            affectif permet cette reconnection et un « plus de conscience » sur
            l’expérience en cours afin de contacter votre réalité et votre
            vérité intérieure.
            <router-link to="/emdr" class="g">EMDR</router-link> ou
            <router-link to="/brainspotting" class="g"
              >Brainspotting</router-link
            >
            entrent dans ce cadre-là, d’autres outils tels que TIPI ou NERTI
            également.
          </p>
          <p>
            Et, la cerise sur le gâteau, vous sera à coup sûr proposé en
            accompagnement des séances, en autonomie donc, quelques pratiques
            simples telles que la respiration consciente, la cohérence
            cardiaque, L’EFT…, participant toutes, de ce que j’ai envie
            d’appeler une écologie de l’Etre, car synonymes de bien-être, de
            paix intérieure, d’un prendre soin de soi- donc de vous-
            <span class="g">"en corps"</span> et toujours .
          </p>
        </article>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: "TherapiePsychoCorporelleComponent",
  props: {
    variable1: String, // type de variable (string,integer,...)
  },
  data() {
    return {
      isMoreInfo: false,
    };
  },
};
</script>

<style>
</style>

