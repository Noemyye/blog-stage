---
title: TanStack Table et intégration Figma
date: 20-07-2025 
description: Découverte de la lib TanStack Table pour la gestion des tableaux, création d'un panneau déroulant avec une timeline
---

# 📅 Semaine 7

## 📄 Avancement du rapport de stage
Début de semaine consacré à la **rédaction et au développement du rapport de stage**.  
- Récupération d'informations supplémentaires sur **Haryon** pour enrichir le rapport.  
- Demande d’autorisation pour l’utilisation du logo officiel dans mes documents.

---

## 🛠 Développement – Découverte de TanStack Table
Découverte et utilisation de la librairie **TanStack Table** conseillé par antoine, une **librairie ultra complète et bien documentée** pour la gestion de tableaux.  

### Points forts :
- Gestion native du **tri, filtres, tailles et personnalisation des colonnes**.
- Définition facile des colonnes et personnalisation des cellules.
- Gestion automatique des **types de données** dans les fonctions (string, date, etc.) → simplifie énormément le développement.

Grâce à cette lib, le développement d’un tableau devient **rapide et ultra personnalisable**, il ne reste plus qu’à s’occuper du CSS et de l’imbrication des éléments.

---

## 🎨 CSS et intégration Figma
- Intégration des maquettes **Figma** en **mode dev** → récupération directe des valeurs (marges, couleurs, tailles…).
- Quelques ajustements manuels pour un rendu parfait.
- Un vrai plaisir de travailler avec des maquettes précises.

---

## 📝 Organisation et code
- Ajout de **commentaires dans le code** pour faciliter la navigation et la compréhension des différentes parties.

---

## 🍻 Vie d’équipe
- **Mercredi soir** : sortie au bar avec les collègues 🍺.

---

## 🗂 Nouvelle tâche – Panneau déroulant avec Timeline
Antoine m’a attribué une nouvelle tâche :
- Créer un **panneau déroulant** intégrant la **timeline** déjà développée.
- Ajustements graphiques selon les **nouvelles maquettes Figma**.
- Implémentation de la logique pour récupérer les sélections utilisateur.

### 📍 Problème rencontré

J’ai également un problème graphique avec la timeline. L’objectif est d’afficher différents points le long d’une ligne, positionnés en fonction de leur date. Par exemple, une donnée du 15 janvier doit apparaître au début de la ligne, entre janvier et février.
Le souci, c’est que la ligne va de janvier à décembre, mais l'affichage du mois de décembre se positionne au 1er décembre. Résultat : il reste un espace vide à droite de la ligne pour le mois de décembre, ce qui décale visuellement les éléments et rend l’affichage incorrect.
Je dois donc trouver un moyen de corriger ce décalage automatiquement, pour que la timeline soit responsive et que les points soient toujours bien alignés avec leur mois.

La timeline affichait des points positionnés selon leur date, mais un **décalage apparaissait pour le mois de décembre** :  
- Ligne allant de janvier à décembre.  
- Affichage du mois de décembre au **1er décembre** → espace vide à droite.

### 💡 Solution
- Pas de marges/paddings bricolés directement sur la timeline.
- **Encapsulation dans une `div` supplémentaire** avec padding pour alignement parfait.
- Résultat : **timeline responsive et correctement alignée** ✅.

---
