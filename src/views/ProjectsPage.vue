<template>
    <div class="bg-amber-50">
      <!-- Hero Section -->
      <div class="relative py-16 overflow-hidden">
        <!-- Arrière-plan avec image de savane africaine -->
        <div class="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
               alt="Savane africaine" class="w-full h-full object-cover opacity-20" />
          <div class="absolute inset-0 bg-gradient-to-r from-terracotta-700/30 to-amber-600/30"></div>
        </div>
        
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div class="text-center">
            <div class="inline-block mb-6">
              <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
              <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
            </div>
            <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
              Découvrez des projets innovants
            </h1>
            <p class="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Explorez des projets prometteurs à travers l'Afrique et trouvez des opportunités d'investissement ou de collaboration.
            </p>
          </div>
        </div>
      </div>
  
      <!-- Filtres et recherche -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="bg-white rounded-xl shadow-md p-6">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div class="flex-1">
              <div class="relative">
                <input type="text" placeholder="Rechercher un projet..." v-model="searchQuery"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500" />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-3">
              <select v-model="categoryFilter" 
                class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500">
                <option value="">Toutes les catégories</option>
                <option value="tech">Technologie</option>
                <option value="agriculture">Agriculture</option>
                <option value="education">Éducation</option>
                <option value="health">Santé</option>
                <option value="energy">Énergie</option>
              </select>
              
              <select v-model="countryFilter" 
                class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500">
                <option value="">Tous les pays</option>
                <option value="senegal">Sénégal</option>
                <option value="kenya">Kenya</option>
                <option value="nigeria">Nigeria</option>
                <option value="ghana">Ghana</option>
                <option value="southafrica">Afrique du Sud</option>
              </select>
              
              <select v-model="sortBy" 
                class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500">
                <option value="recent">Plus récents</option>
                <option value="funding">Financement requis</option>
                <option value="popularity">Popularité</option>
              </select>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Liste des projets -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in filteredProjects" :key="index" class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-terracotta-500 to-amber-500 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform"></div>
            <div class="relative bg-white rounded-2xl shadow-md overflow-hidden h-full transform group-hover:scale-[1.01] transition-transform">
              <div class="h-48 overflow-hidden">
                <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-terracotta-100 text-terracotta-800">
                    {{ project.category }}
                  </span>
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 ml-2">
                    {{ project.country }}
                  </span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
                <p class="text-gray-600 mb-4">{{ project.description }}</p>
                <div class="flex justify-between items-center">
                  <div>
                    <span class="text-sm text-gray-500">Financement requis</span>
                    <p class="font-bold text-terracotta-700">{{ project.fundingRequired }}</p>
                  </div>
                  <router-link :to="`/projects/${project.id}`" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-terracotta-600 hover:bg-terracotta-700">
                    Voir détails
                  </router-link>
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
  
      <!-- CTA Section -->
      <div class="relative py-16 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-terracotta-700 to-amber-700">
          <div class="absolute inset-0 pattern-tribal opacity-10"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-white sm:text-4xl">
              Vous avez un projet innovant?
            </h2>
            <p class="mt-4 max-w-2xl text-xl text-amber-100 mx-auto">
              Présentez votre projet à notre communauté d'investisseurs et de mentors.
            </p>
            <div class="mt-8">
              <a href="#" class="inline-flex items-center bg-white text-terracotta-700 px-8 py-4 rounded-full hover:bg-amber-50 shadow-lg transform transition hover:scale-105">
                Soumettre un projet
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const searchQuery = ref('');
  const categoryFilter = ref('');
  const countryFilter = ref('');
  const sortBy = ref('recent');
  
  // Données de projets fictives
  const projects = [
    {
      id: 1,
      title: "EcoFarm Sénégal",
      description: "Plateforme de gestion agricole intelligente pour les petits exploitants agricoles au Sénégal.",
      category: "Agriculture",
      country: "Sénégal",
      fundingRequired: "75 000 €",
      image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "SolarTech Kenya",
      description: "Solutions d'énergie solaire abordables pour les zones rurales du Kenya sans accès à l'électricité.",
      category: "Énergie",
      country: "Kenya",
      fundingRequired: "120 000 €",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "HealthConnect Nigeria",
      description: "Application mobile connectant les patients des zones rurales aux professionnels de santé à distance.",
      category: "Santé",
      country: "Nigeria",
      fundingRequired: "90 000 €",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "EduTech Ghana",
      description: "Plateforme éducative numérique pour améliorer l'accès à l'éducation de qualité au Ghana.",
      category: "Éducation",
      country: "Ghana",
      fundingRequired: "65 000 €",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "FinTech Rwanda",
      description: "Solution de paiement mobile pour faciliter les transactions financières dans les zones rurales.",
      category: "Technologie",
      country: "Rwanda",
      fundingRequired: "85 000 €",
      image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "WaterPure Tanzania",
      description: "Système de purification d'eau innovant et abordable pour les communautés rurales.",
      category: "Santé",
      country: "Tanzanie",
      fundingRequired: "70 000 €",
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "AgroTech Côte d'Ivoire",
      description: "Utilisation de drones pour la surveillance des cultures et l'optimisation des rendements agricoles.",
      category: "Agriculture",
      country: "Côte d'Ivoire",
      fundingRequired: "95 000 €",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "EcoHomes South Africa",
      description: "Construction de logements écologiques et abordables utilisant des matériaux recyclés locaux.",
      category: "Énergie",
      country: "Afrique du Sud",
      fundingRequired: "150 000 €",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      title: "TechEd Maroc",
      description: "Plateforme d'apprentissage en ligne adaptée aux besoins spécifiques des étudiants marocains.",
      category: "Éducation",
      country: "Maroc",
      fundingRequired: "80 000 €",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  // Filtrage des projets
  const filteredProjects = computed(() => {
    let result = [...projects];
    
    // Filtre par recherche
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase();
      result = result.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query)
      );
    }
    
    // Filtre par catégorie
    if (categoryFilter.value) {
      result = result.filter(project => 
        project.category.toLowerCase() === categoryFilter.value.toLowerCase()
      );
    }
    
    // Filtre par pays
    if (countryFilter.value) {
      result = result.filter(project => 
        project.country.toLowerCase() === countryFilter.value.toLowerCase()
      );
    }
    
    // Tri
    if (sortBy.value === 'recent') {
      // Déjà trié par défaut
    } else if (sortBy.value === 'funding') {
      result.sort((a, b) => {
        const aValue = parseInt(a.fundingRequired.replace(/[^0-9]/g, ''));
        const bValue = parseInt(b.fundingRequired.replace(/[^0-9]/g, ''));
        return bValue - aValue;
      });
    } else if (sortBy.value === 'popularity') {
      // Simulation de popularité (dans une application réelle, cela serait basé sur des métriques)
      result.sort((a, b) => b.id - a.id);
    }
    
    return result;
  });
  </script>