<template>
    <main>
        <h1>EMDR /BRAINSPOTTING</h1>
        <article>

         <p>Deux méthodes psycho-neuro-physiologiques apportées par le progrès des neurosciences, permettent d'accéder à des mémoires dysfonctionnelles affectives et émotionnelles  bloquées dans l’Inconscient, permettant ainsi  au  cerveau  de les traiter et  de les digérer . </p> 

        <p>
          La recherche a démontré en effet que notre cerveau avait la capacité naturelle de traiter, de façon autonome, les informations au quotidien.  En revanche quand il est dépassé par un choc traumatique, ou une répétition de mini chocs, il n'arrive plus à les traiter ou les « digérer » comme il le fait ordinairement.  Il reste bloqué sur l'évènement, sans que nous en ayons conscience. Ce sont les vécus traumatiques « petits t » et « grands T », non « digérés »
qui sont sources de ces perturbations.

        </p>
        <p>
          Les thérapies EMDR de même que le BRAINSPOTTING sont maintenant reconnues pour leur efficacité, en premier lieu pour tout ce qui touche à ces traumatismes, du Stress Post Traumatique (ESPT) aux « petits » traumas, mais aussi pour bien d'autres problématiques (angoisses, phobies, dépression, estime de soi, addictions, deuil, séparation, somatisations, douleurs ou maladies chroniques ...).
        </p>
        <p>
          Fait qui peut paraître surprenant dans ces approches « naturelles », les blessures ne sont pas simplement cicatrisées, elles sont transformées. La plupart des personnes en effet, expriment le sentiment d’être renforcées dans leur sécurité interne, dans l’estime d’elles-mêmes ou encore se disent soulagées de sortir d’un sentiment d’impuissance paralysant en se découvrant des ressources inconnues jusque-là.
        </p>
          </article>
    
    
      </main>
</template>

<script>
export default {
  name: 'EMDR-BrainspottingComponent', /*
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

