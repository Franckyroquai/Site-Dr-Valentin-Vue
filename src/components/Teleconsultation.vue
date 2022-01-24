<template>
    <main>
        
        <h1>La téléconsultation ou consultation à distance</h1>
        <article>

         <p>La téléconsultation ou consultation à distance est destinée à faciliter l'accès à un accompagnement psychologique par système de logiciels tels que SKYPE, ZOOM, MEET.
La téléconsultation en ligne est ouverte à tous, sans limites géographiques.
</p> 

        <p>
          Solution alternative mise à l’épreuve lors du confinement lié au covid 19, elle permet également de pallier à certaines difficultés qui peuvent s’avérer de véritables obstacles à un suivi en cabinet :
        </p>
        <p>
          Si vous vivez une situation de handicap physique ou un problème de santé  vous imposant le domicile.
        </p>
        <p>
          Si vous êtes bloqué(e)par une timidité invalidante voire une phobie sociale qui vous empêchent de franchir la porte d’un cabinet et de supporter le face à face avec le thérapeute.
        </p>
        <p>
          Si vous avez un de nombreux déplacements professionnels en France ou à l’étranger ou êtes éloigné(e) de tout.
        </p>
        <p>
          Si vous vivez à l’étranger et souhaitez parler en français, votre langue maternelle.
        </p>
        <p>
         Si vous désirez accéder facilement à des pratiques spécialisées telles que le  Brainspotting qui ne bénéficie pas encore de suffisamment de thérapeutes formés pour couvrir les besoins de l’ensemble du territoire .  
        </p>
        <p>
          Si vous voulez une continuité du soin, que vous soyez en vacances ou en déplacement. 
        </p>
        <p>
          Ou tout simplement un accès au thérapeute dans un moment particulier.
        </p>
          </article>
    
    
      </main>
</template>

<script>
export default {
  name: 'TeleconsultationComponent', /*
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

