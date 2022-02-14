<template>
    <main>
        
        <h1>Modalités pratiques</h1>
        <article>
        <h2>
          Consultations
        </h2>
        <p>Elles durent environ 60 minutes (parfois plus avec l’EMDR ou le Brainspotting).
        </p> 
        <h2>
          Les honoraires
        </h2>
        <p>
         Séance individuelle d’une heure environ (adulte) : 70 euros 
        </p>
        <p>
          Séance individuelle de 30 à 45 minutes (enfant) : 50 euros
        </p>
        <p>
          Séance d’une heure 15 ou 30 (couples / famille) : de 90 à 120 euros
        </p>
        <p>
         Le règlement des honoraires s’effectue à la fin de chaque séance, par chèque ou par espèces, par virement pour les consultations en ligne.
        </p>
        <p>
          Dans certaines situations, étudiants, personnes en situation de handicap, demandeurs d’emploi, les tarifs pourront être adaptés. Nous verrons cela ensemble. 
        </p>
        <p>
         Les séances chez le psychologue ne sont pas prises en charge par la Sécurité Sociale. 
        </p>
        <p>
         Par contre, votre mutuelle rembourse peut-être une partie des consultations, souvent sous forme de forfait. Pensez à la contacter.  
        </p>
        <p>
          Un rendez-vous non annulé 48 heures avant, sera dû.
        </p>
        <h2>
          Consultations à distance
        </h2>
        <p>
          Les consultations peuvent également se faire en VISIO (en passant par Gmail, Zoom, Skype…)
        </p>
        <p>
          La consultation à distance a l’avantage de rendre possible un travail thérapeutique quelle que soit la situation.
        </p>
        <p>
          Je vous invite à vous organiser pour ne pas être dérangé(e) pendant la séance (téléphone, visites) et prévoyez de vous installer dans un endroit où vous êtes à l'aise.
        </p>
          </article>
    
    
      </main>
</template>

<script>
export default {
  name: 'ModalitesPratiquesComponent', /*
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

