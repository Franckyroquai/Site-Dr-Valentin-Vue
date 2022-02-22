<template>
    <main>
        <h1>L'approche Thérapeutique</h1>
        <article>

         <p>
          Tout travail thérapeutique commence d’abord par une rencontre, la nôtre, celle qui vous permettra de sentir que dans cet « accordage » entre nous, vous pouvez vous y sentir en confiance. 
        </p>
        <p>
          Les méthodes que je vous proposerai alors, entrent dans le cadre d’une approche intégrative, un authentique cousu main, car cela revient à prendre appui sur les « outils » les mieux adaptés à vous, compte tenu de vos besoins, vos objectifs, votre personnalité. 
        </p>
        <p>
          Je me réfère aujourd’hui principalement aux avancées des neurosciences concernant les thérapies EMDR et Brainspotting principalement.
        </p>
        <p>
          Je m’appuie sur une approche humaniste avec l’assurance pour chacun de mes clients, petits et grands, en leur potentiel de croissance, de créativité, de réalisation. C’est dans ce cadre-là que j’intègre la dimension psychocorporelle de la personne, son vécu émotionnel, ses ressentis.
        </p>
        <p>
          La thérapie systémique s'inscrit dans une démarche globale qui consiste à décrypter les interactions verbales et émotionnelles au sein d’un groupe pour débusquer les blocages enfouis et retisser les liens endommagés. C’est l’accompagnement que je propose aux   couples ou aux familles qui viennent vers moi.  
        </p>
        <p>
          Mes connaissances sont constamment actualisées, à la fois en clinique humaine et dans la recherche scientifique. 
        </p>
          </article>
    
    
      </main>
</template>

<script>
export default {
  name: 'ApprocheTherapeutiqueComponent', /*
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

