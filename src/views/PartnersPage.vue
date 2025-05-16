<template>
    <div class="bg-amber-50">
      <!-- Hero Section -->
      <div class="relative py-16 overflow-hidden">
        <!-- Arrière-plan avec motif africain -->
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100"></div>
          <div class="absolute inset-0 pattern-dots opacity-10"></div>
        </div>
        
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div class="text-center">
            <div class="inline-block mb-6">
              <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
              <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
            </div>
            <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
              Nos Partenaires
            </h1>
            <p class="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
              Ensemble, nous construisons un écosystème entrepreneurial africain plus fort et plus inclusif.
            </p>
          </div>
        </div>
        
        <!-- Formes décoratives inspirées de l'art africain -->
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 opacity-10 rounded-tr-full"></div>
        <div class="absolute top-20 right-10 w-40 h-40 bg-terracotta-500 opacity-10 rounded-full"></div>
      </div>
  
      <!-- Partenaires Stratégiques -->
      <section class="relative py-16 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="inline-block mb-6">
              <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
              <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
            </div>
            <h2 class="text-3xl font-bold text-gray-900">Partenaires Stratégiques</h2>
            <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Nos partenaires stratégiques qui nous aident à réaliser notre mission.
            </p>
          </div>
  
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div v-for="(partner, index) in strategicPartners" :key="index" class="flex flex-col items-center">
              <div class="bg-white p-6 rounded-xl shadow-md w-full h-32 flex items-center justify-center mb-4 hover:shadow-lg transition-shadow">
                <img :src="partner.logo" :alt="partner.name" class="max-h-16 max-w-full" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900">{{ partner.name }}</h3>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Institutions Financières -->
      <section class="relative py-16 overflow-hidden bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="inline-block mb-6">
              <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
              <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
            </div>
            <h2 class="text-3xl font-bold text-gray-900">Institutions Financières</h2>
            <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Nos partenaires financiers qui soutiennent les entrepreneurs africains.
            </p>
          </div>
  
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div v-for="(partner, index) in financialPartners" :key="index" class="flex flex-col items-center">
              <div class="bg-white p-6 rounded-xl shadow-md w-full h-32 flex items-center justify-center mb-4 hover:shadow-lg transition-shadow">
                <img :src="partner.logo" :alt="partner.name" class="max-h-16 max-w-full" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900">{{ partner.name }}</h3>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Incubateurs et Accélérateurs -->
      <section class="relative py-16 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="inline-block mb-6">
              <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
              <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
            </div>
            <h2 class="text-3xl font-bold text-gray-900">Incubateurs et Accélérateurs</h2>
            <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Nos partenaires qui accompagnent les entrepreneurs dans leur développement.
            </p>
          </div>
  
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div v-for="(partner, index) in incubatorPartners" :key="index" class="flex flex-col items-center">
              <div class="bg-white p-6 rounded-xl shadow-md w-full h-32 flex items-center justify-center mb-4 hover:shadow-lg transition-shadow">
                <img :src="partner.logo" :alt="partner.name" class="max-h-16 max-w-full" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900">{{ partner.name }}</h3>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Devenir Partenaire -->
      <section class="relative py-20 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-terracotta-700 to-amber-700">
          <div class="absolute inset-0 pattern-tribal opacity-10"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-white sm:text-4xl">
              Devenez partenaire de LinkIn
            </h2>
            <p class="mt-4 max-w-2xl text-xl text-amber-100 mx-auto">
              Rejoignez notre réseau et contribuez au développement de l'écosystème entrepreneurial africain.
            </p>
            <div class="mt-8">
              <router-link to="/contact" class="inline-flex items-center bg-white text-terracotta-700 px-8 py-4 rounded-full hover:bg-amber-50 shadow-lg transform transition hover:scale-105">
                Nous contacter
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Témoignages de Partenaires -->
      <section class="relative py-16 overflow-hidden bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="inline-block mb-6">
              <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
              <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
            </div>
            <h2 class="text-3xl font-bold text-gray-900">Ce que disent nos partenaires</h2>
            <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de nos partenaires sur leur expérience avec LinkIn.
            </p>
          </div>
  
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-terracotta-500 to-amber-500 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform"></div>
              <div class="relative bg-white p-8 rounded-2xl shadow-md h-full transform group-hover:scale-[1.01] transition-transform">
                <div class="flex items-center mb-6">
                  <img :src="testimonial.avatar" :alt="testimonial.name" class="h-12 w-12 rounded-full object-cover" />
                  <div class="ml-4">
                    <h3 class="text-lg font-bold text-gray-900">{{ testimonial.name }}</h3>
                    <p class="text-sm text-gray-600">{{ testimonial.role }}, {{ testimonial.company }}</p>
                  </div>
                </div>
                <p class="text-gray-600 italic">{{ testimonial.quote }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // Données des partenaires stratégiques
  const strategicPartners = [
    {
      name: "African Development Bank",
      logo: "https://via.placeholder.com/200x100?text=AfDB"
    },
    {
      name: "World Bank Group",
      logo: "https://via.placeholder.com/200x100?text=World+Bank"
    },
    {
      name: "United Nations",
      logo: "https://via.placeholder.com/200x100?text=UN"
    },
    {
      name: "African Union",
      logo: "https://via.placeholder.com/200x100?text=AU"
    },
    {
      name: "Tony Elumelu Foundation",
      logo: "https://via.placeholder.com/200x100?text=TEF"
    },
    {
      name: "Mastercard Foundation",
      logo: "https://via.placeholder.com/200x100?text=Mastercard+Foundation"
    },
    {
      name: "Bill & Melinda Gates Foundation",
      logo: "https://via.placeholder.com/200x100?text=Gates+Foundation"
    },
    {
      name: "Google for Startups",
      logo: "https://via.placeholder.com/200x100?text=Google+for+Startups"
    }
  ];
  
  // Données des partenaires financiers
  const financialPartners = [
    {
      name: "Ecobank",
      logo: "https://via.placeholder.com/200x100?text=Ecobank"
    },
    {
      name: "Standard Bank",
      logo: "https://via.placeholder.com/200x100?text=Standard+Bank"
    },
    {
      name: "Attijariwafa Bank",
      logo: "https://via.placeholder.com/200x100?text=Attijariwafa"
    },
    {
      name: "Bank of Africa",
      logo: "https://via.placeholder.com/200x100?text=Bank+of+Africa"
    },
    {
      name: "Orange Money",
      logo: "https://via.placeholder.com/200x100?text=Orange+Money"
    },
    {
      name: "M-Pesa",
      logo: "https://via.placeholder.com/200x100?text=M-Pesa"
    },
    {
      name: "Wave",
      logo: "https://via.placeholder.com/200x100?text=Wave"
    },
    {
      name: "PayPal",
      logo: "https://via.placeholder.com/200x100?text=PayPal"
    }
  ];
  
  // Données des incubateurs et accélérateurs
  const incubatorPartners = [
    {
      name: "MEST Africa",
      logo: "https://via.placeholder.com/200x100?text=MEST"
    },
    {
      name: "CcHub",
      logo: "https://via.placeholder.com/200x100?text=CcHub"
    },
    {
      name: "iHub",
      logo: "https://via.placeholder.com/200x100?text=iHub"
    },
    {
      name: "Flat6Labs",
      logo: "https://via.placeholder.com/200x100?text=Flat6Labs"
    },
    {
      name: "Startupbootcamp AfriTech",
      logo: "https://via.placeholder.com/200x100?text=Startupbootcamp"
    },
    {
      name: "Founders Factory Africa",
      logo: "https://via.placeholder.com/200x100?text=Founders+Factory"
    },
    {
      name: "Impact Hub",
      logo: "https://via.placeholder.com/200x100?text=Impact+Hub"
    },
    {
      name: "Jokkolabs",
      logo: "https://via.placeholder.com/200x100?text=Jokkolabs"
    }
  ];
  
  // Données des témoignages
  const testimonials = [
    {
      name: "Amadou Sy",
      role: "Directeur des Partenariats",
      company: "African Development Bank",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Notre partenariat avec LinkIn a permis de connecter des centaines d'entrepreneurs africains à des opportunités de financement qu'ils n'auraient pas pu obtenir autrement. C'est une plateforme qui change véritablement la donne pour l'écosystème entrepreneurial africain."
    },
    {
      name: "Fatou Ndiaye",
      role: "Responsable Innovation",
      company: "Orange Money",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Grâce à notre collaboration avec LinkIn, nous avons pu intégrer notre solution de paiement mobile dans plusieurs projets innovants à travers l'Afrique de l'Ouest. C'est un partenariat gagnant-gagnant qui favorise l'inclusion financière."
    },
    {
      name: "Kofi Mensah",
      role: "Directeur",
      company: "MEST Africa",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      quote: "LinkIn est devenu un partenaire incontournable pour notre incubateur. La plateforme nous permet d'élargir notre réseau et d'offrir encore plus d'opportunités aux startups que nous accompagnons. La qualité des connexions établies est remarquable."
    }
  ];
  </script>