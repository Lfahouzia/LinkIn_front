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
              Blog LinkIn
            </h1>
            <p class="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
              Actualités, conseils et success stories de l'écosystème entrepreneurial africain.
            </p>
          </div>
        </div>
        
        <!-- Formes décoratives inspirées de l'art africain -->
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 opacity-10 rounded-tr-full"></div>
        <div class="absolute top-20 right-10 w-40 h-40 bg-terracotta-500 opacity-10 rounded-full"></div>
      </div>
  
      <!-- Filtres et recherche -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="flex-1 max-w-md">
            <div class="relative">
              <input type="text" placeholder="Rechercher un article..." v-model="searchQuery"
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500" />
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div class="flex flex-wrap gap-2">
            <button v-for="(category, index) in categories" :key="index"
                    @click="toggleCategory(category)"
                    :class="[
                      'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                      selectedCategories.includes(category) 
                        ? 'bg-terracotta-600 text-white' 
                        : 'bg-white text-gray-700 hover:bg-terracotta-100 hover:text-terracotta-700'
                    ]">
              {{ category }}
            </button>
          </div>
        </div>
      </div>
  
      <!-- Articles en vedette -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Articles en vedette</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-terracotta-500 to-amber-500 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform"></div>
            <div class="relative bg-white rounded-2xl shadow-md overflow-hidden h-full transform group-hover:scale-[1.01] transition-transform">
              <div class="md:flex">
                <div class="md:flex-shrink-0 md:w-1/2">
                  <img class="h-64 w-full object-cover md:h-full" src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Femmes entrepreneurs en Afrique" />
                </div>
                <div class="p-8 md:w-1/2">
                  <div class="flex items-center mb-2">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-terracotta-100 text-terracotta-800">
                      Entrepreneuriat
                    </span>
                    <span class="ml-2 text-sm text-gray-500">12 Mai 2023</span>
                  </div>
                  <a href="#" class="block mt-2">
                    <h3 class="text-xl font-bold text-gray-900 hover:text-terracotta-600">L'essor de l'entrepreneuriat féminin en Afrique</h3>
                    <p class="mt-3 text-gray-600">
                      Découvrez comment les femmes entrepreneurs transforment le paysage économique africain et surmontent les obstacles traditionnels.
                    </p>
                  </a>
                  <div class="mt-6">
                    <router-link to="/courseDetail" class="text-terracotta-600 hover:text-terracotta-700 font-medium flex items-center">
                      Lire l'article
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform"></div>
            <div class="relative bg-white rounded-2xl shadow-md overflow-hidden h-full transform group-hover:scale-[1.01] transition-transform">
              <div class="md:flex">
                <div class="md:flex-shrink-0 md:w-1/2">
                  <img class="h-64 w-full object-cover md:h-full" src="https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Fintech en Afrique" />
                </div>
                <div class="p-8 md:w-1/2">
                  <div class="flex items-center mb-2">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                      Fintech
                    </span>
                    <span class="ml-2 text-sm text-gray-500">3 Juin 2023</span>
                  </div>
                  <a href="#" class="block mt-2">
                    <h3 class="text-xl font-bold text-gray-900 hover:text-amber-600">La révolution fintech en Afrique</h3>
                    <p class="mt-3 text-gray-600">
                      Comment les solutions de paiement mobile et les services financiers numériques transforment l'inclusion financière sur le continent.
                    </p>
                  </a>
                  <div class="mt-6">
                    <a href="#" class="text-amber-600 hover:text-amber-700 font-medium flex items-center">
                      Lire l'article
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Tous les articles -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Tous les articles</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(article, index) in filteredArticles" :key="index" class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform"></div>
            <div class="relative bg-white rounded-2xl shadow-md overflow-hidden h-full transform group-hover:scale-[1.01] transition-transform">
              <div class="h-48 overflow-hidden">
                <img :src="article.image" :alt="article.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div class="p-6">
                <div class="flex items-center mb-2">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium" 
                        :class="`bg-${getCategoryColor(article.category)}-100 text-${getCategoryColor(article.category)}-800`">
                    {{ article.category }}
                  </span>
                  <span class="ml-2 text-sm text-gray-500">{{ article.date }}</span>
                </div>
                <a href="#" class="block mt-2">
                  <h3 class="text-xl font-bold text-gray-900 hover:text-terracotta-600">{{ article.title }}</h3>
                  <p class="mt-3 text-gray-600">
                    {{ article.excerpt }}
                  </p>
                </a>
                <div class="mt-6 flex items-center">
                  <img :src="article.author.avatar" :alt="article.author.name" class="h-10 w-10 rounded-full object-cover" />
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">{{ article.author.name }}</p>
                    <p class="text-sm text-gray-500">{{ article.author.role }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Pagination -->
        <div class="mt-12 flex justify-center">
          <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span class="sr-only">Précédent</span>
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              1
            </a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-terracotta-50 text-sm font-medium text-terracotta-700 hover:bg-terracotta-100">
              2
            </a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              3
            </a>
            <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              8
            </a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              9
            </a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              10
            </a>
            <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span class="sr-only">Suivant</span>
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
  
      <!-- Newsletter Section -->
      <section class="relative py-16 overflow-hidden bg-white">
        <div class="absolute inset-0 pattern-dots opacity-10"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="max-w-3xl mx-auto text-center">
            <div class="inline-block mb-6">
              <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
              <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
            </div>
            <h2 class="text-3xl font-bold text-gray-900">Restez informé</h2>
            <p class="mt-4 text-xl text-gray-600">
              Abonnez-vous à notre newsletter pour recevoir les derniers articles, conseils et actualités de l'écosystème entrepreneurial africain.
            </p>
            <div class="mt-8">
              <form class="sm:flex justify-center" @submit.prevent="subscribeToNewsletter">
                <label for="email-address" class="sr-only">Adresse email</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required v-model="newsletterEmail"
                  class="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-terracotta-500 focus:border-terracotta-500 sm:max-w-xs rounded-full text-center sm:text-left"
                  placeholder="Votre adresse email" />
                <div class="mt-3 rounded-full shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button type="submit" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-white bg-terracotta-600 hover:bg-terracotta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500">
                    S'abonner
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const searchQuery = ref('');
  const selectedCategories = ref([]);
  const newsletterEmail = ref('');
  
  // Catégories disponibles
  const categories = ['Entrepreneuriat', 'Fintech', 'Technologie', 'Agriculture', 'Éducation', 'Investissement'];
  
  // Toggle category selection
  const toggleCategory = (category) => {
    const index = selectedCategories.value.indexOf(category);
    if (index === -1) {
      selectedCategories.value.push(category);
    } else {
      selectedCategories.value.splice(index, 1);
    }
  };
  
  // Get color for category
  const getCategoryColor = (category) => {
    const colorMap = {
      'Entrepreneuriat': 'terracotta',
      'Fintech': 'amber',
      'Technologie': 'blue',
      'Agriculture': 'green',
      'Éducation': 'purple',
      'Investissement': 'indigo'
    };
    
    return colorMap[category] || 'gray';
  };
  
  // Articles data
  const articles = [
    {
      title: "5 conseils pour lever des fonds en Afrique",
      excerpt: "Découvrez les stratégies éprouvées pour attirer des investisseurs et sécuriser le financement de votre startup africaine.",
      category: "Investissement",
      date: "15 Juin 2023",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Jean Dupont",
        role: "Investisseur",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg"
      }
    },
    {
      title: "L'agriculture intelligente transforme le secteur rural",
      excerpt: "Comment les technologies modernes révolutionnent l'agriculture traditionnelle et améliorent les rendements des petits exploitants.",
      category: "Agriculture",
      date: "2 Juin 2023",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Aminata Diallo",
        role: "Agronome",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg"
      }
    },
    {
      title: "Les startups EdTech qui révolutionnent l'éducation",
      excerpt: "Zoom sur les entreprises innovantes qui rendent l'éducation plus accessible et plus efficace à travers le continent.",
      category: "Éducation",
      date: "28 Mai 2023",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Kofi Mensah",
        role: "Entrepreneur EdTech",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg"
      }
    },
    {
      title: "Comment construire une équipe performante pour votre startup",
      excerpt: "Les stratégies de recrutement et de gestion d'équipe qui font la différence dans l'écosystème entrepreneurial africain.",
      category: "Entrepreneuriat",
      date: "20 Mai 2023",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Sarah Johnson",
        role: "Coach en leadership",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg"
      }
    },
    {
      title: "L'IA au service du développement africain",
      excerpt: "Comment l'intelligence artificielle est utilisée pour résoudre des problèmes spécifiques au continent africain.",
      category: "Technologie",
      date: "12 Mai 2023",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: {
        name: "David Okafor",
        role: "Expert en IA",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg"
      }
    },
    {
      title: "Les paiements mobiles transforment le commerce en Afrique",
      excerpt: "L'impact des solutions de paiement mobile sur l'inclusion financière et le développement des petites entreprises.",
      category: "Fintech",
      date: "5 Mai 2023",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Fatou Ndiaye",
        role: "Experte Fintech",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg"
      }
    }
  ];
  
  // Filtered articles based on search and category filters
  const filteredArticles = computed(() => {
    let result = [...articles];
    
    // Filter by search query
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase();
      result = result.filter(article => 
        article.title.toLowerCase().includes(query) || 
        article.excerpt.toLowerCase().includes(query)
      );
    }
    
    // Filter by selected categories
    if (selectedCategories.value.length > 0) {
      result = result.filter(article => 
        selectedCategories.value.includes(article.category)
      );
    }
    
    return result;
  });
  
  // Newsletter subscription
  const subscribeToNewsletter = () => {
    alert(`Merci de vous être abonné avec l'email: ${newsletterEmail.value}`);
    newsletterEmail.value = '';
  };
  </script>