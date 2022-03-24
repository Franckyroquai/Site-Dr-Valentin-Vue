<template>
  <h1 class="hero2 i">La thérapie de couple</h1>
  <main>
    <br />
    <h2 class="i">
      "Dans un couple, l’important n'est pas de vouloir rendre l'autre heureux,
      mais c'est de se rendre heureux et d'offrir ce bonheur à l'autre."
    </h2>
    <br />
    <article>
      <img
        src="../../public/assets/Images/TherapieCouple.jpg"
        width="300"
        alt="Image de couple qui s'embrasse en riant"
      />
      <br /><br />
      <section class="bg1">
        <p>
          Un couple qui va bien n’est pas un couple sans problème, c’est un
          couple qui sait traverser les crises et parvient à les transmuter.
        </p>
        <ul class="i list">
          <li>
            Si vous ressentez un déséquilibre dans votre vie à deux ou que vous
            avez le sentiment de ne plus parler la même langue, de ne plus être,
            l’un et l’autre, sur la même planète
          </li>
          <li>
            Si votre couple fait face à des difficultés (famille recomposée,
            infidélité, sexualité, addiction, argent, conflits, violence …)
          </li>
          <li>
            Si des événements de vie viennent perturber votre relation à tous
            deux (arrivée /départ des enfants, chômage, décès d’un proche,
            maladie, retraite…) et que vous ne vous sentez plus à votre place
          </li>
        </ul>
      </section>
      <section class="premier">
        <article class="flex-item w40 bg1">
          <p class="ig">
            Il est temps de prendre du recul, car le problème au fond, ne vient
            pas nécessairement de l'autre...mais plutôt ce qui se passe dans la
            relation entre vous !
          </p>
          <p>
            L’approche systémique est là pour vous permettre de voir et vivre
            les choses autrement, de mieux vous comprendre et différemment
            surtout.
          </p>
          <p>
            Le thérapeute ne se place ni en juge, ni en arbitre mais en
            facilitateur, avec la mission de faire émerger les attentes de
            chacun, et vous aider à débloquer les situations-problème.
          </p>
        </article>
        <article class="flex-item w50 bg1">
          <img
            src="../../public/assets/Images/couple3.jpg"
            class="hero"
            width="300px"
            alt="couple qui marche avec un chien au bord de la mer"
          />
          <p class="ig">
            La thérapie de couple ne s’adresse pas qu’aux couples qui sont au
            bord du gouffre mais à tous ceux qui veulent se donner les moyens de
            vivre une belle relation.
          </p>
          <p>
            Si vous arrivez à considérer les moments de crises comme un
            tremplin, vous serez sur la bonne voie pour retrouver confiance et
            complicité entre vous car il est là, le ciment de votre alliance.
          </p>
        </article>
      </section>
      <section class="premier">
        <article class="flex-item img w40">
          <img
            src="../../public/assets/Images/couple.jpg"
            class="hero"
            alt="couple qui marche au bord de la meren se tenant la main"
          />
        </article>

        <article class="flex-item w50 bg1">
          <p>
            L’aventure est certainement pleine de surprises et de
            rebondissements, j’en conviens.
          </p>
          <p>
            Mais c’est bien dans cet entre-deux, que je vous propose de vous
            accompagner : pour écouter vos difficultés, pour vous aider aussi à
            reconnaître les ressources et compétences qui vous portent et
            viendront redonner du « peps » à ce que vous avez créé à ce jour.
          </p>
          <p>
            À partir de la
            <router-link to="/approche-systemique"
              ><span class="g">thérapie systémique</span></router-link
            >, nous aurons, à disposition, des outils pour vous permettre de
            transformer l’essai.
          </p>
          <p>
            Un accompagnement systémique se déroule sur une moyenne de 6 à 15
            séances de 1h 15 à 1h30 avec un espacement de 2 semaines entre les
            séances en fonction de la situation et des disponibilités de chacun.
          </p>
        </article>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: "TherapieDeCoupleComponent",
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

