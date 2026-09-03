import { Experience } from '../util-types'

const ONLINE_TRAINING_CONTEXT = {
   fr: 'Formation en ligne, suivie à distance.',
   en: 'Online training, followed remotely.',
}

/** Five certifications and trainings, the figure displayed elsewhere on the site, plus the
 *  university degree: recruiters still filter on it, and a degree is not a certification. */
const EDUCATIONS: Experience[] = [
   {
      id: '09',
      title: {
         fr: 'Certification en développement backend avec Node.js',
         en: 'Backend development certification with Node.js',
      },
      company: 'Coursera',
      date: {
         fr: 'Août 2024',
         en: 'August 2024',
      },
      context: ONLINE_TRAINING_CONTEXT,
      sortDate: '2024-08',
      description: {
         fr: "Parcours consacré au développement d'applications serveur avec Node.js et Express, de l'exécution asynchrone à la mise en place d'API.",
         en: 'Track dedicated to server side development with Node.js and Express, from asynchronous execution to building APIs.',
      },
      tasks: [
         {
            fr: "Créer des applications côté serveur avec le moteur d'exécution JavaScript Node.js.",
            en: 'Build server side applications with the Node.js JavaScript runtime.',
         },
         {
            fr: 'Étendre une application Node.js avec des paquets et des frameworks tiers, dont Express.',
            en: 'Extend a Node.js application with third party packages and frameworks, including Express.',
         },
         {
            fr: 'Gérer les dépendances Node.js avec npm.',
            en: 'Manage Node.js dependencies with npm.',
         },
         {
            fr: 'Développer des fonctions de rappel asynchrones et des promesses pour les opérations non bloquantes.',
            en: 'Write asynchronous callbacks and promises for non blocking operations.',
         },
      ],
      imageLink: '/certificates/backend_dev_nodejs_coursera.webp',
      keywords: ['Node.js', 'Express', 'Coursera', 'JavaScript', 'npm', 'API REST'],
   },
   {
      id: '10',
      title: {
         fr: 'Node and Express Essentials',
         en: 'Node and Express Essentials',
      },
      company: 'IBM sur Coursera',
      date: {
         fr: '2024',
         en: '2024',
      },
      context: ONLINE_TRAINING_CONTEXT,
      sortDate: '2024-01',
      description: {
         fr: "Cours IBM sur les fondamentaux de Node.js et d'Express : serveur HTTP, routage, middlewares et API REST.",
         en: 'IBM course on the fundamentals of Node.js and Express: HTTP server, routing, middleware and REST APIs.',
      },
      tasks: [
         {
            fr: 'Mettre en place un serveur HTTP avec Node.js et Express.',
            en: 'Set up an HTTP server with Node.js and Express.',
         },
         {
            fr: 'Structurer le routage et les middlewares d’une application Express.',
            en: 'Structure the routing and middleware of an Express application.',
         },
         {
            fr: 'Exposer et consommer des API REST au format JSON.',
            en: 'Expose and consume JSON REST APIs.',
         },
         {
            fr: 'Gérer les erreurs et les réponses HTTP côté serveur.',
            en: 'Handle errors and HTTP responses on the server side.',
         },
      ],
      keywords: ['Node.js', 'Express', 'IBM', 'Coursera', 'API REST'],
   },
   {
      id: '01',
      title: {
         fr: 'Formation React, Redux, Redux Toolkit et API Context',
         en: 'React, Redux, Redux Toolkit and Context API training',
      },
      company: 'Alphorm',
      date: {
         fr: 'Déc 2022',
         en: 'Dec 2022',
      },
      context: ONLINE_TRAINING_CONTEXT,
      sortDate: '2022-12',
      description: {
         fr: "Formation React avancée couvrant la gestion d'état avec Redux, Redux Toolkit et l'API Context. Le cours est donné en JavaScript, je l'ai suivi en codant en TypeScript.",
         en: 'Advanced React training covering state management with Redux, Redux Toolkit and the Context API. The course is taught in JavaScript, I followed it writing TypeScript.',
      },
      tasks: [
         {
            fr: 'Création et maintenance de composants fonction.',
            en: 'Creating and maintaining function components.',
         },
         { fr: "Gestion de l'état local avec les Hooks.", en: 'Local state management with Hooks.' },
         {
            fr: 'Utilisation des render props et composition de composants réutilisables.',
            en: 'Render props and composition of reusable components.',
         },
         {
            fr: 'Persistance côté navigateur avec le localStorage HTML5.',
            en: 'Browser side persistence with HTML5 localStorage.',
         },
         {
            fr: 'Mise en page responsive avec les grilles et Tailwind CSS.',
            en: 'Responsive layouts with grids and Tailwind CSS.',
         },
         {
            fr: "Source unique de vérité avec le gestionnaire d'état, architecture Redux et Redux Toolkit.",
            en: 'Single source of truth with the state manager, Redux architecture and Redux Toolkit.',
         },
         {
            fr: "Hooks Redux et partage de valeurs globales avec l'API Context.",
            en: 'Redux Hooks and sharing global values with the Context API.',
         },
      ],
      imageLink: '/certificates/react_js_alphorm.webp',
      keywords: ['React', 'Redux', 'Redux Toolkit', 'Context API', 'TypeScript', 'Alphorm'],
   },
   {
      id: '02',
      title: {
         fr: 'Formation Angular avancé',
         en: 'Advanced Angular training',
      },
      company: 'Alphorm',
      date: {
         fr: 'Déc 2022',
         en: 'Dec 2022',
      },
      context: ONLINE_TRAINING_CONTEXT,
      sortDate: '2022-12',
      description: {
         fr: "Formation consacrée au fonctionnement avancé d'Angular, des Zones aux formulaires réactifs et au chargement différé.",
         en: 'Training dedicated to the advanced internals of Angular, from Zones to reactive forms and lazy loading.',
      },
      tasks: [
         {
            fr: 'Formulaires réactifs : construire la totalité du formulaire dans le code du composant plutôt que dans le template.',
            en: 'Reactive forms: building the whole form in the component code rather than in the template.',
         },
         {
            fr: 'Injection de dépendances et développement de services.',
            en: 'Dependency injection and service development.',
         },
         {
            fr: 'Pipes Angular natifs et écriture de pipes personnalisés.',
            en: 'Built in Angular pipes and writing custom pipes.',
         },
         {
            fr: 'Guards et protection des routes.',
            en: 'Guards and route protection.',
         },
         {
            fr: 'Chargement différé des modules et des données (lazy loading).',
            en: 'Lazy loading of modules and data.',
         },
         {
            fr: "Déploiement d'une application Angular avec Docker.",
            en: 'Deploying an Angular application with Docker.',
         },
      ],
      imageLink: '/certificates/advanced_angular.webp',
      keywords: ['Angular', 'Reactive Forms', 'Dependency Injection', 'Guards', 'Lazy Loading', 'Alphorm'],
   },
   {
      id: '03',
      title: {
         fr: 'Formation Docker, installation et administration',
         en: 'Docker training, installation and administration',
      },
      company: 'Alphorm',
      date: {
         fr: 'Déc 2022',
         en: 'Dec 2022',
      },
      context: ONLINE_TRAINING_CONTEXT,
      sortDate: '2022-12',
      description: {
         fr: "Formation Docker couvrant l'installation, l'administration et le déploiement d'applications conteneurisées.",
         en: 'Docker training covering installation, administration and deployment of containerised applications.',
      },
      tasks: [
         {
            fr: 'Images : construction, étapes multiples dans les Dockerfile et optimisation de la taille.',
            en: 'Images: builds, multi stage Dockerfiles and size optimisation.',
         },
         {
            fr: 'Conteneurs : cycle de vie, orchestration de plusieurs services avec Docker Compose.',
            en: 'Containers: lifecycle, orchestrating several services with Docker Compose.',
         },
         {
            fr: 'Volumes : persistance des données et gestion avancée du stockage.',
            en: 'Volumes: data persistence and advanced storage management.',
         },
         {
            fr: 'Réseau : réseaux personnalisés (bridge, overlay, macvlan) et communication entre conteneurs.',
            en: 'Network: custom networks (bridge, overlay, macvlan) and container to container communication.',
         },
         {
            fr: 'Déploiement : mise en production des conteneurs et bonnes pratiques de sécurité.',
            en: 'Deployment: shipping containers to production and security best practices.',
         },
      ],
      imageLink: '/certificates/advance_docker.webp',
      keywords: ['Docker', 'Docker Compose', 'Volumes', 'Réseau', 'Alphorm'],
   },
   {
      id: '07',
      title: {
         fr: 'Licence en informatique',
         en: 'Bachelor in Computer Science',
      },
      company: 'Université de Douala',
      date: {
         fr: 'Oct 2017 à Juil 2021',
         en: 'Oct 2017 to July 2021',
      },
      context: {
         fr: 'Formation universitaire, en présentiel.',
         en: 'University degree, on campus.',
      },
      sortDate: '2017-10',
      description: {
         fr: "Les fondamentaux de l'informatique et des mathématiques appliquées.",
         en: 'The fundamentals of computer science and applied mathematics.',
      },
      tasks: [
         { fr: 'Programmation et algorithmique.', en: 'Programming and algorithms.' },
         { fr: 'JavaScript et développement web.', en: 'JavaScript and web development.' },
         { fr: 'Bases de données relationnelles et SQL.', en: 'Relational databases and SQL.' },
         { fr: "Systèmes d'information.", en: 'Information systems.' },
         { fr: 'Génie logiciel et modélisation UML.', en: 'Software engineering and UML modelling.' },
         { fr: "Mathématiques appliquées à l'informatique.", en: 'Mathematics applied to computer science.' },
      ],
      keywords: ['Informatique', 'Algorithmique', 'JavaScript', 'SQL', 'UML', 'Université de Douala'],
   },
]

/** Certifications sorted by date, most recent first. */
export const EDUCATIONS_LIST: Experience[] = [...EDUCATIONS].sort((a, b) => b.sortDate.localeCompare(a.sortDate))
