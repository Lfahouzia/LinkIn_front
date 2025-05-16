<template>
    <div class="bg-amber-50 min-h-screen">
      <!-- Layout du Dashboard -->
      <div class="flex">
        <!-- Sidebar -->
        <DashboardSidebar :is-open="isSidebarOpen" @toggle="toggleSidebar" />
        
        <!-- Contenu principal -->
        <div class="flex-1 transition-all duration-300" :class="{ 'ml-64': isSidebarOpen, 'ml-20': !isSidebarOpen }">
          <!-- Header -->
          <DashboardHeader @toggle-sidebar="toggleSidebar" :is-sidebar-open="isSidebarOpen" />
          
          <!-- Contenu principal -->
          <main class="p-6">
            <router-view />
          </main>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import DashboardSidebar from '@/components/dashboard/DashboardSidebar.vue';
  import DashboardHeader from '@/components/dashboard/DashboardHeader.vue';
  
  const isSidebarOpen = ref(true);
  
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };
  </script>