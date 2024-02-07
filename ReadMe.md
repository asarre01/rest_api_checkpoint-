# Projet Express API avec MongoDB

Ce projet est une API RESTful construite avec Express.js et MongoDB, permettant la gestion des étudiants.

## Prérequis

Avant de commencer, assurez-vous d'avoir Node.js, npm, MongoDB et Postman installés sur votre machine.

## Installation

1. Clonez le dépôt:

   ```bash
   git clone https://github.com/votre-nom/utilisateur-votre-projet.git
   ```

2. Installez les dépendances:

   ```bash
   cd utilisateur-votre-projet
   npm install
   ```

3. Créez un fichier `.env` dans le dossier `config` avec les variables d'environnement nécessaires:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/nom-de-votre-base-de-donnees
   ```

4. Démarrez le serveur:

   ```bash
   npm start
   ```

## Routes API

### 1. Récupérer la liste des étudiants

- **URL:** `/`
- **Méthode:** `GET`
- **Postman:**
  - Ouvrez Postman.
  - Sélectionnez la méthode GET.
  - Entrez l'URL `http://localhost:3000/`.
  - Appuyez sur "Send" pour récupérer la liste des étudiants.

### 2. Ajouter un nouvel étudiant

- **URL:** `/etudiants/add`
- **Méthode:** `POST`
- **Postman:**
  - Ouvrez Postman.
  - Sélectionnez la méthode POST.
  - Entrez l'URL `http://localhost:3000/etudiants/add`.
  - Dans le corps de la requête, ajoutez les détails de l'étudiant au format JSON.
    ```json
    {
      "prenom": "Nouveau",
      "nom": "Etudiant",
      "tel": "123456789"
    }
    ```
  - Appuyez sur "Send" pour ajouter un nouvel étudiant.

### 3. Modifier les données d'un étudiant

- **URL:** `/etudiants/edit/:id`
- **Méthode:** `PUT`
- **Postman:**
  - Ouvrez Postman.
  - Sélectionnez la méthode PUT.
  - Entrez l'URL `http://localhost:3000/etudiants/edit/{ID}` (remplacez `{ID}` par l'ID réel de l'étudiant).
  - Dans le corps de la requête, ajoutez les données de mise à jour au format JSON.
    ```json
    {
      "prenom": "PrenomModifie",
      "nom": "NomModifie",
      "tel": "987654321"
    }
    ```
  - Appuyez sur "Send" pour mettre à jour les données de l'étudiant.

### 4. Supprimer un étudiant

- **URL:** `/etudiants/delete/:id`
- **Méthode:** `DELETE`
- **Postman:**
  - Ouvrez Postman.
  - Sélectionnez la méthode DELETE.
  - Entrez l'URL `http://localhost:3000/etudiants/delete/{ID}` (remplacez `{ID}` par l'ID réel de l'étudiant).
  - Appuyez sur "Send" pour supprimer l'étudiant.

## asarre01