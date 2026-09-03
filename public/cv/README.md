# CV téléchargeable

Ce dossier sert les deux versions du CV. Tant que les fichiers ne sont pas déposés ici, les boutons de la carte candidat
(`src/components/resume/candidate-card.tsx`) restent visibles mais désactivés, avec une infobulle qui renvoie vers la
page de contact. Ils ne doivent jamais être masqués.

## Les quatre règles

1. **Deux fichiers**, servis selon la locale, avec un lien vers l'autre version :
   - `ronald-tchuekou-cv-fr.pdf`
   - `ronald-tchuekou-cv-en.pdf`
2. **Nom de fichier explicite.** Un fichier nommé `cv.pdf` se perd dans le dossier de candidatures du recruteur. Garder
   exactement les deux noms ci-dessus.
3. **Texte sélectionnable.** Les logiciels de suivi de candidatures (ATS) ne lisent pas les PDF exportés en image depuis
   Figma. Vérifier avant toute mise en ligne :

   ```sh
   pdftotext public/cv/ronald-tchuekou-cv-fr.pdf -
   pdftotext public/cv/ronald-tchuekou-cv-en.pdf -
   ```

   Si le texte ne ressort pas, ne pas mettre le fichier en ligne et le signaler.

4. **Cohérence stricte avec le site.** Mêmes intitulés de poste, mêmes dates, même nombre d'années que
   `src/resources/data/experiences.ts` et `EXPERIENCE_YEARS` dans `src/resources/data/informations.ts`. Produire une
   comparaison ligne à ligne entre le PDF et `experiences.ts` avant publication : tout écart est un signal négatif pour
   un recruteur.

## Activer les boutons

Dans `src/components/resume/candidate-card.tsx`, tableau `CV_FILES` :

- passer `available` à `true` pour la version déposée ;
- renseigner `pages` avec le nombre réel de pages du PDF (laisser `null` tant qu'il n'est pas connu : le bouton affiche
  alors seulement « PDF », aucun nombre n'est inventé).

## Références actuelles du site, à recopier dans le PDF

| Élément                      | Valeur                                                                                  |
| ---------------------------- | --------------------------------------------------------------------------------------- |
| Poste actuel                 | Senior Frontend Engineer et consultant CTO, NAFASI DIGITAL SARL, Déc 2025 à aujourd'hui |
| AGYL TECH                    | Développeur senior Full Stack, Oct 2023 à Déc 2025                                      |
| Mappeos                      | Directeur technique (CTO), Oct 2024 à Sept 2025                                         |
| Communauté urbaine de Douala | Ingénieur Full Stack et administrateur systèmes, Nov 2021 à Fév 2024                    |
| AGYL TECH                    | Développeur Front End junior, Oct 2021 à Nov 2022                                       |
| DC Corp                      | Développeur web, Fév 2022 à Fév 2024                                                    |
| Années d'expérience          | 6 ans et plus (`EXPERIENCE_YEARS`)                                                      |
