<template>
    <main>
        
        <h1 class="i">Me contacter</h1>
        <br>
        <article>
        <p>
          Les consultations se font sur RDV.
        </p>
        <p>
          Pour un complément d'information ou si vous souhaitez prendre un rendez-vous, il est indispensable de m’appeler sur mon portable au <a href="tel:+33686978613">06 86 97 86 13</a>.
        </p>
         
        <h2 class="i">
            L'accès à mon cabinet
        </h2>
        <p>
        <img src="../assets/Images/CabinetExterieur.jpg" width="300" alt="Cabinet extérieur">
        <img src="../assets/Images/CabinetInterieur.jpg" width="300" alt="Salle de thérapie du cabinet">
        </p>
        <h3 class="s">
          Mes coordonnées :
        </h3>
        <br>
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
        
        <h3 class="s">
          <br>
            Stationnement et accès :
        </h3>
        <br>
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.326692127481!2d6.124891966058863!3d43.1186628791432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c923a3401e8c13%3A0x7d3ae3bee7177c69!2sValentin%20Veronique!5e0!3m2!1sfr!2sfr!4v1645557577409!5m2!1sfr!2sfr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy">
        </iframe>
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

