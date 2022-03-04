import { createWebHistory, createRouter } from "vue-router";
import Accueil from "../components/AccueilComponent.vue";
import CarouselComponent from "../components/CarouselComponent.vue";
import About from '../components/Apropos.vue';
import ApprocheSystemiqueComponent from '../components/ApprocheSystemique.vue';
import ApprocheTherapeutiqueComponent from '../components/ApprocheTherapeutique.vue';
import EMDRComponent from '../components/EMDR.vue';
import BrainspottingComponent from '../components/Brainspotting.vue';
import TherapieEnfantComponent from '../components/TherapieEnfant.vue';
import TherapieAdolescentComponent from '../components/TherapieAdolescent.vue';
import TherapieAdulteComponent from '../components/TherapieAdulte.vue';
import TherapieFamilialeComponent from '../components/TherapieFamiliale.vue';
import TherapieDeCoupleComponent from '../components/Therapiedecouple.vue';
import TherapiePsychoCorporelleComponent from '../components/TherapiePsychoCorporelle.vue';
import PointsEthiquesComponent from '../components/PointsEthiques.vue';
import LiensVideosComponent from '../components/LiensVideosComponent.vue';
import DiplomesComponent from '../components/Diplomes.vue';
import ModalitesPratiquesComponent from '../components/ModalitesPratiques.vue';
import ContactComponent from '../components/Contact.vue';
import Error404Component from '../components/Error404Component.vue';
import MentionsLegalesComponent from '../components/MentionsLegalesComponent.vue';

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil,
  },
  {
    path: "/carou",
    name: "Carousel",
    component: CarouselComponent,
  },
  {
    path: "/about",
    name: "A Propos",
    component: About,
  },
  {
    path: "/approche-systemique",
    name: "Approche Systémique",
    component: ApprocheSystemiqueComponent,
  },
  {
    path: "/approche-therapeutique",
    name: "Approche Thérapeutique",
    component: ApprocheTherapeutiqueComponent,
  },
  {
    path: "/emdr",
    name: "EMDR",
    component: EMDRComponent,
  },
  {
    path: "/brainspotting",
    name: "Brainspotting",
    component: BrainspottingComponent,
  },
  {
    path: "/therapie-enfant",
    name: "Thérapie Enfant",
    component: TherapieEnfantComponent,
  },
  {
    path: "/therapie-adolescent",
    name: "Thérapie Adolescent",
    component: TherapieAdolescentComponent,
  },
  {
    path: "/therapie-adulte",
    name: "Thérapie Adulte",
    component: TherapieAdulteComponent,
  },
  {
    path: "/therapie-familiale",
    name: "Thérapie Familiale",
    component: TherapieFamilialeComponent,
  },
  {
     path: "/therapie-de-couple",
     name: "Thérapie de couple",
     component: TherapieDeCoupleComponent,
   },
  {
     path: "/therapie-psychocorporelle",
     name: "Thérapie PsychoCorporelle",
     component: TherapiePsychoCorporelleComponent,
   },
  {
     path: "/liens-videos",
     name: "Liens Videos",
     component: LiensVideosComponent,
   },
  {
     path: "/points-ethiques",
     name: "Points Ethiques",
     component: PointsEthiquesComponent,
   },
  {
     path: "/diplomes",
     name: "Diplômes",
     component: DiplomesComponent,
   },
  {
     path: "/modalites-pratiques",
     name: "Modalités Pratiques",
     component: ModalitesPratiquesComponent,
   },
  {
     path: "/contact",
     name: "Contact",
     component: ContactComponent,
   },
  {
     path: "/:pathMatch(.*)*",
     name: "Error404",
     component: Error404Component,
   },
  {
     path: "/mentions-legales",
     name: "Mentions Légales",
     component: MentionsLegalesComponent,
   },
];

const Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default Router;