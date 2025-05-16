<template>
  <aside 
    class="bg-white shadow-lg fixed h-full transition-all duration-300 z-20 border-r border-gray-200"
    :class="{ 'w-64': isOpen, 'w-20': !isOpen }"
  >
    <!-- Logo -->
    <div class="flex items-center justify-center h-16 border-b border-gray-200">
      <router-link to="/dashboard" class="flex items-center">
        <!-- <img src="/logo.svg" alt="LinkIn" class="h-8 w-8" /> -->
        <span v-if="isOpen" class="ml-2 text-xl font-bold text-terracotta-600">LinkIn</span>
      </router-link>
    </div>
    
    <!-- Menu -->
    <nav class="mt-6">
      <ul class="space-y-2 px-2">
        <li v-for="(item, index) in menuItems" :key="index">
          <router-link 
            :to="item.path" 
            class="flex items-center p-3 rounded-lg transition-colors hover:bg-amber-50 group"
            :class="{ 
              'justify-center': !isOpen,
              'bg-amber-50 text-terracotta-600': isActive(item.path),
              'text-gray-700': !isActive(item.path)
            }"
          >
            <component :is="item.icon" class="h-5 w-5" :class="{ 'text-terracotta-600': isActive(item.path) }" />
            <span v-if="isOpen" class="ml-3">{{ $t(item.label) }}</span>
            <span v-else class="sr-only">{{ $t(item.label) }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
    
    <!-- Profil utilisateur (version réduite) -->
    <div class="absolute bottom-0 w-full border-t border-gray-200 p-4">
      <router-link to="/dashboard/profile" class="flex items-center">
        <img 
          :src="userAvatar" 
          alt="Photo de profil" 
          class="h-10 w-10 rounded-full object-cover border-2 border-terracotta-500"
        />
        <div v-if="isOpen" class="ml-3">
          <p class="text-sm font-medium text-gray-700">{{ userName }}</p>
          <p class="text-xs text-gray-500">{{ userRole }}</p>
        </div>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { 
  HomeIcon, ChartBarIcon, UserIcon, BriefcaseIcon, 
  HeartIcon, CogIcon, LogoutIcon, LightBulbIcon,
  UserGroupIcon, CurrencyDollarIcon
} from '@heroicons/vue/outline';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['toggle']);

const route = useRoute();
const { t } = useI18n();

// Données utilisateur (à remplacer par des données réelles)
const userName = computed(() => 'Amadou Diallo');
const userRole = computed(() => t('dashboard.role.entrepreneur'));
const userAvatar = computed(() => 'https://randomuser.me/api/portraits/men/32.jpg');

// Vérifier si un lien est actif
const isActive = (path) => {
  return route.path === path || route.path.startsWith(path + '/');
};

// Éléments du menu
const menuItems = computed(() => {
  // Menu commun
  const commonItems = [
    { label: 'dashboard.menu.home', path: '/dashboard', icon: HomeIcon },
    { label: 'dashboard.menu.statistics', path: '/dashboard/statistics', icon: ChartBarIcon },
    { label: 'dashboard.menu.profile', path: '/dashboard/profile', icon: UserIcon },
  ];
  
  // Menu spécifique au rôle (à adapter selon le rôle de l'utilisateur)
  const roleSpecificItems = userRole.value === t('dashboard.role.entrepreneur')
    ? [
        { label: 'dashboard.menu.projects', path: '/dashboard/projects', icon: BriefcaseIcon },
        { label: 'dashboard.menu.subscriptions', path: '/dashboard/subscriptions', icon: CurrencyDollarIcon },
      ]
    : [
        { label: 'dashboard.menu.investments', path: '/dashboard/investments', icon: LightBulbIcon },
        { label: 'dashboard.menu.favorites', path: '/dashboard/favorites', icon: HeartIcon },
        { label: 'dashboard.menu.recommendations', path: '/dashboard/recommendations', icon: UserGroupIcon },
      ];
  
  // Menu de bas de page
  const bottomItems = [
    { label: 'dashboard.menu.settings', path: '/dashboard/settings', icon: CogIcon },
    { label: 'dashboard.menu.logout', path: '/logout', icon: LogoutIcon },
  ];
  
  return [...commonItems, ...roleSpecificItems, ...bottomItems];
});
</script>