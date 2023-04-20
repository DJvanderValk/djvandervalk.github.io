import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
	.use(initReactI18next)
	.use(Backend)
	.use(LanguageDetector)
	.init({
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json'
		},
		fallbackLng: ['en'],
		supportedLngs: ['en', 'nl'],
		debug: process.env.NODE_ENV === 'development',
		ns: ['general'],
		defaultNS: 'general',
		interpolation: {
			escapeValue: false
		},
		keySeparator: '.'
	});

export default i18n;