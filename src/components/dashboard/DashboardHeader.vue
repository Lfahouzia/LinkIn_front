<template>
    <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
      <div class="flex items-center justify-between h-16 px-6">
        <!-- Bouton toggle sidebar -->
        <button 
          @click="$emit('toggle-sidebar')" 
          class="p-2 rounded-md text-gray-500 hover:text-terracotta-600 hover:bg-amber-50 focus:outline-none"
        >
          <MenuIcon v-if="!isSidebarOpen" class="h-6 w-6" />
          <XIcon v-else class="h-6 w-6" />
        </button>
        
        <!-- Titre de la page -->
        <h1 class="text-xl font-bold text-gray-800">{{ pageTitle }}</h1>
        
        <!-- Actions à droite -->
        <div class="flex items-center space-x-4">
          <!-- Sélecteur de langue -->
          <LanguageSelector />
          
          <!-- Notifications -->
          <div class="relative">
            <button class="p-2 rounded-md text-gray-500 hover:text-terracotta-600 hover:bg-amber-50 focus:outline-none">
              <BellIcon class="h-6 w-6" />
              <span v-if="notificationCount > 0" class="absolute top-0 right-0 h-5 w-5 rounded-full bg-terracotta-600 text-white text-xs flex items-center justify-center">
                {{ notificationCount }}
              </span>
            </button>
          </div>
          
          <!-- Messages -->
          <div class="relative">
            <button class="p-2 rounded-md text-gray-500 hover:text-terracotta-600 hover:bg-amber-50 focus:outline-none">
              <ChatAltIcon class="h-6 w-6" />
              <span v-if="messageCount > 0" class="absolute top-0 right-0 h-5 w-5 rounded-full bg-terracotta-600 text-white text-xs flex items-center justify-center">
                {{ messageCount }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  import { MenuIcon, XIcon, BellIcon, ChatAltIcon } from '@heroicons/vue/outline';
  import LanguageSelector from '@/components/ui/LanguageSelector.vue';
  
  const props = defineProps({
    isSidebarOpen: {
      type: Boolean,
      default: true
    }
  });
  
  const emit = defineEmits(['toggle-sidebar']);
  
  const route = useRoute();
  const { t } = useI18n();
  
  // Titre de la page basé sur la route
  const pageTitle = computed(() => {
    const routeMap = {
      '/dashboard': t('dashboard.title.home'),
      '/dashboard/statistics': t('dashboard.title.statistics'),
      '/dashboard/profile': t('dashboard.title.profile'),
      '/dashboard/projects': t('dashboard.title.projects'),
      '/dashboard/subscriptions': t('dashboard.title.subscriptions'),
      '/dashboard/investments': t('dashboard.title.investments'),
      '/dashboard/favorites': t('dashboard.title.favorites'),
      '/dashboard/recommendations': t('dashboard.title.recommendations'),
      '/dashboard/settings': t('dashboard.title.settings'),
    };
    
    return routeMap[route.path] || t('dashboard.title.default');
  });
  
  // Nombre de notifications (à remplacer par des données réelles)
  const notificationCount = computed(() => 3);
  
  // Nombre de messages (à remplacer par des données réelles)
  const messageCount = computed(() => 5);
  </script>