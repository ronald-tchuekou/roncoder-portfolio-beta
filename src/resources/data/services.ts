import { Service } from '../util-types'

export const SERVICES: Service[] = [
   {
      id: '01',
      key: 'ux_ui_design',
      title: {
         en: 'UX/UI Design',
         fr: 'Design UX/UI',
      },
      description: {
         en: 'I design intuitive, aesthetic user interfaces that deliver an optimal user experience for web and mobile applications.',
         fr: 'Je conçois des interfaces utilisateur intuitives et esthétiques qui offrent une expérience utilisateur optimale pour des applications web et mobiles.',
      },
   },
   {
      id: '02',
      key: 'web_dev',
      title: {
         en: 'Web Development',
         fr: 'Développement web',
      },
      description: {
         en: 'Looking for a modern, responsive, sleek and attractive web platform that will help you drive conversions and increase sales? \nAn MVP to digitalize your solution? \nOptimize your online presence?',
         fr: "A la recherche d'une plateforme web moderne, responsive, épurée et attrayante qui vous permettra de faire des conversions et accroître vos ventes ? \nUn MVP pour digitaliser votre solution ? \nOptimiser votre présence sur le net ?",
      },
   },
   {
      id: '03',
      key: 'mobile_dev',
      title: {
         en: 'Mobile Development',
         fr: 'Développement mobile',
      },
      description: {
         en: 'Do you need a modern mobile application, accessible on iOS and Android, that perfectly respects your graphic charter?',
         fr: 'Vous avez besoin d’une application mobile moderne, accessible sur iOS et Android, qui respecte parfaitement votre charte graphique ?',
      },
   },
   {
      id: '04',
      key: 'seo',
      title: {
         en: 'SEO (Search Engine Optimization)',
         fr: 'SEO (Référencement naturel)',
      },
      description: {
         en: "Do you want to optimize your platform's natural referencing to maximize your traffic and increase your sales or search engine visibility?",
         fr: "Dans l'optique d'optimiser le référencement naturel de votre plateforme pour maximiser votre trafic et augmenter vos ventes ou votre visibilité dans les moteurs de recherches ?",
      },
   },
   {
      id: '05',
      key: 'pay_tools_integration',
      title: {
         en: 'Payment Tool Integration',
         fr: 'Intégration d’outil de paiement',
      },
      description: {
         en: 'Need to add a payment method to your web or mobile application? No more searching.',
         fr: 'Vous avez besoin d’ajouter un moyen de paiement dans votre application web ou mobile ? Plus besoin de chercher.',
      },
   },
   // TODO add DevOps service.
] as const
