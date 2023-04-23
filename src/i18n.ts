import { createI18n } from 'vue-i18n'
import { messages } from './constants/messages'
import type en from './constants/messages/en';

export const i18n = createI18n({
    // something vue-i18n options here ...
    legacy: false,
    locale: navigator.language.split("-")[0], // set locale
    fallbackLocale: 'en', // set fallback locale
    messages,
  })