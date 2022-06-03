import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import FestivalView from '../views/FestivalView.vue'
import ConcertView from '../views/ConcertView.vue'
import ContactView from '../views/ContactView.vue'
import MentionlegalesView from '../views/MentionlegalesView.vue'
import ArtisteView from '../views/ArtisteView.vue'
import GuidedestyleView from '../views/GuidedestyleView.vue'
import NotFoundComponent from '../views/404.vue'
import ChoixView from '../views/ChoixView.vue'
import ChoixArtisteView from '../views/ChoixArtisteView.vue'
import CreateView from '../views/Choix/CreateView.vue'
import UpdateView from '../views/Choix/UpdateView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/artistes', name: 'Artistes', component: ArtistesView },
    { path: '/programmation', name: 'Programmation', component: ProgrammationView },
    { path: '/festival', name: 'Festival', component: FestivalView },
    { path: '/concert', name: 'Concert', component: ConcertView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/mentionlegales', name: 'Mentionlegales', component: MentionlegalesView },
    { path: '/artiste', name: 'Artiste', component: ArtisteView },
    { path: '/guidestyle', name: 'Guidedestyle', component: GuidedestyleView },
    { path: '/:pathMatch(.*)', component: NotFoundComponent },
    { path: '/voschoix', name: 'ChoixView', component: ChoixView },
    { path: '/choixartiste', name: 'ChoixArtisteView', component: ChoixArtisteView },
    { path: '/createview', name: 'CreateView', component: CreateView },
    { path: '/updateview', name: 'UpdateView', component: UpdateView },
    // ici les autre routes
  ]
})

export default router
