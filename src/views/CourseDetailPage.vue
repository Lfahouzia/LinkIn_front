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
              <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
                {{ course.title }}
              </h1>
              <p class="mt-6 text-xl text-gray-700">
                {{ course.description }}
              </p>
              <div class="mt-8 flex flex-wrap gap-4">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-terracotta-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="ml-2 text-gray-600">{{ course.views }} vues</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-terracotta-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                  </svg>
                  <span class="ml-2 text-gray-600">{{ course.duration }}</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-terracotta-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span class="ml-2 text-gray-600">{{ course.rating }} ({{ course.reviewCount }} avis)</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-terracotta-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                  </svg>
                  <span class="ml-2 text-gray-600">{{ course.students }} étudiants</span>
                </div>
              </div>
              <div class="mt-8">
                <button class="inline-flex items-center bg-terracotta-600 text-white px-8 py-4 rounded-full hover:bg-terracotta-700 shadow-lg transform transition hover:scale-105">
                  S'inscrire au cours
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-10 lg:mt-0 lg:w-1/2 lg:pl-10">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-r from-terracotta-500 to-amber-500 rounded-2xl transform -rotate-2"></div>
                <img :src="course.image" :alt="course.title" class="relative rounded-2xl shadow-xl" />
              </div>
            </div>
          </div>
        </div>
        
        <!-- Formes décoratives inspirées de l'art africain -->
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 opacity-10 rounded-tr-full"></div>
        <div class="absolute top-20 right-10 w-40 h-40 bg-terracotta-500 opacity-10 rounded-full"></div>
      </div>
  
      <!-- Contenu du cours -->
      <section class="relative py-16 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:grid lg:grid-cols-3 lg:gap-16">
            <!-- Sidebar -->
            <div class="lg:col-span-1">
              <div class="bg-white rounded-2xl shadow-md p-6 sticky top-8">
                <h3 class="text-xl font-bold text-gray-900 mb-4">Contenu du cours</h3>
                <div class="space-y-4">
                  <div v-for="(module, index) in course.modules" :key="index">
                    <div class="flex items-center justify-between cursor-pointer" @click="toggleModule(index)">
                      <h4 class="font-medium text-gray-900">{{ module.title }}</h4>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" :class="{ 'transform rotate-180': expandedModules[index] }" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div v-if="expandedModules[index]" class="mt-2 pl-4 border-l-2 border-terracotta-200 space-y-2">
                      <div v-for="(lesson, lessonIndex) in module.lessons" :key="lessonIndex" class="flex items-center py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-terracotta-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-gray-700">{{ lesson.title }}</span>
                        <span class="ml-auto text-sm text-gray-500">{{ lesson.duration }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-8 pt-6 border-t border-gray-200">
                  <h3 class="text-xl font-bold text-gray-900 mb-4">Ce que vous apprendrez</h3>
                  <ul class="space-y-2">
                    <li v-for="(item, index) in course.learningOutcomes" :key="index" class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-gray-700">{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <!-- Main Content -->
            <div class="mt-10 lg:mt-0 lg:col-span-2">
              <div class="space-y-12">
                <div>
                  <h2 class="text-3xl font-bold text-gray-900">À propos de ce cours</h2>
                  <div class="mt-6 text-gray-600 space-y-4">
                    <p>{{ course.fullDescription }}</p>
                  </div>
                </div>
                
                <div>
                  <h2 class="text-3xl font-bold text-gray-900">Prérequis</h2>
                  <ul class="mt-6 space-y-2">
                    <li v-for="(item, index) in course.prerequisites" :key="index" class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-terracotta-600 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-gray-700">{{ item }}</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h2 class="text-3xl font-bold text-gray-900">Formateur</h2>
                  <div class="mt-6 bg-white rounded-xl p-6 shadow-md">
                    <div class="flex items-center">
                      <img :src="course.instructor.avatar" :alt="course.instructor.name" class="h-16 w-16 rounded-full object-cover" />
                      <div class="ml-4">
                        <h3 class="text-xl font-bold text-gray-900">{{ course.instructor.name }}</h3>
                        <p class="text-gray-600">{{ course.instructor.title }}</p>
                      </div>
                    </div>
                    <p class="mt-4 text-gray-600">{{ course.instructor.bio }}</p>
                  </div>
                </div>
                
                <div>
                  <h2 class="text-3xl font-bold text-gray-900">Avis des étudiants</h2>
                  <div class="mt-6 space-y-6">
                    <div v-for="(review, index) in course.reviews" :key="index" class="bg-white rounded-xl p-6 shadow-md">
                      <div class="flex items-center mb-4">
                        <img :src="review.avatar" :alt="review.name" class="h-10 w-10 rounded-full object-cover" />
                        <div class="ml-4">
                          <h4 class="font-bold text-gray-900">{{ review.name }}</h4>
                          <div class="flex items-center">
                            <div class="flex">
                              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="i <= review.rating ? 'text-yellow-400' : 'text-gray-300'" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>
                            <span class="ml-2 text-sm text-gray-500">{{ review.date }}</span>
                          </div>
                        </div>
                      </div>
                      <p class="text-gray-600">{{ review.comment }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Cours similaires -->
      <section class="relative py-16 overflow-hidden bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="inline-block mb-6">
              <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
              <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
            </div>
            <h2 class="text-3xl font-bold text-gray-900">Cours similaires</h2>
            <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez d'autres cours qui pourraient vous intéresser.
            </p>
          </div>
  
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(relatedCourse, index) in course.relatedCourses" :key="index" class="relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-terracotta-500 to-amber-500 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform"></div>
              <div class="relative bg-white rounded-2xl shadow-md overflow-hidden h-full transform group-hover:scale-[1.01] transition-transform">
                <div class="h-48 overflow-hidden">
                  <img :src="relatedCourse.image" :alt="relatedCourse.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div class="p-6">
                  <div class="flex items-center mb-2">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-terracotta-100 text-terracotta-800">
                      {{ relatedCourse.category }}
                    </span>
                    <div class="ml-auto flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="ml-1 text-sm text-gray-600">{{ relatedCourse.rating }}</span>
                    </div>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">{{ relatedCourse.title }}</h3>
                  <p class="text-gray-600 mb-4">{{ relatedCourse.description }}</p>
                  <div class="flex justify-between items-center">
                    <span class="font-bold text-terracotta-700">{{ relatedCourse.price }}</span>
                    <router-link :to="`/courses/${relatedCourse.id}`" class="inline-flex items-center text-sm font-medium text-terracotta-600 hover:text-terracotta-700">
                      Voir le cours
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
              Prêt à développer vos compétences?
            </h2>
            <p class="mt-4 max-w-2xl text-xl text-amber-100 mx-auto">
              Inscrivez-vous maintenant et commencez votre parcours d'apprentissage.
            </p>
            <div class="mt-8">
              <button class="inline-flex items-center bg-white text-terracotta-700 px-8 py-4 rounded-full hover:bg-amber-50 shadow-lg transform transition hover:scale-105">
                S'inscrire au cours
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // État pour les modules dépliés
  const expandedModules = ref({});
  
  // Fonction pour basculer l'état d'un module
  const toggleModule = (index) => {
    expandedModules.value[index] = !expandedModules.value[index];
  };
  
  // Données du cours (simulées)
  const course = {
    id: 1,
    title: "Entrepreneuriat en Afrique : Fondamentaux et Stratégies",
    description: "Un cours complet pour développer vos compétences entrepreneuriales dans le contexte africain.",
    fullDescription: "Ce cours vous fournira toutes les connaissances et compétences nécessaires pour lancer et développer une entreprise prospère en Afrique. Vous apprendrez à identifier les opportunités de marché, à élaborer un business plan solide, à lever des fonds et à surmonter les défis spécifiques au contexte africain. À travers des études de cas réels et des témoignages d'entrepreneurs africains à succès, vous découvrirez les stratégies qui fonctionnent et les pièges à éviter. Ce cours est conçu pour être pratique et applicable immédiatement, que vous ayez déjà une idée d'entreprise ou que vous soyez en phase d'exploration.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    views: "12,345",
    duration: "24 heures",
    rating: 4.8,
    reviewCount: 256,
    students: 1842,
    price: "99€",
    learningOutcomes: [
      "Comprendre l'écosystème entrepreneurial africain",
      "Identifier et évaluer les opportunités de marché",
      "Élaborer un business plan adapté au contexte local",
      "Développer une stratégie de financement efficace",
      "Maîtriser les aspects juridiques et réglementaires",
      "Construire une équipe performante",
      "Mettre en place une stratégie marketing adaptée"
    ],
    prerequisites: [
      "Aucune expérience préalable en entrepreneuriat n'est requise",
      "Une passion pour l'innovation et le développement économique en Afrique",
      "Un ordinateur avec une connexion internet stable",
      "La volonté d'apprendre et de mettre en pratique les connaissances acquises"
    ],
    instructor: {
      name: "Dr. Amadou Diallo",
      title: "Entrepreneur et Professeur d'Entrepreneuriat",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Dr. Amadou Diallo est un entrepreneur en série avec plus de 15 ans d'expérience dans la création et le développement d'entreprises en Afrique. Il a fondé plusieurs startups à succès dans les domaines de la technologie et de l'éducation. Il est également professeur d'entrepreneuriat à l'Université de Dakar et conseiller auprès de plusieurs incubateurs africains. Sa passion est d'aider les jeunes entrepreneurs africains à réaliser leur potentiel."
    },
    modules: [
      {
        title: "Module 1: Introduction à l'entrepreneuriat en Afrique",
        lessons: [
          { title: "L'écosystème entrepreneurial africain", duration: "45 min" },
          { title: "Les défis et opportunités spécifiques", duration: "1h 10min" },
          { title: "Études de cas d'entrepreneurs africains à succès", duration: "1h 30min" },
          { title: "Quiz: Comprendre le contexte entrepreneurial africain", duration: "20 min" }
        ]
      },
      {
        title: "Module 2: Identification et validation d'opportunités",
        lessons: [
          { title: "Méthodes d'identification d'opportunités de marché", duration: "55 min" },
          { title: "Analyse des besoins et problèmes locaux", duration: "1h 15min" },
          { title: "Techniques de validation d'idées", duration: "1h 20min" },
          { title: "Exercice pratique: Valider votre idée d'entreprise", duration: "2h" }
        ]
      },
      {
        title: "Module 3: Élaboration d'un business plan",
        lessons: [
          { title: "Structure et composantes d'un business plan efficace", duration: "1h" },
          { title: "Analyse de marché et stratégie commerciale", duration: "1h 30min" },
          { title: "Prévisions financières et modèle économique", duration: "2h" },
          { title: "Projet: Rédiger votre business plan", duration: "3h" }
        ]
      },
      {
        title: "Module 4: Financement de votre entreprise",
        lessons: [
          { title: "Panorama des sources de financement en Afrique", duration: "1h" },
          { title: "Préparation d'un pitch pour les investisseurs", duration: "1h 15min" },
          { title: "Stratégies de bootstrapping et de croissance frugale", duration: "1h" },
          { title: "Étude de cas: Réussites de levées de fonds en Afrique", duration: "1h 30min" }
        ]
      },
      {
        title: "Module 5: Aspects juridiques et réglementaires",
        lessons: [
          { title: "Choix de la structure juridique", duration: "45 min" },
          { title: "Propriété intellectuelle et protection des actifs", duration: "1h" },
          { title: "Navigation dans l'environnement réglementaire africain", duration: "1h 15min" },
          { title: "Quiz: Aspects juridiques de l'entrepreneuriat", duration: "30 min" }
        ]
      }
    ],
    reviews: [
      {
        name: "Ibrahim Koné",
        avatar: "https://randomuser.me/api/portraits/men/41.jpg",
        rating: 5,
        date: "15 juin 2023",
        comment: "Ce cours a complètement transformé ma vision de l'entrepreneuriat en Afrique. Les études de cas sont particulièrement pertinentes et les conseils pratiques m'ont permis de structurer mon projet d'entreprise de manière efficace. Je recommande vivement!"
      },
      {
        name: "Fatou Ndiaye",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        date: "3 mai 2023",
        comment: "Un cours très complet avec des informations précieuses sur l'écosystème entrepreneurial africain. J'aurais aimé plus de contenu sur le financement des startups, mais dans l'ensemble, c'est une excellente ressource pour tout entrepreneur en herbe."
      },
      {
        name: "Jean-Pierre Mutombo",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 5,
        date: "27 avril 2023",
        comment: "Dr. Diallo est un formateur exceptionnel qui partage son expérience avec générosité. J'ai particulièrement apprécié les modules sur la validation d'idées et l'élaboration du business plan. Grâce à ce cours, j'ai pu affiner mon projet et obtenir un premier financement!"
      }
    ],
    relatedCourses: [
      {
        id: 2,
        title: "Marketing Digital pour Entrepreneurs Africains",
        description: "Stratégies et tactiques de marketing digital adaptées au marché africain.",
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Marketing",
        rating: 4.7,
        price: "79€"
      },
      {
        id: 3,
        title: "Financement de Startups en Afrique",
        description: "Guide complet pour lever des fonds pour votre startup africaine.",
        image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Finance",
        rating: 4.9,
        price: "89€"
      },
      {
        id: 4,
        title: "Leadership et Gestion d'Équipe",
        description: "Développez vos compétences en leadership pour diriger efficacement votre entreprise.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Leadership",
        rating: 4.6,
        price: "69€"
      }
    ]
  };
  </script>