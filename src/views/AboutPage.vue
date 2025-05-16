<template>
    <div class="bg-amber-50">
      <!-- Hero Section -->
      <div class="relative py-20 overflow-hidden">
        <!-- Arrière-plan avec image africaine -->
        <div class="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
               alt="Paysage africain" class="w-full h-full object-cover opacity-20" />
          <div class="absolute inset-0 bg-gradient-to-r from-terracotta-700/30 to-amber-600/30"></div>
        </div>
        
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div class="text-center">
            <div class="inline-block mb-6">
              <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
              <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
            </div>
            <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
              Notre mission
            </h1>
            <p class="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
              LinkIn est né d'une vision simple mais puissante : créer un écosystème où les entrepreneurs africains peuvent prospérer grâce à des connexions stratégiques avec des investisseurs et des mentors.
            </p>
          </div>
        </div>
        
        <!-- Formes décoratives inspirées de l'art africain -->
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 opacity-10 rounded-tr-full"></div>
        <div class="absolute top-20 right-10 w-40 h-40 bg-terracotta-500 opacity-10 rounded-full"></div>
      </div>
  
      <!-- Notre histoire -->
      <section class="relative py-16 overflow-hidden">
        <div class="absolute inset-0 pattern-dots opacity-10"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div class="inline-block mb-6">
                <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2"></div>
                <div class="h-2 w-12 bg-amber-500 rounded-full"></div>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">Notre histoire</h2>
              <div class="mt-6 text-gray-600 space-y-6">
                <p>
                  Fondée en 2020 par une équipe d'entrepreneurs et d'investisseurs passionnés par le développement économique de l'Afrique, LinkIn est née de la constatation d'un besoin crucial : faciliter la connexion entre les porteurs de projets innovants et les sources de financement.
                </p>
                <p>
                  Notre fondateur, après avoir lui-même rencontré des difficultés pour financer son projet technologique au Sénégal, a décidé de créer une plateforme qui permettrait aux entrepreneurs africains de présenter leurs projets à un réseau d'investisseurs et de mentors internationaux.
                </p>
                <p>
                  Depuis notre lancement, nous avons facilité plus de 500 connexions stratégiques et contribué au financement de plus de 200 projets à travers le continent, pour un montant total dépassant 25 millions d'euros.
                </p>
              </div>
            </div>
            <div class="mt-10 lg:mt-0 relative">
              <div class="absolute inset-0 bg-gradient-to-r from-terracotta-500 to-amber-500 rounded-2xl transform -rotate-2"></div>
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                   alt="Équipe LinkIn" class="relative rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>
  
      <!-- Nos valeurs -->
      <section class="relative py-16 overflow-hidden bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="inline-block mb-6">
              <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
              <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
            </div>
            <h2 class="text-3xl font-bold text-gray-900">Nos valeurs</h2>
            <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Nos valeurs guident chacune de nos actions et décisions pour créer un impact positif durable.
            </p>
          </div>
  
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-amber-50 rounded-xl p-8 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-24 h-24 bg-amber-500 opacity-10 rounded-bl-full -mt-6 -mr-6"></div>
              <div class="relative z-10">
                <div class="w-14 h-14 bg-gradient-to-br from-terracotta-500 to-terracotta-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-4">Collaboration</h3>
                <p class="text-gray-600">
                  Nous croyons au pouvoir de la collaboration pour résoudre les défis complexes. En connectant les bonnes personnes, nous créons des synergies qui amplifient l'impact de chaque projet.
                </p>
              </div>
            </div>
  
            <div class="bg-amber-50 rounded-xl p-8 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-24 h-24 bg-amber-500 opacity-10 rounded-bl-full -mt-6 -mr-6"></div>
              <div class="relative z-10">
                <div class="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-4">Intégrité</h3>
                <p class="text-gray-600">
                  L'intégrité est au cœur de tout ce que nous faisons. Nous maintenons les plus hauts standards d'éthique et de transparence dans toutes nos interactions et décisions.
                </p>
              </div>
            </div>
  
            <div class="bg-amber-50 rounded-xl p-8 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-24 h-24 bg-amber-500 opacity-10 rounded-bl-full -mt-6 -mr-6"></div>
              <div class="relative z-10">
                <div class="w-14 h-14 bg-gradient-to-br from-terracotta-700 to-terracotta-800 rounded-xl flex items-center justify-center text-white mb-6 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p class="text-gray-600">
                  Nous encourageons l'innovation à tous les niveaux. Nous croyons que les solutions créatives aux défis africains peuvent venir de partout et méritent d'être soutenues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Notre équipe -->
      <section class="relative py-16 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="inline-block mb-6">
              <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
              <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
            </div>
            <h2 class="text-3xl font-bold text-gray-900">Notre équipe</h2>
            <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe diversifiée et passionnée, dédiée à la réussite des entrepreneurs africains.
            </p>
          </div>
  
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="(member, index) in teamMembers" :key="index" class="relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-terracotta-500 to-amber-500 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform"></div>
              <div class="relative bg-white p-6 rounded-2xl shadow-md group-hover:shadow-xl transition-shadow text-center">
                <div class="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img :src="member.image" :alt="member.name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 class="text-xl font-bold text-gray-900">{{ member.name }}</h3>
                <p class="text-terracotta-600 mb-4">{{ member.role }}</p>
                <p class="text-gray-600 mb-6">{{ member.bio }}</p>
                <div class="flex justify-center space-x-4">
                  <a v-for="(social, socialIndex) in member.socials" :key="socialIndex" :href="social.url" class="text-gray-400 hover:text-terracotta-600">
                    <component :is="social.icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Notre impact -->
      <section class="relative py-16 overflow-hidden bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="inline-block mb-6">
              <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
              <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
            </div>
            <h2 class="text-3xl font-bold text-gray-900">Notre impact</h2>
            <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Depuis notre création, nous avons contribué à transformer l'écosystème entrepreneurial africain.
            </p>
          </div>
  
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div class="grid grid-cols-2 gap-8">
                <div class="text-center">
                  <div class="text-5xl font-extrabold text-terracotta-600">500+</div>
                  <p class="mt-2 text-gray-600">Connexions stratégiques</p>
                </div>
                <div class="text-center">
                  <div class="text-5xl font-extrabold text-terracotta-600">200+</div>
                  <p class="mt-2 text-gray-600">Projets financés</p>
                </div>
                <div class="text-center">
                  <div class="text-5xl font-extrabold text-terracotta-600">25M€+</div>
                  <p class="mt-2 text-gray-600">Financement facilité</p>
                </div>
                <div class="text-center">
                  <div class="text-5xl font-extrabold text-terracotta-600">20+</div>
                  <p class="mt-2 text-gray-600">Pays africains</p>
                </div>
              </div>
            </div>
            <div>
              <div class="space-y-6 text-gray-600">
                <p>
                  Notre plateforme a permis de créer plus de 500 connexions stratégiques entre entrepreneurs, investisseurs et mentors, facilitant ainsi le développement de projets innovants à travers l'Afrique.
                </p>
                <p>
                  Grâce à ces connexions, plus de 200 projets ont obtenu un financement, pour un montant total dépassant 25 millions d'euros, contribuant ainsi à la création d'emplois et au développement économique local.
                </p>
                <p>
                  Notre impact s'étend sur plus de 20 pays africains, avec une présence particulièrement forte en Afrique de l'Ouest, de l'Est et du Sud, où nous continuons à développer notre réseau et à soutenir l'écosystème entrepreneurial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA Section -->
      <section class="relative py-20 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-terracotta-700 to-amber-700">
          <div class="absolute inset-0 pattern-tribal opacity-10"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-white sm:text-4xl">
              Rejoignez notre mission
            </h2>
            <p class="mt-4 max-w-2xl text-xl text-amber-100 mx-auto">
              Ensemble, construisons un avenir prospère pour l'entrepreneuriat africain.
            </p>
            <div class="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <router-link to="/signup" class="inline-flex items-center bg-white text-terracotta-700 px-8 py-4 rounded-full hover:bg-amber-50 shadow-lg transform transition hover:scale-105">
                Rejoindre la communauté
              </router-link>
              <a href="#" class="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full hover:bg-terracotta-800/20 shadow-lg">
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { h } from 'vue';
  
  // Composants d'icônes simplifiés
  const LinkedInIcon = () => h('svg', { class: 'h-5 w-5', fill: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' })
  ]);
  
  const TwitterIcon = () => h('svg', { class: 'h-5 w-5', fill: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' })
  ]);
  
  // Données de l'équipe
  const teamMembers = [
    {
      name: "Amadou Diallo",
      role: "Fondateur & CEO",
      bio: "Entrepreneur en série avec plus de 15 ans d'expérience dans la tech et le financement de startups en Afrique.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      socials: [
        { icon: LinkedInIcon, url: "#" },
        { icon: TwitterIcon, url: "#" }
      ]
    },
    {
      name: "Fatou Ndiaye",
      role: "Directrice des Opérations",
      bio: "Ancienne consultante chez McKinsey, spécialisée dans le développement de stratégies de croissance pour l'Afrique.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      socials: [
        { icon: LinkedInIcon, url: "#" },
        { icon: TwitterIcon, url: "#" }
      ]
    },
    {
      name: "Kofi Mensah",
      role: "Directeur Technique",
      bio: "Ingénieur logiciel avec une passion pour les solutions tech adaptées aux défis africains.",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      socials: [
        { icon: LinkedInIcon, url: "#" },
        { icon: TwitterIcon, url: "#" }
      ]
    },
    {
      name: "Aisha Okafor",
      role: "Responsable Partenariats",
      bio: "Experte en développement de partenariats stratégiques avec plus de 10 ans d'expérience en Afrique.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      socials: [
        { icon: LinkedInIcon, url: "#" },
        { icon: TwitterIcon, url: "#" }
      ]
    }
  ];
  </script>
  
  