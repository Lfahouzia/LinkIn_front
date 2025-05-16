  
  ```vue project="LinkIn Platform" file="src/views/PricingPage.vue" type="vue"```
<template>
    <div class="bg-amber-50">
      <!-- Hero Section -->
      <div class="relative py-16 overflow-hidden">
        <!-- Arrière-plan avec motif africain -->
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100"></div>
          <div class="absolute inset-0 pattern-zigzag opacity-10"></div>
        </div>
        
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div class="text-center">
            <div class="inline-block mb-6">
              <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
              <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
            </div>
            <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
              Des plans adaptés à vos besoins
            </h1>
            <p class="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
              Que vous soyez entrepreneur, investisseur ou mentor, nous avons une offre qui vous correspond.
            </p>
          </div>
        </div>
        
        <!-- Formes décoratives inspirées de l'art africain -->
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 opacity-10 rounded-tr-full"></div>
        <div class="absolute top-20 right-10 w-40 h-40 bg-terracotta-500 opacity-10 rounded-full"></div>
      </div>
  
      <!-- Toggle Annuel/Mensuel -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 mb-12">
        <div class="flex justify-center">
          <div class="relative bg-white p-1 rounded-full flex z-0 shadow-sm">
            <button @click="billingCycle = 'monthly'" 
                    :class="[billingCycle === 'monthly' ? 'bg-terracotta-600 text-white' : 'text-gray-700 hover:text-terracotta-700', 'relative w-32 rounded-full py-2 text-sm font-medium transition-colors duration-300 focus:outline-none']">
              Mensuel
            </button>
            <button @click="billingCycle = 'annual'" 
                    :class="[billingCycle === 'annual' ? 'bg-terracotta-600 text-white' : 'text-gray-700 hover:text-terracotta-700', 'relative w-32 rounded-full py-2 text-sm font-medium transition-colors duration-300 focus:outline-none']">
              Annuel <span class="text-xs">(économisez 20%)</span>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Plans de tarification -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pb-20">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Plan Gratuit -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform"></div>
            <div class="relative bg-white rounded-2xl shadow-md overflow-hidden h-full transform group-hover:scale-[1.01] transition-transform">
              <div class="p-8">
                <h3 class="text-2xl font-bold text-gray-900">Gratuit</h3>
                <p class="mt-4 text-gray-600">Parfait pour découvrir la plateforme</p>
                <div class="mt-6 flex items-baseline">
                  <span class="text-5xl font-extrabold text-gray-900">0€</span>
                  <span class="ml-1 text-xl font-medium text-gray-500">/mois</span>
                </div>
                <ul class="mt-8 space-y-4">
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-gray-700">Profil de base</p>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-gray-700">Accès limité aux projets</p>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-gray-700">3 messages par mois</p>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-gray-700">Support par email</p>
                  </li>
                </ul>
                <div class="mt-8">
                  <router-link to="/signup" class="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-terracotta-700 bg-terracotta-100 hover:bg-terracotta-200 transition">
                    Commencer gratuitement
                  </router-link>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Plan Pro -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-terracotta-500 to-amber-500 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform"></div>
            <div class="relative bg-white rounded-2xl shadow-md overflow-hidden h-full transform group-hover:scale-[1.01] transition-transform">
              <div class="absolute top-0 right-0 bg-terracotta-600 text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
                Populaire
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-bold text-gray-900">Pro</h3>
                <p class="mt-4 text-gray-600">Idéal pour les entrepreneurs actifs</p>
                <div class="mt-6 flex items-baseline">
                  <span class="text-5xl font-extrabold text-gray-900">{{ billingCycle === 'monthly' ? '29€' : '279€' }}</span>
                  <span class="ml-1 text-xl font-medium text-gray-500">{{ billingCycle === 'monthly' ? '/mois' : '/an' }}</span>
                </div>
                <ul class="mt-8 space-y-4">
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-gray-700">Profil professionnel</p>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-gray-700">Accès complet aux projets</p>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-gray-700">Messages illimités</p>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-gray-700">Publication de 3 projets</p>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-gray-700">Support prioritaire</p>
                  </li>
                </ul>
                <div class="mt-8">
                  <router-link to="/signup" class="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-terracotta-600 hover:bg-terracotta-700 transition shadow-md transform hover:scale-105">
                    S'abonner
                  </router-link>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Plan Business -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform"></div>
            <div class="relative bg-white rounded-2xl shadow-md overflow-hidden h-full transform group-hover:scale-[1.01] transition-transform">
              <div class="p-8">
                <h3 class="text-2xl font-bold text-gray-900">Business</h3>
                <p class="mt-4 text-gray-600">Pour les investisseurs et entreprises</p>
                <div class="mt-6 flex items-baseline">
                  <span class="text-5xl font-extrabold text-gray-900">{{ billingCycle === 'monthly' ? '99€' : '949€' }}</span>
                  <span class="ml-1 text-xl font-medium text-gray-500">{{ billingCycle === 'monthly' ? '/mois' : '/an' }}</span>
                </div>
                <ul class="mt-8 space-y-4">
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-gray-700">Profil entreprise premium</p>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-gray-700">Accès VIP aux projets</p>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-gray-700">Messages et appels illimités</p>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-gray-700">Publication de projets illimitée</p>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-gray-700">Gestionnaire de compte dédié</p>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-gray-700">Rapports analytiques avancés</p>
                  </li>
                </ul>
                <div class="mt-8">
                  <router-link to="/signup" class="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-amber-700 bg-amber-100 hover:bg-amber-200 transition">
                    S'abonner
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
     <!-- FAQ Section -->
      <section class="relative py-16 overflow-hidden bg-white">
        <div class="absolute inset-0 pattern-dots opacity-10"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center mb-16">
            <div class="inline-block mb-6">
              <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
              <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
            </div>
            <h2 class="text-3xl font-bold text-gray-900">Questions fréquentes</h2>
            <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur nos offres et abonnements.
            </p>
          </div>
  
          <div class="max-w-3xl mx-auto">
            <div v-for="(faq, index) in faqs" :key="index" class="mb-8">
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <div class="flex items-center justify-center h-8 w-8 rounded-full bg-terracotta-100 text-terracotta-600 font-bold">
                    Q
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-xl font-bold text-gray-900">{{ faq.question }}</h3>
                  <p class="mt-2 text-gray-600">{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA Section -->
      <section class="relative py-20 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-terracotta-700 to-amber-700">
          <div class="absolute inset-0 pattern-tribal opacity-10"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-white sm:text-4xl">
              Besoin d'une solution personnalisée?
            </h2>
            <p class="mt-4 max-w-2xl text-xl text-amber-100 mx-auto">
              Contactez notre équipe pour discuter de vos besoins spécifiques.
            </p>
            <div class="mt-8">
              <a href="#" class="inline-flex items-center bg-white text-terracotta-700 px-8 py-4 rounded-full hover:bg-amber-50 shadow-lg transform transition hover:scale-105">
                Nous contacter
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const billingCycle = ref('monthly');
  
  // FAQ data
  const faqs = [
    {
      question: "Puis-je changer de plan à tout moment?",
      answer: "Oui, vous pouvez passer à un plan supérieur à tout moment. Si vous souhaitez passer à un plan inférieur, le changement prendra effet à la fin de votre période de facturation en cours."
    },
    {
      question: "Comment fonctionne la facturation annuelle?",
      answer: "Avec la facturation annuelle, vous payez pour une année complète à l'avance et bénéficiez d'une réduction de 20% par rapport au tarif mensuel. Votre abonnement sera automatiquement renouvelé à la fin de l'année, sauf si vous le résiliez avant."
    },
    {
      question: "Y a-t-il une période d'essai?",
      answer: "Oui, nous offrons une période d'essai de 14 jours pour les plans Pro et Business. Vous pouvez annuler à tout moment pendant cette période et vous ne serez pas facturé."
    },
    {
      question: "Quels modes de paiement acceptez-vous?",
      answer: "Nous acceptons les cartes de crédit (Visa, Mastercard, American Express), PayPal, et pour certains pays africains, les paiements mobiles comme M-Pesa et Orange Money."
    },
    {
      question: "Puis-je obtenir une facture pour mon entreprise?",
      answer: "Oui, toutes les transactions génèrent automatiquement une facture que vous pouvez télécharger depuis votre tableau de bord. Si vous avez besoin d'informations spécifiques sur la facture, contactez notre service client."
    }
  ];
  </script>