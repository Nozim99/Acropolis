'use client'

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpBackend) // Load translations using HTTP backend
    .use(LanguageDetector) // Detect user's language
    .use(initReactI18next) // Pass i18n instance to React
    .init({
        supportedLngs: ['en', 'ru', 'uz'],
        fallbackLng: 'ru', // Default language if no detection
        debug: true, // Enable debug mode during development
        interpolation: {
            escapeValue: false, // React already escapes values
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json', // Translation files path
        },
    });

export default i18n;
