// src/i18n.js er brugt til sprog oversættelse 
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

//Her importere vi vores .json filer i de forskellige sprog
    //About us
import aboutUsEnglish from './Text/english/aboutUs.json';
import aboutUsDanish from './Text/danish/aboutUs.json';

import productionEnglish from './Text/english/production.json';
import productionDanish from './Text/danish/production.json';

import sustainabilityEnglish from './Text/english/sustainability.json';
import sustainabilityDanish from './Text/danish/sustainability.json';

import alluminumIndustryEnglish from './Text/english/alluminumIndustry.json';
import alluminumIndustryDanish from './Text/danish/alluminumIndustry.json';

import titlesEnglish from './Text/english/titles.json';
import titlesDanish from './Text/danish/titles.json';

import ourTeamEnglish from './Text/english/ourTeam.json';
import ourTeamDanish from './Text/danish/ourTeam.json';

import cooperationEnglish from './Text/english/cooperation.json';
import cooperationDanish from './Text/danish/cooperation.json';
    //Example
import loremIpsum from './Text/LoremIpsum.json';



const resources = {
/*VIGTIGT 
De to oversættelser skal have same navn, vi følger det her format

{sideNavn}Content: {sidenavn}{sprog(skrevet på engelsk)}
*/
    //Her sætter vi den engelske oversættelse
  en: {
    translation: {
      aboutUsContent: aboutUsEnglish,
      productionContent: productionEnglish,
      sustainabilityContent: sustainabilityEnglish,
      alluminumIndustryContent: alluminumIndustryEnglish,
      ourTeamContent: ourTeamEnglish,
      cooperationContent: cooperationEnglish,

      loremIpsumContent: loremIpsum,
      titlesContent: titlesEnglish
      
    },
  },
  //Her sætter vi den danske oversættelse oversættelse
  da: {
    translation: {
      aboutUsContent: aboutUsDanish,
      productionContent: productionDanish,
      sustainabilityContent: sustainabilityDanish,
      alluminumIndustryContent: alluminumIndustryDanish,
      ourTeamContent: ourTeamDanish,
      cooperationContent: cooperationDanish,

      loremIpsumContent: loremIpsum,
      titlesContent: titlesDanish
    },
  },
};


  i18next.use(initReactI18next).init({
  resources,
  
  //defineret sprog for siden
  lng: "da",
  //fallbackLng er sproget siden vil gå på hvis den ikke kan finde et defineret sprog
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  });

//Vi eksportere i18next functionen så vi kan kalde den i main.jsx
export default i18next;
