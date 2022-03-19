<template>
  <main>
    <h1 class="i">Qu'est-ce que l'EMDR ?</h1>
    <br />
    <a href="https://www.emdr-france.org/" target="_blank">
      <img src="../assets/Images/EMDR.jpg" class="border15" alt="Image d'oeil" />
    </a>

    <article>
      <br />
      <p>
        Les initiales
        <a href="https://www.emdr-france.org/" target="_blank"
          ><span class="i">EMDR</span></a
        >
        viennent de son appellation anglo-saxonne : Eye Movement Desensitization
        and Reprocessing qui signifie "Désensibilisation et Retraitement par les
        Mouvements Oculaires".
      </p>

      <p>
        La thérapie <span class="i">EMDR</span> utilise en effet, une
        stimulation sensorielle bilatérale alternée (droite-gauche) des lobes du
        cerveau, par mouvements oculaires bi-alternés, tapotements ou sons
        alternatifs.
      </p>
      <p>
        Cette thérapie a été découverte en 1987 de manière fortuite et mise au
        point par Francine SHAPIRO.
      </p>
      <p>
        Cette psychologue américaine a trouvé ce moyen très simple de stimuler
        un mécanisme neuropsychologique complexe, présent en chacun de nous
        <span class="g"
          >qui permet de retraiter des vécus traumatiques non digérés à
          l’origine de divers symptômes, parfois très invalidants.</span
        >
      </p>
      
      <button class="i btn btn-primary btn-lg" @click="isMoreInfo = !isMoreInfo">Pour en Savoir plus</button>
      <section v-if="isMoreInfo">
        <br>
      <p>
        Le processus psychique de traitement activé par cette méthode est un
        processus conscient qui diminue la charge émotionnelle associée à un
        souvenir.
      </p>
      <p>
        Cette stimulation bilatérale alternée restructure en effet l’information
        traumatique dans le cortex et non plus dans le cerveau limbique (lié aux
        émotions), permettant ainsi de diminuer la charge émotionnelle associée
        au souvenir.
      </p>
      <p>
        La thérapie <span class="i">EMDR</span> s’adresse
        <span class="g"
          >à toute personne (du bébé à l’adulte) souffrant de perturbations
          émotionnelles généralement liées à des situations perturbantes
          émotionnellement ou des traumatismes psychologiques.</span
        >
        Il peut s’agir de traumatismes tels les violences physiques et
        psychologiques, les abus sexuels, les accidents graves, les décès,
        maladies graves, incendies, catastrophes naturelles, les situations de
        guerre et attentats … Il peut s’agir aussi d’événements de vie
        difficiles, sources de fortes émotions ou de comportements inadaptés ou
        excessifs dans la vie quotidienne, une enfance perturbée, les
        séparations, interruptions de grossesse, deuils, difficultés
        professionnelles ...) Des symptômes peuvent alors apparaitre tels que
        des troubles anxieux (angoisses), de l’humeur, des comportements
        alimentaires (TCA), troubles sexuels, addictions, phobies, maladies
        chroniques, TOC, douleurs, états dissociatifs …
      </p>
      <h2 class="ig">Comment se passe une séance de traitement EMDR ?</h2>
      <br />
      <h3 class="g">Des séances de préparation préalables</h3>
      <p>
        Du fait de l’effet puissant de cette thérapie sur le psychisme du
        patient, une préparation est indispensable. Les entretiens préliminaires
        permettent de :
      </p>
      <ul class="bord">
      <li>
        Construire une relation thérapeutique de confiance avec son praticien.
      </li>
      <li>
        Identifier avec lui une problématique actuelle susceptible d’être
        traitée en <span class="i">EMDR</span>, puis les souvenirs traumatiques
        à l’origine de ces difficultés.
      </li>
      <li>
        Et enfin de mettre en place des outils psychocorporels de
        stabilisation émotionnelle qui peuvent être utilisés en cours de séance
        mais aussi en pratique autonome entre les séances.
      </li>
      </ul>
      <br />
      <h3 class="g">Un processus de traitement conscient</h3>
      <p>
        Les souvenirs perturbants identifiés sont ensuite retraités, un à un,
        lors des séances, à l’aide des stimulations bilatérales alternées. Il
        faut parfois plusieurs séances pour traiter un seul souvenir. Pour les
        enfants, selon leur âge, le traitement <span class="i">EMDR</span> peut
        se faire en présence de leurs parents.
      </p>
      <p>
        Au début, le praticien demande au patient de se concentrer sur le
        souvenir douloureux en gardant à l’esprit les aspects sensoriels les
        plus perturbants (image, son, odeur, sensation physique), ainsi que les
        pensées et ressentis actuels négatifs qui y sont associés. Le praticien
        pratique alors des séries de stimulations bilatérales alternées rapides;
        l’évènement se retraite alors spontanément et différemment pour chaque
        personne selon son vécu, sa personnalité, ses ressources, sa culture.
      </p>
      <p>
        Le praticien continue les stimulations jusqu’à ce que le souvenir ne
        génère plus de perturbations mais soit mis à distance, « effacé », ou
        qu’il ait perdu sa vivacité. Ensuite, toujours avec des stimulations
        bilatérales alternées rapides, il aide le patient à associer à ce
        souvenir une pensée positive, constructive, pacifiante.
      </p>
      <p>
        Une séance d’<span class="i">EMDR</span> dure 60 minutes environ,
        parfois plus.
      </p>
      <p>
        L’<span class="i">EMDR</span> est le traitement de choix du FBI pour le
        traumatisme. Il est employé par tous les services des forces armées au
        Royaume-Uni. Il a été utilisé pour la première fois de manière organisée
        après le bombardement de la ville d’Oklahoma, et, depuis, des équipes de
        volontaires formés à l’EMDR sont envoyées sur les lieux de catastrophes.
        On l’a beaucoup utilisé depuis les événements du 11 septembre.
      </p>
      <p>
        L'<span class="i">EMDR</span> est reconnue par la communauté
        scientifique internationale. Elle est pratiquée dans le monde entier
        auprès de personnes de tous âges et de toutes conditions.
      </p>
      <p>
        Je vous invite à visiter le site EMDR france :
        <br />
        <a href="https://www.emdr-france.org/" target="_blank">
      <img src="../assets/Images/EmdrFrance.png" alt="logo Emdr" />
    </a>
      </p>
      <p>
        <a href="https://www.emdr-france.org/" target="_blank">
          https://www.emdr-france.org/
        </a>
      </p>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: "EMDRComponent",
  data() {
    return {
      isMoreInfo: false,
    };
  },  
}
</script>

<style>

</style>

