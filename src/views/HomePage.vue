<template>
  <div>
    <!-- Hero Section avec arrière-plan africain -->
    <section class="relative py-20 overflow-hidden">
      <!-- Arrière-plan avec image de paysage africain -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
             alt="Paysage africain" class="w-full h-full object-cover opacity-20" />
        <div class="absolute inset-0 bg-gradient-to-r from-terracotta-700/30 to-amber-600/30"></div>
      </div>
      
      <!-- Contenu du hero -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-3xl mx-auto">
          <div class="inline-block mb-6">
            <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
            <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
          </div>
          <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            <span class="block text-terracotta-700">Connectez-vous avec les meilleurs</span>
            <span class="block">talents et investisseurs</span>
          </h1>
          <p class="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
            LinkIn connecte les startups, les investisseurs et les mentors pour faciliter le financement et la promotion de projets innovants en Afrique.
          </p>
          <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <router-link to="/signup" class="bg-terracotta-600 text-white px-8 py-4 rounded-full hover:bg-terracotta-700 shadow-lg transform transition hover:scale-105 flex items-center justify-center">
              <span>Commencer maintenant</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </router-link>
            <router-link to="/projects" class="border-2 border-terracotta-600 text-terracotta-700 px-8 py-4 rounded-full hover:bg-terracotta-50 flex items-center justify-center">
              Explorer les projets
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Formes décoratives inspirées de l'art africain -->
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 opacity-10 rounded-tr-full"></div>
      <div class="absolute top-20 right-10 w-40 h-40 bg-terracotta-500 opacity-10 rounded-full"></div>
      <div class="absolute bottom-20 right-20 w-20 h-20 bg-amber-700 opacity-10 rounded-full"></div>
    </section>

    <!-- Stats Section avec motifs africains -->
    <section class="relative py-16 overflow-hidden">
      <div class="absolute inset-0 z-0 bg-terracotta-700 opacity-90">
        <div class="absolute inset-0 pattern-zigzag opacity-10"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white sm:text-4xl">
            Rejoignez notre communauté en pleine croissance
          </h2>
          <p class="mt-3 text-xl text-amber-100 sm:mt-4">
            Des milliers d'entrepreneurs, investisseurs et mentors font déjà partie de notre réseau.
          </p>
        </div>
        <dl class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div class="flex flex-col">
            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-amber-200">
              Startups
            </dt>
            <dd class="order-1 text-5xl font-extrabold text-white">
              2,500+
            </dd>
          </div>
          <div class="flex flex-col mt-10 sm:mt-0">
            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-amber-200">
              Investisseurs
            </dt>
            <dd class="order-1 text-5xl font-extrabold text-white">
              500+
            </dd>
          </div>
          <div class="flex flex-col mt-10 sm:mt-0">
            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-amber-200">
              Financements
            </dt>
            <dd class="order-1 text-5xl font-extrabold text-white">
              $25M+
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Features Section avec formes organiques -->
    <section class="relative py-20 overflow-hidden">
      <!-- Arrière-plan avec image de savane africaine -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
             alt="Savane africaine" class="w-full h-full object-cover opacity-10" />
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <div class="inline-block mb-6">
            <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
            <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
            Pourquoi choisir LinkIn?
          </h2>
          <p class="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Notre plateforme offre des outils puissants pour connecter les acteurs économiques et favoriser l'innovation.
          </p>
        </div>

        <div class="mt-16">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="(feature, index) in features" :key="index" class="relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-terracotta-500 to-amber-500 rounded-2xl transform -rotate-2 group-hover:rotate-0 transition-transform"></div>
              <div class="relative bg-white p-8 rounded-2xl shadow-md group-hover:shadow-xl transition-shadow h-full transform group-hover:scale-[1.01] transition-transform">
                <div class="w-14 h-14 bg-gradient-to-br from-terracotta-500 to-terracotta-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-md">
                  <component :is="feature.icon" />
                </div>
                <h3 class="text-xl font-bold text-gray-900">{{ feature.title }}</h3>
                <p class="mt-4 text-gray-600">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Formes décoratives -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-amber-500 opacity-10 rounded-bl-full"></div>
      <div class="absolute bottom-0 left-0 w-40 h-40 bg-terracotta-500 opacity-10 rounded-tr-full"></div>
    </section>

    <!-- How It Works Section avec motifs africains -->
    <section class="relative py-20 overflow-hidden bg-amber-50">
      <div class="absolute inset-0 pattern-dots opacity-10"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <div class="inline-block mb-6">
            <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
            <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
            Comment ça marche
          </h2>
          <p class="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Trois étapes simples pour commencer votre parcours sur LinkIn
          </p>
        </div>

        <div class="mt-16">
          <div class="relative">
            <!-- Connection line -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t-2 border-dashed border-terracotta-300"></div>
            </div>
            
            <!-- Steps -->
            <div class="relative flex justify-between">
              <div v-for="(step, index) in steps" :key="index" class="relative w-1/3 text-center px-4">
                <div class="flex flex-col items-center">
                  <div class="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-terracotta-500 to-terracotta-600 text-white font-bold text-xl shadow-lg">
                    {{ index + 1 }}
                  </div>
                  <h3 class="mt-6 text-xl font-bold text-gray-900">{{ step.title }}</h3>
                  <p class="mt-2 text-gray-600">
                    {{ step.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section avec arrière-plan africain -->
    <section class="relative py-20 overflow-hidden">
      <!-- Arrière-plan avec image de village africain -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
             alt="Village africain" class="w-full h-full object-cover opacity-20" />
        <div class="absolute inset-0 bg-gradient-to-b from-white/80 to-amber-50/80 backdrop-blur-sm"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <div class="inline-block mb-6">
            <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
            <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
            Ce que disent nos utilisateurs
          </h2>
          <p class="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Découvrez comment LinkIn transforme l'écosystème entrepreneurial africain
          </p>
        </div>

        <div class="mt-16">
          <div class="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-xl p-8 max-w-3xl mx-auto relative">
            <!-- Motif décoratif -->
            <div class="absolute top-0 right-0 w-24 h-24 bg-amber-500 opacity-10 rounded-bl-full -mt-6 -mr-6"></div>
            <div class="absolute bottom-0 left-0 w-24 h-24 bg-terracotta-500 opacity-10 rounded-tr-full -mb-6 -ml-6"></div>
            
            <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div class="flex-shrink-0">
                <img class="h-20 w-20 rounded-full object-cover border-4 border-terracotta-100" 
                     :src="testimonials[currentTestimonial].image" :alt="testimonials[currentTestimonial].name" />
              </div>
              <div>
                <svg class="h-12 w-12 text-terracotta-200 absolute top-8 left-8 -z-10" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p class="text-xl text-gray-700 italic">
                  {{ testimonials[currentTestimonial].quote }}
                </p>
                <div class="mt-4">
                  <h4 class="text-lg font-bold text-gray-900">{{ testimonials[currentTestimonial].name }}</h4>
                  <p class="text-terracotta-600">{{ testimonials[currentTestimonial].role }}</p>
                </div>
              </div>
            </div>
            
            <!-- Contrôles de navigation -->
            <div class="flex justify-center mt-8 space-x-2">
              <button v-for="(_, index) in testimonials" :key="index" 
                      @click="currentTestimonial = index"
                      class="w-3 h-3 rounded-full"
                      :class="currentTestimonial === index ? 'bg-terracotta-600' : 'bg-terracotta-300'">
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section avec motif africain -->
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-terracotta-700 to-amber-700">
        <div class="absolute inset-0 pattern-tribal opacity-10"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white sm:text-4xl">
            Prêt à rejoindre la communauté?
          </h2>
          <p class="mt-4 max-w-2xl text-xl text-amber-100 mx-auto">
            Inscrivez-vous gratuitement et commencez à explorer les opportunités dès aujourd'hui.
          </p>
          <div class="mt-8">
            <router-link to="/signup" class="inline-flex items-center bg-white text-terracotta-700 px-8 py-4 rounded-full hover:bg-amber-50 shadow-lg transform transition hover:scale-105">
              S'inscrire gratuitement
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Formes décoratives -->
      <div class="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-5 rounded-tl-full"></div>
      <div class="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-br-full"></div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, h } from 'vue';

// Icônes simplifiées
const UsersIcon = () => h('svg', { class: 'h-7 w-7', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' })
]);

const TrendingUpIcon = () => h('svg', { class: 'h-7 w-7', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' })
]);

const AwardIcon = () => h('svg', { class: 'h-7 w-7', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })
]);

const BriefcaseIcon = () => h('svg', { class: 'h-7 w-7', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
]);

const DollarSignIcon = () => h('svg', { class: 'h-7 w-7', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })
]);

const LightbulbIcon = () => h('svg', { class: 'h-7 w-7', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' })
]);

// Features data
const features = [
  {
    title: 'Connexions stratégiques',
    description: 'Mettez en relation startups, investisseurs et mentors pour créer un écosystème d\'innovation dynamique.',
    icon: UsersIcon
  },
  {
    title: 'Opportunités d\'investissement',
    description: 'Découvrez des projets innovants et investissez dans l\'avenir de l\'Afrique.',
    icon: TrendingUpIcon
  },
  {
    title: 'Mentorat expert',
    description: 'Bénéficiez de conseils d\'experts pour développer votre projet et atteindre vos objectifs.',
    icon: AwardIcon
  },
  {
    title: 'Gestion de projets',
    description: 'Gérez efficacement vos projets et suivez leur progression en temps réel.',
    icon: BriefcaseIcon
  },
  {
    title: 'Financement facilité',
    description: 'Accédez à des sources de financement adaptées à vos besoins et à votre stade de développement.',
    icon: DollarSignIcon
  },
  {
    title: 'Innovation collaborative',
    description: 'Collaborez avec d\'autres acteurs pour créer des solutions innovantes aux défis africains.',
    icon: LightbulbIcon
  }
];

// Steps data
const steps = [
  {
    title: 'Créez votre profil',
    description: 'Inscrivez-vous et créez un profil détaillé pour vous présenter à la communauté.'
  },
  {
    title: 'Connectez-vous',
    description: 'Trouvez des partenaires, investisseurs ou projets qui correspondent à vos intérêts.'
  },
  {
    title: 'Collaborez',
    description: 'Échangez, investissez et développez des projets ensemble pour réussir.'
  }
];

// Testimonials data
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Fondatrice de startup, Kenya',
    quote: 'LinkIn m\'a aidé à connecter avec les investisseurs parfaits pour ma startup technologique. En quelques mois, nous avons obtenu un financement et un mentorat précieux.',
    image: 'https://randomuser.me/api/portraits/women/12.jpg'
  },
  {
    name: 'Michael Okonjo',
    role: 'Investisseur, Nigeria',
    quote: 'En tant qu\'investisseur, j\'ai découvert des startups africaines incroyables grâce à LinkIn que je n\'aurais jamais trouvées autrement. L\'algorithme de correspondance de la plateforme est exceptionnel.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Amina Diallo',
    role: 'Mentor d\'affaires, Sénégal',
    quote: 'Pouvoir encadrer des entrepreneurs prometteurs à travers l\'Afrique a été gratifiant. LinkIn rend le processus de connexion fluide et efficace.',
    image: 'https://randomuser.me/api/portraits/women/45.jpg'
  }
];

// Testimonial carousel
const currentTestimonial = ref(0);

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length;
};

// Auto-advance testimonials
let testimonialInterval;

onMounted(() => {
  testimonialInterval = setInterval(() => {
    nextTestimonial();
  }, 5000);
});

onUnmounted(() => {
  clearInterval(testimonialInterval);
});
</script>