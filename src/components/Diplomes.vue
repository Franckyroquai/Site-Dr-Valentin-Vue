<template>
<div>
  <h1 class="hero2 italic">Diplômes et Certifications</h1>
  <main>
    <br />
    <h2 class="italic">
      "Je suis venu en ce monde sans rien,<br />et je le quitterai avec ma
      conscience."
    </h2>
    <h3 class="author">Dr Garth Alfred Taylor</h3>
    <br />
    <article>
      <section class="premier">
        <article class="flex-item img w40">
          <img
            src="../../public/assets/Images/diplome.jpg"
            class="hero"
            alt="image de diplome et chapeau d'étudiant"
          />
        </article>
        <article class="flex-item w50">
          <ul class="list bg1">
            <li>
              Master2 -Psychologie Clinique et psychopathologie (Université
              Aix-Marseille)
            </li>

            <li>
              Formation psychanalytique (Freud, Jung, Lacan ) et psychanalyse
              didactique de 9 ans (Avignon)
            </li>
            <li>
              CERTIFICAT de praticien en thérapie psychocorporelle et relaxation
              (INFIPP)
            </li>
            <li>
              CERTIFICAT Européen de thérapeute familial (Réseau /Famille)
            </li>
            <li>
              CERTIFICAT Européen de praticien
              <router-link to="/emdr">EMDR</router-link> (EMDR France)<br />
              + Dissociation et traumas complexes (H. Dellucci)<br />
              + Traitement des phobies par l’<router-link to="/emdr"
                >EMDR</router-link
              >
              (Ad. De Jong)
            </li>
            <li>
              CERTIFICATION
              <router-link to="/brainspotting">Brainspotting</router-link> niv
              1-2-3 (Grand D.)
            </li>
            <li>
              CERTIFICATS : <br />
              - Thérapie par l’image (IMTT)-IETSP Paris <br />
              -TIPI ( Marseille) <br />
              -Méthode des 2 points (R.Bartlett-F.Kinslow) <br />
              - Langue des Signes (IVT Paris)
            </li>
          </ul>
        </article>
      </section>
      <h2 class="italic">Orientation</h2>
      <br />
      <p class="bold">Approche humaniste, intégrative, systémique.</p>
      <br />
      <h2 class="italic">Pour Quel public ?</h2>
      <br />
      <ul class="bg1 list">
        <li class="underline">
          Enfants / Adolescents, Adultes / séniors, Couples / familles
        </li>
        <li>
          <span class="underline">Sportifs de haut niveau :</span> Préparation mentale
        </li>
        <li>
          <span class="underline">Etudiants, Professionnels :</span> Préparation de
          carrière, de concours, reconversion …
        </li>
        <li>
          <span class="underline"
            >Associations médico-sociales, Mairies, Services hospitaliers
            :</span
          >
          Supervision, analyse des pratiques
        </li>
        <li>
          <span class="underline"
            >Professionnels auprès des séniors (maisons de retraite, EHPAD,
            services d’aide à domicile) :</span
          >
          Formatrice
        </li>
      </ul>
      <article class="bg1">
        <p>
          Membre de l’ Association
          <a href="https://www.emdr-france.org/" target="_blank">
            EMDR-France
          </a>
        </p>
        <p>
          Membre de l’ IETSP ( Institut Européen des Thérapies
          Somato-Psychiques)
        </p>
      </article>
    </article>
  </main>
</div>
</template>

<script>
export default {
  name: "DiplomesComponent",
};
</script>

<style>
</style>
