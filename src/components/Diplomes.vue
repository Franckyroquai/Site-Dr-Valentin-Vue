<template>
    <main>
        <h1>Diplômes et Certifications</h1>
        <article>

         <p>Master2 -Psychologie Clinique et psychopathologie (Université Aix-Marseille)</p> 

        <p>
          Formation psychanalytique (Freud, Jung, Lacan ) et psychanalyse didactique de 9 ans (Avignon) 
        </p>
        <p>
          CERTIFICAT de praticien en thérapie psychocorporelle et relaxation (INFIPP)  
        </p>
        <p>
          CERTIFICAT Européen de thérapeute familial (Réseau /Famille)
        </p>
        <p>
          CERTIFICAT Européen de praticien EMDR (EMDR France)
                       + Dissociation et traumas complexes (H. Dellucci)
                   + Traitement des phobies par l’EMDR (Ad. De Jong)

        </p>
        <p>
          CERTIFICATION Brainspotting  niv 1-2-3 (Grand D.)
        </p>
        <p>
          CERTIFICATS - Thérapie par l’image (IMTT)-IETSP Paris
                       -TIPI ( Marseille)
                       -Méthode des 2 points (R.Bartlett-F.Kinslow)
                       - Langue des Signes  (IVT Paris) 

        </p>
        <h2>
            Orientation
        </h2>
        <p>
          •	Approche humaniste, intégrative, systémique .
        </p>
        <h2>
            Public
        </h2>
        <p>
          Enfants / Adolescents, Adultes / séniors, Couples / familles
        </p>
        <p>
          Sportifs de haut niveau : Préparation mentale
        </p>
        <p>
            Etudiants,professionnels :Préparation de carrière ,de concours, reconversion …
        </p>
        <p>
            Supervision-Analyse des pratiques : Associations médico-sociales, Mairies, Services hospitaliers
        </p>
        <p>
            Membre de l’ Association EMDR-France
        </p>
        <p>
            Membre de l’ IETSP ( Institut Européen des Thérapies Somato-Psychiques)
        </p>
        <p>
            « Je suis venu en ce monde sans rien, et je le quitterai avec ma conscience. » Dr Garth Alfred Taylor
        </p>
          </article>
    
    
      </main>
</template>

<script>
export default {
  name: 'DiplomesComponent', /*
  le nom du composant
  dans le html du parent il se "source" de la maniere suivante : <default-component>
  dans le scripting (JS) du parent il se declare avec DefaultComponent et doit etre importé
  */
  props: {
      variable1: String // type de variable (string,integer,...)
  },
  data() {
      return {
          variable2: "ceci est une variable du composant (passable aux composants enfants)"
      }
  } 
}
</script>

<style>
   main{
margin: 10px 50px;
}
</style>

