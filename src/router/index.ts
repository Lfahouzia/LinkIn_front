import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Importation des vues principales
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import SignupPage from "@/views/SignupPage.vue";
// import NotFoundPage from "@/views/NotFoundPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import FAQPage from "@/views/FAQPage.vue";
import BlogPage from "@/views/BlogPage.vue";
import CourseDetailPage from "@/views/CourseDetailPage.vue";
import ProjectsPage from "@/views/ProjectsPage.vue";
import PricingPage from "@/views/PricingPage.vue";
import ProjectDetailPage from "@/views/ProjectDetailsPage.vue";
import PrivacyPolicyPage from "@/views/PrivacyPolicyPage.vue";
import PartnersPage from "@/views/PartnersPage.vue";

// Importation des vues du dashboard
import DashboardPage from "@/views/DashboardPage.vue";
import DashboardHome from "@/views/dashboard/DashboardHome.vue";
import StatisticsPage from "@/views/dashboard/StatisticsPage.vue";
import ProfilePage from "@/views/dashboard/ProfilePage.vue";
import DashboardProjectsPage from "@/views/dashboard/ProjectsPage.vue";
import DashboardProjectDetailPage from "@/views/dashboard/ProjectDetailPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: { title: "Accueil" },
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
    meta: { title: "Connexion" },
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupPage,
    meta: { title: "Inscription" },
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
    meta: { title: "À propos" },
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
    meta: { title: "Contact" },
  },
  {
    path: "/faq",
    name: "faq",
    component: FAQPage,
    meta: { title: "FAQ" },
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogPage,
    meta: { title: "Blog" },
  },
  {
    path: "/courseDetail",
    name: "courseDetail",
    component: CourseDetailPage,
    meta: { title: "Blog" },
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsPage,
    meta: { title: "Projets" },
  },
  {
    path: "/pricing",
    name: "pricing",
    component: PricingPage,
    meta: { title: "Prix" },
  },
  {
    path: "/projects/:id",
    name: "project-detail",
    component: ProjectDetailPage,
    meta: { title: "Détail du projet" },
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: PrivacyPolicyPage,
    meta: { title: "Politique de confidentialité" },
  },
  {
    path: "/partners",
    name: "partners",
    component: PartnersPage,
    meta: { title: "Partenaires" },
  },
  // Routes du dashboard
  {
    path: "/dashboard",
    component: DashboardPage,
    children: [
      {
        path: "",
        component: DashboardHome,
        name: "dashboard-home",
        meta: { title: "Tableau de bord" },
      },
      {
        path: "statistics",
        component: StatisticsPage,
        name: "dashboard-statistics",
        meta: { title: "Statistiques" },
      },
      {
        path: "profile",
        component: ProfilePage,
        name: "dashboard-profile",
        meta: { title: "Profil" },
      },
      {
        path: "projects",
        component: DashboardProjectsPage,
        name: "dashboard-projects",
        meta: { title: "Mes projets" },
      },
      {
        path: "projects/:id",
        component: DashboardProjectDetailPage,
        name: "dashboard-project-detail",
        meta: { title: "Détail du projet" },
      },
    ],
    meta: { requiresAuth: true },
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "not-found",
  //   component: NotFoundPage,
  //   meta: { title: "Page non trouvée" },
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Navigation Guards
router.beforeEach((to, from, next) => {
  // Mise à jour du titre de la page
  document.title = to.meta.title ? `${to.meta.title} | LinkIn` : "LinkIn";

  // Vérification de l'authentification pour les routes protégées
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Vérifier si l'utilisateur est connecté
    const isAuthenticated = localStorage.getItem("auth-token") !== null;

    if (!isAuthenticated) {
      next({ name: "login", query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
