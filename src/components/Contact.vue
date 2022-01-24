<template>
    <main>
        
        <h1>Les mesures sanitaires liées au COVID</h1>
        <article>

         <p>L’aération de la pièce et de la salle d’attente est assurée après chaque consultation, parfois aussi en cours de consultation.</p> 

        <p>
          •	La disposition des fauteuils permet de respecter la distance de 2 mètres entre vous et moi.
        </p>
        <p>
          •	Gel hydroalcoolique et savon de Marseille sont à disposition dans le cabinet.
        </p>
        <p>
          Tout sera mis en œuvre pour vous accueillir dans les meilleures conditions possibles.
        </p>
        <h2>
            ME CONTACTER
        </h2>
        <p>
          Les consultations se font sur RDV.
        </p>
        <p>
          Pour un complément d'information ou si vous souhaitez prendre un rendez-vous, il est indispensable de m’appeler sur mon portable au 06 86 97 86 13.
        </p>
        <p>
           Merci d'avance et à bientôt !
        </p>
        <h2>
            Comment accéder à mon cabinet
        </h2>
        <p>
          Mes coordonnées
        </p>
        <p>
         0686978613
        </p>
        <p>
          Immeuble La roseraie 2
        </p>
        <p>
            Rez de chaussée porte à droite (Vous pouvez entrer sans sonner)
        </p>
        <p>
            Stationnement et accès : Parking Gambetta (à l’arrière du cabinet)
        </p>
        <p>
            Places de stationnement dans la rue (horodateur : une heure gratuite)
        </p>
        <p>
            Navette gratuite : arrêt Avenue Gambetta à 150 m du cabinet.
        </p>
        <p>
            Arrêt de bus : face au cinéma OLBIA à 100 m du cabinet.
        </p>
          </article>
    
    
      </main>
</template>

<script>
export default {
  name: 'ContactComponent', /*
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

