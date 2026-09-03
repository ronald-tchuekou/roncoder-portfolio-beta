# Aligner les CV PDF sur le site

Document de travail. Version du 3 septembre 2026. Il liste **uniquement les éléments à modifier** dans
`public/resumes/ronald-tchuekou-resume-fr.pdf` et `-en.pdf`. La structure actuelle des deux CV est
conservée telle quelle : en-tête, profil, compétences techniques, expérience professionnelle, projets
sélectionnés, formation et certifications, langues.

Référence de vérité : `src/resources/data/experiences.ts`, `educations.ts`, `skills.tsx`,
`projects.tsx` et `informations.ts`. Un recruteur qui lit le CV puis le site doit trouver les mêmes
intitulés, les mêmes dates et le même nombre d'années.

## 0. Deux arbitrages avant de commencer

1. **AdonisJS.** Le site cite AdonisJS dans la fiche HarmonyCar mais pas dans la liste de compétences.
   Soit tu l'ajoutes au bloc « Backend et données » de `skills.tsx`, soit tu le retires du bloc
   compétences du CV et tu le laisses uniquement dans la ligne HarmonyCar. Même question pour YouSign
   et jsPDF, qui sont des outils liés à un projet précis : leur place est dans la ligne du projet, pas
   dans les compétences.
2. **Nom affiché.** Le CV ouvre sur « RONALD VERCUYSSE TCHUEKOU WOUNGANG », le site et le JSON-LD sur
   « Ronald Tchuekou ». Choisis-en un. Recommandation : garder « Ronald Tchuekou » en titre et, si tu
   veux le nom complet, le mettre en petit sous le titre.

## 1. En-tête

| Élément | Actuel dans le CV | À mettre |
| --- | --- | --- |
| Ligne de titre (fr) | Senior Frontend Engineer \| Développeur Full-Stack Web & Mobile | **Senior Frontend Engineer \| Développeur Full Stack** |
| Ligne de titre (en) | Senior Frontend Engineer \| Full-Stack Web & Mobile Developer | **Senior Frontend Engineer \| Full Stack Developer** |
| Téléphone | +237 658 172 868 / +237 650 427 749 | **+237 658 172 868** seul. Le site n'affiche que celui-là, deux numéros font hésiter |
| LinkedIn | linkedin.com/in/ronald-tchuekou | inchangé, c'est la bonne URL. C'est le site qui a été corrigé pour la reprendre |
| YouTube | absent | **youtube.com/@ronaldtchuekou** à ajouter sur la ligne des liens |

À ajouter sous la ligne des liens, une ligne de disponibilité reprise mot pour mot du site :

- fr : « Disponible en télétravail pour l'Europe et l'Afrique. CDI, freelance ou mission longue. »
- en : "Available remotely for Europe and Africa. Permanent, freelance or long term contract."

C'est l'information que le recruteur cherche en premier et elle manque au CV.

## 2. Profil / Professional summary

Le compte d'années est bon (« plus de 6 ans » / "6+ years"), ne pas y toucher. Deux ajouts :

- Mentionner **COSUMAF** : le site en fait un argument central et le CV n'en parle que dans la ligne
  NAFASI. Ajouter à la fin du paragraphe :
  - fr : « Actuellement référent frontend d'un outil de supervision financière utilisé dans plusieurs
    pays d'Afrique centrale. »
  - en : "Currently frontend lead on a financial supervision tool used across several Central African
    countries."
- Le reste du paragraphe est cohérent avec le site, y compris les 3 applications sur les stores.

## 3. Compétences techniques

Aligner les huit puces sur les cinq blocs du site. Les technologies **en gras sont à ajouter**, celles
~~barrées sont à retirer~~ parce qu'elles n'apparaissent nulle part sur le site.

| Puce | À mettre |
| --- | --- |
| Frontend | React, Next.js, Angular, TypeScript, JavaScript, **HTML**, **CSS**, Tailwind CSS, **shadcn/ui**, **Framer Motion**, ~~Material UI~~, ~~Radix UI~~ |
| Mobile | React Native (**Expo**), publications App Store et Google Play |
| Backend | Node.js, Express, **API REST**, **GraphQL**, **WebSocket**, documentation Swagger, ~~NestJS~~, AdonisJS (voir arbitrage 0.1) |
| Bases de données | PostgreSQL, **MySQL**, MongoDB, Firebase, ~~Supabase~~, ~~Drizzle ORM~~ |
| Paiements et Auth | Stripe, Paddle, paiement crypto, Clerk |
| IA | Mistral AI (extraction multimodale, image vers données structurées) |
| DevOps | Docker, **GitHub Actions**, **Vercel**, **Google Cloud**, VPS, Coolify, n8n, **Backblaze B2**, Git |
| Design | Figma, design system, UX/UI |

Détails de forme : écrire **Tailwind CSS** et non « TailwindCSS », **Express** et non « Express.js ».
NestJS est à retirer partout, il a été explicitement écarté du site faute d'usage en production.

## 4. Expérience professionnelle

C'est la section qui diverge le plus. Le CV liste 5 postes, le site 6, et quatre dates ne concordent
pas. **Les dates du site font foi.** Voici la section complète à reproduire, dans cet ordre.

### 4.1 Postes à corriger

| Poste | Dans le CV | À mettre |
| --- | --- | --- |
| NAFASI DIGITAL SARL | Jan 2026 à présent | **Déc 2025 à aujourd'hui** / "Dec 2025 to today" |
| AGYL TECH (senior), intitulé | Développeur Full-Stack Web & Mobile | **Développeur senior Full Stack** / "Senior Full Stack developer" |
| AGYL TECH (senior), dates | Oct 2023 à Déc 2025 | inchangé, c'est bon |
| AGYL TECH (junior), dates | Nov 2022 à Oct 2023 | **Oct 2021 à Nov 2022** / "Oct 2021 to Nov 2022" |
| AGYL TECH (junior), intitulé | Développeur Junior Full-Stack Web & Mobile | **Développeur Front End junior** / "Junior front end developer" |
| DC Corp | Mai 2021 à Oct 2021 | **Fév 2022 à Fév 2024** / "Feb 2022 to Feb 2024" |

### 4.2 Poste à supprimer

**Stagiaire Développeur Front-End, AGYL TECH, Oct 2021 à Nov 2022.** Il n'existe pas sur le site, et
sa période est exactement celle que prend désormais le poste junior. Le garder créerait deux lignes qui
se contredisent. Ses tâches (dashboards Angular, fonctionnalités React Native) sont déjà couvertes par
la ligne junior.

### 4.3 Postes à ajouter

**Directeur technique (CTO), Mappeos, Oct 2024 à Sept 2025, France, à distance**
/ "Chief Technology Officer, Mappeos, Oct 2024 to Sept 2025, France, remote"

- fr : « Définition de l'architecture technique et de la stack (Next.js, Express). »
- fr : « Encadrement de l'équipe de développement, supervision des sprints, de la qualité de code et
  des livraisons. »
- fr : « Traduction des besoins métier en spécifications avec les équipes non techniques. »

Ce poste est actuellement rangé dans « Projets sélectionnés » du CV, ce qui masque un rôle de direction
technique. C'est la ligne la plus forte du parcours pour un poste de Lead : elle doit être une
expérience, pas un projet. À retirer donc de la section projets.

**Ingénieur Full Stack et administrateur systèmes, Communauté urbaine de Douala, Nov 2021 à Fév 2024**
/ "Full Stack engineer and systems administrator, Communauté urbaine de Douala, Nov 2021 to Feb 2024"

- fr : « Applications complètes en Angular, React et React Native, avec Express côté serveur. »
- fr : « Bases de données relationnelles et NoSQL (MySQL, MongoDB) et services Firebase. »
- fr : « Administration et déploiement de l'infrastructure sur Google Cloud, configuration serveur et
  supervision. »

Ce poste est absent du CV alors qu'il est sur le site. C'est la seule expérience en institution
publique du parcours, et c'est aussi ce qui justifie la partie administration systèmes des
compétences. Sans elle, il y a un trou de deux ans entre AGYL junior et AGYL senior.

### 4.4 Ordre final et tenue sur une page

Ordre d'affichage, du plus récent au plus ancien, identique au site :

1. Senior Frontend Engineer et consultant CTO, NAFASI DIGITAL SARL, Déc 2025 à aujourd'hui
2. Directeur technique (CTO), Mappeos, Oct 2024 à Sept 2025
3. Développeur senior Full Stack, AGYL TECH, Oct 2023 à Déc 2025
4. Développeur web, DC Corp, Fév 2022 à Fév 2024
5. Ingénieur Full Stack et administrateur systèmes, Communauté urbaine de Douala, Nov 2021 à Fév 2024
6. Développeur Front End junior, AGYL TECH, Oct 2021 à Nov 2022

Passer de 5 à 6 postes sur une page tient si tu dégraisses par le bas : 3 puces pour NAFASI, Mappeos et
AGYL senior, 1 seule puce pour DC Corp, la Communauté urbaine de Douala et AGYL junior. La suppression
du poste de stagiaire et le passage de « Projets sélectionnés » à trois lignes libèrent la place
nécessaire. Si la page déborde malgré tout, passe à deux pages et **mets `pages: 2` dans
`src/resources/data/resumes.ts`** : cette valeur est affichée à côté du bouton de téléchargement.

## 5. Projets sélectionnés

| Action | Projet |
| --- | --- |
| Retirer | **Mappeos** : devient une expérience (voir 4.3) |
| Retirer | l'URL **mappeos.gleemy.fr**, elle ne répond plus (aucune réponse HTTP au 3 septembre 2026) |
| Garder | **HarmonyCar** (harmonycar.fr) et **Carporea** (carporea.fr), tous deux vérifiés en ligne et désormais présents sur le site |
| Garder | **Lafya, Les Vadrouilleurs, Zakadia** sur les stores |
| Ajouter | **COSUMAF**, sans lien, avec la mention « projet sous confidentialité » / "under NDA" |
| Ajouter si la place le permet | **Privie** : plateforme en production avec paiement par carte et crypto (Next.js, Stripe) |

Pour HarmonyCar et Carporea, aligner la description sur celle du site :

- HarmonyCar : « plateforme d'accompagnement aux démarches de carte grise (Next.js, API AdonisJS) »
- Carporea : « vente de carports solaires sur mesure, signature électronique des devis (Next.js,
  YouSign, jsPDF) »

Les projets du site absents du CV et qu'il n'est **pas** nécessaire d'ajouter sur une page : Amizone,
Localtik, Maori, Bon de paiement. Ils restent consultables sur le portfolio, dont l'URL est déjà en
en-tête.

## 6. Formation et certifications

Le site en liste six. Le CV en liste quatre, avec deux intitulés et trois dates à préciser.

| Entrée | Dans le CV | À mettre |
| --- | --- | --- |
| Licence en informatique, Université de Douala | 2017 à 2021 | **Oct 2017 à Juil 2021** / "Oct 2017 to July 2021" |
| Certification backend Node.js, Coursera | 2024 | **Août 2024** / "August 2024", intitulé « Certification en développement backend avec Node.js » |
| Formation React Alphorm | React, Redux Toolkit et concepts avancés (2022) | **Formation React, Redux, Redux Toolkit et API Context, Alphorm, Déc 2022** |
| Formation Angular Alphorm | Angular avancé (2022) | **Formation Angular avancé, Alphorm, Déc 2022** |
| **À ajouter** | absent | **Node and Express Essentials, IBM sur Coursera, 2024** |
| **À ajouter** | absent | **Formation Docker, installation et administration, Alphorm, Déc 2022** |

L'entrée Docker compte : elle est la seule preuve de formation sur la partie infrastructure, qui est
mise en avant dans les compétences DevOps et dans l'expertise « Direction technique et livraison » du
site.

## 7. Langues

| CV fr | À mettre |
| --- | --- |
| Français (natif), Anglais (professionnel) | **Français (langue maternelle), anglais (professionnel)** |

La version anglaise est déjà correcte : "French (native), English (professional)".

## 8. Règles de forme à respecter dans les deux PDF

1. **Aucun tiret long ni tiret demi cadratin** (« — », « – »). Pour les périodes, écrire « Oct 2023 à
   Déc 2025 » et "Oct 2023 to Dec 2025", pas « Oct 2023 - Déc 2025 ». C'est la règle appliquée sur tout
   le site.
2. **Aucun chiffre non vérifiable.** Les seuls chiffres autorisés sont ceux déjà présents : 6 ans et
   plus, 3 applications sur les stores, 13 projets livrés, 5 certifications. Pas de pourcentage de
   performance, pas de nombre d'utilisateurs.
3. **Verbes d'action à la première personne**, comme sur le site : « J'ai développé le frontend Angular
   de… » et non « Participation au développement de… ».
4. **Texte sélectionnable.** Les deux fichiers actuels sont bons sur ce point. Après chaque export,
   revérifier, un ATS ne lit pas un PDF exporté en image :

   ```bash
   pdftotext public/resumes/ronald-tchuekou-resume-fr.pdf -
   ```

   Sans poppler installé, la procédure PDFKit est dans `public/resumes/README.md`.
5. **Nom de fichier inchangé** : `ronald-tchuekou-resume-fr.pdf` et `ronald-tchuekou-resume-en.pdf`.
   Le site les sert par ces chemins exacts, déclarés dans `src/resources/data/resumes.ts`.

## 9. Après la mise à jour

1. Remplacer les deux fichiers dans `public/resumes/`, en gardant les noms.
2. Vérifier le nombre de pages et, s'il a changé, mettre `pages` à jour dans
   `src/resources/data/resumes.ts`.
3. Relancer `pnpm build` puis `pnpm smoke`, et cliquer les deux boutons de téléchargement sur
   `/fr/resume` et `/resume`.
4. Relire côte à côte la carte candidat de `/resume` et l'en-tête du CV : intitulé de poste, années
   d'expérience, mode de travail, localisation et langues doivent dire exactement la même chose.
