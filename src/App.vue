<template>
  <div :class="{ 'dark': isDarkMode }">
    <!-- Afficher la navbar seulement si on n'est pas sur le dashboard -->
    <Navbar v-if="!isDashboardRoute" />
    
    <!-- Contenu principal -->
    <router-view />
    
    <!-- Afficher le footer standard seulement si on n'est pas sur le dashboard -->
    <Footer v-if="!isDashboardRoute" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '@/components/layout/Navbar.vue';
import Footer from '@/components/layout/Footer.vue';

const route = useRoute();

// Gestion du thème global (pour les pages hors dashboard)
const isDarkMode = ref(false);

// Vérifier si la route actuelle est dans le dashboard
const isDashboardRoute = computed(() => {
  return route.path.startsWith('/dashboard');
});

// Charger le thème depuis localStorage au chargement
onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDarkMode.value = true;
    document.documentElement.classList.add('dark');
  } else if (savedTheme === 'light') {
    isDarkMode.value = false;
    document.documentElement.classList.remove('dark');
  } else {
    // Si aucun thème n'est enregistré, utiliser la préférence du système
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark');
    }
  }
});

// Observer les changements de thème
watch(isDarkMode, (newVal) => {
  localStorage.setItem('theme', newVal ? 'dark' : 'light');
  if (newVal) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, { immediate: true });
</script>