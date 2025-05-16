import { createI18n } from 'vue-i18n';
import fr from './locales/fr.json';
import en from './locales/en.json';
import sw from "./locales/sw.json";

// Types pour l'internationalisation
type MessageSchema = typeof fr;
type DateTimeFormats = {
  [key: string]: {
    short: Intl.DateTimeFormatOptions;
    long: Intl.DateTimeFormatOptions;
  };
};
type NumberFormats = {
  [key: string]: {
    currency: Intl.NumberFormatOptions;
    decimal: Intl.NumberFormatOptions;
    percent: Intl.NumberFormatOptions;
  };
};

// Détection de la langue du navigateur
const getBrowserLocale = (): string => {
  const navigatorLocale = navigator.languages !== undefined 
    ? navigator.languages[0] 
    : navigator.language;

  if (!navigatorLocale) {
    return 'fr';
  }

  const locale = navigatorLocale.trim().split(/-|_/)[0];
  return ['fr', 'en', 'sw'].includes(locale) ? locale : 'fr';
};

// Détection de la direction du texte (RTL/LTR)
const getTextDirection = (locale: string): 'ltr' | 'rtl' => {
  // Pour l'instant, aucune de nos langues n'est RTL
  // À adapter si des langues RTL sont ajoutées
  return 'ltr';
};

// Formats de date et de nombre
const datetimeFormats: DateTimeFormats = {
  fr: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric'
    }
  },
  en: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }
  },
  sw: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric'
    }
  }
};

const numberFormats: NumberFormats = {
  fr: {
    currency: {
      style: 'currency',
      currency: 'EUR',
      notation: 'standard'
    },
    decimal: {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    },
    percent: {
      style: 'percent',
      useGrouping: true
    }
  },
  en: {
    currency: {
      style: 'currency',
      currency: 'EUR',
      notation: 'standard'
    },
    decimal: {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    },
    percent: {
      style: 'percent',
      useGrouping: true
    }
  },
  sw: {
    currency: {
      style: 'currency',
      currency: 'EUR',
      notation: 'standard'
    },
    decimal: {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    },
    percent: {
      style: 'percent',
      useGrouping: true
    }
  }
};

// Création de l'instance i18n
const i18n = createI18n<[MessageSchema], 'fr' | 'en' | 'sw'>({
  legacy: false,
  locale: getBrowserLocale(),
  fallbackLocale: 'fr',
  messages: {
    fr,
    en,
    sw
  },
  // Ajout de la direction du texte comme propriété globale
  globalInjection: true,
  warnHtmlInMessage: 'off',
  // Formats de date et de nombre personnalisés
  datetimeFormats,
  numberFormats
});

// Ajout d'une méthode pour changer la direction du texte
export const setTextDirection = (locale: string): void => {
  document.documentElement.setAttribute('dir', getTextDirection(locale));
};

// Initialisation de la direction du texte
setTextDirection(i18n.global.locale.value);

export default i18n;