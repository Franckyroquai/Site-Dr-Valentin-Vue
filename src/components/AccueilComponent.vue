<template>
    <main>
        <p>« J’ouvrirai une école de vie intérieure, et j’écrirai sur la porte : école d’art. » Max Jacob</p>
        <h1>V. Valentin Psychologue Conseil</h1>
        <article>

         <p>Nous sommes amenés dans notre vie, à traverser des périodes houleuses, des expériences compliquées, douloureuses. Nous pouvons, dans ces moments-là, nous sentir fragilisé(e). Et si les obstacles s’accumulent ou reviennent de manière récurrente, tout cela peut nous sembler subitement insoluble ou nous donner l’impression de ne plus arriver à avancer.</p> 

        <p>
          Quelques soient les difficultés que vous rencontrez, les questions que vous vous posez, germe peut-être au fond de vous, le besoin de vous sentir écouté, entendu, compris, dans un endroit où tout peut être dit, sans tabou, ni peur d’être jugé(e).
        </p>
        <p>
          C’est là que l’intervention d’un professionnel peut être bénéfique. 
        </p>
        <p>
          Grâce à son regard extérieur, il vous facilitera le pas de côté nécessaire au changement. Vous apprendrez alors à vous voir au-delà des limites que vous vous imposez.
        </p>
        <p>
          Je vous propose de faire le point avec vous. A votre rythme, selon vos besoins et vos attentes, il pourra alors vous être proposé :
        </p>
        <p>
          -une aide ponctuelle face à une situation particulière, peut -être pour prendre de la hauteur et accéder à quelques clés au passage.
        </p>
        <p>
          -ou un accompagnement sur une durée plus longue, voire une thérapie si vous envisagez d’aller plus loin.
        </p>
        <p>
          Mes consultations sont ouvertes à tous, enfants, adolescents, adultes, séniors, couples et familles.
        </p>
        <p>
          Si vous décidez d’ouvrir cette page, c’est que le moment est peut-être venu d’OSER,  oser rêver votre vie pour oser la vivre, et pour le meilleur et sans le pire, arriver à  vous y réaliser .
        </p>
        <p>
          « Le possible est juste un tout petit peu après l’impossible, un seul pas peut suffire pour le rencontrer » J. Salomé
        </p>
          </article>
    
    
      </main>
</template>

<script>
export default {
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

