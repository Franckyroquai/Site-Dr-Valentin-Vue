<template>
    <main>
      <carousel-component></carousel-component>
        
        <article>
        <h1>
          Bienvenue
        </h1>
        <h2>
          « J’ouvrirai une école de vie intérieure, et j’écrirai sur la porte : école d’art. »<br>Max Jacob
        </h2>
        <p>
          Nous sommes amenés dans notre vie, à traverser des périodes houleuses, des expériences compliquées, douloureuses. Nous pouvons, dans ces moments-là, nous sentir fragilisé(e). Et si les obstacles s’accumulent ou reviennent de manière récurrente, tout cela peut nous sembler subitement insoluble ou nous donner l’impression de ne plus arriver à avancer.
        </p> 

        <p>
          Quelques soient les difficultés que vous rencontrez, les questions que vous vous posez, germe peut-être au fond de vous, le désir de transformer votre horizon personnel pour aller vers un mieux-être, ou mieux, vers un plus d’Etre.
        </p>
        <p>
         « Un voyage de mille lieux commence toujours par un premier pas »<br>Lao Tseu
        </p>
        <p>
          Aussi je vous propose de faire le point avec vous.
        </p>
        <p>
         Mes consultations sont ouvertes à tous, enfants, adolescents, adultes, séniors, ainsi que couples et familles. 
        </p>
        <p>
         Je pratique essentiellement la psychothérapie EMDR, le Brainspotting, diverses approches en thérapie psychocorporelle et la pratique Systémique.
        </p>
        <h2>
         « Le possible est juste un tout petit peu après l’impossible, un seul pas peut suffire pour le rencontrer »<br>J. Salomé
        </h2>
          </article>
    
    
      </main>
</template>

<script>
import CarouselComponent from './CarouselComponent.vue'
export default {
  components: { CarouselComponent },
              
  name: 'AccueilComponent', /*
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

