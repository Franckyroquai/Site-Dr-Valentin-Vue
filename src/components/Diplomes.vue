<template>
  <main>
    <h1 class="is">Diplômes et Certifications</h1>
    <br />
    <article>
      <section class="premier">
        <article class="flex-item img w40">
        <img
          src="../assets/Images/diplome.jpg"
          class="hero border15"
          alt="image de diplome et chapeau d'étudiant"
        />
      </article>
      <article class="flex-item w50">
        <ul class="bord list">
      <li>Master2 -Psychologie Clinique et psychopathologie (Université Aix-Marseille)</li>

      <li>
        Formation psychanalytique (Freud, Jung, Lacan ) et psychanalyse didactique de 9
        ans (Avignon)
      </li>
      <li>CERTIFICAT de praticien en thérapie psychocorporelle et relaxation (INFIPP)</li>
      <li>CERTIFICAT Européen de thérapeute familial (Réseau /Famille)</li>
      <li>
        CERTIFICAT Européen de praticien <router-link to="/emdr">EMDR</router-link> (EMDR France)<br />
        + Dissociation et traumas complexes (H. Dellucci)<br />
        + Traitement des phobies par l’<router-link to="/emdr">EMDR</router-link> (Ad. De Jong)
      </li>
      <li>CERTIFICATION <router-link to="/brainspotting">Brainspotting</router-link> niv 1-2-3 (Grand D.)</li>
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
      <h2 class="s">Orientation</h2>
      <p>• Approche humaniste, intégrative, systémique.</p>
      <h2 class="s">Pour Quel public ?</h2>
      <ul class="bord list">
      <li class="s">Enfants / Adolescents, Adultes / séniors, Couples / familles</li>
      <li><span class="s">Sportifs de haut niveau :</span> Préparation mentale</li>
      <li>
        <span class="s">Etudiants, Professionnels :</span> Préparation de carrière, de concours, reconversion …
      </li>
      <li>
        <span class="s">Associations médico-sociales, Mairies,
        Services hospitaliers :</span> Supervision, analyse des pratiques
      </li>
      <li>
        <span class="s">Professionnels auprès des séniors (maisons de retraite, EHPAD,
        services d’aide à domicile) :</span> Formatrice
      </li>
      </ul>
      <p>Membre de l’ Association <a href="https://www.emdr-france.org/" target="_blank">
          EMDR-France
        </a></p>
      <p>Membre de l’ IETSP ( Institut Européen des Thérapies Somato-Psychiques)</p>
      <h2 class="i">
        « Je suis venu en ce monde sans rien, et je le quitterai avec ma conscience. »
        <br />Dr Garth Alfred Taylor
      </h2>
    </article>
  </main>
</template>

<script>
export default {
  name: "DiplomesComponent",
};
</script>

<style>

</style>
