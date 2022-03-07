<template>
    <main>
        
        <h1 class="i">La Thérapie de l’enfant</h1>
        <br>
        <img src="../assets/Images/Enfant.jpg"  alt="Petite fille avec de la peinture sur les mains">
        <h2 class="i">
          <br>
            « Vous lui demandez de se calmer mais cette crise est sa manière de se calmer » <br>Isabelle FILLIOSAT
        </h2>
        

        <article>
        
        <p>
          <br>
             Grandir, nous le savons tous, ne va pas de soi.</p> 
        <p>
            Si l’enfant fait preuve d’une grande adaptabilité face aux aléas de la vie, lorsqu’il traverse une épreuve trop lourde pour ses petites épaules, une réelle souffrance peut s’installer et s’aggraver si elle n’est pas entendue … au bon endroit.
        </p>
        <p>
          Dès lors qu’une difficulté est ressentie par l’enfant et/ou les parents, tout peut être motif à consulter. Et ces comportements, sources d’inquiétude, sont des plus variés :
        </p>
        <ul>
            <li>Trouble du sommeil, réveils nocturnes</li>
            <li>Enurésie, encopresie</li>
            <li>Anxiété, angoisse de séparation</li>
            <li>Agressivité, inhibition, harcèlement, isolement</li>
            <li>Refus de grandir</li>
            <li>Difficultés scolaires, trouble des apprentissages</li>
            <li>Hyperactivité, trouble de l’attention</li>
            <li>Hypersensibilité</li>
            <li>Problème d’estime de soi</li>
            <li>Auto ou hétero agressivité</li>
            <li>Somatisations répétées</li>
            <li>Arrivée d’un petit frère ou d’une petite sœur</li>
            <li>Difficultés dans la relation parents/enfant</li>
            <li>Divorce, décès d’un parent, familles recomposées…</li>
        </ul>
        <p>
          Après évaluation, les séances suivantes pourront déboucher (ou pas) sur un accompagnement familial, ou un coaching parental « step by step », selon l’évolution des séances avec l’enfant.
        </p>
        </article>
    
    
      </main>
</template>

<script>
export default {
  name: 'TherapieEnfantComponent', /*
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

