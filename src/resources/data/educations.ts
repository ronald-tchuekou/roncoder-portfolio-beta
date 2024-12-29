import { Experience } from '../util-types'

export const EDUCATIONS_LIST: Experience[] = [
   {
      id: '09',
      title: {
         fr: 'Certification en Développement BackEnd avec Node.js',
         en: 'Backend Development Certification with Node.js',
      },
      company: 'Coursera',
      date: {
         fr: 'Août 2024',
         en: 'August 2024',
      },
      description: {
         fr: "Express s'est classé au quatrième rang des technologies web les plus populaires, ce qui en fait le framework web côté serveur le plus populaire.",
         en: 'Express ranked fourth among the most popular web technologies, making it the most popular server-side web framework.',
      },
      tasks: [
         {
            fr: "Créez des applications côté serveur en utilisant le moteur d'exécution JavaScript Node.js.",
            en: 'Create server-side applications using the Node.js JavaScript runtime engine.',
         },
         {
            fr: 'Étendez vos applications Node.js avec des paquets et des frameworks tiers, y compris Express.',
            en: 'Extend your Node.js applications with third-party packages and frameworks, including Express.',
         },
         {
            fr: 'Utilisez npm pour gérer les packages Node.js dans votre application Node.js.',
            en: 'Use npm to manage Node.js packages in your Node.js application.',
         },
         {
            fr: 'Développez des fonctions de rappel asynchrones et des promesses pour réaliser des opérations asynchrones.',
            en: 'Develop asynchronous callback functions and promises to perform asynchronous operations.',
         },
      ],
      imageLink: '/certificates/backend_dev_nodejs_coursera.png',
      keywords: [
         'Node.js',
         'Backend Development',
         'Express',
         'Coursera',
         'JavaScript',
         'npm',
         'asynchronous operations',
      ],
   },
   {
      id: '01',
      title: {
         fr: 'Attestation de formation React Js avancé',
         en: 'Advanced React Js Training Certificate',
      },
      company: 'Alphorm',
      date: {
         fr: 'Dec 2022',
         en: 'Dec 2022',
      },
      description: {
         fr: "Au cours de cette formation React et Redux, j'ai premièrement vue des sujets avancés de développement en ReactJS. La formation est donnée en JavaScript, mais moi j'ai suivit cela en codant en TypeScript.",
         en: 'During this React and Redux training, I first saw advanced development topics in ReactJS. The training is given in JavaScript, but I followed it by coding in TypeScript.',
      },
      tasks: [
         {
            fr: 'Création et le maintien de fonctions composant.',
            en: 'Creation and maintenance of component functions.',
         },
         { fr: 'Gestion du State avec les Hooks.', en: 'State management with Hooks.' },
         { fr: 'Utilisation des Props de rendu.', en: 'Using render Props.' },
         {
            fr: 'Composition avec des composants React réutilisables',
            en: 'Composition with reusable React components.',
         },
         {
            fr: 'Persistance dans le stockage du navigateur avec HTML5 localStorage',
            en: 'Persistence in browser storage with HTML5 localStorage.',
         },
         { fr: 'Mise en page avec les grilles responsive', en: 'Layout with responsive grids.' },
         {
            fr: 'Composants CSS et JavaScript de TailwindCSS et HeadlessUI pour rapidement développer un UI responsive et élégant.',
            en: 'CSS and JavaScript components from TailwindCSS and HeadlessUI to quickly develop a responsive and elegant UI.',
         },
         {
            fr: "Appréhender les concepts avancés, notamment le Single Source of Truth avec le gestionnaire d'état, l'architecture Redux et Redux Toolkit.",
            en: 'Understanding advanced concepts, including Single Source of Truth with the state manager, Redux architecture, and Redux Toolkit.',
         },
         {
            fr: "Hooks Redux et le partage des valeurs globalement avec l'API contexte.",
            en: 'Redux Hooks and sharing values globally with the context API.',
         },
      ],
      imageLink: '/certificates/react_js_alphorm.jpeg',
      keywords: ['ReactJS', 'Redux', 'TypeScript', 'Alphorm', 'Hooks', 'TailwindCSS', 'HeadlessUI', 'Redux Toolkit'],
   },
   {
      id: '02',
      title: {
         fr: 'Attestation de formation Angular avancé',
         en: 'Advanced Angular Training Certificate',
      },
      company: 'Alphorm',
      date: {
         fr: 'Dec 2022',
         en: 'Dec 2022',
      },
      description: {
         fr: "Durant cette formation, j'ai fait la découverte des Zones est une introduction au fonctionnement d’Angular de manière avancé.",
         en: 'During this training, I discovered Zones as an introduction to the advanced functioning of Angular.',
      },
      tasks: [
         {
            fr: 'Les ReactiveForms me permettent d’être plus efficace en concevant la totalité du formulaire dans le code du component (et pas dans le template comme c’est le cas avec le template-drive-forms).',
            en: 'ReactiveForms allow me to be more efficient by designing the entire form in the component code (and not in the template as is the case with template-driven forms).',
         },
         {
            fr: "J'ai pu voir comment fonctionne l’injection de dépendance et comment développer un service.",
            en: 'I was able to see how dependency injection works and how to develop a service.',
         },
         {
            fr: "J'ai découvert une liste des principaux Pipes Angular et voir comment développer le mien de manière optimal.",
            en: 'I discovered a list of the main Angular Pipes and saw how to develop my own optimally.',
         },
         {
            fr: "J'ai découvert comment fonctionne les Guards et comment mettre en place un système de protection sur les routes.",
            en: 'I discovered how Guards work and how to set up a protection system on routes.',
         },
         {
            fr: "En dernier lieu, j'ai découvert comment charger des datas « au bon moment » (lazy loading).",
            en: 'Finally, I discovered how to load data "at the right time" (lazy loading).',
         },
         {
            fr: "Pour le déploiement, j'ai découvert comment utiliser Docker pour mettre en place très rapidement un serveur Restful.",
            en: 'For deployment, I discovered how to use Docker to quickly set up a Restful server.',
         },
      ],
      imageLink: '/certificates/advanced_angular.jpeg',
      keywords: ['Angular', 'ReactiveForms', 'Dependency Injection', 'Guards', 'Lazy Loading', 'Docker', 'Alphorm'],
   },
   {
      id: '03',
      title: {
         fr: 'Attestation de formation Docker avancé',
         en: 'Advanced Docker Training Certificate',
      },
      company: 'Alphorm',
      date: {
         fr: 'Dec 2022',
         en: 'Dec 2022',
      },
      description: {
         fr: 'Attestation de fin de formation en Docker Avancé.',
         en: 'End of Advanced Docker Training Certificate.',
      },
      tasks: [
         {
            fr: 'Optimiser la taille des images Docker en utilisant des étapes multiples dans les fichiers Dockerfile',
            en: 'Optimize Docker image size using multi-stage builds in Dockerfiles',
         },
         {
            fr: 'Gestion des services (Outil permettant de gérer plusieurs conteneur dans un réseau) avec Docker Compose.',
            en: 'Service management (Tool for managing multiple containers in a network) with Docker Compose.',
         },
         {
            fr: 'Configuration des réseaux Docker personnalisés (bridge, overlay, macvlan)',
            en: 'Configuration of custom Docker networks (bridge, overlay, macvlan)',
         },
         {
            fr: 'Communication entre conteneurs sur des réseaux complexes',
            en: 'Communication between containers on complex networks',
         },
         {
            fr: 'Gestion avancée des volumes pour la persistance des données',
            en: 'Advanced volume management for data persistence',
         },
         {
            fr: 'Meilleures pratiques pour sécuriser les conteneurs.',
            en: 'Best practices for securing containers.',
         },
      ],
      imageLink: '/certificates/advance_docker.jpeg',
      keywords: ['Docker', 'Docker Compose', 'Docker Machine', 'Data Volume Management', 'Alphorm'],
   },
   {
      id: '04',
      title: {
         fr: 'Certification l’éssentiel de React.js',
         en: 'Essential React.js Certification',
      },
      company: 'LinkedIn Learning',
      date: {
         fr: 'Juil 2022',
         en: 'July 2022',
      },
      description: {
         fr: "Prise en main de la technologie React, l'outil indispensable à tout développeur web frontend. Découvrir une bibliothèque JavaScript qui permet de créer rapidement des interfaces utilisateur très performantes et hautement interactives. Dans cette formation. J'ai découvert comment créer et agencer les composants pour bâtir l'interface utilisateur, Injecterez également des données dynamiques dans une application et mettre en place des fonctionnalités interactives. Ainsi, connaîtrez tous les grands principes de React et être en mesure de créer des applications de manière simples et facilement maintenable.",
         en: 'Getting started with React technology, the essential tool for any frontend web developer. Discover a JavaScript library that allows you to quickly create highly performant and highly interactive user interfaces. In this training, I discovered how to create and arrange components to build the user interface, also inject dynamic data into an application and set up interactive features. Thus, you will know all the main principles of React and be able to create applications in a simple and easily maintainable way.',
      },
      tasks: [
         { fr: 'Création de composants', en: 'Component creation' },
         { fr: 'Gestion des états', en: 'State management' },
         { fr: 'Gestion des événements', en: 'Event handling' },
         { fr: 'Création de formulaires', en: 'Form creation' },
         { fr: 'Création de routes', en: 'Route creation' },
         { fr: 'Gestion des données', en: 'Data management' },
         { fr: 'Création des interfaces utilisateur', en: 'User interface creation' },
         { fr: 'Création des applications web', en: 'Web application creation' },
      ],
      imageLink: '/certificates/react-essential.png',
      keywords: [
         'React.js',
         'Component Creation',
         'State Management',
         'Event Handling',
         'Form Creation',
         'LinkedIn Learning',
      ],
   },
   {
      id: '05',
      title: {
         fr: 'Certification NodeJs 3eme edition',
         en: 'NodeJs 3rd Edition Certification',
      },
      company: 'Udemy',
      date: {
         fr: 'Fev 2022',
         en: 'Feb 2022',
      },
      description: {
         fr: 'Formation en nodejs, express, pour la creations des API REST. Interaction avec les bases de données telles que MongoDB, MySQL.',
         en: 'Training in nodejs, express, for creating REST APIs. Interaction with databases such as MongoDB, MySQL.',
      },
      tasks: [
         { fr: "Création d'API REST", en: 'Creating REST APIs' },
         { fr: 'Interaction avec les bases de données', en: 'Interacting with databases' },
         { fr: 'Création de serveur web', en: 'Creating web servers' },
         { fr: 'Gestion des erreurs', en: 'Error handling' },
         { fr: 'Utilisation des middlewares', en: 'Using middleware' },
         { fr: 'Gestion des fichiers', en: 'File management' },
         { fr: 'Authentification et autorisation', en: 'Authentication and authorization' },
         { fr: "Déploiement d'applications", en: 'Application deployment' },
      ],
      imageLink: '/certificates/node_js_3rd_edition.jpeg',
      keywords: ['NodeJs', 'REST APIs', 'Express', 'MongoDB', 'MySQL', 'Udemy'],
   },
   {
      id: '06',
      title: {
         fr: 'Attestation développement Android avec Java',
         en: 'Android Development with Java Certificate',
      },
      company: 'Orange Digital Center',
      date: {
         fr: 'Août 2021 - Oct 2021',
         en: 'August 2021 - Oct 2021',
      },
      description: {
         fr: 'Formation en développement Android avec Java. (Workshop)',
         en: 'Training in Android development with Java. (Workshop)',
      },
      tasks: [
         { fr: 'Initiation à la programmation Java', en: 'Introduction to Java programming' },
         { fr: 'Initiation à la programmation Android', en: 'Introduction to Android programming' },
         { fr: "Mise en place de l'environnement de développement", en: 'Setting up the development environment' },
         { fr: 'Prise en charge de Android Studio', en: 'Handling Android Studio' },
         { fr: 'Création des interfaces utilisateur', en: 'Creating user interfaces' },
         { fr: 'Gestion des événements', en: 'Event handling' },
         { fr: 'Gestion des bases de données', en: 'Database management' },
         { fr: 'Gestion des permissions', en: 'Permission management' },
         { fr: 'Gestion des services', en: 'Service management' },
         { fr: 'Gestion des notifications', en: 'Notification management' },
         { fr: 'Gestion des fichiers', en: 'File management' },
         { fr: "Déploiement d'applications sur Play Store", en: 'Deploying applications on Play Store' },
      ],
      imageLink: '/certificates/android_attestation.png',
      keywords: ['Android Development', 'Java', 'Android Studio', 'Orange Digital Center', 'Play Store'],
   },
   {
      id: '07',
      title: {
         fr: 'Licence en informatique',
         en: 'Bachelor in Computer Science',
      },
      company: 'Université de Douala',
      date: {
         fr: 'Oct 2017 - Juil 2021',
         en: 'Oct 2017 - July 2021',
      },
      description: {
         fr: "Tous les fondamentaux de l'informatique et des mathématiques.",
         en: 'All the fundamentals of computer science and mathematics.',
      },
      tasks: [
         { fr: 'Initiation à la programmation et l’algorithmique', en: 'Introduction to programming and algorithms' },
         {
            fr: 'Initialisation à JavaScript et le développement web',
            en: 'Introduction to JavaScript and web development',
         },
         { fr: 'Initialisation au SGBD (SQL)', en: 'Introduction to DBMS (SQL)' },
         { fr: 'Initialisation au systèmes d’information', en: 'Introduction to information systems' },
         {
            fr: 'Initialisation au génie logiciel et la modélisation UML',
            en: 'Introduction to software engineering and UML modeling',
         },
         { fr: 'Mathématiques appliquées à l’informatique', en: 'Mathematics applied to computer science' },
      ],
      keywords: [
         'Computer Science',
         'Mathematics',
         'Programming',
         'Algorithms',
         'JavaScript',
         'SQL',
         'UML',
         'Université de Douala',
      ],
   },
   {
      id: '08',
      title: {
         fr: 'Baccalauréat scientifique',
         en: 'Scientific Baccalaureate',
      },
      company: 'Lycée Bilingue de Bafoussam Rural',
      date: {
         fr: 'Sep 2016 - Jui 2017',
         en: 'Sep 2016 - June 2017',
      },
      description: {
         fr: 'Enseignement secondaire',
         en: 'Secondary education',
      },
      tasks: [
         { fr: 'Cours généralisés', en: 'Generalized courses' },
         { fr: 'Orientation professionnelle', en: 'Career guidance' },
         { fr: 'Développement personnel', en: 'Personal development' },
         { fr: 'Programmation informatique', en: 'Computer programming' },
         { fr: 'Prise en charge des outils de bureautique.', en: 'Handling office tools.' },
      ],
      keywords: [
         'Scientific Baccalaureate',
         'Secondary Education',
         'Career Guidance',
         'Personal Development',
         'Computer Programming',
         'Lycée Bilingue de Bafoussam Rural',
      ],
   },
] as const

