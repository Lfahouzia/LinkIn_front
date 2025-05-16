<template>
    <div>
      <!-- En-tête avec actions -->
      <div class="flex flex-wrap justify-between items-center mb-8">
        <div class="flex items-center">
          <button 
            @click="$router.push('/dashboard/projects')"
            class="mr-4 p-2 rounded-full text-gray-500 hover:text-terracotta-600 hover:bg-amber-50 focus:outline-none"
          >
            <ArrowLeftIcon class="h-5 w-5" />
          </button>
          
          <h1 class="text-2xl font-bold text-gray-900">{{ project.title }}</h1>
          
          <span 
            class="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
            :class="getStatusClass(project.status)"
          >
            {{ $t(`dashboard.projects.${project.status}`) }}
          </span>
        </div>
        
        <div class="flex space-x-2 mt-4 sm:mt-0">
          <button 
            @click="editProject"
            class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500"
          >
            <PencilIcon class="h-5 w-5 inline-block mr-1" />
            {{ $t('dashboard.actions.edit') }}
          </button>
          
          <button 
            v-if="project.status === 'draft'"
            @click="publishProject"
            class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-terracotta-600 hover:bg-terracotta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500"
          >
            <GlobeIcon class="h-5 w-5 inline-block mr-1" />
            {{ $t('dashboard.projects.publish') }}
          </button>
        </div>
      </div>
      
      <!-- Contenu principal -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Informations du projet -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Aperçu du projet -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden">
            <div class="relative h-64">
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <div class="flex items-center mb-2">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                      {{ project.category }}
                    </span>
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-terracotta-100 text-terracotta-800 ml-2">
                      {{ project.country }}
                    </span>
                  </div>
                  <h2 class="text-2xl font-bold text-white">{{ project.title }}</h2>
                </div>
              </div>
            </div>
            
            <div class="p-6">
              <div class="mb-6">
                <h3 class="text-lg font-bold text-gray-900 mb-2">{{ $t('dashboard.projects.description') }}</h3>
                <p class="text-gray-600">{{ project.description }}</p>
              </div>
              
              <div class="mb-6">
                <h3 class="text-lg font-bold text-gray-900 mb-2">{{ $t('dashboard.projects.problem') }}</h3>
                <p class="text-gray-600">{{ project.problem }}</p>
              </div>
              
              <div class="mb-6">
                <h3 class="text-lg font-bold text-gray-900 mb-2">{{ $t('dashboard.projects.solution') }}</h3>
                <p class="text-gray-600">{{ project.solution }}</p>
              </div>
              
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-2">{{ $t('dashboard.projects.impact') }}</h3>
                <p class="text-gray-600">{{ project.impact }}</p>
              </div>
            </div>
          </div>
          
          <!-- Galerie d'images -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-4">{{ $t('dashboard.projects.gallery') }}</h3>
            
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div 
                v-for="(image, index) in project.gallery" 
                :key="index" 
                class="relative group overflow-hidden rounded-lg h-32"
              >
                <img 
                  :src="image" 
                  :alt="`${project.title} - Image ${index + 1}`" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                  <button 
                    class="p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform scale-0 group-hover:scale-100"
                    @click="openImageModal(image)"
                  >
                    <EyeIcon class="h-5 w-5 text-gray-700" />
                  </button>
                </div>
              </div>
              
              <div 
                class="relative group overflow-hidden rounded-lg h-32 border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-terracotta-500 transition-colors"
                @click="openAddImageModal"
              >
                <PlusIcon class="h-8 w-8 text-gray-400 group-hover:text-terracotta-500 transition-colors" />
                <span class="sr-only">{{ $t('dashboard.projects.addImage') }}</span>
              </div>
            </div>
          </div>
          
          <!-- Documents -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-4">{{ $t('dashboard.projects.documents') }}</h3>
            
            <div class="space-y-3">
              <div 
                v-for="(doc, index) in project.documents" 
                :key="index" 
                class="flex items-center justify-between p-3 rounded-lg hover:bg-amber-50 transition-colors"
              >
                <div class="flex items-center">
                  <DocumentIcon class="h-6 w-6 text-terracotta-600 mr-3" />
                  <div>
                    <p class="text-sm font-medium text-gray-900">{{ doc.name }}</p>
                    <p class="text-xs text-gray-500">{{ formatFileSize(doc.size) }}</p>
                  </div>
                </div>
                
                <div class="flex space-x-2">
                  <button 
                    class="p-2 text-gray-500 hover:text-terracotta-600 hover:bg-terracotta-50 rounded-full focus:outline-none"
                    @click="downloadDocument(doc)"
                  >
                    <DownloadIcon class="h-5 w-5" />
                  </button>
                  
                  <button 
                    class="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full focus:outline-none"
                    @click="deleteDocument(doc)"
                  >
                    <TrashIcon class="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <button 
                class="flex items-center justify-center w-full p-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-terracotta-500 transition-colors"
                @click="openAddDocumentModal"
              >
                <PlusIcon class="h-5 w-5 text-gray-400 group-hover:text-terracotta-500 transition-colors mr-2" />
                <span class="text-sm text-gray-500 group-hover:text-terracotta-500 transition-colors">{{ $t('dashboard.projects.addDocument') }}</span>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Sidebar -->
        <div class="space-y-8">
          <!-- Financement -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-4">{{ $t('dashboard.projects.funding') }}</h3>
            
            <div class="space-y-4">
              <div>
                <div class="flex justify-between items-center mb-1">
                  <span class="text-sm font-medium text-gray-700">{{ $t('dashboard.projects.fundingProgress') }}</span>
                  <span class="text-sm font-medium text-gray-700">{{ project.fundingPercentage }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    class="bg-terracotta-600 h-2.5 rounded-full" 
                    :style="{ width: `${project.fundingPercentage}%` }"
                  ></div>
                </div>
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="text-sm text-gray-500">{{ $t('dashboard.projects.fundingRequired') }}</p>
                  <p class="text-lg font-bold text-gray-900">{{ project.fundingRequired }}</p>
                </div>
                
                <div>
                  <p class="text-sm text-gray-500">{{ $t('dashboard.projects.fundingObtained') }}</p>
                  <p class="text-lg font-bold text-terracotta-600">{{ project.fundingObtained }}</p>
                </div>
              </div>
              
              <div>
                <p class="text-sm text-gray-500">{{ $t('dashboard.projects.investors') }}</p>
                <p class="text-lg font-bold text-gray-900">{{ project.investorCount }}</p>
              </div>
            </div>
          </div>
          
          <!-- Statistiques -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-4">{{ $t('dashboard.projects.statistics') }}</h3>
            
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <EyeIcon class="h-5 w-5 text-gray-500 mr-2" />
                  <span class="text-sm text-gray-700">{{ $t('dashboard.projects.views') }}</span>
                </div>
                <span class="text-sm font-medium text-gray-900">{{ project.viewCount }}</span>
              </div>
              
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <HeartIcon class="h-5 w-5 text-gray-500 mr-2" />
                  <span class="text-sm text-gray-700">{{ $t('dashboard.projects.favorites') }}</span>
                </div>
                <span class="text-sm font-medium text-gray-900">{{ project.favoriteCount }}</span>
              </div>
              
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <ChatAltIcon class="h-5 w-5 text-gray-500 mr-2" />
                  <span class="text-sm text-gray-700">{{ $t('dashboard.projects.messages') }}</span>
                </div>
                <span class="text-sm font-medium text-gray-900">{{ project.messageCount }}</span>
              </div>
              
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <ShareIcon class="h-5 w-5 text-gray-500 mr-2" />
                  <span class="text-sm text-gray-700">{{ $t('dashboard.projects.shares') }}</span>
                </div>
                <span class="text-sm font-medium text-gray-900">{{ project.shareCount }}</span>
              </div>
            </div>
          </div>
          
          <!-- Équipe -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-4">{{ $t('dashboard.projects.team') }}</h3>
            
            <div class="space-y-4">
              <div 
                v-for="(member, index) in project.team" 
                :key="index" 
                class="flex items-center justify-between"
              >
                <div class="flex items-center">
                  <img 
                    :src="member.avatar" 
                    :alt="member.name" 
                    class="h-10 w-10 rounded-full object-cover"
                  />
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">{{ member.name }}</p>
                    <p class="text-xs text-gray-500">{{ member.role }}</p>
                  </div>
                </div>
                
                <button 
                  class="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full focus:outline-none"
                  @click="removeTeamMember(member)"
                >
                  <XIcon class="h-5 w-5" />
                </button>
              </div>
              
              <button 
                class="flex items-center justify-center w-full p-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-terracotta-500 transition-colors"
                @click="openAddTeamMemberModal"
              >
                <PlusIcon class="h-5 w-5 text-gray-400 group-hover:text-terracotta-500 transition-colors mr-2" />
                <span class="text-sm text-gray-500 group-hover:text-terracotta-500 transition-colors">{{ $t('dashboard.projects.addTeamMember') }}</span>
              </button>
            </div>
          </div>
          
          <!-- Actions -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-4">{{ $t('dashboard.projects.actions') }}</h3>
            
            <div class="space-y-3">
              <button 
                class="flex items-center justify-center w-full p-3 bg-terracotta-600 text-white rounded-lg hover:bg-terracotta-700 transition-colors"
                @click="viewMessages"
              >
                <ChatAltIcon class="h-5 w-5 mr-2" />
                <span>{{ $t('dashboard.projects.viewMessages') }}</span>
              </button>
              
              <button 
                class="flex items-center justify-center w-full p-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                @click="viewPublicPage"
              >
                <EyeIcon class="h-5 w-5 mr-2" />
                <span>{{ $t('dashboard.projects.viewPublicPage') }}</span>
              </button>
              
              <button 
                class="flex items-center justify-center w-full p-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                @click="shareProject"
              >
                <ShareIcon class="h-5 w-5 mr-2" />
                <span>{{ $t('dashboard.projects.share') }}</span>
              </button>
              
              <button 
                class="flex items-center justify-center w-full p-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                @click="openDeleteProjectModal"
              >
                <TrashIcon class="h-5 w-5 mr-2" />
                <span>{{ $t('dashboard.projects.delete') }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Messages -->
      <div class="mt-8 bg-white rounded-xl shadow-md p-6">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-lg font-bold text-gray-900">{{ $t('dashboard.projects.messages') }}</h3>
          
          <button 
            class="text-sm text-terracotta-600 hover:text-terracotta-700"
            @click="viewAllMessages"
          >
            {{ $t('dashboard.actions.viewAll') }}
          </button>
        </div>
        
        <div class="space-y-6">
          <div 
            v-for="(message, index) in project.recentMessages" 
            :key="index" 
            class="flex space-x-4"
          >
            <img 
              :src="message.sender.avatar" 
              :alt="message.sender.name" 
              class="h-10 w-10 rounded-full object-cover flex-shrink-0"
            />
            
            <div class="flex-1 bg-gray-50 rounded-lg p-4">
              <div class="flex justify-between items-start">
                <div>
                  <p class="text-sm font-medium text-gray-900">{{ message.sender.name }}</p>
                  <p class="text-xs text-gray-500">{{ formatDate(message.date) }}</p>
                </div>
                
                <div class="flex space-x-2">
                  <button 
                    class="p-1 text-gray-500 hover:text-terracotta-600 hover:bg-terracotta-50 rounded-full focus:outline-none"
                    @click="replyToMessage(message)"
                  >
                    <ReplyIcon class="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <p class="mt-2 text-sm text-gray-600">{{ message.content }}</p>
            </div>
          </div>
          
          <!-- Formulaire de réponse -->
          <div class="flex space-x-4">
            <img 
              :src="currentUserAvatar" 
              alt="Your avatar" 
              class="h-10 w-10 rounded-full object-cover flex-shrink-0"
            />
            
            <div class="flex-1">
              <textarea 
                v-model="newMessage" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500"
                :placeholder="$t('dashboard.projects.writeMessage')"
                rows="3"
              ></textarea>
              
              <div class="mt-2 flex justify-end">
                <button 
                  class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-terracotta-600 hover:bg-terracotta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500"
                  @click="sendMessage"
                >
                  {{ $t('dashboard.actions.send') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Modals (à implémenter) -->
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  import { 
    ArrowLeftIcon, PencilIcon, GlobeIcon, EyeIcon, PlusIcon,
    DocumentIcon, DownloadIcon, TrashIcon, HeartIcon, ChatAltIcon,
    ShareIcon, XIcon, ReplyIcon
  } from '@heroicons/vue/outline';
  
  const { t, d } = useI18n();
  const route = useRoute();
  const router = useRouter();
  
  // Données du projet (à remplacer par des données réelles)
  const project = reactive({
    id: 1,
    title: 'EcoFarm Sénégal',
    description: 'EcoFarm Sénégal est une plateforme technologique innovante qui vise à révolutionner l\'agriculture à petite échelle au Sénégal. Notre solution combine des capteurs IoT abordables, une application mobile intuitive et des algorithmes d\'intelligence artificielle pour aider les petits agriculteurs à optimiser leurs pratiques agricoles, augmenter leurs rendements et accéder aux marchés de manière plus efficace.',
    problem: 'Au Sénégal, comme dans de nombreux pays africains, les petits exploitants agricoles font face à de multiples défis : accès limité aux informations sur les meilleures pratiques agricoles, manque de données précises sur leurs cultures, difficultés à prévoir les conditions météorologiques, et accès restreint aux marchés pour vendre leurs produits. Ces obstacles limitent considérablement leur productivité et leurs revenus, perpétuant ainsi le cycle de la pauvreté rurale.',
    solution: 'Notre solution intègre trois composantes principales : 1) Des capteurs IoT à faible coût qui surveillent l\'humidité du sol, la température et d\'autres paramètres environnementaux essentiels; 2) Une application mobile qui fournit aux agriculteurs des informations en temps réel sur leurs cultures, des prévisions météorologiques localisées et des recommandations personnalisées; 3) Une place de marché numérique qui connecte directement les agriculteurs aux acheteurs, éliminant ainsi les intermédiaires et augmentant les marges bénéficiaires des producteurs.',
    impact: 'EcoFarm Sénégal a déjà un impact significatif sur les communautés rurales. Nos premiers utilisateurs ont rapporté une augmentation moyenne de 35% de leurs rendements agricoles et une amélioration de 40% de leurs revenus grâce à un meilleur accès aux marchés. De plus, notre solution encourage des pratiques agricoles plus durables, réduisant l\'utilisation d\'eau de 25% et diminuant le recours aux pesticides grâce à une détection précoce des problèmes. À terme, nous visons à toucher 50 000 agriculteurs au Sénégal, avec un impact potentiel sur plus de 250 000 personnes dans les zones rurales.',
    image: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Agriculture',
    country: 'Sénégal',
    status: 'published',
    fundingRequired: '75 000 €',
    fundingObtained: '45 000 €',
    fundingPercentage: 60,
    investorCount: 12,
    viewCount: 245,
    favoriteCount: 18,
    messageCount: 24,
    shareCount: 15,
    documents: [
      {
        name: 'Présentation du projet.pdf',
        url: '#',
        size: 2500000
      },
      {
        name: 'Business Plan.pdf',
        url: '#',
        size: 3800000
      },
      {
        name: 'Étude de marché.pdf',
        url: '#',
        size: 1700000
      }
    ],
    team: [
      {
        name: 'Amadou Diallo',
        role: 'Fondateur & CEO',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      {
        name: 'Fatou Ndiaye',
        role: 'CTO',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
      },
      {
        name: 'Ibrahim Sow',
        role: 'Responsable Agronomie',
        avatar: 'https://randomuser.me/api/portraits/men/46.jpg'
      }
    ],
    recentMessages: [
      {
        id: 1,
        sender: {
          name: 'Kofi Mensah',
          avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
        },
        content: 'Bonjour, je suis très intéressé par votre projet. Pouvez-vous me donner plus d\'informations sur votre modèle économique et vos projections financières?',
        date: '2023-07-10T14:30:00Z'
      },
      {
        id: 2,
        sender: {
          name: 'Aisha Mohammed',
          avatar: 'https://randomuser.me/api/portraits/women/28.jpg'
        },
        content: 'Félicitations pour votre projet! J\'aimerais en savoir plus sur la technologie que vous utilisez pour les capteurs IoT. Sont-ils fabriqués localement ou importés?',
        date: '2023-07-08T09:15:00Z'
      }
    ]
  });
  
  // Avatar de l'utilisateur courant
  const currentUserAvatar = ref('https://randomuser.me/api/portraits/men/32.jpg');
  
  // Nouveau message
  const newMessage = ref('');
  
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
  
  // Formater la taille du fichier
  const formatFileSize = (bytes) => {
    if (bytes < 1024) {
      return bytes + ' B';
    } else if (bytes < 1048576) {
      return (bytes / 1024).toFixed(1) + ' KB';
    } else {
      return (bytes / 1048576).toFixed(1) + ' MB';
    }
  };
  
  // Fonctions pour les actions
  const editProject = () => {
    // Implémentation à venir
    console.log('Edit project', project.id);
  };
  
  const publishProject = () => {
    // Implémentation à venir
    console.log('Publish project', project.id);
  };
  
  const openImageModal = (image) => {
    // Implémentation à venir
    console.log('Open image modal', image);
  };
  
  const openAddImageModal = () => {
    // Implémentation à venir
    console.log('Open add image modal');
  };
  
  const downloadDocument = (doc) => {
    // Implémentation à venir
    console.log('Download document', doc.name);
  };
  
  const deleteDocument = (doc) => {
    // Implémentation à venir
    console.log('Delete document', doc.name);
  };
  
  const openAddDocumentModal = () => {
    // Implémentation à venir
    console.log('Open add document modal');
  };
  
  const removeTeamMember = (member) => {
    // Implémentation à venir
    console.log('Remove team member', member.name);
  };
  
  const openAddTeamMemberModal = () => {
    // Implémentation à venir
    console.log('Open add team member modal');
  };
  
  const viewMessages = () => {
    // Implémentation à venir
    console.log('View all messages for project', project.id);
  };
  
  const viewPublicPage = () => {
    // Implémentation à venir
    console.log('View public page for project', project.id);
  };
  
  const shareProject = () => {
    // Implémentation à venir
    console.log('Share project', project.id);
  };
  
  const openDeleteProjectModal = () => {
    // Implémentation à venir
    console.log('Open delete project modal');
  };
  
  const viewAllMessages = () => {
    // Implémentation à venir
    console.log('View all messages');
  };
  
  const replyToMessage = (message) => {
    // Implémentation à venir
    console.log('Reply to message', message.id);
  };
  
  const sendMessage = () => {
    if (newMessage.value.trim()) {
      // Implémentation à venir
      console.log('Send message:', newMessage.value);
      newMessage.value = '';
    }
  };
  
  onMounted(() => {
    // Ici, vous pourriez charger les données du projet depuis une API
    console.log('Project ID from route:', route.params.id);
  });
  </script>