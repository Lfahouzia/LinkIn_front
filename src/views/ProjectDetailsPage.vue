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
          <div class="lg:flex lg:items-center lg:justify-between">
            <div class="lg:w-1/2">
              <div class="inline-block mb-6">
                <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2"></div>
                <div class="h-2 w-12 bg-amber-500 rounded-full"></div>
              </div>
              <div class="flex items-center mb-4">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-terracotta-100 text-terracotta-800">
                  {{ project.category }}
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 ml-2">
                  {{ project.country }}
                </span>
              </div>
              <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
                {{ project.title }}
              </h1>
              <p class="mt-6 text-xl text-gray-700">
                {{ project.shortDescription }}
              </p>
              <div class="mt-8 flex flex-wrap gap-4">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-terracotta-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                  </svg>
                  <span class="ml-2 text-gray-600">{{ project.founder }}</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-terracotta-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                  </svg>
                  <span class="ml-2 text-gray-600">{{ project.stage }}</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-terracotta-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
                  </svg>
                  <span class="ml-2 text-gray-600">{{ project.fundingRequired }}</span>
                </div>
              </div>
              <div class="mt-8 flex flex-wrap gap-4">
                <button class="inline-flex items-center bg-terracotta-600 text-white px-8 py-4 rounded-full hover:bg-terracotta-700 shadow-lg transform transition hover:scale-105">
                  Contacter l'entrepreneur
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </button>
                <button class="inline-flex items-center border-2 border-terracotta-600 text-terracotta-600 px-8 py-4 rounded-full hover:bg-terracotta-50 shadow-lg">
                  Investir dans ce projet
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-10 lg:mt-0 lg:w-1/2 lg:pl-10">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-r from-terracotta-500 to-amber-500 rounded-2xl transform -rotate-2"></div>
                <img :src="project.mainImage" :alt="project.title" class="relative rounded-2xl shadow-xl" />
              </div>
            </div>
          </div>
        </div>
        
        <!-- Formes décoratives inspirées de l'art africain -->
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 opacity-10 rounded-tr-full"></div>
        <div class="absolute top-20 right-10 w-40 h-40 bg-terracotta-500 opacity-10 rounded-full"></div>
      </div>
  
      <!-- Contenu du projet -->
      <section class="relative py-16 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:grid lg:grid-cols-3 lg:gap-16">
            <!-- Main Content -->
            <div class="lg:col-span-2">
              <div class="space-y-12">
                <div>
                  <h2 class="text-3xl font-bold text-gray-900">À propos du projet</h2>
                  <div class="mt-6 text-gray-600 space-y-4">
                    <p>{{ project.fullDescription }}</p>
                  </div>
                </div>
                
                <div>
                  <h2 class="text-3xl font-bold text-gray-900">Le problème</h2>
                  <div class="mt-6 text-gray-600 space-y-4">
                    <p>{{ project.problem }}</p>
                  </div>
                </div>
                
                <div>
                  <h2 class="text-3xl font-bold text-gray-900">Notre solution</h2>
                  <div class="mt-6 text-gray-600 space-y-4">
                    <p>{{ project.solution }}</p>
                  </div>
                </div>
                
                <div>
                  <h2 class="text-3xl font-bold text-gray-900">Impact social et environnemental</h2>
                  <div class="mt-6 text-gray-600 space-y-4">
                    <p>{{ project.impact }}</p>
                  </div>
                </div>
                
                <div>
                  <h2 class="text-3xl font-bold text-gray-900">Modèle économique</h2>
                  <div class="mt-6 text-gray-600 space-y-4">
                    <p>{{ project.businessModel }}</p>
                  </div>
                </div>
                
                <div>
                  <h2 class="text-3xl font-bold text-gray-900">Galerie</h2>
                  <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div v-for="(image, index) in project.gallery" :key="index" class="relative group overflow-hidden rounded-xl">
                      <img :src="image" :alt="`${project.title} - Image ${index + 1}`" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span class="text-white font-medium">{{ project.title }} - Image {{ index + 1 }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Sidebar -->
            <div class="mt-10 lg:mt-0 lg:col-span-1">
              <div class="bg-white rounded-2xl shadow-md p-6 sticky top-8">
                <h3 class="text-xl font-bold text-gray-900 mb-4">Détails du projet</h3>
                
                <div class="space-y-4">
                  <div>
                    <h4 class="text-sm font-medium text-gray-500">Financement requis</h4>
                    <p class="text-lg font-bold text-terracotta-700">{{ project.fundingRequired }}</p>
                  </div>
                  
                  <div>
                    <h4 class="text-sm font-medium text-gray-500">Financement obtenu</h4>
                    <p class="text-lg font-bold text-green-600">{{ project.fundingObtained }}</p>
                  </div>
                  
                  <div class="pt-2">
                    <h4 class="text-sm font-medium text-gray-500 mb-2">Progression</h4>
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                      <div class="bg-terracotta-600 h-2.5 rounded-full" :style="{ width: project.fundingPercentage + '%' }"></div>
                    </div>
                    <p class="text-right text-sm text-gray-600 mt-1">{{ project.fundingPercentage }}%</p>
                  </div>
                  
                  <div class="pt-2">
                    <h4 class="text-sm font-medium text-gray-500">Investisseurs</h4>
                    <p class="text-lg font-bold text-gray-900">{{ project.investorCount }}</p>
                  </div>
                  
                  <div class="pt-2">
                    <h4 class="text-sm font-medium text-gray-500">Date de lancement</h4>
                    <p class="text-lg font-bold text-gray-900">{{ project.launchDate }}</p>
                  </div>
                  
                  <div class="pt-2">
                    <h4 class="text-sm font-medium text-gray-500">Localisation</h4>
                    <p class="text-lg font-bold text-gray-900">{{ project.location }}</p>
                  </div>
                  
                  <div class="pt-2">
                    <h4 class="text-sm font-medium text-gray-500">Secteur</h4>
                    <p class="text-lg font-bold text-gray-900">{{ project.sector }}</p>
                  </div>
                  
                  <div class="pt-2">
                    <h4 class="text-sm font-medium text-gray-500">Stade de développement</h4>
                    <p class="text-lg font-bold text-gray-900">{{ project.stage }}</p>
                  </div>
                </div>
                
                <div class="mt-8 pt-6 border-t border-gray-200">
                  <h3 class="text-xl font-bold text-gray-900 mb-4">L'équipe</h3>
                  <div class="space-y-4">
                    <div v-for="(member, index) in project.team" :key="index" class="flex items-center">
                      <img :src="member.avatar" :alt="member.name" class="h-10 w-10 rounded-full object-cover" />
                      <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900">{{ member.name }}</p>
                        <p class="text-sm text-gray-500">{{ member.role }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mt-8 pt-6 border-t border-gray-200">
                  <h3 class="text-xl font-bold text-gray-900 mb-4">Documents</h3>
                  <div class="space-y-2">
                    <a v-for="(doc, index) in project.documents" :key="index" :href="doc.url" class="flex items-center p-3 rounded-lg hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-terracotta-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                      </svg>
                      <span class="ml-2 text-sm text-gray-700">{{ doc.name }}</span>
                    </a>
                  </div>
                </div>
                
                <div class="mt-8">
                  <button class="w-full flex justify-center items-center bg-terracotta-600 text-white px-4 py-3 rounded-full hover:bg-terracotta-700 shadow-md transform transition hover:scale-105">
                    Investir dans ce projet
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Projets similaires -->
      <section class="relative py-16 overflow-hidden bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="inline-block mb-6">
              <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
              <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
            </div>
            <h2 class="text-3xl font-bold text-gray-900">Projets similaires</h2>
            <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez d'autres projets innovants dans le même secteur.
            </p>
          </div>
  
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(relatedProject, index) in project.relatedProjects" :key="index" class="relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-terracotta-500 to-amber-500 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform"></div>
              <div class="relative bg-white rounded-2xl shadow-md overflow-hidden h-full transform group-hover:scale-[1.01] transition-transform">
                <div class="h-48 overflow-hidden">
                  <img :src="relatedProject.image" :alt="relatedProject.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div class="p-6">
                  <div class="flex items-center mb-2">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-terracotta-100 text-terracotta-800">
                      {{ relatedProject.category }}
                    </span>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 ml-2">
                      {{ relatedProject.country }}
                    </span>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">{{ relatedProject.title }}</h3>
                  <p class="text-gray-600 mb-4">{{ relatedProject.description }}</p>
                  <div class="flex justify-between items-center">
                    <span class="font-bold text-terracotta-700">{{ relatedProject.fundingRequired }}</span>
                    <router-link :to="`/projects/${relatedProject.id}`" class="inline-flex items-center text-sm font-medium text-terracotta-600 hover:text-terracotta-700">
                      Voir détails
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </router-link>
                  </div>
                </div>
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
              Vous avez un projet similaire?
            </h2>
            <p class="mt-4 max-w-2xl text-xl text-amber-100 mx-auto">
              Présentez votre projet à notre communauté d'investisseurs et de mentors.
            </p>
            <div class="mt-8">
              <router-link to="/submit-project" class="inline-flex items-center bg-white text-terracotta-700 px-8 py-4 rounded-full hover:bg-amber-50 shadow-lg transform transition hover:scale-105">
                Soumettre un projet
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // Données du projet (simulées)
  const project = {
    id: 1,
    title: "EcoFarm Sénégal",
    shortDescription: "Plateforme de gestion agricole intelligente pour les petits exploitants agricoles au Sénégal.",
    fullDescription: "EcoFarm Sénégal est une plateforme technologique innovante qui vise à révolutionner l'agriculture à petite échelle au Sénégal. Notre solution combine des capteurs IoT abordables, une application mobile intuitive et des algorithmes d'intelligence artificielle pour aider les petits agriculteurs à optimiser leurs pratiques agricoles, augmenter leurs rendements et accéder aux marchés de manière plus efficace.",
    problem: "Au Sénégal, comme dans de nombreux pays africains, les petits exploitants agricoles font face à de multiples défis : accès limité aux informations sur les meilleures pratiques agricoles, manque de données précises sur leurs cultures, difficultés à prévoir les conditions météorologiques, et accès restreint aux marchés pour vendre leurs produits. Ces obstacles limitent considérablement leur productivité et leurs revenus, perpétuant ainsi le cycle de la pauvreté rurale.",
    solution: "Notre solution intègre trois composantes principales : 1) Des capteurs IoT à faible coût qui surveillent l'humidité du sol, la température et d'autres paramètres environnementaux essentiels; 2) Une application mobile qui fournit aux agriculteurs des informations en temps réel sur leurs cultures, des prévisions météorologiques localisées et des recommandations personnalisées; 3) Une place de marché numérique qui connecte directement les agriculteurs aux acheteurs, éliminant ainsi les intermédiaires et augmentant les marges bénéficiaires des producteurs.",
    impact: "EcoFarm Sénégal a déjà un impact significatif sur les communautés rurales. Nos premiers utilisateurs ont rapporté une augmentation moyenne de 35% de leurs rendements agricoles et une amélioration de 40% de leurs revenus grâce à un meilleur accès aux marchés. De plus, notre solution encourage des pratiques agricoles plus durables, réduisant l'utilisation d'eau de 25% et diminuant le recours aux pesticides grâce à une détection précoce des problèmes. À terme, nous visons à toucher 50 000 agriculteurs au Sénégal, avec un impact potentiel sur plus de 250 000 personnes dans les zones rurales.",
    businessModel: "Notre modèle économique repose sur plusieurs sources de revenus : 1) Vente de kits de capteurs IoT à prix abordable; 2) Abonnement mensuel à notre application avec différents niveaux de service; 3) Commission sur les transactions réalisées via notre place de marché; 4) Services de données agrégées et anonymisées pour les acteurs institutionnels du secteur agricole. Ce modèle nous permet d'être financièrement viable tout en restant accessible aux petits agriculteurs.",
    mainImage: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    category: "Agriculture",
    country: "Sénégal",
    fundingRequired: "75 000 €",
    fundingObtained: "45 000 €",
    fundingPercentage: 60,
    investorCount: 12,
    launchDate: "15 janvier 2023",
    location: "Dakar, Sénégal",
    sector: "AgriTech",
    stage: "Croissance",
    founder: "Amadou Diallo",
    team: [
      {
        name: "Amadou Diallo",
        role: "Fondateur & CEO",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        name: "Fatou Ndiaye",
        role: "CTO",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        name: "Ibrahim Sow",
        role: "Responsable Agronomie",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg"
      }
    ],
    documents: [
      {
        name: "Présentation du projet (PDF)",
        url: "#"
      },
      {
        name: "Business Plan (PDF)",
        url: "#"
      },
      {
        name: "Étude de marché (PDF)",
        url: "#"
      }
    ],
    relatedProjects: [
      {
        id: 2,
        title: "SolarTech Kenya",
        description: "Solutions d'énergie solaire abordables pour les zones rurales du Kenya sans accès à l'électricité.",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Énergie",
        country: "Kenya",
        fundingRequired: "120 000 €"
      },
      {
        id: 3,
        title: "AgroTech Côte d'Ivoire",
        description: "Utilisation de drones pour la surveillance des cultures et l'optimisation des rendements agricoles.",
        image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Agriculture",
        country: "Côte d'Ivoire",
        fundingRequired: "95 000 €"
      },
      {
        id: 4,
        title: "HealthConnect Nigeria",
        description: "Application mobile connectant les patients des zones rurales aux professionnels de santé à distance.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Santé",
        country: "Nigeria",
        fundingRequired: "90 000 €"
      }
    ]
  };
  </script>