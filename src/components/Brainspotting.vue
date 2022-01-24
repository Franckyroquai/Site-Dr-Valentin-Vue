<template>
    <main>
        
        <h1>Brainspotting</h1>
        <article>

         <p>Le brainspotting est une nouvelle thérapie neurobiologique développée par David Grand en 2003.</p> 

        <p>
           Il s’agit d’un outil thérapeutique qui repose sur la recherche de positions oculaires stratégiques, les « brainspots », pour accéder à l’endroit de notre cerveau profond où se situent les souffrances psychiques.
        </p>
        <p>
          Dès lors, cette thérapie consiste à soutenir un point activateur ( brainspot) et laisser toutes les informations qui sont dès lors réactivées, se dérouler jusqu’à ce que la perturbation soit digérée.
        </p>
        <p>
          Grace à son accès direct aux zones sous-corticales où sont stockées les expériences très perturbantes voire traumatiques, s’opère ainsi un retraitement et une libération de ces  informations bloquées, hors d’atteinte de l’esprit conscient et des capacités verbales et cognitives.
        </p>
        <p>
          Comme pour l’EMDR, cette méthode est efficace pour traiter non seulement des traumatismes récents ou anciens mais bien d’autres problématiques telle que : angoisses,  phobies, dépression, deuil, douleurs, maladies psychosomatiques, addictions, troubles du sommeil ou de l’alimentation,  attaques de panique…
        </p>
        <p>
          Elle permet également de renforcer les ressources, d’améliorer les performances sportives, artistiques et d’accompagner les situations où il faut donner le meilleur de soi-même ( concours, examen ou autre challenge).  
        </p>
          </article>
    
    
      </main>
</template>

<script>
export default {
  name: 'BrainspottingComponent', /*
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

