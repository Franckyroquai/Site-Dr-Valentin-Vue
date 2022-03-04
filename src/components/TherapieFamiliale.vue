<template>
    <main>
        <!-- <carousel-component></carousel-component> -->
        <h1 class="i">La thérapie familiale</h1>
        <br>
                <!-- <img src="../assets/Images/DisputeFamiliale.jpg"   alt="Adolescents qui regardent leur téléphones"> -->

        <article>
          <br>
        <p>- Votre enfant fait des cauchemars, votre adolescent a de mauvais résultats scolaires ou décroche, se perd dans les écrans ou se noie dans une addiction, vous envoie balader ou au contraire devient inaccessible …
        </p> 

        <p>-Vos enfants se disputent, l’un d’eux est jaloux ou se montre violent et vous en avez peut -être assez des conflits à répétition 
        </p>
        <p>- Vous ne vous sentez pas ou plus soutenu(e) par votre « moitié » dans votre rôle de parent… 
        </p>
        <p>
         - Votre famille est fragilisée par un deuil, une maladie, un handicap…
        </p>
        <p>
          - Vous vivez une période délicate de séparation… ou de recomposition familiale
        </p>
        <p>
          La famille est une entité qui vit, qui évolue et qui est amenée à rencontrer des situations d’inconfort et de souffrance comme celles-ci … ou d’autres encore. 
        </p>
        <p>
          Ces évènements qui viennent bousculer l’équilibre établi sont le signe qu'un changement dans les échanges au sein de la famille devient nécessaire. 
        </p>
        <p>
          Vous ne trouvez pas la solution par vous-même ? Ne laissez pas votre famille s’embourber dans les difficultés.
        </p>
        <p>
          Au contraire, le moment est venu de vous mettre tous ensemble au travail, pour changer un système relationnel inopérant voire nocif et trouver un mode de communication plus satisfaisant pour l’ensemble du groupe et plus épanouissant pour chacun.
        </p>
        <p>
            En place de thérapeute systémicienne, l'espace de parole qui vous sera proposé, mettra au travail cette dynamique au sein de votre famille. Chacun pourra s’y exprimer, dans sa souffrance, dans ses besoins et ses souhaits aussi. Tout en amenant une nouvelle grille de lecture du problème, ce sera l'occasion pour chacun et tous ensemble de vivre une expérience relationnelle différente, progressivement plus claire, et dégagée, à terme, d’un symptôme qui n’a plus lieu d’être.
        </p>
        <p>
          Je vous accompagnerai dans ce voyage pour qu’ensemble, vous puissiez trouver vos propres solutions, celles qui vous ressemblent. 
        </p>
        <p>
          Un <router-link to="/approche-systemique"><span class="g">accompagnement systémique</span></router-link>
           familial se déroule sur une moyenne de 6 à 12 séances de 1h 15 à 1h30 avec un espacement de 2 à 3 semaines entre les séances.
        </p>
          </article>
    
    
      </main>
</template>

<script>
// import CarouselComponent from './CarouselComponent.vue'
export default {
  // components: { CarouselComponent },
  name: 'TherapieFamilialeComponent', /*
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

