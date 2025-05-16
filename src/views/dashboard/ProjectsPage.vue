<template>
    <div>
      <!-- En-tête avec bouton d'ajout -->
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-2xl font-bold text-gray-900">{{ $t('dashboard.projects.title') }}</h1>
        
        <button 
          @click="openCreateProjectModal"
          class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-terracotta-600 hover:bg-terracotta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500"
        >
          <PlusIcon class="h-5 w-5 inline-block mr-1" />
          {{ $t('dashboard.projects.create') }}
        </button>
      </div>
      
      <!-- Filtres et recherche -->
      <div class="bg-white rounded-xl shadow-md p-6 mb-8">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="relative flex-1 min-w-0">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon class="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              v-model="searchQuery" 
              class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500"
              :placeholder="$t('dashboard.projects.search')"
            />
          </div>
          
          <div class="flex flex-wrap gap-4">
            <div class="relative">
              <select 
                v-model="selectedStatus" 
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500"
              >
                <option value="all">{{ $t('dashboard.projects.allStatuses') }}</option>
                <option value="draft">{{ $t('dashboard.projects.draft') }}</option>
                <option value="published">{{ $t('dashboard.projects.published') }}</option>
                <option value="funded">{{ $t('dashboard.projects.funded') }}</option>
              </select>
            </div>
            
            <div class="relative">
              <select 
                v-model="selectedCategory" 
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500"
              >
                <option value="all">{{ $t('dashboard.projects.allCategories') }}</option>
                <option value="agriculture">{{ $t('dashboard.projects.agriculture') }}</option>
                <option value="technology">{{ $t('dashboard.projects.technology') }}</option>
                <option value="education">{{ $t('dashboard.projects.education') }}</option>
                <option value="health">{{ $t('dashboard.projects.health') }}</option>
                <option value="energy">{{ $t('dashboard.projects.energy') }}</option>
                <option value="finance">{{ $t('dashboard.projects.finance') }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Liste des projets -->
      <div class="space-y-6">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id" 
          class="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.01]"
        >
          <div class="md:flex">
            <div class="md:flex-shrink-0">
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="h-48 w-full object-cover md:w-48"
              />
            </div>
            
            <div class="p-6 flex-1">
              <div class="flex flex-wrap justify-between items-start">
                <div>
                  <div class="flex items-center mb-2">
                    <span 
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                      :class="getStatusClass(project.status)"
                    >
                      {{ $t(`dashboard.projects.${project.status}`) }}
                    </span>
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 ml-2">
                      {{ project.category }}
                    </span>
                  </div>
                  
                  <h2 class="text-xl font-bold text-gray-900 mb-1">{{ project.title }}</h2>
                  <p class="text-sm text-gray-500 mb-4">{{ $t('dashboard.projects.lastUpdated') }}: {{ formatDate(project.updatedAt) }}</p>
                  <p class="text-gray-600 mb-4 line-clamp-2">{{ project.description }}</p>
                </div>
                
                <div class="flex space-x-2 mt-2 md:mt-0">
                  <button 
                    @click="editProject(project)"
                    class="p-2 text-gray-500 hover:text-terracotta-600 hover:bg-terracotta-50 rounded-full focus:outline-none"
                  >
                    <PencilIcon class="h-5 w-5" />
                  </button>
                  
                  <button 
                    @click="viewMessages(project)"
                    class="p-2 text-gray-500 hover:text-terracotta-600 hover:bg-terracotta-50 rounded-full focus:outline-none"
                  >
                    <ChatAltIcon class="h-5 w-5" />
                    <span v-if="project.unreadMessages" class="absolute top-0 right-0 h-4 w-4 rounded-full bg-terracotta-600 text-white text-xs flex items-center justify-center">
                      {{ project.unreadMessages }}
                    </span>
                  </button>
                  
                  <button 
                    @click="deleteProject(project)"
                    class="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full focus:outline-none"
                  >
                    <TrashIcon class="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div class="mt-4">
                <div class="flex justify-between items-center mb-1">
                  <span class="text-sm font-medium text-gray-700">{{ $t('dashboard.projects.fundingProgress') }}</span>
                  <span class="text-sm font-medium text-gray-700">{{ project.fundingObtained }} / {{ project.fundingRequired }}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    class="bg-terracotta-600 h-2.5 rounded-full" 
                    :style="{ width: `${project.fundingPercentage}%` }"
                  ></div>
                </div>
              </div>
              
              <div class="mt-4 flex justify-between items-center">
                <div class="flex items-center">
                  <UsersIcon class="h-5 w-5 text-gray-500 mr-1" />
                  <span class="text-sm text-gray-600">{{ project.viewCount }} {{ $t('dashboard.projects.views') }}</span>
                  
                  <HeartIcon class="h-5 w-5 text-gray-500 ml-4 mr-1" />
                  <span class="text-sm text-gray-600">{{ project.favoriteCount }} {{ $t('dashboard.projects.favorites') }}</span>
                </div>
                
                <router-link 
                  :to="`/dashboard/projects/${project.id}`"
                  class="inline-flex items-center text-sm font-medium text-terracotta-600 hover:text-terracotta-700"
                >
                  {{ $t('dashboard.projects.viewDetails') }}
                  <ArrowRightIcon class="h-4 w-4 ml-1" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Message si aucun projet -->
        <div v-if="filteredProjects.length === 0" class="bg-white rounded-xl shadow-md p-8 text-center">
          <LightBulbIcon class="h-12 w-12 text-amber-500 mx-auto mb-4" />
          <h3 class="text-lg font-medium text-gray-900 mb-2">{{ $t('dashboard.projects.noProjects') }}</h3>
          <p class="text-gray-600 mb-6">{{ $t('dashboard.projects.noProjectsDescription') }}</p>
          <button 
            @click="openCreateProjectModal"
            class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-terracotta-600 hover:bg-terracotta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500"
          >
            {{ $t('dashboard.projects.createFirst') }}
          </button>
        </div>
      </div>
      
      <!-- Pagination -->
      <div v-if="filteredProjects.length > 0" class="mt-8 flex justify-center">
        <nav class="flex items-center space-x-2">
          <button 
            class="px-3 py-1 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none"
            :disabled="currentPage === 1"
            @click="currentPage--"
          >
            <ChevronLeftIcon class="h-5 w-5" />
          </button>
          
          <button 
            v-for="page in totalPages" 
            :key="page"
            class="px-3 py-1 rounded-md text-sm font-medium focus:outline-none"
            :class="page === currentPage ? 'bg-terracotta-600 text-white' : 'text-gray-700 hover:bg-gray-100'"
            @click="currentPage = page"
          >
            {{ page }}
          </button>
          
          <button 
            class="px-3 py-1 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none"
            :disabled="currentPage === totalPages"
            @click="currentPage++"
          >
            <ChevronRightIcon class="h-5 w-5" />
          </button>
        </nav>
      </div>
      
      <!-- Modals (à implémenter) -->
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { 
    PlusIcon, SearchIcon, PencilIcon, TrashIcon, 
    ChatAltIcon, UsersIcon, HeartIcon, ArrowRightIcon,
    ChevronLeftIcon, ChevronRightIcon, LightBulbIcon
  } from '@heroicons/vue/outline';
  
  const { t, d } = useI18n();
  
  // Filtres
  const searchQuery = ref('');
  const selectedStatus = ref('all');
  const selectedCategory = ref('all');
  const currentPage = ref(1);
  const itemsPerPage = 5;
  
  // Projets (à remplacer par des données réelles)
  const projects = ref([
    {
      id: 1,
      title: 'EcoFarm Sénégal',
      description: 'Plateforme de gestion agricole intelligente pour les petits exploitants agricoles au Sénégal.',
      image: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Agriculture',
      status: 'published',
      fundingRequired: '75 000 €',
      fundingObtained: '45 000 €',
      fundingPercentage: 60,
      viewCount: 245,
      favoriteCount: 18,
      unreadMessages: 3,
      updatedAt: '2023-07-01T14:30:00Z'
    },
    {
      id: 2,
      title: 'SolarTech Kenya',
      description: 'Solutions d\'énergie solaire abordables pour les zones rurales du Kenya sans accès à l\'électricité.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Énergie',
      status: 'draft',
      fundingRequired: '120 000 €',
      fundingObtained: '0 €',
      fundingPercentage: 0,
      viewCount: 0,
      favoriteCount: 0,
      unreadMessages: 0,
      updatedAt: '2023-06-28T09:15:00Z'
    },
    {
      id: 3,
      title: 'HealthConnect Nigeria',
      description: 'Application mobile connectant les patients des zones rurales aux professionnels de santé à distance.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Santé',
      status: 'funded',
      fundingRequired: '90 000 €',
      fundingObtained: '90 000 €',
      fundingPercentage: 100,
      viewCount: 320,
      favoriteCount: 24,
      unreadMessages: 0,
      updatedAt: '2023-05-15T11:45:00Z'
    },
    {
      id: 4,
      title: 'EduTech Ghana',
      description: 'Plateforme éducative numérique pour les écoles primaires et secondaires au Ghana.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Éducation',
      status: 'published',
      fundingRequired: '60 000 €',
      fundingObtained: '15 000 €',
      fundingPercentage: 25,
      viewCount: 178,
      favoriteCount: 9,
      unreadMessages: 1,
      updatedAt: '2023-06-20T16:20:00Z'
    },
    {
      id: 5,
      title: 'FinAccess Tanzania',
      description: 'Services financiers mobiles pour les populations non bancarisées en Tanzanie.',
      image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Finance',
      status: 'published',
      fundingRequired: '85 000 €',
      fundingObtained: '35 000 €',
      fundingPercentage: 41,
      viewCount: 210,
      favoriteCount: 15,
      unreadMessages: 2,
      updatedAt: '2023-06-25T10:30:00Z'
    }
  ]);
  
  // Projets filtrés
  const filteredProjects = computed(() => {
    let result = [...projects.value];
    
    // Filtrage par recherche
    if (searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase();
      result = result.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query)
      );
    }
    
    // Filtrage par statut
    if (selectedStatus.value !== 'all') {
      result = result.filter(project => project.status === selectedStatus.value);
    }
    
    // Filtrage par catégorie
    if (selectedCategory.value !== 'all') {
      result = result.filter(project => project.category.toLowerCase() === selectedCategory.value);
    }
    
    // Pagination
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    return result.slice(startIndex, endIndex);
  });
  
  // Nombre total de pages
  const totalPages = computed(() => {
    let result = [...projects.value];
    
    // Filtrage par recherche
    if (searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase();
      result = result.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query)
      );
    }
    
    // Filtrage par statut
    if (selectedStatus.value !== 'all') {
      result = result.filter(project => project.status === selectedStatus.value);
    }
    
    // Filtrage par catégorie
    if (selectedCategory.value !== 'all') {
      result = result.filter(project => project.category.toLowerCase() === selectedCategory.value);
    }
    
    return Math.ceil(result.length / itemsPerPage);
  });
  
  // Classe CSS pour le statut
  const getStatusClass = (status) => {
    const classes = {
      draft: 'bg-gray-100 text-gray-800',
      published: 'bg-green-100 text-green-800',
      funded: 'bg-blue-100 text-blue-800'
    };
    
    return classes[status] || classes.draft;
  };
  
  // Formater la date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return d(date, 'short');
  };
  
  // Fonctions pour les actions
  const openCreateProjectModal = () => {
    // Implémentation �� venir
    console.log('Open create project modal');
  };
  
  const editProject = (project) => {
    // Implémentation à venir
    console.log('Edit project', project.id);
  };
  
  const viewMessages = (project) => {
    // Implémentation à venir
    console.log('View messages for project', project.id);
  };
  
  const deleteProject = (project) => {
    // Implémentation à venir
    console.log('Delete project', project.id);
  };
  </script>