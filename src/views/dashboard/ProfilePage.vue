<template>
    <div>
      <!-- En-tête du profil -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div class="relative h-48 bg-gradient-to-r from-terracotta-600 to-amber-600">
          <button 
            class="absolute top-4 right-4 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 focus:outline-none"
            @click="openCoverPhotoModal"
          >
            <CameraIcon class="h-5 w-5 text-white" />
          </button>
        </div>
        
        <div class="relative px-6 pb-6">
          <div class="flex flex-col sm:flex-row sm:items-end -mt-16 sm:-mt-20">
            <div class="relative inline-block">
              <img 
                :src="profile.avatar" 
                alt="Photo de profil" 
                class="h-32 w-32 rounded-full border-4 border-white object-cover"
              />
              <button 
                class="absolute bottom-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
                @click="openProfilePhotoModal"
              >
                <CameraIcon class="h-4 w-4 text-gray-700" />
              </button>
            </div>
            
            <div class="mt-4 sm:mt-0 sm:ml-6 flex-1">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 class="text-2xl font-bold text-gray-900">{{ profile.name }}</h1>
                  <p class="text-sm text-gray-500">{{ profile.role }}</p>
                </div>
                
                <div class="mt-4 sm:mt-0">
                  <button 
                    class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-terracotta-600 hover:bg-terracotta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500"
                    @click="editMode = true"
                  >
                    {{ $t('dashboard.profile.edit') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contenu du profil -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Informations personnelles -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-xl shadow-md p-6 mb-8">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-lg font-bold text-gray-800">{{ $t('dashboard.profile.personalInfo') }}</h2>
              
              <div v-if="editMode" class="flex space-x-2">
                <button 
                  class="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500"
                  @click="cancelEdit"
                >
                  {{ $t('dashboard.actions.cancel') }}
                </button>
                
                <button 
                  class="px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-terracotta-600 hover:bg-terracotta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500"
                  @click="saveProfile"
                >
                  {{ $t('dashboard.actions.save') }}
                </button>
              </div>
            </div>
            
            <div class="space-y-6">
              <!-- Nom et prénom -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700">
                    {{ $t('dashboard.profile.firstName') }}
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    v-model="editedProfile.firstName" 
                    :disabled="!editMode"
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500 disabled:bg-gray-100 disabled:text-gray-500"
                  />
                </div>
                
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700">
                    {{ $t('dashboard.profile.lastName') }}
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    v-model="editedProfile.lastName" 
                    :disabled="!editMode"
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500 disabled:bg-gray-100 disabled:text-gray-500"
                  />
                </div>
              </div>
              
              <!-- Email et téléphone -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700">
                    {{ $t('dashboard.profile.email') }}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="editedProfile.email" 
                    :disabled="!editMode"
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500 disabled:bg-gray-100 disabled:text-gray-500"
                  />
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700">
                    {{ $t('dashboard.profile.phone') }}
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="editedProfile.phone" 
                    :disabled="!editMode"
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500 disabled:bg-gray-100 disabled:text-gray-500"
                  />
                </div>
              </div>
              
              <!-- Localisation -->
              <div>
                <label for="location" class="block text-sm font-medium text-gray-700">
                  {{ $t('dashboard.profile.location') }}
                </label>
                <input 
                  type="text" 
                  id="location" 
                  v-model="editedProfile.location" 
                  :disabled="!editMode"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500 disabled:bg-gray-100 disabled:text-gray-500"
                />
              </div>
              
              <!-- Bio -->
              <div>
                <label for="bio" class="block text-sm font-medium text-gray-700">
                  {{ $t('dashboard.profile.bio') }}
                </label>
                <textarea 
                  id="bio" 
                  v-model="editedProfile.bio" 
                  :disabled="!editMode"
                  rows="4"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500 disabled:bg-gray-100 disabled:text-gray-500"
                ></textarea>
              </div>
            </div>
          </div>
          
          <!-- Compétences et intérêts -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-lg font-bold text-gray-800">{{ $t('dashboard.profile.skillsInterests') }}</h2>
            </div>
            
            <div class="space-y-6">
              <!-- Compétences -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('dashboard.profile.skills') }}
                </label>
                <div class="flex flex-wrap gap-2">
                  <div 
                    v-for="(skill, index) in editedProfile.skills" 
                    :key="index"
                    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-terracotta-100 text-terracotta-800"
                  >
                    {{ skill }}
                    <button 
                      v-if="editMode"
                      @click="removeSkill(index)" 
                      class="ml-1.5 text-terracotta-600 hover:text-terracotta-800 focus:outline-none"
                    >
                      <XIcon class="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div v-if="editMode" class="inline-flex items-center">
                    <input 
                      type="text" 
                      v-model="newSkill" 
                      @keydown.enter.prevent="addSkill"
                      placeholder="Ajouter une compétence"
                      class="px-3 py-1 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500"
                    />
                    <button 
                      @click="addSkill" 
                      class="ml-2 p-1 rounded-full bg-terracotta-100 text-terracotta-600 hover:bg-terracotta-200 focus:outline-none"
                    >
                      <PlusIcon class="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <!-- Intérêts -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('dashboard.profile.interests') }}
                </label>
                <div class="flex flex-wrap gap-2">
                  <div 
                    v-for="(interest, index) in editedProfile.interests" 
                    :key="index"
                    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800"
                  >
                    {{ interest }}
                    <button 
                      v-if="editMode"
                      @click="removeInterest(index)" 
                      class="ml-1.5 text-amber-600 hover:text-amber-800 focus:outline-none"
                    >
                      <XIcon class="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div v-if="editMode" class="inline-flex items-center">
                    <input 
                      type="text" 
                      v-model="newInterest" 
                      @keydown.enter.prevent="addInterest"
                      placeholder="Ajouter un intérêt"
                      class="px-3 py-1 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                    />
                    <button 
                      @click="addInterest" 
                      class="ml-2 p-1 rounded-full bg-amber-100 text-amber-600 hover:bg-amber-200 focus:outline-none"
                    >
                      <PlusIcon class="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Sidebar -->
        <div>
          <!-- Statistiques du profil -->
          <div class="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 class="text-lg font-bold text-gray-800 mb-4">{{ $t('dashboard.profile.stats') }}</h2>
            
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500">{{ $t('dashboard.profile.profileViews') }}</span>
                <span class="text-sm font-medium text-gray-900">{{ profile.stats.views }}</span>
              </div>
              
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500">{{ $t('dashboard.profile.connections') }}</span>
                <span class="text-sm font-medium text-gray-900">{{ profile.stats.connections }}</span>
              </div>
              
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500">{{ $t('dashboard.profile.messages') }}</span>
                <span class="text-sm font-medium text-gray-900">{{ profile.stats.messages }}</span>
              </div>
              
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500">{{ $t('dashboard.profile.projectsViewed') }}</span>
                <span class="text-sm font-medium text-gray-900">{{ profile.stats.projectsViewed }}</span>
              </div>
            </div>
          </div>
          
          <!-- Paramètres du compte -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <h2 class="text-lg font-bold text-gray-800 mb-4">{{ $t('dashboard.profile.accountSettings') }}</h2>
            
            <div class="space-y-4">
              <button 
                class="flex items-center text-sm text-gray-700 hover:text-terracotta-600"
                @click="openChangePasswordModal"
              >
                <LockClosedIcon class="h-5 w-5 mr-2" />
                {{ $t('dashboard.profile.changePassword') }}
              </button>
              
              <button 
                class="flex items-center text-sm text-gray-700 hover:text-terracotta-600"
                @click="openNotificationsModal"
              >
                <BellIcon class="h-5 w-5 mr-2" />
                {{ $t('dashboard.profile.notificationSettings') }}
              </button>
              
              <button 
                class="flex items-center text-sm text-gray-700 hover:text-terracotta-600"
                @click="openPrivacyModal"
              >
                <ShieldCheckIcon class="h-5 w-5 mr-2" />
                {{ $t('dashboard.profile.privacySettings') }}
              </button>
              
              <button 
                class="flex items-center text-sm text-red-600 hover:text-red-700"
                @click="openDeleteAccountModal"
              >
                <TrashIcon class="h-5 w-5 mr-2" />
                {{ $t('dashboard.profile.deleteAccount') }}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Modals (à implémenter) -->
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, computed, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { 
    CameraIcon, XIcon, PlusIcon, LockClosedIcon, 
    BellIcon, ShieldCheckIcon, TrashIcon
  } from '@heroicons/vue/outline';
  
  const { t } = useI18n();
  
  // Données du profil (à remplacer par des données réelles)
  const profile = reactive({
    name: 'Amadou Diallo',
    role: t('dashboard.role.entrepreneur'),
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    firstName: 'Amadou',
    lastName: 'Diallo',
    email: 'amadou.diallo@example.com',
    phone: '+221 78 123 45 67',
    location: 'Dakar, Sénégal',
    bio: 'Entrepreneur passionné par les technologies agricoles innovantes. Fondateur de EcoFarm Sénégal, une plateforme qui aide les petits agriculteurs à optimiser leurs pratiques agricoles grâce à la technologie.',
    skills: ['Agriculture', 'Technologie', 'Gestion de projet', 'Marketing digital', 'Développement durable'],
    interests: ['Innovation', 'Écologie', 'Développement rural', 'IoT', 'Intelligence artificielle'],
    stats: {
      views: 245,
      connections: 48,
      messages: 24,
      projectsViewed: 37
    }
  });
  
  // Mode édition
  const editMode = ref(false);
  
  // Profil en cours d'édition
  const editedProfile = reactive({
    firstName: profile.firstName,
    lastName: profile.lastName,
    email: profile.email,
    phone: profile.phone,
    location: profile.location,
    bio: profile.bio,
    skills: [...profile.skills],
    interests: [...profile.interests]
  });
  
  // Nouvelles compétences et intérêts
  const newSkill = ref('');
  const newInterest = ref('');
  
  // Ajouter une compétence
  const addSkill = () => {
    if (newSkill.value.trim() && !editedProfile.skills.includes(newSkill.value.trim())) {
      editedProfile.skills.push(newSkill.value.trim());
      newSkill.value = '';
    }
  };
  
  // Supprimer une compétence
  const removeSkill = (index) => {
    editedProfile.skills.splice(index, 1);
  };
  
  // Ajouter un intérêt
  const addInterest = () => {
    if (newInterest.value.trim() && !editedProfile.interests.includes(newInterest.value.trim())) {
      editedProfile.interests.push(newInterest.value.trim());
      newInterest.value = '';
    }
  };
  
  // Supprimer un intérêt
  const removeInterest = (index) => {
    editedProfile.interests.splice(index, 1);
  };
  
  // Annuler les modifications
  const cancelEdit = () => {
    editedProfile.firstName = profile.firstName;
    editedProfile.lastName = profile.lastName;
    editedProfile.email = profile.email;
    editedProfile.phone = profile.phone;
    editedProfile.location = profile.location;
    editedProfile.bio = profile.bio;
    editedProfile.skills = [...profile.skills];
    editedProfile.interests = [...profile.interests];
    
    editMode.value = false;
  };
  
  // Sauvegarder les modifications
  const saveProfile = () => {
    profile.firstName = editedProfile.firstName;
    profile.lastName = editedProfile.lastName;
    profile.name = `${editedProfile.firstName} ${editedProfile.lastName}`;
    profile.email = editedProfile.email;
    profile.phone = editedProfile.phone;
    profile.location = editedProfile.location;
    profile.bio = editedProfile.bio;
    profile.skills = [...editedProfile.skills];
    profile.interests = [...editedProfile.interests];
    
    editMode.value = false;
  };
  
  // Fonctions pour les modals (à implémenter)
  const openProfilePhotoModal = () => {
    // Implémentation à venir
    console.log('Open profile photo modal');
  };
  
  const openCoverPhotoModal = () => {
    // Implémentation à venir
    console.log('Open cover photo modal');
  };
  
  const openChangePasswordModal = () => {
    // Implémentation à venir
    console.log('Open change password modal');
  };
  
  const openNotificationsModal = () => {
    // Implémentation à venir
    console.log('Open notifications modal');
  };
  
  const openPrivacyModal = () => {
    // Implémentation à venir
    console.log('Open privacy modal');
  };
  
  const openDeleteAccountModal = () => {
    // Implémentation à venir
    console.log('Open delete account modal');
  };
  </script>