


<template>
  <div class="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
</script>