<template>
    <div class="bg-amber-50">
      <!-- Hero Section -->
      <div class="relative py-16 overflow-hidden">
        <!-- Arrière-plan avec motif africain -->
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100"></div>
          <div class="absolute inset-0 pattern-dots opacity-10"></div>
        </div>
        
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div class="text-center">
            <div class="inline-block mb-6">
              <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
              <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
            </div>
            <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
              Questions fréquentes
            </h1>
            <p class="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
              Trouvez des réponses aux questions les plus courantes sur LinkIn et notre écosystème entrepreneurial.
            </p>
          </div>
        </div>
        
        <!-- Formes décoratives inspirées de l'art africain -->
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 opacity-10 rounded-tr-full"></div>
        <div class="absolute top-20 right-10 w-40 h-40 bg-terracotta-500 opacity-10 rounded-full"></div>
      </div>
  
      <!-- Recherche FAQ -->
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div class="bg-white rounded-xl shadow-md p-4">
          <div class="relative">
            <input type="text" placeholder="Rechercher une question..." v-model="searchQuery"
              class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500" />
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Catégories FAQ -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-wrap justify-center gap-4">
          <button v-for="(category, index) in categories" :key="index"
                  @click="selectedCategory = category.id"
                  :class="[
                    'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                    selectedCategory === category.id 
                      ? 'bg-terracotta-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-terracotta-100 hover:text-terracotta-700'
                  ]">
            {{ category.name }}
          </button>
        </div>
      </div>
  
      <!-- Contenu FAQ -->
      <section class="relative py-8 overflow-hidden">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="space-y-8">
            <div v-for="(faq, index) in filteredFaqs" :key="index" class="bg-white rounded-xl shadow-md overflow-hidden">
              <div class="p-6">
                <div class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-8 w-8 rounded-full bg-terracotta-100 text-terracotta-600 font-bold">
                      Q
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-xl font-bold text-gray-900">{{ faq.question }}</h3>
                    <div class="mt-2 text-gray-600 space-y-4" v-html="faq.answer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Message si aucun résultat -->
          <div v-if="filteredFaqs.length === 0" class="text-center py-12">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-lg font-medium text-gray-900">Aucun résultat trouvé</h3>
            <p class="mt-2 text-gray-600">Essayez de modifier votre recherche ou de sélectionner une autre catégorie.</p>
          </div>
        </div>
      </section>
  
      <!-- Vous n'avez pas trouvé votre réponse? -->
      <section class="relative py-16 overflow-hidden bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="inline-block mb-6">
              <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
              <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
            </div>
            <h2 class="text-3xl font-bold text-gray-900">Vous n'avez pas trouvé votre réponse?</h2>
            <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Notre équipe est là pour vous aider. N'hésitez pas à nous contacter directement.
            </p>
            <div class="mt-8">
              <router-link to="/contact" class="inline-flex items-center bg-terracotta-600 text-white px-8 py-4 rounded-full hover:bg-terracotta-700 shadow-lg transform transition hover:scale-105">
                Contactez-nous
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  // État de recherche et filtrage
  const searchQuery = ref('');
  const selectedCategory = ref('all');
  
  // Catégories de FAQ
  const categories = [
    { id: 'all', name: 'Toutes les questions' },
    { id: 'general', name: 'Général' },
    { id: 'entrepreneurs', name: 'Entrepreneurs' },
    { id: 'investors', name: 'Investisseurs' },
    { id: 'mentors', name: 'Mentors' },
    { id: 'technical', name: 'Technique' },
    { id: 'billing', name: 'Facturation' }
  ];
  
  // Données FAQ
  const faqs = [
    {
      question: "Qu'est-ce que LinkIn?",
      answer: "LinkIn est une plateforme qui connecte les entrepreneurs africains avec des investisseurs et des mentors du monde entier. Notre mission est de faciliter l'accès au financement et à l'expertise pour les projets innovants en Afrique, contribuant ainsi au développement économique du continent.",
      category: "general"
    },
    {
      question: "Comment fonctionne LinkIn?",
      answer: "LinkIn fonctionne comme un écosystème entrepreneurial en ligne. Les entrepreneurs peuvent présenter leurs projets, les investisseurs peuvent découvrir des opportunités d'investissement, et les mentors peuvent partager leur expertise. Notre plateforme facilite les connexions, la communication et les transactions entre ces différents acteurs.",
      category: "general"
    },
    {
      question: "Comment puis-je créer un compte sur LinkIn?",
      answer: "Pour créer un compte sur LinkIn, cliquez sur le bouton 'S'inscrire' en haut à droite de la page d'accueil. Vous pouvez vous inscrire en tant qu'entrepreneur, investisseur ou mentor. Remplissez le formulaire avec vos informations personnelles et professionnelles, puis suivez les instructions pour compléter votre profil.",
      category: "general"
    },
    {
      question: "Comment puis-je soumettre mon projet sur LinkIn?",
      answer: "Pour soumettre votre projet, vous devez d'abord créer un compte en tant qu'entrepreneur. Une fois connecté, accédez à votre tableau de bord et cliquez sur 'Soumettre un projet'. Vous serez guidé à travers un processus en plusieurs étapes pour fournir toutes les informations nécessaires sur votre projet, y compris la description, le modèle économique, les besoins en financement, etc.",
      category: "entrepreneurs"
    },
    {
      question: "Quels types de projets peuvent être soumis sur LinkIn?",
      answer: "LinkIn accueille une grande variété de projets innovants basés en Afrique ou ayant un impact significatif sur le continent. Cela inclut, mais n'est pas limité à, des projets dans les domaines de la technologie, l'agriculture, l'éducation, la santé, l'énergie, la finance, etc. Les projets doivent être viables économiquement et avoir un potentiel de croissance et d'impact social ou environnemental.",
      category: "entrepreneurs"
    },
    {
      question: "Comment mon projet est-il évalué?",
      answer: "Chaque projet soumis est évalué par notre équipe selon plusieurs critères : innovation, viabilité économique, potentiel de croissance, impact social et environnemental, qualité de l'équipe, etc. Cette évaluation nous permet de mettre en avant les projets les plus prometteurs pour les investisseurs et mentors de notre plateforme.",
      category: "entrepreneurs"
    },
    {
      question: "Comment puis-je investir dans un projet sur LinkIn?",
      answer: "Pour investir dans un projet, vous devez d'abord créer un compte en tant qu'investisseur. Une fois connecté, vous pouvez parcourir les projets disponibles et contacter directement les entrepreneurs qui vous intéressent. Vous pouvez également cliquer sur 'Investir' sur la page d'un projet pour indiquer votre intérêt. Notre équipe facilitera ensuite la mise en relation et vous guidera à travers le processus d'investissement.",
      category: "investors"
    },
    {
      question: "Quels sont les montants minimums d'investissement?",
      answer: "Les montants minimums d'investissement varient selon les projets. Certains projets acceptent des investissements à partir de 1 000 €, tandis que d'autres peuvent avoir des seuils plus élevés. Chaque entrepreneur définit ses propres conditions d'investissement, que vous pouvez consulter sur la page du projet.",
      category: "investors"
    },
    {
      question: "Comment LinkIn assure-t-il la sécurité des investissements?",
      answer: "LinkIn effectue une vérification préalable de tous les projets et entrepreneurs présents sur la plateforme. Nous vérifions l'identité des entrepreneurs, la légalité de leur entreprise, et la viabilité de leur projet. Cependant, comme pour tout investissement, il existe des risques inhérents. Nous recommandons aux investisseurs de faire leur propre diligence raisonnable avant d'investir.",
      category: "investors"
    },
    {
      question: "Comment puis-je devenir mentor sur LinkIn?",
      answer: "Pour devenir mentor, créez un compte en tant que mentor sur notre plateforme. Complétez votre profil en détaillant votre expertise, votre expérience et les domaines dans lesquels vous souhaitez accompagner les entrepreneurs. Une fois votre profil validé par notre équipe, vous pourrez commencer à mentorer des entrepreneurs.",
      category: "mentors"
    },
    {
      question: "Quels sont les avantages de devenir mentor?",
      answer: "En tant que mentor, vous contribuez au développement de l'écosystème entrepreneurial africain tout en élargissant votre réseau professionnel. Vous avez l'opportunité de partager votre expertise, de découvrir des projets innovants en avant-première, et potentiellement d'identifier des opportunités d'investissement intéressantes.",
      category: "mentors"
    },
    {
      question: "Comment se déroule le mentorat sur LinkIn?",
      answer: "Le mentorat peut prendre différentes formes selon vos préférences et celles des entrepreneurs : sessions individuelles en ligne, conseils par messagerie, révision de documents, etc. Vous définissez votre disponibilité et les modalités de votre accompagnement. Notre plateforme facilite la mise en relation et la communication entre mentors et entrepreneurs.",
      category: "mentors"
    },
    {
      question: "Comment puis-je réinitialiser mon mot de passe?",
      answer: "Si vous avez oublié votre mot de passe, cliquez sur 'Se connecter', puis sur 'Mot de passe oublié?'. Entrez l'adresse email associée à votre compte et suivez les instructions envoyées par email pour réinitialiser votre mot de passe.",
      category: "technical"
    },
    {
      question: "Comment puis-je modifier mon profil?",
      answer: "Pour modifier votre profil, connectez-vous à votre compte, cliquez sur votre nom d'utilisateur en haut à droite, puis sélectionnez 'Profil'. Vous pourrez alors modifier vos informations personnelles, professionnelles, et vos préférences.",
      category: "technical"
    },
    {
      question: "Comment puis-je contacter le support technique?",
      answer: "Pour contacter notre support technique, vous pouvez envoyer un email à support@linkin-africa.com ou utiliser le formulaire de contact disponible sur notre site. Notre équipe vous répondra dans les plus brefs délais, généralement sous 24 heures ouvrables.",
      category: "technical"
    },
    {
      question: "Quels sont les frais d'utilisation de LinkIn?",
      answer: "LinkIn propose différentes formules d'abonnement adaptées aux besoins des entrepreneurs, investisseurs et mentors. Vous pouvez consulter notre page de tarification pour plus de détails sur les fonctionnalités et les prix de chaque formule.",
      category: "billing"
    },
    {
      question: "Comment puis-je mettre à jour mes informations de paiement?",
      answer: "Pour mettre à jour vos informations de paiement, connectez-vous à votre compte, accédez à 'Paramètres', puis 'Facturation'. Vous pourrez y modifier vos coordonnées bancaires, votre carte de crédit, ou tout autre moyen de paiement associé à votre compte.",
      category: "billing"
    },
    {
      question: "Comment puis-je obtenir une facture?",
      answer: "Les factures sont automatiquement générées et envoyées par email après chaque paiement. Vous pouvez également les retrouver dans la section 'Facturation' de votre compte. Si vous avez besoin d'une facture spécifique ou si vous avez des questions concernant votre facturation, contactez notre service client.",
      category: "billing"
    }
  ];
  
  // Filtrage des FAQs en fonction de la recherche et de la catégorie sélectionnée
  const filteredFaqs = computed(() => {
    let result = [...faqs];
    
    // Filtrage par catégorie
    if (selectedCategory !== 'all') {
      result = result.filter(faq => faq.category === selectedCategory);
    }
    
    // Filtrage par recherche
    if (searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase();
      result = result.filter(faq => 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query)
      );
    }
    
    return result;
  });
  </script>