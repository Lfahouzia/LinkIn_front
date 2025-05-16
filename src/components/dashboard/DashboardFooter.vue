<template>
    <footer class="py-2 px-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-400">
      <div class="flex justify-between items-center">
        <div>
          &copy; {{ new Date().getFullYear() }} LinkIn. {{ $t('dashboard.footer.rights') }}
        </div>
        <div class="flex space-x-4">
          <router-link to="/" class="hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors">
            {{ $t('dashboard.footer.backToSite') }}
          </router-link>
          <a href="#" class="hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors">
            {{ $t('dashboard.footer.help') }}
          </a>
          <a href="#" class="hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors">
            {{ $t('dashboard.footer.privacy') }}
          </a>
        </div>
      </div>
    </footer>
  </template>