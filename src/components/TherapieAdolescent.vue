<template>
    <main>
        
        <h1>L’adolescent</h1>
        <img src="../assets/Images/Ado.jpg"   alt="Adolescents qui regardent leur téléphones">
        <h2>
           « Si tout se prépare dans l’enfance, tout se joue à l’adolescence » <br>Kesemberg.

        </h2>
        

        <article>

        <p>
            La période de l’adolescence est une période particulièrement mouvementée, entre l’évolution psychique nécessaire pour sortir de l’enfance et les grandes transformations physiques vécues de manière plus ou moins facile. Nos « grands enfants » vivent cette étape avec beaucoup d’intensité…et donnent parfois du fil à retordre aux parents!
        </p>
        <h3>
            Les principaux motifs de consultation :
        </h3>
        <p>
           Si une certaine forme de « vague à l’âme » à l’adolescence est normale, des signes plus alarmants, liés ou non à des évènements perturbants comme un deuil, une maladie,  un traumatisme doivent faire systématiquement l’objet d’une aide.
        </p>
        <p>
          Pour ne citer que quelques uns:
        </p>
        <ul>
            <li>Troubles alimentaires</li>
            <li>Addictions (drogues, alcool, écrans…)</li>
            <li>Dépression, conduites suicidaires, comportements de retrait affectif et social</li>
            <li>Faible estime de soi</li>
            <li>Conduites à risques : agressivité, violences, refus de l’autorité, fugues, rapports sexuels non protégés…</li>
            <li>Phobie sociale, échec scolaire</li>
            <li>Divorce ou conflit parental</li>
        </ul>
        <p>
          Le coaching thérapeutique auprès de l’adolescent offre un espace où :
        </p>
        <ul>
            <li>Déposer sa souffrance, exprimer ses émotions</li>
            <li>Bénéficier d’une écoute bienveillante et dépourvue de jugement concernant ses doutes et son mal être</li>
            <li>Lui permettre de poser des questions intimes jugées « taboues » avec la certitude de trouver des réponses adaptées et claires</li>
            <li>Comprendre les phénomènes psychosomatiques qu’il traverse et y mettre du sens</li>
        </ul>
        <p>
            Il peut s’avérer judicieux de proposer de l’EMDR ou du Brainspotting à un adolescent, selon la situation bien sûr, car cela permet, souvent bien plus rapidement que chez l’adulte d’apaiser les tensions psychiques.
        </p>
        <p>
            Quant à vous, parents, votre rôle souvent mis à rude épreuve, vous pouvez sentir dépassés voire excédés. La communication dans ces moments de crise, rendue parfois plus que difficile, les incompréhensions peuvent rapidement devenir insolubles. Si c’est le cas, avec l’accord de l’adolescent, je peux être amenée à proposer un travail collectif, parents et enfants, dans une approche systémique.
        </p>
        <p>
            Sachez que tout est réversible dans cette période bouillonnante…
        </p>
        <p>
            Ce sera ma mission de solliciter les ressources nécessaires à chacun pour tenir le cap durant ces périodes de gros temps.
        </p>
        </article>
    
    
      </main>
</template>

<script>
export default {
  name: 'TherapieAdolescentComponent', /*
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
