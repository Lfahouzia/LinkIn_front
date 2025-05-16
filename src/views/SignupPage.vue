<template>
    <div class="relative min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 overflow-hidden">
      <!-- Arrière-plan avec motif africain -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100"></div>
        <div class="absolute inset-0 pattern-tribal opacity-5"></div>
        
        <!-- Formes décoratives inspirées de l'art africain -->
        <div class="absolute top-0 left-0 w-64 h-64 bg-terracotta-500 opacity-10 rounded-br-full"></div>
        <div class="absolute bottom-0 right-0 w-64 h-64 bg-amber-500 opacity-10 rounded-tl-full"></div>
      </div>
  
      <div class="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div class="flex justify-center">
          <div class="h-16 w-16 rounded-full bg-terracotta-600 flex items-center justify-center">
            <span class="text-white text-2xl font-bold">L</span>
          </div>
        </div>
        <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
          Créer un compte
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Ou
          <router-link to="/login" class="font-medium text-terracotta-600 hover:text-terracotta-700">
            connectez-vous à votre compte existant
          </router-link>
        </p>
      </div>
  
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div class="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 relative overflow-hidden">
          <!-- Motif décoratif -->
          <div class="absolute top-0 right-0 w-24 h-24 bg-amber-500 opacity-5 rounded-bl-full -mt-6 -mr-6"></div>
          <div class="absolute bottom-0 left-0 w-24 h-24 bg-terracotta-500 opacity-5 rounded-tr-full -mb-6 -ml-6"></div>
          
          <form class="space-y-6" @submit.prevent="handleSignup">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label for="first-name" class="block text-sm font-medium text-gray-700">
                  Prénom
                </label>
                <div class="mt-1">
                  <input id="first-name" name="first-name" type="text" autocomplete="given-name" required v-model="firstName"
                    class="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500" />
                </div>
              </div>
  
              <div>
                <label for="last-name" class="block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <div class="mt-1">
                  <input id="last-name" name="last-name" type="text" autocomplete="family-name" required v-model="lastName"
                    class="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500" />
                </div>
              </div>
            </div>
  
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                Adresse email
              </label>
              <div class="mt-1">
                <input id="email" name="email" type="email" autocomplete="email" required v-model="email"
                  class="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500" />
              </div>
            </div>
  
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <div class="mt-1">
                <input id="password" name="password" type="password" autocomplete="new-password" required v-model="password"
                  class="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500" />
              </div>
            </div>
  
            <div>
              <label for="user-type" class="block text-sm font-medium text-gray-700">
                Je suis un(e)
              </label>
              <div class="mt-1">
                <select id="user-type" name="user-type" required v-model="userType"
                  class="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500">
                  <option value="">Sélectionnez votre profil</option>
                  <option value="entrepreneur">Entrepreneur</option>
                  <option value="investor">Investisseur</option>
                  <option value="mentor">Mentor</option>
                </select>
              </div>
            </div>
  
            <div class="flex items-center">
              <input id="terms" name="terms" type="checkbox" required v-model="agreeToTerms"
                class="h-4 w-4 text-terracotta-600 focus:ring-terracotta-500 border-gray-300 rounded" />
              <label for="terms" class="ml-2 block text-sm text-gray-700">
                J'accepte les <a href="#" class="text-terracotta-600 hover:text-terracotta-700">conditions d'utilisation</a> et la <a href="#" class="text-terracotta-600 hover:text-terracotta-700">politique de confidentialité</a>
              </label>
            </div>
  
            <div>
              <button type="submit" 
                class="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-terracotta-600 hover:bg-terracotta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500 transform transition hover:scale-105">
                S'inscrire
              </button>
            </div>
          </form>
  
          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">
                  Ou s'inscrire avec
                </span>
              </div>
            </div>
  
            <div class="mt-6 grid grid-cols-3 gap-3">
              <div>
                <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
              </div>
  
              <div>
                <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
  
              <div>
                <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const password = ref('');
  const userType = ref('');
  const agreeToTerms = ref(false);
  
  onMounted(() => {
    // This is just to ensure the component is mounted and the router is available.
  });
  
  const handleSignup = () => {
    // Ici, vous implémenteriez la logique d'inscription réelle
    console.log('Tentative d\'inscription avec:', { 
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value, 
      password: password.value,
      userType: userType.value,
      agreeToTerms: agreeToTerms.value
    });
    
    // Simulation d'une inscription réussie
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };
  </script>