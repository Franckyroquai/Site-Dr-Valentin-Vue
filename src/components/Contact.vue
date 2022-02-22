<template>
    <main>
        
        <h1>ME CONTACTER</h1>
        <article>
        <p>
          Les consultations se font sur RDV.
        </p>
        <p>
          Pour un complément d'information ou si vous souhaitez prendre un rendez-vous, il est indispensable de m’appeler sur mon portable au <a href="tel:+33686978613">06 86 97 86 13</a>.
        </p>
         
        <h2>
            L’ACCES à mon cabinet
        </h2>
        <img src="../assets/Images/CabinetExterieur.jpg" width="300 em" alt="Cabinet extérieur">
        <img src="../assets/Images/CabinetInterieur.jpg" width="300 em" alt="Salle de thérapir du cabinet">
        <h3>
          Mes coordonnées :
        </h3>
        
        <p>Téléphone: 
          <a href="tel:+33686978613">06 86 97 86 13</a> 
        </p>
        <p>
          Immeuble La Roseraie 2
        </p>
        <p>
            Rez de chaussée porte à droite (Vous pouvez entrer sans sonner)
        </p>
        <img src="../assets/Images/SalleAttente.jpg" width="300" alt="Accueil salle s'attente">
        <h3>
            Stationnement et accès :
        </h3>
        <p>
          - Parking Gambetta (à l’arrière du cabinet)
        </p>
        <p>
          - Places de stationnement dans la rue (horodateur : une heure gratuite)
        </p>
        <p>
          - Navette gratuite : arrêt Avenue Gambetta à 150 m du cabinet.
        </p>
        <p>
          - Arrêt de bus : face au cinéma OLBIA à 100 m du cabinet.
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

</style>

