<template>
    <main>
       
        <h1>Les points-clés de ma pratique</h1>
        <article>

         <p>Un espace de créativité et de confiance, où vous pouvez vous raconter et vous projeter, en y étant reconnu(e) pour vous-même et non jugé(e).</p> 

        <p>
          Le souci de vous aider à trouver la meilleure expression de votre potentiel et à lever progressivement les obstacles internes qui peuvent en freiner le plein accomplissement.
        </p>
        <p>
          Une déontologie rigoureuse garantissant la confidentialité et le respect de la personne.
        </p>
        <h2>
            Quelques éléments de notre code de déontologie 
        </h2>
        <p>
          Pratique d’accompagnement : Le thérapeute s’autorise en conscience à exercer cette fonction à partir de son parcours de formation, d’une expérience professionnelle enrichie de sa  formation personnelle.
        </p>
        <p>
          - Confidentialité : Le thérapeute s’astreint au secret professionnel. 
        </p>
        <p>
          - Supervision établie: Il est   tenu  de disposer d’un lieu  de supervision par un pair ou un tiers compétent.
        </p>
        <p>
          - Intégrité́ et probité : Il a pour obligation de ne pas exploiter une relation professionnelle à des fins personnelles, religieuses, sectaires, politiques, ou en vue de tout autre intérêt idéologique.
        </p>
        <p>
          – Responsabilité des décisions : La personne reste maitre d’œuvre dans le processus. Elle en a la responsabilité et reste libre de ses décisions et actions.
        </p>
          </article>
    
    
      </main>
</template>

<script>
export default {
  name: 'PointsEthiquesComponent', /*
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

