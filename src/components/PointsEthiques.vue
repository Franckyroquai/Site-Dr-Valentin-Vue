<template>
<div>
  <h1 class="hero2 italic">Les points-clés de ma pratique</h1>
  <main>
    <br />
    <br />
    <section class="premier">
      <article class="flex-item img w35">
        <img
          src="../../public/assets/Images/deontologie.png"
          class="hero"
          alt="dossier avec inscription déontologie"
        />
      </article>
      <article class="flex-item w60 bg1">
        <p>
          Un <span class="bold">espace de créativité et de confiance,</span> où
          vous pouvez vous raconter et vous projeter, en y étant reconnu(e) pour
          vous-même et non jugé(e).
        </p>

        <p>
          Le souci de vous aider à trouver la meilleure expression de votre
          potentiel et à lever progressivement les obstacles internes qui
          peuvent en freiner le plein accomplissement.
        </p>
        <p>
          Une <span class="bold">déontologie rigoureuse</span> garantissant la
          confidentialité et le respect de la personne.
        </p>
      </article>
    </section>
    <br />
    <br />
    <article>
      <h2 class="italic bold">Quelques éléments de notre code de déontologie :</h2>
      <br />
      <br />
      <ul class="list bg1">
        <li>
          <span class="italic bold underline">Pratique d’accompagnement</span> : Le thérapeute
          s’autorise en conscience à exercer cette fonction à partir de son
          parcours de formation, d’une expérience professionnelle enrichie de sa
          formation personnelle.
        </li>
        <li>
          <span class="italic bold underline">Confidentialité</span> : Le thérapeute s’astreint au
          <span class="italic bold underline">secret professionnel</span>.
        </li>
        <li>
          <span class="italic bold underline">Supervision établie</span> : Il est tenu de disposer
          d’un lieu de supervision par un pair ou un tiers compétent.
        </li>
        <li>
          <span class="italic bold underline">Intégrité et probité</span> : Il a pour obligation
          de ne pas exploiter une relation professionnelle à des fins
          personnelles, religieuses, sectaires, politiques, ou en vue de tout
          autre intérêt idéologique.
        </li>
        <li>
          <span class="italic bold underline">Responsabilité des décisions</span> : La personne
          reste maitre d’œuvre dans le processus. Elle en a la responsabilité et
          reste libre de ses décisions et actions.
        </li>
      </ul>
      <br />
      <h2 class="italic">
        "C’est sur soi même qu’il faut œuvrer,<br />c’est en soi-même qu’il faut
        chercher"
      </h2>
      <h3 class="author">Paracelse</h3>
    </article>
    <br>
  </main>
</div>
</template>

<script>
export default {
  name: "PointsEthiquesComponent",
  props: {
    variable1: String, // type de variable (string,integer,...)
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>

