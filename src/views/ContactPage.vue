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
              Contactez-nous
            </h1>
            <p class="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
              Nous sommes là pour répondre à vos questions et vous aider dans votre parcours entrepreneurial.
            </p>
          </div>
        </div>
        
        <!-- Formes décoratives inspirées de l'art africain -->
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 opacity-10 rounded-tr-full"></div>
        <div class="absolute top-20 right-10 w-40 h-40 bg-terracotta-500 opacity-10 rounded-full"></div>
      </div>
  
      <!-- Formulaire de contact et informations -->
      <section class="relative py-16 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-16">
            <!-- Formulaire de contact -->
            <div>
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-r from-terracotta-500 to-amber-500 rounded-2xl transform -rotate-1"></div>
                <div class="relative bg-white p-8 rounded-2xl shadow-xl">
                  <h2 class="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
                  <form @submit.prevent="submitForm" class="space-y-6">
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label for="first-name" class="block text-sm font-medium text-gray-700">
                          Prénom
                        </label>
                        <div class="mt-1">
                          <input id="first-name" name="first-name" type="text" v-model="form.firstName" required
                            class="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500" />
                        </div>
                      </div>
  
                      <div>
                        <label for="last-name" class="block text-sm font-medium text-gray-700">
                          Nom
                        </label>
                        <div class="mt-1">
                          <input id="last-name" name="last-name" type="text" v-model="form.lastName" required
                            class="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500" />
                        </div>
                      </div>
                    </div>
  
                    <div>
                      <label for="email" class="block text-sm font-medium text-gray-700">
                        Adresse email
                      </label>
                      <div class="mt-1">
                        <input id="email" name="email" type="email" v-model="form.email" required
                          class="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500" />
                      </div>
                    </div>
  
                    <div>
                      <label for="subject" class="block text-sm font-medium text-gray-700">
                        Sujet
                      </label>
                      <div class="mt-1">
                        <select id="subject" name="subject" v-model="form.subject" required
                          class="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500">
                          <option value="">Sélectionnez un sujet</option>
                          <option value="general">Question générale</option>
                          <option value="partnership">Partenariat</option>
                          <option value="investment">Investissement</option>
                          <option value="project">Soumission de projet</option>
                          <option value="support">Support technique</option>
                        </select>
                      </div>
                    </div>
  
                    <div>
                      <label for="message" class="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <div class="mt-1">
                        <textarea id="message" name="message" rows="4" v-model="form.message" required
                          class="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500"></textarea>
                      </div>
                    </div>
  
                    <div class="flex items-center">
                      <input id="privacy" name="privacy" type="checkbox" v-model="form.privacy" required
                        class="h-4 w-4 text-terracotta-600 focus:ring-terracotta-500 border-gray-300 rounded" />
                      <label for="privacy" class="ml-2 block text-sm text-gray-700">
                        J'accepte la <router-link to="/privacy-policy" class="text-terracotta-600 hover:text-terracotta-700">politique de confidentialité</router-link>
                      </label>
                    </div>
  
                    <div>
                      <button type="submit" 
                        class="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-terracotta-600 hover:bg-terracotta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500 transform transition hover:scale-105">
                        Envoyer le message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            <!-- Informations de contact -->
            <div class="mt-16 lg:mt-0">
              <div class="space-y-12">
                <div>
                  <h2 class="text-2xl font-bold text-gray-900">Nos coordonnées</h2>
                  <div class="mt-6 space-y-8">
                    <div class="flex items-start">
                      <div class="flex-shrink-0">
                        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-terracotta-500 text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <h3 class="text-lg font-medium text-gray-900">Adresse</h3>
                        <p class="mt-2 text-gray-600">
                          123 Avenue de l'Indépendance<br>
                          Dakar, Sénégal
                        </p>
                      </div>
                    </div>
                    
                    <div class="flex items-start">
                      <div class="flex-shrink-0">
                        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-terracotta-500 text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <h3 class="text-lg font-medium text-gray-900">Téléphone</h3>
                        <p class="mt-2 text-gray-600">
                          +221 78 123 45 67
                        </p>
                      </div>
                    </div>
                    
                    <div class="flex items-start">
                      <div class="flex-shrink-0">
                        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-terracotta-500 text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <h3 class="text-lg font-medium text-gray-900">Email</h3>
                        <p class="mt-2 text-gray-600">
                          contact@linkin-africa.com
                        </p>
                      </div>
                    </div>
                    
                    <div class="flex items-start">
                      <div class="flex-shrink-0">
                        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-terracotta-500 text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <h3 class="text-lg font-medium text-gray-900">Heures d'ouverture</h3>
                        <p class="mt-2 text-gray-600">
                          Lundi - Vendredi: 9h00 - 18h00<br>
                          Samedi: 9h00 - 13h00<br>
                          Dimanche: Fermé
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 class="text-2xl font-bold text-gray-900">Suivez-nous</h2>
                  <div class="mt-6 flex space-x-6">
                    <a href="#" class="text-gray-400 hover:text-terracotta-600">
                      <span class="sr-only">Facebook</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                      </svg>
                    </a>
  
                    <a href="#" class="text-gray-400 hover:text-terracotta-600">
                      <span class="sr-only">Instagram</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                      </svg>
                    </a>
  
                    <a href="#" class="text-gray-400 hover:text-terracotta-600">
                      <span class="sr-only">Twitter</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
  
                    <a href="#" class="text-gray-400 hover:text-terracotta-600">
                      <span class="sr-only">LinkedIn</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Carte -->
      <section class="relative py-16 overflow-hidden bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="inline-block mb-6">
              <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
              <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
            </div>
            <h2 class="text-3xl font-bold text-gray-900">Nous trouver</h2>
            <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Venez nous rendre visite dans nos bureaux à Dakar.
            </p>
          </div>
  
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-terracotta-500 to-amber-500 rounded-2xl transform -rotate-1"></div>
            <div class="relative rounded-2xl overflow-hidden shadow-xl h-96">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123857.91572951861!2d-17.544616950000002!3d14.7159711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0xb17c17d92d5db21f!2sDakar%2C%20Senegal!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
  
      <!-- FAQ Section -->
      <section class="relative py-16 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="inline-block mb-6">
              <div class="h-2 w-20 bg-terracotta-500 rounded-full mb-2 mx-auto"></div>
              <div class="h-2 w-12 bg-amber-500 rounded-full mx-auto"></div>
            </div>
            <h2 class="text-3xl font-bold text-gray-900">Questions fréquentes</h2>
            <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Consultez notre FAQ ou contactez-nous directement.
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
            
            <div class="text-center mt-12">
              <router-link to="/faq" class="inline-flex items-center text-terracotta-600 hover:text-terracotta-700 font-medium">
                Voir toutes les questions fréquentes
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
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
  import { ref } from 'vue';
  
  // État du formulaire
  const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    privacy: false
  });
  
  // Fonction de soumission du formulaire
  const submitForm = () => {
    // Ici, vous implémenteriez la logique d'envoi du formulaire
    console.log('Formulaire soumis:', form.value);
    
    // Réinitialisation du formulaire après soumission
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      privacy: false
    };
    
    // Affichage d'un message de confirmation (à remplacer par une notification plus élégante)
    alert('Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.');
  };
  
  // Données FAQ
  const faqs = [
    {
      question: "Comment puis-je soumettre mon projet sur LinkIn?",
      answer: "Pour soumettre votre projet, créez d'abord un compte sur notre plateforme. Ensuite, accédez à votre tableau de bord et cliquez sur 'Soumettre un projet'. Suivez les instructions pour remplir toutes les informations nécessaires sur votre projet."
    },
    {
      question: "Comment fonctionne le processus d'investissement?",
      answer: "Une fois que vous avez identifié un projet qui vous intéresse, vous pouvez contacter l'entrepreneur directement via notre plateforme ou cliquer sur 'Investir' pour indiquer votre intérêt. Notre équipe facilitera ensuite la mise en relation et vous guidera à travers le processus d'investissement."
    },
    {
      question: "Quels sont les frais associés à l'utilisation de LinkIn?",
      answer: "LinkIn propose différentes formules d'abonnement avec des fonctionnalités variées. Vous pouvez consulter notre page de tarification pour plus de détails. Pour les investisseurs, nous prélevons une commission sur les transactions réussies."
    }
  ];
  </script>