# Portfolio professionnel ciblé recruteurs : brief d'implémentation

Document destiné à Claude Code. Version du 3 septembre 2026. Il remplace et annule les briefs précédents
(`portfolio-update-brief.md` et `portfolio-refonte-brief-v2.md`).

Dépôt : https://github.com/ronald-tchuekou/roncoder-portfolio-beta (branche `main`, HEAD `9a5a0ec`) Site :
https://roncoder-beta.vercel.app (déploiement à jour, compteurs GitHub fonctionnels)

---

## 0. Cadre de travail

### 0.1 Objectif

Le portfolio a **une seule audience : les recruteurs et les responsables techniques qui recrutent**. Recruteurs
internes, cabinets de recrutement, ESN, éditeurs de logiciels, scale ups, agences. Il ne cherche pas à vendre des
prestations à des clients finaux.

La question à laquelle chaque page doit répondre : **ce profil correspond il au poste que j'ai à pourvoir, et puis je le
contacter maintenant ?**

Un recruteur consacre entre trente secondes et deux minutes à un portfolio. Il cherche, dans cet ordre : l'intitulé de
poste, la séniorité, les technologies et depuis combien de temps, le type de contrat et la disponibilité, la
localisation et le mode de travail, une preuve de travail réel, puis le CV.

### 0.2 Règles absolues

1. **Aucun tiret long ni tiret demi cadratin** (« — » et « – ») dans les textes affichés, les traductions, les
   métadonnées et les commentaires de code. Pour les périodes, écrire « Oct 2023 à Déc 2025 » / « Oct 2023 to Dec 2025
   ». Contrôle final : `grep -rn "—\|–" lang src --include=*.json --include=*.ts --include=*.tsx` doit renvoyer zéro
   ligne.
2. **Précision technique assumée.** L'audience est technique ou travaille avec des personnes techniques. Les noms de
   technologies, de rôles et de pratiques d'ingénierie sont attendus. Ce qui reste interdit : le jargon creux («
   solutions innovantes », « passionné par l'excellence ») et les affirmations non vérifiables.
3. **Aucun chiffre inventé.** Les seuls chiffres autorisés sont ceux de la section 1. Pas de pourcentage de performance,
   pas de nombre d'utilisateurs, pas de « x fois plus rapide ».
4. **Verbes d'action à la première personne et résultats concrets.** « J'ai développé le frontend Angular de … » et non
   « Participation au développement ».
5. **Bilingue.** Chaque texte existe en `fr` et en `en`, tous deux naturels. Le français est la langue par défaut,
   l'anglais sert les recruteurs européens et internationaux.
6. **Conventions du dépôt** : Prettier, ESLint, TypeScript strict, données dans `src/resources/data/*`, traductions dans
   `lang/<page>/{fr,en}.json`, images WebP. Après chaque section : `pnpm lint && pnpm typecheck && pnpm build`.
7. **Branche `refonte/recruteurs-2026-09`**, un commit par section (`feat(home): …`, `refactor(services): …`,
   `content(resume): …`, `fix(seo): …`). Rapport final selon la section 12.

### 0.3 Ce qui est déjà fait, à ne pas refaire

L'audit technique du 2 septembre est mergé : secrets côté serveur avec `/api/contact` (honeypot et limite de requêtes),
dépendances à jour, polices auto hébergées, canonical et hreflang par page, `notFound()`, next-themes, images WebP,
embla, compteurs GitHub en Server Component. Le workflow CI a été supprimé au commit `ec85910` : il est à recréer
(section 10).

---

## 1. Profil, chiffres et postes visés

### 1.1 Identité professionnelle

Ronald Tchuekou, Douala (Cameroun). Développeur Full Stack orienté frontend, avec une pratique du design d'interface et
de la direction technique.

Poste actuel : Senior Frontend Engineer et consultant CTO chez NAFASI DIGITAL SARL, en mission pour la COSUMAF,
l'autorité de supervision financière d'Afrique centrale.

Parcours : AGYL TECH (développeur senior Full Stack, puis développeur front end junior), Mappeos (CTO), Communauté
urbaine de Douala (ingénieur Full Stack et administrateur systèmes), DC Corp (développeur web).

### 1.2 Postes visés (à afficher tels quels)

- Senior Frontend Engineer
- Développeur Full Stack senior / Senior Full Stack Developer
- Développeur React Native senior / Senior React Native Developer
- Lead Frontend

Mode : télétravail complet, avec des clients et employeurs en France, en Europe et en Afrique. Types de contrat ouverts
: CDI, freelance, mission longue.

### 1.3 Chiffres autorisés

- Expérience : **6 ans et plus**, affiché « 6+ ». Implémentation : supprimer `CAREER_START_YEAR` de `informations.ts` et
  toutes ses utilisations, le remplacer par
   ```ts
   /** Années d'expérience affichées. Valeur de référence du CV et du profil LinkedIn.
    *  À incrémenter manuellement (prochaine mise à jour : 2027). */
   export const EXPERIENCE_YEARS = 6
   ```
   Le compteur du hero affiche `6` suivi d'un `+` : ajouter une prop `suffix?: string` au sous composant `Counter` de
   `counter-section.tsx`, sans casser `tabular-nums`. Supprimer toutes les valeurs en dur ailleurs (« 5 ans » dans
   `informations.ts`, « 8 ans » et « 8 years » dans `lang/resume/*`).
- Projets livrés : 13.
- Applications publiées sur l'App Store et Google Play : 3 (Lafya, Les Vadrouilleurs, Zakadia).
- Certifications : 5.
- Étoiles et contributions GitHub : dynamiques, déjà en place.

### 1.4 Stack, telle qu'elle doit apparaître partout

Frontend : React, Next.js, Angular, TypeScript, JavaScript, Tailwind CSS, shadcn/ui, Framer Motion. Mobile : React
Native, Expo. Backend : Node.js, Express, API REST, GraphQL, WebSocket. Données : PostgreSQL, MySQL, MongoDB, Firebase.
Design : Figma, design system. Livraison et infrastructure : Docker, GitHub Actions, Vercel, Google Cloud, VPS, Coolify,
n8n, Backblaze B2. Intégrations en production : Stripe, Paddle, Clerk, Mistral AI.

Nest.js est retiré (non utilisé en production). Flutter, Kubernetes, AWS et Azure ne doivent apparaître nulle part.

---

## 2. Page d'accueil (`src/app/[locale]/page.tsx`, `src/components/home/*`, `lang/home/*.json`)

Sept blocs dans cet ordre. Chaque bloc est un composant de `src/components/home/`.

### 2.1 Hero (`profile-section.tsx`, `info-section.tsx`)

| Clé             | fr                                                                                                                                                                                                        | en                                                                                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`          | Senior Frontend Engineer, Full Stack                                                                                                                                                                      | Senior Frontend Engineer, Full Stack                                                                                                                                                           |
| `hi_is`         | Bonjour, je suis                                                                                                                                                                                          | Hi, I'm                                                                                                                                                                                        |
| `headline`      | Je conçois et développe des applications web et mobiles utilisées en production                                                                                                                           | I design and build web and mobile applications that run in production                                                                                                                          |
| `subheadline`   | 6 ans et plus sur React, Next.js, Angular et React Native. Trois applications publiées sur l'App Store et Google Play, un outil de supervision financière utilisé dans plusieurs pays d'Afrique centrale. | 6+ years with React, Next.js, Angular and React Native. Three apps published on the App Store and Google Play, and a financial supervision tool used across several Central African countries. |
| `cta_primary`   | Télécharger mon CV                                                                                                                                                                                        | Download my resume                                                                                                                                                                             |
| `cta_secondary` | Voir mon parcours                                                                                                                                                                                         | See my background                                                                                                                                                                              |
| `availability`  | Disponible en télétravail pour l'Europe et l'Afrique. CDI, freelance ou mission longue.                                                                                                                   | Available remotely for Europe and Africa. Permanent, freelance or long term contract.                                                                                                          |

Implémentation :

- `cta_primary` télécharge le CV correspondant à la locale (section 5.6) et déclenche l'événement `resume_download`.
  C'est le bouton principal de tout le site.
- `cta_secondary` mène à `/resume`.
- La ligne `availability` est précédée d'une pastille verte.
- Les liens sociaux restent en icônes avec `aria-label` : LinkedIn, GitHub, X, YouTube. Plus d'URL brute affichée.
  Utiliser `https://www.linkedin.com/in/ronaldtchuekou` (URL du profil) et vérifier que l'ancienne forme redirige ;
  sinon remplacer dans `informations.ts`, le JSON-LD et le pied de page.

### 2.2 Bandeau technologies (nouveau : `stack-strip.tsx`)

Une bande sobre sous le hero, avec les icônes et les noms des huit technologies principales : TypeScript, React,
Next.js, Angular, React Native, Node.js, Figma, Docker. Pas de titre, pas de pourcentage de maîtrise (les barres de
progression sur un portfolio sont un signal négatif chez les recruteurs techniques, elles ne veulent rien dire).

### 2.3 Compteurs (`counter-section.tsx`)

Quatre tuiles : `6+` années d'expérience, `13` projets livrés, `3` applications en production sur les stores,
contributions GitHub (dynamique). Retirer la tuile des étoiles GitHub, elle reste sur la page À propos.

### 2.4 Domaines d'intervention (nouveau : `expertise-preview.tsx`)

Titre : « Ce sur quoi j'interviens » / "What I work on". Trois cartes qui renvoient vers `/expertises` :

| fr                                                                                                                    | en                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Applications web** : interfaces React, Next.js et Angular, TypeScript, design system, performance et accessibilité. | **Web applications**: React, Next.js and Angular interfaces, TypeScript, design systems, performance and accessibility. |
| **Applications mobiles** : React Native et Expo, publication et maintenance sur l'App Store et Google Play.           | **Mobile applications**: React Native and Expo, publishing and maintaining apps on the App Store and Google Play.       |
| **Conception et direction technique** : maquettes Figma, choix d'architecture, revue de code, encadrement d'équipe.   | **Design and technical leadership**: Figma design, architecture decisions, code review, team leadership.                |

### 2.5 Projets marquants (nouveau : `featured-projects.tsx`)

Titre : « Projets marquants » / "Selected projects". Trois cartes : COSUMAF, Lafya, Mappeos. Chaque carte affiche le
nom, le rôle tenu, trois technologies et une phrase de résultat (données de la section 4). Bouton « Tous les projets » /
"All projects".

### 2.6 Méthode de travail (nouveau : `engineering-section.tsx`)

Ce bloc rassure sur la façon de travailler, ce qui compte autant que la stack pour un recruteur technique. Titre : «
Comment je travaille » / "How I work". Quatre points, chacun en une phrase :

| fr                                                                                                                                                              | en                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Du besoin à la maquette.** Je clarifie le besoin avec les équipes métier et je conçois les écrans sur Figma avant d'écrire du code.                           | **From requirement to design.** I clarify needs with business teams and design the screens in Figma before writing code.                      |
| **Un code lisible et testé.** Composants réutilisables, TypeScript strict, tests sur les parties sensibles, revue de code systématique.                         | **Readable, tested code.** Reusable components, strict TypeScript, tests on sensitive areas, systematic code review.                          |
| **Livraison continue.** Intégration continue, déploiements automatisés, surveillance des erreurs après mise en ligne.                                           | **Continuous delivery.** Continuous integration, automated deployments, error monitoring after release.                                       |
| **Performance et accessibilité par défaut.** Temps de chargement, contraste, navigation au clavier et lecteurs d'écran font partie de la définition de terminé. | **Performance and accessibility by default.** Load time, contrast, keyboard navigation and screen readers are part of the definition of done. |

### 2.7 Ce que je recherche (nouveau : `looking-for-section.tsx`)

Bloc court et direct, c'est l'information que le recruteur vient chercher. Titre : « Ce que je recherche » / "What I'm
looking for".

| Ligne         | fr                                                                                                      | en                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Postes        | Senior Frontend Engineer, développeur Full Stack senior, développeur React Native senior, Lead Frontend | Senior Frontend Engineer, Senior Full Stack Developer, Senior React Native Developer, Lead Frontend |
| Contrat       | CDI, freelance ou mission longue                                                                        | Permanent, freelance or long term contract                                                          |
| Mode          | Télétravail complet, fuseau UTC+1, chevauchement complet avec les horaires européens                    | Fully remote, UTC+1, full overlap with European working hours                                       |
| Environnement | Équipes produit, projets à enjeu métier fort, culture de la revue de code                               | Product teams, projects with real business stakes, code review culture                              |

Bouton « Me contacter » / "Get in touch" vers `/contact`.

### 2.8 Appel à l'action final (nouveau : `final-cta.tsx`)

fr : « Un poste qui correspond ? Écrivez moi, je réponds sous 24 heures ouvrées. » Deux boutons : « Me contacter » et «
Télécharger mon CV ». Sous les boutons : « Ou directement : ronaldtchuekou@gmail.com ». en : "Have a role that fits? Get
in touch, I reply within one business day." Buttons "Contact me" and "Download my resume". Below: "Or directly:
ronaldtchuekou@gmail.com".

### 2.9 Pied de page (`src/components/footer.tsx`, nouveau)

Colonne 1 : nom, intitulé de poste, localisation. Colonne 2 : navigation. Colonne 3 : email, LinkedIn, GitHub, lien de
téléchargement du CV. Ligne basse : « © {year} Ronald Tchuekou. Tous droits réservés. » / "All rights reserved." et un
lien « Mentions légales » / "Legal notice".

---

## 3. Page Expertises (remplace la page Services)

### 3.1 Migration de la route

La page Services vend des prestations à des clients : elle n'a plus sa place. Elle devient une page **Expertises** qui
détaille le niveau technique par domaine.

- Renommer `src/app/[locale]/services/page.tsx` en `src/app/[locale]/expertises/page.tsx`, `lang/services/*` en
  `lang/expertises/*`, `src/resources/data/services.ts` en `expertises.ts`, `src/components/services/*` en
  `src/components/expertises/*`, le type `Service` en `Expertise`.
- Redirection permanente dans `next.config.ts` : `/:locale/services` vers `/:locale/expertises` en 308, pour ne pas
  perdre les liens existants.
- Mettre à jour `nav-links.ts` : libellé « Expertises » / "Expertise".
- Retirer du sitemap l'ancienne URL, ajouter la nouvelle.

### 3.2 Modèle de données

```ts
export type Expertise = {
   id: string
   key: string
   title: Record<LocaleType, string>
   summary: Record<LocaleType, string> // deux phrases
   highlights: Record<LocaleType, string>[] // trois à quatre puces techniques
   stack: string[] // technologies concernées
   projects: string[] // ids de projets, liens vers /projects/<id>
}
```

### 3.3 Contenu, cinq expertises

**01. Développement frontend web** (`key: 'frontend'`)

- summary fr : « Je construis des interfaces React, Next.js et Angular en TypeScript, du composant isolé à l'application
  complète. Je travaille avec un design system pour garder une cohérence visuelle et limiter la dette. »
- summary en : "I build React, Next.js and Angular interfaces in TypeScript, from a single component to a full
  application. I work with a design system to keep the interface consistent and limit technical debt."
- highlights :
   - fr « Applications Next.js avec rendu serveur, routes internationalisées et optimisation du référencement. » en
     "Next.js applications with server rendering, internationalised routes and SEO optimisation."
   - fr « Applications Angular structurées en modules, avec gestion d'état et formulaires complexes. » en "Angular
     applications structured in modules, with state management and complex forms."
   - fr « Design system et bibliothèque de composants réutilisables, intégration fidèle des maquettes. » en "Design
     system and reusable component library, faithful implementation of designs."
   - fr « Performance et accessibilité : chargement des images, découpage du code, contraste, navigation au clavier. »
     en "Performance and accessibility: image loading, code splitting, contrast, keyboard navigation."
- stack : React, Next.js, Angular, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion. projects : cosumaf, privie,
  amizone.

**02. Développement mobile** (`key: 'mobile'`)

- summary fr : « Je développe des applications React Native avec Expo, publiées sur l'App Store et Google Play. Trois de
  mes applications sont aujourd'hui accessibles au public. »
- summary en : "I build React Native applications with Expo, published on the App Store and Google Play. Three of my
  apps are publicly available today."
- highlights :
   - fr « Cycle complet : développement, préparation des fiches, publication et mises à jour sur les deux stores. » en
     "Full cycle: development, store listings, publishing and updates on both stores."
   - fr « Fonctions natives : appareil photo, géolocalisation, notifications, stockage sécurisé. » en "Native features:
     camera, geolocation, notifications, secure storage."
   - fr « Intégration de paiement et d'authentification dans les applications mobiles. » en "Payment and authentication
     integration in mobile apps."
   - fr « Lecture automatique de documents par modèle multimodal (Mistral AI) dans Lafya. » en "Automatic document
     reading with a multimodal model (Mistral AI) in Lafya."
- stack : React Native, Expo, TypeScript. projects : lafya, zakadia, les-vadrouilleurs.

**03. Backend et intégrations** (`key: 'backend'`)

- summary fr : « Je conçois et consomme des API REST et GraphQL en Node.js, et j'intègre les briques tierces qui portent
  le produit : paiement, abonnements, authentification, intelligence artificielle. »
- summary en : "I design and consume REST and GraphQL APIs in Node.js, and integrate the third party building blocks a
  product relies on: payments, subscriptions, authentication and AI."
- highlights :
   - fr « API REST et GraphQL avec Express, modélisation des données relationnelles et NoSQL. » en "REST and GraphQL
     APIs with Express, relational and NoSQL data modelling."
   - fr « Paiement et abonnements en production avec Stripe et Paddle, gestion des webhooks. » en "Payments and
     subscriptions in production with Stripe and Paddle, webhook handling."
   - fr « Authentification et gestion des habilitations, notamment avec Clerk. » en "Authentication and permission
     management, including with Clerk."
   - fr « Communication en temps réel via WebSocket. » en "Real time communication with WebSocket."
- stack : Node.js, Express, PostgreSQL, MySQL, MongoDB, Firebase, Stripe, Paddle, Clerk, Mistral AI. projects : privie,
  lafya, amizone.

**04. Conception UX/UI et design system** (`key: 'design'`)

- summary fr : « Je conçois les parcours et les écrans sur Figma avant de les développer moi même, ce qui réduit les
  allers retours entre design et développement. »
- summary en : "I design user journeys and screens in Figma before building them myself, which cuts the back and forth
  between design and development."
- highlights :
   - fr « Parcours utilisateurs, wireframes et maquettes haute fidélité. » en "User journeys, wireframes and high
     fidelity designs."
   - fr « Design system : jetons, composants, états, documentation d'usage. » en "Design system: tokens, components,
     states, usage documentation."
   - fr « Prototypes cliquables pour valider une interface avant développement. » en "Clickable prototypes to validate
     an interface before development."
   - fr « Accessibilité prise en compte dès la maquette : contraste, tailles de cible, hiérarchie. » en "Accessibility
     considered from the design stage: contrast, target sizes, hierarchy."
- stack : Figma, design system, prototypage. projects : cosumaf, bon-paiement.

**05. Direction technique et livraison** (`key: 'leadership'`)

- summary fr : « J'ai tenu le rôle de directeur technique et de référent frontend : choix d'architecture, encadrement de
  développeurs, organisation des livraisons, mise en place des chaînes d'intégration continue. »
- summary en : "I have held the role of technical director and frontend lead: architecture decisions, coaching
  developers, organising deliveries, setting up continuous integration."
- highlights :
   - fr « Choix de la stack et de l'architecture, arbitrage entre délai, coût et dette technique. » en "Stack and
     architecture choices, balancing time, cost and technical debt."
   - fr « Encadrement de développeurs, revue de code, organisation des sprints. » en "Coaching developers, code review,
     sprint organisation."
   - fr « Intégration continue et déploiement automatisé (GitHub Actions, Vercel, Docker, VPS). » en "Continuous
     integration and automated deployment (GitHub Actions, Vercel, Docker, VPS)."
   - fr « Administration serveur et supervision des applications en production. » en "Server administration and
     monitoring of production applications."
- stack : GitHub Actions, Docker, Vercel, Google Cloud, VPS, Coolify, n8n, Backblaze B2. projects : mappeos, cosumaf.

### 3.4 Ce qu'il faut supprimer

Retirer intégralement : les tarifs et fourchettes de budget, la FAQ commerciale, les formules du type « transformez
votre entreprise », « réduisez vos coûts de 40 % », « 250 % de trafic », « 99,99 % de disponibilité », « 135+ devises »,
les mentions de Flutter, Kubernetes, AWS, Azure et PayPal, et l'ancien service SEO présenté comme une prestation (le
référencement reste cité comme compétence dans l'expertise frontend).

---

## 4. Page Projets (`src/resources/data/projects.tsx`, `src/components/projects/*`, `lang/projects/*.json`)

### 4.1 Angle éditorial

Chaque fiche répond à quatre questions du recruteur : quel était le contexte, quel était **ton** rôle exact, quelles
technologies, quel a été le résultat. La distinction entre « projet client » et « projet personnel » disparaît au profit
du contexte réel (entreprise, mission, projet personnel).

Titre de page : « Projets » / "Projects". Sous titre fr : « Applications et plateformes sur lesquelles j'ai travaillé,
avec le rôle que j'y ai tenu. » en : "Applications and platforms I have worked on, with the role I held on each."

### 4.2 Évolutions du modèle `Project`

- Ajouter : `platform: 'web' | 'mobile' | 'confidential'`, `role: Record<LocaleType, string>`,
  `context: Record<LocaleType, string>` (entreprise, type de structure, taille d'équipe si connue),
  `contributions: Record<LocaleType, string>[]` (trois à cinq puces, ce que Ronald a fait lui même),
  `result: Record<LocaleType, string>`, `featured: boolean`, `order: number`.
- Supprimer le champ `authentication` et toutes ses valeurs (identifiants de démonstration publiés dans le dépôt).
- `project-item.tsx` : afficher le rôle sous le titre, puis les technologies, puis le résultat. Bouton de
  prévisualisation seulement pour `platform === 'web'` avec un lien qui répond. Pour `mobile`, deux boutons App Store et
  Google Play. Pour `confidential`, la mention « Projet sous confidentialité » / "Under NDA".
- `gallery.tsx` : gérer un ratio portrait pour les captures mobiles.
- `projects/preview/[project_id]` et `sitemap.ts` : uniquement les projets web dont le lien répond.
- Tags : cinq à six maximum par projet, uniquement les technologies structurantes. Corriger « Reacharts » en « Recharts
  », « Cryptomonnaie » en « Paiement crypto » / "Crypto payments", uniformiser (`Next.js`, `Tailwind CSS`, `shadcn/ui`).
- Chaque lien externe est vérifié par `curl -I` avant livraison ; les liens morts sont retirés et listés dans le
  rapport.

### 4.3 Fiches, dans l'ordre d'affichage

**1. COSUMAF, outil de supervision financière régionale** (`cosumaf`, confidential, featured)

- context fr : « NAFASI DIGITAL SARL, mission pour la COSUMAF, autorité de supervision financière d'Afrique centrale.
  Déc 2025 à aujourd'hui. » en : "NAFASI DIGITAL SARL, engagement for COSUMAF, the Central African financial supervisory
  authority. Dec 2025 to today."
- role fr : « Senior Frontend Engineer et consultant CTO » en : "Senior Frontend Engineer and CTO consultant".
- contributions :
   - fr « Référent technique du projet : décisions frontend et UX, coordination avec les équipes produit et backend. »
     en "Technical lead: frontend and UX decisions, coordination with product and backend teams."
   - fr « Conception des parcours, wireframes et maquettes haute fidélité sur Figma pour une dizaine d'écrans clés. » en
     "User journeys, wireframes and high fidelity Figma designs for about ten key screens."
   - fr « Définition du design system garantissant la cohérence et la réutilisation des composants. » en "Design system
     definition ensuring consistency and component reuse."
   - fr « Développement complet du frontend Angular, intégration fidèle des maquettes. » en "Full Angular frontend
     development, faithful implementation of the designs."
   - fr « Modules livrés : authentification et habilitations, demandes d'agréments et de visas, facturation,
     notifications, tableaux de bord. » en "Modules delivered: authentication and permissions, licence and visa
     requests, invoicing, notifications, dashboards."
- result fr : « Outil utilisé à l'échelle régionale par plusieurs pays, avec des pratiques de performance,
  d'accessibilité et de tests en place. » en : "A tool used regionally by several countries, with performance,
  accessibility and testing practices in place."
- tags : Angular, TypeScript, Figma, Design system. Aucun lien. Visuels : écrans anonymisés fournis par Ronald dans
  `public/projects/cosumaf/` ; à défaut, une cover abstraite en SVG aux couleurs du site et pas de galerie.

**2. Lafya, application d'entretien automobile** (`lafya`, mobile, featured)

- context fr : « AGYL TECH pour Lafya, France. 2023 à 2025. » en : "AGYL TECH for Lafya, France. 2023 to 2025."
- role fr : « Développeur mobile » en : "Mobile developer".
- contributions :
   - fr « Développement de l'application React Native avec Expo, sur iOS et Android. » en "React Native app development
     with Expo, on iOS and Android."
   - fr « Intégration de Mistral AI en multimodal : la photo d'une carte grise est convertie en données structurées,
     sans saisie manuelle. » en "Mistral AI multimodal integration: a photo of a vehicle registration card is turned
     into structured data, with no manual entry."
   - fr « Rappels d'entretien, stockage des documents, recherche de garages à proximité. » en "Maintenance reminders,
     document storage, nearby garage search."
   - fr « Publication et mises à jour sur l'App Store et Google Play. » en "Publishing and updates on the App Store and
     Google Play."
- result fr : « Application publiée sur les deux stores et utilisée par des automobilistes en France. » en : "App
  published on both stores and used by drivers in France."
- links : App Store `https://apps.apple.com/fr/app/lafya-entretien/id6450374401`, Google Play
  `https://play.google.com/store/apps/details?id=com.agyltech.lafya`, site `https://lafya.fr`.
- tags : React Native, Expo, TypeScript, Mistral AI.

**3. Mappeos, plateforme de mise en relation** (`mappeos`, web, featured)

- context fr : « Mappeos, startup française. Oct 2024 à Sept 2025, à distance. » en : "Mappeos, French startup. Oct 2024
  to Sept 2025, remote."
- role fr : « Directeur technique (CTO) » en : "Chief Technology Officer".
- contributions :
   - fr « Définition de l'architecture technique et de la stack (Next.js, Express). » en "Defined the technical
     architecture and stack (Next.js, Express)."
   - fr « Encadrement de l'équipe de développement, organisation des sprints, revue de code. » en "Led the development
     team, ran sprints, reviewed code."
   - fr « Choix garantissant la sécurité, la maintenabilité et la montée en charge de la plateforme. » en "Decisions
     ensuring the platform's security, maintainability and ability to scale."
   - fr « Traduction des besoins métier en spécifications avec les équipes non techniques. » en "Turning business needs
     into specifications with non technical teams."
- result fr : « Produit mené de la conception initiale à la mise en production, avec une équipe qui livre à un rythme
  régulier. » en : "A product taken from initial design to production, with a team shipping at a steady pace."
- tags : Next.js, Node.js, Express, Direction technique. Aucun lien public trouvé : `links: []`, la fiche affiche « Lien
  sur demande » / "Link on request".

**4. Zakadia, livraison de colis entre voyageurs** (`zakadia`, mobile)

- context fr : « AGYL TECH pour Zakadia, France. 2024 à 2025. » en : "AGYL TECH for Zakadia, France. 2024 to 2025."
- role fr : « Développeur mobile » en : "Mobile developer".
- contributions : fr « Développement de l'application React Native (publication de trajets, recherche de transporteur,
  réservation, suivi de livraison). » ; fr « Intégration du paiement et de la géolocalisation. » ; fr « Publication sur
  l'App Store et Google Play. » Équivalents anglais.
- result fr : « Disponible sur les deux stores depuis juin 2024. » en : "Available on both stores since June 2024."
- links : App Store `https://apps.apple.com/us/app/zakadia/id6503708050`, Google Play
  `https://play.google.com/store/apps/details?id=com.agyltech.zakadia`.
- tags : React Native, Expo, TypeScript, Géolocalisation.

**5. Les Vadrouilleurs, parcours touristiques** (`les-vadrouilleurs`, mobile)

- context fr : « AGYL TECH avec Agence 1400, France. 2023 à 2025. » en : "AGYL TECH with Agence 1400, France. 2023 to
  2025."
- role fr : « Développeur mobile » en : "Mobile developer".
- contributions : fr « Développement de l'application React Native de jeux de piste et visites guidées par GPS. » ; fr «
  Contenus multimédias (texte, photo, audio, vidéo) administrés par les territoires. » ; fr « Évolutions du
  fonctionnement des parcours et mises à jour sur les stores. » Équivalents anglais.
- result fr : « Application publiée sur les deux stores, utilisée par des offices de tourisme et des collectivités en
  France. » en : "App published on both stores, used by tourist offices and local authorities in France."
- links : App Store `https://apps.apple.com/fr/app/les-vadrouilleurs/id1634201497`, Google Play
  `https://play.google.com/store/apps/details?id=com.vadrouilleursrn`, site `https://les-vadrouilleurs.fr`.
- tags : React Native, Expo, TypeScript, Géolocalisation.

**6. Privie** (`privie`, web) : conserver le contenu existant, ajouter context « AGYL TECH, projet client », role fr «
Développeur frontend » / "Frontend developer", contributions sur l'interface Next.js, les tableaux de bord, la
génération de PDF et le paiement, result fr « Plateforme en production avec paiement par carte et crypto. » Lien
`https://privie.io` à vérifier.

**7. Amizone CM** (`amizone`, web) : conserver, role fr « Développeur frontend » / "Frontend developer", contributions
sur l'espace membre, les tableaux de bord et l'authentification. Lien `https://amizonecm-beta.vercel.app` à vérifier.

**8. Localtik** (`localtik-web`, web) : compléter avec l'origine du projet chez DC Corp. context fr « DC Corp, puis
prototype web. » ; contributions fr « Application Android de partage de documents et de vidéos en local, publiée sur
Google Play. » et « Prototype web en Angular avec NgRx. » ; links : Google Play
`https://play.google.com/store/apps/details?id=com.localtik`, documentation `https://lk.dc-corp.cm`, web
`https://localtik-web-beta.vercel.app/cloud` (à vérifier).

**9. Maori Consulting** (`maori`, web) : conserver, role fr « Développeur frontend » / "Frontend developer". Lien
`https://maori-delta.vercel.app` à vérifier.

**10. Payment Slip** (`bon-paiement`, web) : conserver, context fr « Projet personnel. », role fr « Conception Figma et
développement » / "Figma design and development", contributions sur le composant de téléversement multiple et les
graphiques.

Les projets internes AGYL TECH sans visuel (plateforme de services AGYL TECH, Atelier Bigoodee, Bigoodee Résa) ne font
pas l'objet d'une fiche : ils sont cités dans l'expérience AGYL TECH.

---

## 5. Pages Parcours (`/resume/*`) : le cœur du portfolio

C'est la page la plus importante pour l'audience visée. Elle doit pouvoir être lue seule, sans passer par l'accueil.

### 5.0 Carte candidat (nouveau : `src/components/resume/candidate-card.tsx`)

Encadré compact en haut de `/resume`, avant les onglets. Deux colonnes sur ordinateur, une sur mobile.

| Ligne                    | fr                                                              | en                                                               |
| ------------------------ | --------------------------------------------------------------- | ---------------------------------------------------------------- |
| Poste actuel             | Senior Frontend Engineer et consultant CTO, NAFASI DIGITAL SARL | Senior Frontend Engineer and CTO consultant, NAFASI DIGITAL SARL |
| Expérience               | 6 ans et plus                                                   | 6+ years                                                         |
| Technologies principales | TypeScript, React, Next.js, Angular, React Native, Node.js      | TypeScript, React, Next.js, Angular, React Native, Node.js       |
| Recherche                | CDI, freelance ou mission longue                                | Permanent, freelance or long term contract                       |
| Mode de travail          | Télétravail complet                                             | Fully remote                                                     |
| Localisation             | Douala, Cameroun, UTC+1                                         | Douala, Cameroon, UTC+1                                          |
| Langues                  | Français (langue maternelle), anglais (professionnel)           | French (native), English (professional)                          |

Sous le tableau : deux boutons de téléchargement du CV (français et anglais) avec le format et le nombre de pages, un
bouton « Me contacter », et une ligne de liens vers GitHub, LinkedIn et YouTube avec `aria-label`.

Ne pas afficher de ligne « préavis » ni « prétentions » : l'information n'est pas fournie, et une mention vague est pire
que rien. Signaler dans le rapport que ces deux lignes sont disponibles si Ronald veut les activer.

### 5.1 Introduction et navigation (`lang/resume/*`, `side-bar.tsx`)

Titre : « Mon parcours » / "My background". Accroche fr : « Six ans et plus de développement web et mobile, du composant
frontend à la direction technique, en agence, en institution publique et en startup. » en : "Six plus years of web and
mobile development, from frontend components to technical leadership, across agencies, a public institution and a
startup."

Onglets : « Compétences », « Expériences », « Formations », « À propos » / "Skills", "Experience", "Training", "About".
Corriger l'affichage des clés brutes signalé dans l'audit s'il subsiste.

### 5.2 Compétences (`skills.tsx`)

Regrouper en cinq blocs, chaque compétence gardant son icône :

1. **Frontend** : TypeScript, JavaScript, React, Next.js, Angular, HTML, CSS, Tailwind CSS, shadcn/ui, Framer Motion.
2. **Mobile** : React Native, Expo.
3. **Backend et données** : Node.js, Express, API REST, GraphQL, WebSocket, PostgreSQL, MySQL, MongoDB, Firebase.
4. **Design** : Figma, design system.
5. **Livraison et infrastructure** : Docker, GitHub Actions, Vercel, Google Cloud, VPS, Coolify, n8n, Backblaze B2,
   Stripe, Paddle, Clerk, Mistral AI.

Étendre le type `Skill` avec `level: 'principal' | 'courant' | 'occasionnel'` et `sinceYear?: number`. Afficher sous
chaque bloc une ligne d'ancienneté déduite **uniquement** des expériences datées, par exemple « Angular et React depuis
2021, React Native depuis 2022 ». Toute technologie dont l'ancienneté n'est pas déductible garde `sinceYear` vide et
n'apparaît pas dans cette ligne : la lister dans le rapport pour arbitrage.

Aucune barre de progression ni pourcentage de maîtrise.

Texte d'intro : « Les technologies que j'utilise au quotidien, regroupées par domaine. » / "The technologies I use day
to day, grouped by area."

### 5.3 Expériences (`experiences.ts`)

Ajouter au type `Experience` : `context: Record<LocaleType, string>` (type de structure et mode de travail) et
`sortDate: string` au format `YYYY-MM` (date de début), pour trier par date décroissante plutôt que par `id`, car les
périodes se chevauchent.

**NAFASI DIGITAL SARL**, `id: '00'`, `sortDate: '2025-12'` Poste : Senior Frontend Engineer et consultant CTO / Senior
Frontend Engineer and CTO consultant. Dates : Déc 2025 à aujourd'hui / Dec 2025 to today. context fr : « Cabinet de
conseil, mission pour une autorité de supervision régionale, à distance et sur site. » en : "Consulting firm, engagement
for a regional supervisory authority, remote and on site." description fr : « Conception, développement et supervision
technique d'un outil stratégique de supervision financière pour l'Afrique centrale. » en : "Design, development and
technical supervision of a strategic financial supervision tool for Central Africa." tasks :

- fr « Référent technique sur l'ensemble des décisions frontend et UX, en coordination avec les équipes produit et
  backend. » en "Technical reference for all frontend and UX decisions, in coordination with product and backend teams."
- fr « Conception des parcours utilisateurs, wireframes et maquettes haute fidélité sur Figma pour une dizaine d'écrans
  clés. » en "User journeys, wireframes and high fidelity Figma designs for about ten key screens."
- fr « Définition du design system : cohérence visuelle et réutilisation des composants sur toute l'application. » en
  "Design system definition: visual consistency and component reuse across the application."
- fr « Développement du frontend complet en Angular, avec une intégration fidèle des maquettes. » en "Full Angular
  frontend development, with faithful implementation of the designs."
- fr « Implémentation des modules métier : authentification et habilitations, demandes d'agréments et de visas,
  facturation, notifications, tableaux de bord et statistiques. » en "Implementation of the business modules:
  authentication and permissions, licence and visa requests, invoicing, notifications, dashboards and statistics."
- fr « Mise en place des pratiques de performance, d'accessibilité et de tests pour un outil utilisé par plusieurs pays.
  » en "Performance, accessibility and testing practices for a tool used by several countries." keywords : Angular,
  TypeScript, Figma, Design system.

**AGYL TECH**, `id: '01'`, `sortDate: '2023-10'` Poste : Développeur senior Full Stack / Senior Full Stack developer.
Dates : Oct 2023 à Déc 2025 / Oct 2023 to Dec 2025. context fr : « Studio produit, plusieurs projets clients en
parallèle. » en : "Product studio, several client projects in parallel." description fr : « Conception, développement et
maintenance de plateformes web et mobiles internes et clientes, de la conception technique à la mise en production. » en
: "Design, development and maintenance of internal and client web and mobile platforms, from technical design to
production." tasks :

- fr « Plateformes SaaS développées avec Next.js, React et Node.js : plateforme de services AGYL TECH, Atelier Bigoodee,
  Bigoodee Résa. » en "SaaS platforms built with Next.js, React and Node.js: AGYL TECH services platform, Atelier
  Bigoodee, Bigoodee Résa."
- fr « Applications mobiles React Native publiées sur l'App Store et Google Play : Lafya, Les Vadrouilleurs, Zakadia. »
  en "React Native mobile apps published on the App Store and Google Play: Lafya, Les Vadrouilleurs, Zakadia."
- fr « Intégration de Mistral AI en multimodal pour extraire des données structurées à partir d'images. » en "Multimodal
  Mistral AI integration to extract structured data from images."
- fr « Paiement, abonnements et authentification en production avec Stripe, Paddle et Clerk. » en "Payments,
  subscriptions and authentication in production with Stripe, Paddle and Clerk."
- fr « Conception et réalisation d'API REST et GraphQL. » en "Design and implementation of REST and GraphQL APIs."
- fr « Administration système et infrastructure des projets déployés, mise en place de pipelines d'intégration continue.
  » en "System administration and infrastructure for deployed projects, continuous integration pipelines."
- fr « Planification des sprints et résolution de problèmes techniques complexes en contexte multi projets. » en "Sprint
  planning and resolution of complex technical issues across several projects." keywords : Next.js, React Native,
  Node.js, Stripe, Mistral AI.

**Mappeos**, `id: '04'`, `sortDate: '2024-10'` Poste : Directeur technique (CTO) / Chief Technology Officer. Dates : Oct
2024 à Sept 2025 / Oct 2024 to Sept 2025, France, à distance. context fr : « Startup française, encadrement de l'équipe
de développement, à distance. » en : "French startup, led the development team, remote." description fr : « Direction
technique d'une plateforme mettant en relation particuliers et techniciens locaux partout en France. » en : "Technical
leadership of a platform connecting individuals with local technicians across France." tasks :

- fr « Définition de l'architecture technique et de la stack (Next.js, Express). » en "Defined the technical
  architecture and stack (Next.js, Express)."
- fr « Encadrement et accompagnement de l'équipe de développement, supervision des sprints, de la qualité de code et des
  livraisons. » en "Coached the development team, oversaw sprints, code quality and deliveries."
- fr « Solutions techniques garantissant la montée en charge, la sécurité et la maintenabilité. » en "Technical
  solutions ensuring scalability, security and maintainability."
- fr « Collaboration avec les équipes non techniques pour transformer les besoins métier en produit. » en "Worked with
  non technical teams to turn business needs into product." keywords : Direction technique, Next.js, Express.

**Communauté urbaine de Douala**, `id: '05'`, `sortDate: '2021-11'` Poste : Ingénieur Full Stack et administrateur
systèmes / Full Stack engineer and systems administrator. Dates : Nov 2021 à Fév 2024 / Nov 2021 to Feb 2024. context fr
: « Institution publique, plateformes internes. » en : "Public institution, internal platforms." description fr : « Mise
en place des plateformes web et mobiles de l'institution. » en : "Set up the institution's web and mobile platforms."
tasks :

- fr « Applications complètes en Angular, React et React Native, avec Express côté serveur. » en "Complete applications
  in Angular, React and React Native, with Express on the server."
- fr « Communication en temps réel via WebSocket. » en "Real time communication with WebSocket."
- fr « Bases de données relationnelles et NoSQL (MySQL, MongoDB) et services Firebase. » en "Relational and NoSQL
  databases (MySQL, MongoDB) and Firebase services."
- fr « Administration et déploiement de l'infrastructure sur Google Cloud, configuration serveur et supervision. » en
  "Infrastructure administration and deployment on Google Cloud, server configuration and monitoring." keywords :
  Angular, React Native, Express, Google Cloud.

**AGYL TECH**, `id: '02'`, `sortDate: '2021-10'` Poste : Développeur Front End junior / Junior front end developer.
Dates : Oct 2021 à Nov 2022 / Oct 2021 to Nov 2022. context fr : « Agence, projets clients. » en : "Agency, client
projects." Conserver les tâches existantes, renseigner `keywords: ['Angular', 'React']`.

**DC Corp**, `id: '03'`, `sortDate: '2022-02'` Poste : Développeur web / Web developer. Dates : **Fév 2022 à Fév 2024 /
Feb 2022 to Feb 2024** (dates du profil LinkedIn ; elles remplacent le « Mai 2018 à Nov 2021 » actuellement en ligne).
context fr : « Agence, projets clients. » en : "Agency, client projects." Conserver les tâches existantes et ajouter fr
« Application LocalTik de partage de documents et de vidéos en local, publiée sur Google Play. » en "LocalTik app for
local document and video sharing, published on Google Play." `keywords: ['React', 'Android']`.

`generateStaticParams` de `resume/experiences/[exp_id]` doit couvrir les six identifiants, avec `dynamicParams = false`.

### 5.4 Formations et certifications (`educations.ts`)

Conserver les entrées existantes et compléter pour arriver à cinq :

- Certification en développement backend avec Node.js, Coursera, août 2024.
- Node and Express Essentials, IBM sur Coursera, 2024.
- Formation React, Redux, Redux Toolkit et API Context, Alphorm, déc. 2022.
- Formation Angular avancé, Alphorm, déc. 2022.
- Formation Docker, installation et administration, Alphorm, déc. 2022. Contenu : images, conteneurs, volumes, réseau,
  déploiement.

Si les deux formations React d'Alphorm (« React avancé » et « React JS, Redux ») sont distinctes, créer deux entrées ;
sinon les fusionner et le signaler dans le rapport.

Intro fr : « Certifications et formations qui complètent mon expérience terrain. » en : "Certifications and training
that complement my hands on experience."

### 5.5 À propos (`informations.ts`, `resume/about/page.tsx`)

Texte fr : « Je m'appelle Ronald, je vis à Douala et je travaille en télétravail avec des équipes en France, en Europe
et en Afrique. J'aime les projets où la contrainte métier est réelle, et je partage ce que j'apprends sur YouTube. » en
: "I'm Ronald, I live in Douala and I work remotely with teams in France, Europe and Africa. I like projects with real
business constraints, and I share what I learn on YouTube."

Champs conservés : nom, poste actuel, localisation, expérience (`EXPERIENCE_YEARS`), langues, email, téléphone
`(+237) 658 172 868` en lien `tel:`, LinkedIn, GitHub, YouTube. Retirer la nationalité. Le compteur d'étoiles GitHub
peut être affiché ici.

### 5.6 CV téléchargeable (`public/cv/`)

Le CV est le livrable que le recruteur emporte, c'est le point de sortie principal du site. Quatre exigences :

1. **Deux fichiers** : `ronald-tchuekou-cv-fr.pdf` et `ronald-tchuekou-cv-en.pdf`, servis selon la locale, avec un lien
   vers l'autre version.
2. **Nom de fichier explicite** : un fichier nommé `cv.pdf` se perd dans le dossier de candidatures du recruteur.
3. **Texte sélectionnable** : les logiciels de suivi de candidatures ne lisent pas les PDF exportés en image depuis
   Figma. Vérifier avec `pdftotext fichier.pdf -` que le texte ressort ; si ce n'est pas le cas, ne pas mettre le
   fichier en ligne et le signaler.
4. **Cohérence stricte avec le site** : mêmes intitulés, mêmes dates, même nombre d'années. Produire dans le rapport une
   comparaison ligne à ligne entre le PDF et `experiences.ts` ; tout écart est un signal négatif pour un recruteur.

Si les PDF ne sont pas encore fournis : créer `public/cv/README.md` avec ces quatre règles, garder les boutons visibles
mais désactivés, avec l'infobulle « Bientôt disponible, écrivez moi en attendant » / "Coming soon, get in touch in the
meantime" et un lien vers le contact. Ne jamais masquer les boutons.

---

## 6. Page Contact (`contact/page.tsx`, `contact-form*.tsx`, `lang/contact/*`, `form-schemas.ts`)

Le formulaire est réécrit pour une audience de recrutement. Tous les champs commerciaux disparaissent.

- Titre : « Me contacter » / "Get in touch". Sous titre fr : « Décrivez le poste ou la mission, je réponds sous 24
  heures ouvrées avec ma disponibilité. » en : "Describe the role or assignment, I reply within one business day with my
  availability."
- Champs : prénom, nom, email, entreprise, intitulé du poste, type de contrat (select : CDI, Freelance, Mission longue,
  Autre / Permanent, Freelance, Long term contract, Other), mode de travail (select : Full remote, Hybride, Sur site /
  Fully remote, Hybrid, On site), lien vers l'offre (facultatif, validé comme URL), message.
- Retirer du schéma Zod et de l'interface : le select de services, le budget, le délai souhaité.
- Le message envoyé sur Discord affiche en tête l'intitulé du poste et l'entreprise, pour un repérage immédiat.
- Colonne latérale : email cliquable, LinkedIn, GitHub, fuseau horaire « Douala, UTC+1 », mention « Réponse en français
  ou en anglais » / "Reply in French or English", et un rappel « CV disponible en français et en anglais » avec le lien
  vers `/resume`.
- Toast de succès uniquement si la réponse est `ok`. Message d'erreur avec l'email en secours.
- Métadonnées traduites par locale (section 8), plus de texte français côté anglais.

---

## 7. Pages annexes

- **404** (`not-found.tsx`) : traduite dans les deux langues. fr « Cette page n'existe pas ou a été déplacée. » avec
  deux boutons « Retour à l'accueil » et « Voir mon parcours ». en "This page does not exist or has moved."
- **Mentions légales** (`/legal`, nouvelle page statique, `lang/legal/*`) : éditeur (Ronald Tchuekou, Douala, Cameroun,
  email), hébergeur (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA), données personnelles (le formulaire
  transmet les informations saisies à Ronald uniquement, aucune revente, suppression sur demande par email), cookies
  (aucun cookie de suivi, mesure d'audience Vercel sans cookie). Ajouter au sitemap.

---

## 8. SEO (`src/lib/seo.ts`, `metadata.ts`, `sitemap.ts`, `robots.ts`, `layout.tsx`)

### 8.1 Titres et descriptions

| Page       | fr title                                                            | fr description                                                                                                                              | en title                                                           | en description                                                                                                                    |
| ---------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| Accueil    | Ronald Tchuekou, Senior Frontend Engineer et développeur Full Stack | 6 ans et plus sur React, Next.js, Angular et React Native. Trois applications en production sur les stores. Disponible en télétravail.      | Ronald Tchuekou, Senior Frontend Engineer and Full Stack developer | 6+ years with React, Next.js, Angular and React Native. Three apps live on the stores. Available for remote work.                 |
| Expertises | Expertises : frontend, mobile, backend, design, direction technique | Détail de mon niveau par domaine : React et Angular, React Native, Node.js et intégrations, Figma et design system, encadrement technique.  | Expertise: frontend, mobile, backend, design, technical leadership | My level in each area: React and Angular, React Native, Node.js and integrations, Figma and design systems, technical leadership. |
| Projets    | Projets : applications mobiles et plateformes web                   | Lafya, Zakadia et Les Vadrouilleurs sur les stores, outil de supervision financière COSUMAF, plateformes web, avec le rôle tenu sur chacun. | Projects: mobile apps and web platforms                            | Lafya, Zakadia and Les Vadrouilleurs on the stores, the COSUMAF financial supervision tool, web platforms, with my role on each.  |
| Parcours   | Parcours et CV de Ronald Tchuekou, Senior Frontend Engineer         | Expériences, compétences par domaine, certifications et CV téléchargeable en français et en anglais.                                        | Ronald Tchuekou's background and resume, Senior Frontend Engineer  | Experience, skills by area, certifications and a downloadable resume in French and English.                                       |
| Contact    | Me contacter                                                        | Poste ou mission à proposer ? Réponse sous 24 heures ouvrées, en français ou en anglais.                                                    | Get in touch                                                       | A role or assignment to discuss? Reply within one business day, in French or English.                                             |

Titres de moins de 60 caractères quand c'est possible, descriptions entre 120 et 155 caractères ; ajuster sans changer
le sens.

### 8.2 Autres points

- `keywords` : supprimer la liste actuelle, dont « BTCPay Sever » et la liste générique de la page projets. Nouvelle
  liste, orientée requêtes de recrutement : Senior Frontend Engineer, développeur Full Stack senior, développeur React
  senior, développeur Angular senior, développeur React Native, ingénieur frontend TypeScript, développeur full remote,
  CV développeur Full Stack, remote React developer, React Native developer, Douala, Cameroun.
- JSON-LD dans le layout racine : un `Person` complet avec `name`, `jobTitle` (Senior Frontend Engineer), `url`,
  `image`, `address` (Douala, Cameroun), `email`, `sameAs` (LinkedIn, GitHub, X, YouTube), `worksFor` (NAFASI DIGITAL
  SARL), `knowsAbout` (les technologies principales), `knowsLanguage` (fr, en), et un
  `EducationalOccupationalCredential` par certification avec l'organisme et l'année. Sur les fiches projet :
  `CreativeWork`, et `SoftwareApplication` avec `operatingSystem: iOS, Android` et les liens des stores pour les
  applications mobiles. Valider le balisage avec le validateur schema.org avant de livrer.
- Image Open Graph : générer avec `next/og` une image 1200×630 par locale, avec le nom, l'intitulé de poste et les
  technologies principales, dans `src/app/[locale]/opengraph-image.tsx`. Retirer la référence à
  `ronald-tchuekou-profile.jpg` si le fichier n'existe pas. `twitter:card` uniformément `summary_large_image`.
- Sitemap : toutes les pages publiques dans les deux locales, projets, expériences, formations, `/legal`. `lastModified`
  fixé par une constante `CONTENT_UPDATED_AT` dans `metadata.ts`, jamais `new Date()`.
- Robots : tout autorisé sauf `/api/` et `/projects/preview/`.
- Canonical par page dans sa locale, hreflang `fr`, `en` et `x-default` vers `fr`.
- Rendre l'URL de base configurable via `NEXT_PUBLIC_SITE_URL` (valeur par défaut : l'URL Vercel actuelle), pour
  préparer un nom de domaine propre. Noter dans le rapport qu'un domaine personnel renforce la crédibilité auprès des
  recruteurs.
- Attributs `alt` descriptifs et traduits sur toutes les images de projets.

---

## 9. Sécurité

- En têtes HTTP dans `next.config.ts` via `headers()` :
  `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`, `X-Content-Type-Options: nosniff`,
  `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`,
  `X-Frame-Options: DENY` sauf sur `/projects/preview/*` qui charge des sites tiers en iframe. Ajouter une
  `Content-Security-Policy` d'abord en `report-only` (`default-src 'self'`, `img-src 'self' data: https:`,
  `script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com`, `style-src 'self' 'unsafe-inline'`,
  `connect-src 'self' https://vitals.vercel-insights.com`, `frame-src` limité aux domaines de prévisualisation), puis en
  mode strict une fois la console propre.
- `/api/contact` : conserver le honeypot et la limite de requêtes ; ajouter une limite de taille du corps (rejet au delà
  de 10 Ko), une longueur maximale par champ dans le schéma Zod (message à 2 000 caractères), le nettoyage des retours à
  la ligne dans les champs courts, et une validation stricte de l'URL de l'offre (schéma `https` uniquement, pour éviter
  les liens `javascript:`).
- Supprimer définitivement le champ `authentication` des projets et les identifiants de démonstration.
- Variables d'environnement : `src/lib/env/server.ts` valide `DISCORD_WEBHOOK` et `GITHUB_TOKEN`, `client.ts` ne
  contient aucun secret, `.env.example` est aligné. Vérifier que `git ls-files | grep -i env` ne renvoie que
  `.env.example`.
- Ajouter `.github/dependabot.yml` (npm, hebdomadaire, regroupement des mises à jour mineures) et `pnpm audit --prod`
  dans la CI.
- Tous les liens externes en `rel="noopener noreferrer"`, `target="_blank"`, avec `aria-label`.
- Rappeler dans le rapport que Ronald doit régénérer le webhook Discord et le token GitHub exposés avant l'audit, puis
  les saisir dans Vercel.

---

## 10. Qualité, performance, accessibilité, intégration continue

- **CI** : recréer `.github/workflows/ci.yml` (Node 22, pnpm via corepack, `install --frozen-lockfile`, `lint`,
  `typecheck`, `build`, `audit --prod`) sur `pull_request` et `push` vers `main`. Un dépôt public sans CI se remarque
  quand le recruteur ouvre le GitHub.
- **Dépôt GitHub** : le recruteur ira le voir. Mettre à jour le `README.md` : capture d'écran, stack, scripts
  disponibles, variables d'environnement, procédure d'ajout d'un projet ou d'une expérience. Retirer toute mention de
  `NEXT_PUBLIC_DISCORD_WEBHOOK`. Vérifier que `.idea/` n'est pas suivi (`git ls-files .idea`). Déplacer le dossier `@/`
  non conventionnel de la racine vers `src/components/ui`, `src/hooks` et `src/lib`, en corrigeant `tsconfig.json` et
  `components.json`.
- **Performance** : objectif Lighthouse mobile supérieur ou égal à 90 sur les quatre catégories pour l'accueil, le
  parcours et les projets. Image du hero en `priority`, le reste en `loading="lazy"` avec des `sizes` corrects,
  `framer-motion` importé uniquement dans les composants animés, polices en `display: swap`.
- **Accessibilité** : contraste AA en clair et en sombre, focus visible partout, lien « Aller au contenu », respect de
  `prefers-reduced-motion` dans `reveal-from-bottom.tsx`, `aria-label` sur chaque bouton icône, un seul `h1` par page.
- **Tests de fumée** : script `pnpm smoke` (Playwright) qui ouvre les pages principales dans les deux langues, vérifie
  l'absence de clé de traduction brute et d'erreur console, et produit des captures desktop, mobile et sombre dans
  `test-results/`.

---

## 11. Mesure

Vercel Analytics est déjà installé. Ajouter des événements via `track()` de `@vercel/analytics` : `resume_download`
(propriété `locale`), `cta_click` (propriété `location` : hero, looking_for, final, footer), `contact_submit`,
`contact_success`, `project_link_click` (propriétés `project` et `target`), `github_click`, `linkedin_click`. Aucun
cookie, aucun script tiers supplémentaire.

Le taux de téléchargement du CV est l'indicateur principal du site.

---

## 12. Vérifications finales et rapport

1. `pnpm lint && pnpm typecheck && pnpm build` sans erreur, avec un nombre de pages cohérent (6 expériences, 5
   formations, 10 projets, prévisualisations web uniquement, `/expertises`, `/legal`, deux locales).
2. `grep -rn "—\|–" lang src` : zéro résultat.
3. `grep -rn "5 ans\|8 ans\|4 ans\|5 years\|8 years\|CAREER_START_YEAR\|Flutter\|Kubernetes\|40%\|250%\|99,99\|BTCPay\|Administrateur de systèmes\|Systems Administrator\|NEXT_PUBLIC_DISCORD\|budget\|devis" src lang`
   : zéro résultat. Puis `grep -rn "EXPERIENCE_YEARS" src` : une seule définition.
4. `curl -I` sur `/fr/services` et `/en/services` : réponse 308 vers `/expertises`.
5. `curl -I` sur chaque lien externe des projets, liens morts retirés et listés.
6. `pnpm smoke` : captures dans les deux langues, sans clé brute ni erreur console.
7. Lighthouse mobile sur `/fr`, `/fr/resume`, `/fr/projects` : scores reportés.
8. Parcours recruteur complet, à dérouler à la main : arriver sur `/fr/resume` sans passer par l'accueil, lire la carte
   candidat, télécharger le CV, ouvrir un projet, envoyer un message via le formulaire. Chaque étape doit tenir sans
   recherche ni retour en arrière.
9. Rapport final : fichiers modifiés par section, contenus supprimés, liens retirés, technologies sans ancienneté
   déductible, lignes de la carte candidat laissées vides, et les trois actions qui restent à Ronald : déposer les deux
   CV PDF dans `public/cv/`, déposer les écrans anonymisés COSUMAF et les captures des trois applications dans
   `public/projects/<id>/`, régénérer et saisir `DISCORD_WEBHOOK` et `GITHUB_TOKEN` dans Vercel.

---

## Annexe : décisions prises dans ce brief, à corriger si elles sont fausses

1. **Audience unique.** Tout le contenu commercial disparaît : tarifs, budgets, FAQ de vente, formulations de
   prospection. La page Services devient Expertises, avec une redirection 308.
2. **Expérience affichée : 6 ans et plus**, en constante fixe `EXPERIENCE_YEARS`, et non plus un calcul depuis 2018.
   Aucune année de départ ne donne 6 tout en restant cohérente avec le parcours affiché (2022 donnerait 4, 2021
   donnerait 5). Alternative si la mise à jour annuelle manuelle gêne : `CAREER_START_YEAR = 2020`, qui progresse seul.
3. **DC Corp est redaté de fév. 2022 à fév. 2024** selon LinkedIn. Conséquence : la période 2018 à 2021 disparaît du
   parcours. Si Ronald a exercé pendant ces années (freelance, alternance, projets étudiants), il faut une ligne
   supplémentaire, sans quoi un recruteur attentif se demandera d'où viennent les six ans.
4. **Intitulés de poste retenus** : Senior Frontend Engineer en principal, développeur Full Stack senior, développeur
   React Native senior et Lead Frontend en secondaires. Ce sont les mots sur lesquels les recruteurs filtrent : s'ils ne
   correspondent pas à la cible réelle, il faut les changer dans la carte candidat, le hero et les balises de titre.
5. **Ni préavis ni prétentions salariales affichés**, faute d'information. Les ajouter accélère la qualification mais
   réduit la marge de négociation.
6. **Les trois applications mobiles sont rattachées à AGYL TECH** (éditeurs sur les stores : AGYL TECH et BeauteAdom
   SAS), Les Vadrouilleurs avec Agence 1400 comme co client.
7. **Mappeos apparaît sans lien public**, aucun site n'ayant été trouvé.
8. **Aucune barre de progression de compétence** : elles sont mal vues des recruteurs techniques car aucun référentiel
   ne les rend comparables. L'ancienneté par technologie les remplace.
