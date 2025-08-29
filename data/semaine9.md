---
title: Absence de Antoine
date: 03-08-2025 
description: Semaine d'absence de mon maitre de stage, avancement sur le travail donné, feedback utilisateur
---

# 📅 Semaine 9

## 🖼 Travail sur les pop-ups
- Début de semaine consacré à la finalisation des **pop-ups**.
- Problème rencontré : les **données prévues en maquette** ne se trouvent pas dans ce qu’Antoine m’avait laissé avant son départ.
- Après discussion avec Hugo (côté envoi de données) → confirmation que ces données **ne sont pas encore fournies par le back**.
- Solution temporaire : affichage de **texte brut** en attendant le retour d’Antoine pour savoir comment importer les bonnes informations.

---

## 🔔 Ajout de feedback utilisateur
- Mise en place d’un **retour visuel** lors de l’importation d’adresses IP dans les périmètres d'attaques:
  - Si les IP sont **importées avec succès** → affichage d’un toast (notification en overlay).
  - Si certaines IP sont **déjà existantes** → affichage d’un autre toast d’avertissement.
- Utilisation d’un composant de **toast** déjà existant dans l’application, adapté au besoin.

---

## 🔐 Découverte – Vulnérabilité Clickjacking
- Explication par Hugo d’une vulnérabilité web : le **Clickjacking**.
- 📖 **Définition** :  
  Le clickjacking est une attaque où un utilisateur est trompé en cliquant sur un élément caché ou déguisé dans une page web, menant à une action non désirée.  
  Exemple : un bouton « J’aime » Facebook masqué sous un autre bouton visible, ce qui provoque un clic involontaire.
- Intéressant à connaître car c’est un risque courant dans la sécurité des applications web.

---

## 🔄 Correction automatique d’URL
- Nouvelle tâche : corriger automatiquement les URL mal formées saisies par l’utilisateur.
- Exemple : "http:////////10.100.200.13" devient : "http://10.100.200.13"
- Objectif : améliorer l’UX et éviter les erreurs liées aux formats d’URL invalides.

---