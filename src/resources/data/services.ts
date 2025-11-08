import { Service } from '../util-types'

export const SERVICES: Service[] = [
   {
      id: '01',
      key: 'ai_integration',
      title: {
         en: 'AI Integration',
         fr: 'Intégration IA',
      },
      description: {
         en: "Transform your business with intelligent AI solutions. From conversational chatbots to predictive analytics and process automation, I help you leverage the power of AI to reduce costs by 40%, enhance customer satisfaction, and stay ahead of the competition. Let's build your AI-powered future together.",
         fr: "Transformez votre entreprise avec des solutions IA intelligentes. Des chatbots conversationnels aux analyses prédictives et l'automatisation des processus, je vous aide à exploiter la puissance de l'IA pour réduire vos coûts de 40%, améliorer la satisfaction client et garder une longueur d'avance sur la concurrence. Construisons ensemble votre avenir propulsé par l'IA.",
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
         en: 'Your website is your 24/7 salesperson. I build lightning-fast, SEO-optimized web applications using cutting-edge technologies (React, Next.js, Node.js) that load in under 2 seconds and convert visitors into customers. Whether you need an e-commerce platform, SaaS application, or corporate website, I deliver scalable solutions that grow with your business.',
         fr: "Votre site web est votre commercial 24/7. Je développe des applications web ultra-rapides et optimisées SEO avec des technologies de pointe (React, Next.js, Node.js) qui se chargent en moins de 2 secondes et convertissent vos visiteurs en clients. Que vous ayez besoin d'une plateforme e-commerce, d'une application SaaS ou d'un site corporate, je livre des solutions évolutives qui grandissent avec votre entreprise.",
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
         en: "Reach 6.8 billion mobile users worldwide with a single codebase. I develop high-performance cross-platform mobile apps using React Native and Flutter that feel native on both iOS and Android. From fintech to e-commerce, I've delivered apps with 4.8+ star ratings that users love and businesses depend on. Your app, available on both app stores in weeks, not months.",
         fr: "Atteignez 6,8 milliards d'utilisateurs mobiles dans le monde avec un seul code. Je développe des applications mobiles cross-platform haute performance avec React Native et Flutter qui semblent natives sur iOS et Android. De la fintech au e-commerce, j'ai livré des apps notées 4.8+ étoiles que les utilisateurs adorent et dont les entreprises dépendent. Votre app, disponible sur les deux stores en semaines, pas en mois.",
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
         en: 'Stop being invisible on Google. I implement proven SEO strategies that have helped clients achieve first-page rankings and increase organic traffic by up to 250%. From technical SEO audits to content optimization and link building, I ensure your website dominates search results for keywords that matter to your business. More visibility = More customers.',
         fr: "Arrêtez d'être invisible sur Google. J'implémente des stratégies SEO éprouvées qui ont aidé mes clients à atteindre la première page et augmenter leur trafic organique jusqu'à 250%. Des audits SEO techniques à l'optimisation de contenu et au link building, je m'assure que votre site domine les résultats de recherche pour les mots-clés importants pour votre business. Plus de visibilité = Plus de clients.",
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
         en: 'Start accepting payments in 48 hours. I integrate secure, PCI-compliant payment solutions (Stripe, PayPal, Square, crypto) that support 135+ currencies and multiple payment methods. With experience in subscription models, marketplaces, and e-commerce, I ensure your payment flow is smooth, secure, and optimized for maximum conversion. Turn browsers into buyers today.',
         fr: "Commencez à accepter des paiements en 48 heures. J'intègre des solutions de paiement sécurisées et conformes PCI (Stripe, PayPal, Square, crypto) qui supportent 135+ devises et multiples méthodes de paiement. Avec une expérience en modèles d'abonnement, marketplaces et e-commerce, je garantis que votre flux de paiement est fluide, sécurisé et optimisé pour une conversion maximale. Transformez vos visiteurs en acheteurs dès aujourd'hui.",
      },
   },
   {
      id: '06',
      key: 'devops',
      title: {
         en: 'DevOps & Cloud Infrastructure',
         fr: 'DevOps & Infrastructure Cloud',
      },
      description: {
         en: 'Ship faster, fail less. I implement CI/CD pipelines, containerization (Docker, Kubernetes), and cloud infrastructure (AWS, Azure, GCP) that reduce deployment time by 80% and eliminate production issues. With automated testing, monitoring, and scaling, your application stays online 99.99% of the time. Focus on growth while I handle the infrastructure.',
         fr: "Déployez plus vite, échouez moins. J'implémente des pipelines CI/CD, de la conteneurisation (Docker, Kubernetes) et des infrastructures cloud (AWS, Azure, GCP) qui réduisent le temps de déploiement de 80% et éliminent les problèmes de production. Avec des tests automatisés, du monitoring et de la mise à l'échelle, votre application reste en ligne 99,99% du temps. Concentrez-vous sur la croissance pendant que je gère l'infrastructure.",
      },
   },
] as const
