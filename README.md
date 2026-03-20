Trouve ton artisan

Projet réalisé par Châtelier Jimmy dans le cadre du devoir CEF – Créez le site Web “Trouve ton artisan” avec React.js.

L'application permet de rechercher des artisans par catégorie, consulter leur fiche détaillée et les contacter via un formulaire.

Aperçu du projet

Fonctionnalités principales :

- affichage des catégories d’artisans

- affichage des artisans du mois

- liste complète des artisans

- filtrage par catégorie

- page détail artisan

- formulaire de contact

- API backend REST

- base de données MySQL

Stack technique

Frontend :

- React.js

- Vite

- React Router

- Bootstrap

Backend :

- Node.js

- Express

- Sequelize ORM

Base de données :

- MySQL

Versionning :

- Git

- GitHub

Structure du projet

trouve-ton-artisan/
├── client/
│ ├── src/
│ │ ├── components/
│ │ ├── layouts/
│ │ ├── pages/
│ │ ├── router/
│ │ ├── services/
│ │ ├── styles/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── vite.config.js
│ └── package.json
│
├── server/
│ ├── config/
│ ├── migrations/
│ ├── models/
│ ├── seeders/
│ ├── src/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── middlewares/
│ │ ├── services/
│ │ ├── utils/
│ │ ├── app.js
│ │ └── server.js
│ ├── .env
│ └── package.json
│
├── sql/
│ ├── categories.sql
│ ├── specialties.sql
│ ├── artisans.sql
│ ├─ artisans.csv
│ ├─ sql-import-artisans-1.sql
│ ├─ sql-import-artisans-2.sql
│ └─ sql-verification.sql
├── seed.sql
│
├── docs/
├── .gitignore
└── README.md

Installation du projet

1. Cloner le dépôt
   git clone https://github.com/votre-utilisateur/trouve-ton-artisan.git

Puis :

cd trouve-ton-artisan
Installation du backend
cd server
npm install

Créer le fichier .env :

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=rafael89!
DB_NAME=trouve_ton_artisan

Lancer le serveur :

npm run dev

Le backend démarre sur :

http://localhost:3000
Installation du frontend

Dans un nouveau terminal :

cd client
npm install
npm run dev

Pour recréer la base sur MySQL :
/sql/categories.sql
/sql/specialties.sql
/sql/artisans.sql

Le frontend démarre sur :

http://localhost:5173

Accès à l'application

Frontend :

http://localhost:5173

Backend API :

http://localhost:3000/api
Routes API disponibles

Catégories :

GET /api/categories

Spécialités :

GET /api/specialties

Artisans :

GET /api/artisans

Artisans du mois :

GET /api/artisans/top

Détail artisan :

GET /api/artisans/:slug

Formulaire de contact :

POST /api/contact
Base de données

Le dossier sql/ contient les scripts permettant d’insérer les données :

- categories.sql

- specialties.sql

- artisans.sql

Ces fichiers permettent de remplir la base de données avec les catégories, spécialités et artisans utilisés par l'application.

Fonctionnement du site

Page d'accueil :

- présentation du service

- étapes pour trouver un artisan

- catégories disponibles

- artisans du mois

Page artisans :

- liste complète des artisans

- filtrage par catégorie

Page détail artisan :

- informations détaillées

- spécialité

- ville

- note

- site web

Page contact :

- formulaire avec validation

- envoi des données vers l'API backend

Fonctionnalités implémentées :

- architecture frontend/backend

- API REST

- filtrage dynamique

- routing React

- formulaire avec validation

- gestion des erreurs

- affichage dynamique des données

Maquettes Figma

Lien Figma : https://www.figma.com/design/IE3yzo98u8i6pCPBzguJ3u/Trouve-ton-artisan?node-id=0-1&p=f&t=XuHLp6TBTaHBiAg2-0

Desktop :

![Desktop](docs/desktop.png)

Tablette :

![Tablette](docs/tablette.png)

Mobile :

![Mobile](docs/mobile.png)

Auteur

Projet réalisé par Châtelier Jimmy dans le cadre de la formation Développeur Web – CEF.

Remarques

Ce projet a été réalisé dans un contexte pédagogique afin de mettre en pratique :

- React.js

- Node.js

- Express

- API REST

- gestion d'une base de données

- architecture frontend/backend.

Améliorations possibles :

- pagination des artisans

- système de recherche

- authentification utilisateur

- ajout d’images pour les artisans

- système d’avis clients

Licence :

Projet réalisé par Châtelier Jimmy dans le cadre d'une formation pédagogique.
