import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import TransRu from './lang/ru.json';
import TransUz from './lang/uz.json';

const resources = {
    ru: {
        translation: TransRu
    },
    uz: {
        translation: TransUz
    }
}

i18n
    .use(initReactI18next)
    .init({

        resources,
        lng: "ru",
        fallbacking: 'uz',

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;