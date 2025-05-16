<template>
  <nav
    class="bg-white bg-opacity-80 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
            <div
              class="h-10 w-10 rounded-full bg-terracotta-600 flex items-center justify-center"
            >
              <span class="text-white font-bold">L</span>
            </div>
            <span class="ml-2 text-xl font-bold text-terracotta-700"
              >LinkIn</span
            >
          </router-link>
        </div>
        <nav class="hidden md:flex space-x-8">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="text-terracotta-600 hover:text-terracotta-900 font-medium"
            :class="{
              'text-terracotta-700 font-semibold': isActive(item.path),
            }"
          >
            {{ item.label }}
          </router-link>
        </nav>
        <div>
          <template v-if="isLoggedIn">
            <router-link 
              to="/dashboard" 
              class="px-4 py-2 rounded-md text-white bg-terracotta-600 hover:bg-terracotta-700 transition-colors"
            >
              {{ $t('navbar.dashboard') }}
            </router-link>
            
            <div class="relative ml-3">
              <button 
                @click="isProfileMenuOpen = !isProfileMenuOpen" 
                class="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500"
              >
                <!--<img class="h-8 w-8 rounded-full" src="/placeholder-avatar.jpg" alt="User avatar" />-->
              </button>
              
              <div 
                v-if="isProfileMenuOpen" 
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
              >
                <router-link 
                  to="/dashboard/profile" 
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {{ $t('navbar.profile') }}
                </router-link>
                <button 
                  @click="logout" 
                  class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {{ $t('navbar.logout') }}
                </button>
              </div>
            </div>
          </template>
          
          <template v-else>
            <router-link 
              to="/login" 
              class="px-4 py-2 rounded-md text-terracotta-600 hover:text-terracotta-700 transition-colors"
            >
              {{ $t('navbar.login') }}
            </router-link>
            
            <router-link 
              to="/signup" 
              class="px-4 py-2 rounded-md text-white bg-terracotta-600 hover:bg-terracotta-700 transition-colors"
            >
              {{ $t('navbar.signup') }}
            </router-link>
          </template>
          <!-- ... autres éléments ... -->
        </div>
        <div class="flex items-center md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-terracotta-600"
          >
            <svg
              v-if="!mobileMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden">
      <div
        class="px-2 pt-2 pb-3 space-y-1 bg-white bg-opacity-90 backdrop-blur-sm"
      >
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="block px-3 py-2 rounded-md text-base font-medium text-terracotta-600 hover:text-terracotta-900 hover:bg-amber-50"
          :class="{
            'bg-amber-50 text-terracotta-700 font-semibold': isActive(
              item.path
            ),
          }"
          @click="mobileMenuOpen = false"
        >
          {{ item.label }}
        </router-link>
        <div class="pt-4 pb-3 border-t border-amber-200">
          <div class="flex items-center px-5 space-x-3">
            <router-link
              to="/login"
              class="block text-base font-medium text-terracotta-700 hover:text-terracotta-900"
              @click="mobileMenuOpen = false"
            >
              Connexion
            </router-link>
            <router-link
              to="/signup"
              class="block text-base font-medium text-white bg-terracotta-600 px-4 py-2 rounded-full hover:bg-terracotta-700"
              @click="mobileMenuOpen = false"
            >
              Inscription
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const mobileMenuOpen = ref(false);

// Simuler un état de connexion (à remplacer par votre logique d'authentification)
const isLoggedIn = ref(true);
const navItems = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/about" },
  { label: "Projets", path: "/projects" },
  { label: "Tarification", path: "/pricing" },
  { label: "Blog", path: "/blog" },
  { label: "Partenaires", path: "/partners" },
];

const isActive = (path) => {
  return route.path === path;
};
</script>
