<template>
    <main>
      <!-- <carousel-component></carousel-component> -->
      <chance-component></chance-component>
        
        <article>
        <h1 class="i">
          Bienvenue
        </h1>
        <br>
        <h2 class="i">
          « J’ouvrirai une école de vie intérieure, et j’écrirai sur la porte : école d’art. »<br>Max Jacob
        </h2>
        <p>
          Nous sommes amenés dans notre vie, à traverser des périodes houleuses, des expériences compliquées, douloureuses. Nous pouvons, dans ces moments-là, nous sentir fragilisé(e). Et si les obstacles s’accumulent ou reviennent de manière récurrente, tout cela peut nous sembler subitement insoluble ou nous donner l’impression de ne plus arriver à avancer.
        </p> 

        <p>
          Quelques soient les difficultés que vous rencontrez, les questions que vous vous posez, germe peut-être au fond de vous, le désir de transformer votre horizon personnel pour aller vers un mieux-être, ou mieux, vers un plus d’Etre.
        </p>
        <h2 class="i">
         « Un voyage de mille lieux commence toujours par un premier pas »<br>Lao Tseu
        </h2>
        <p>
          Aussi je vous propose de faire le point avec vous.
        </p>
        <p>
         Mes consultations sont ouvertes à tous, enfants, adolescents, adultes, séniors, ainsi que couples et familles. 
        </p>
        <p>
         Je pratique essentiellement la psychothérapie EMDR, le Brainspotting, diverses approches en thérapie psychocorporelle et la pratique Systémique.
        </p>
        <h2 class="i">
         « Le possible est juste un tout petit peu après l’impossible, un seul pas peut suffire pour le rencontrer »<br>J. Salomé
        </h2>
          </article>
    
    
      </main>
</template>

<script>
// import CarouselComponent from './CarouselComponent.vue'
import ChanceComponent from './ChanceComponent.vue'
export default {
  components: { 
    // CarouselComponent, 
    ChanceComponent 
    },
              
  name: 'AccueilComponent', /*
  le nom du composant
  dans le html du parent il se "source" de la maniere suivante : <default-component>
  dans le scripting (JS) du parent il se declare avec DefaultComponent et doit etre importé
  */ 
}
</script>

<style>
   main{
  margin: 10px 50px;
  font-size: 17px;
  line-height: 1.6;
}
.i{
  font-style: italic;
}
.g{
  font-weight: bold;
}
.s{
  text-decoration: underline;
}
.is{
  font-style: italic;
  text-decoration: underline;
}
.ig{
  font-style: italic;
  font-weight: bold;
}
.igs{
  font-style: italic;
  font-weight: bold;
  text-decoration: underline;
}
/* body{
    background-image: url("../assets/Images/PontBrume.jpg");
    height:100vh;
    background-position: center;
    background-size: cover;

} */
</style>

