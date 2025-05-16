<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center p-2 rounded-md text-gray-500 hover:text-terracotta-600 hover:bg-amber-50 focus:outline-none"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <span class="h-5 w-5 flex items-center justify-center">🌐</span>
      <span class="ml-1 text-sm hidden md:inline-block">{{
        currentLanguageLabel
      }}</span>
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50"
    >
      <div class="py-1">
        <button
          v-for="lang in languages"
          :key="lang.code"
          @click="changeLanguage(lang.code)"
          class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-terracotta-600 flex items-center"
          :class="{
            'bg-amber-50 text-terracotta-600': currentLocale === lang.code,
          }"
        >
          <span class="w-6 h-6 flex items-center justify-center mr-2">{{
            lang.flag
          }}</span>
          {{ lang.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { setTextDirection } from "@/i18n";

// Interface pour les langues
interface Language {
  code: string;
  label: string;
  flag: string;
}

const { locale } = useI18n();
const isOpen = ref(false);
const savedLocale = localStorage.getItem("user-locale") || ""; // Initialize savedLocale

const languages: Language[] = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "sw", label: "Kiswahili", flag: "🇹🇿" },
];

const currentLocale = computed(() => locale.value);

const currentLanguageLabel = computed(() => {
  const lang = languages.find((l) => l.code === currentLocale.value);
  return lang ? lang.label : "Français";
});

const changeLanguage = (langCode: string) => {
  locale.value = langCode;
  setTextDirection(langCode);
  localStorage.setItem("user-locale", langCode);
  isOpen.value = false;
};

// Fermer le menu lorsqu'on clique en dehors
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (isOpen.value && !target.closest(".relative")) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);

  // Charger la langue depuis le localStorage si disponible
  if (savedLocale && languages.some((l) => l.code === savedLocale)) {
    locale.value = savedLocale;
    setTextDirection(savedLocale);
  }
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
