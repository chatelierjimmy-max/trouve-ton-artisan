# Trouve ton artisan

Projet de plateforme web permettant de rechercher un artisan en Auvergne-Rhône-Alpes et de le contacter via un formulaire.

## Technologies

### Frontend

- React.js
- Bootstrap
- Sass
- React Router
- Axios

### Backend

- Node.js
- Express
- Sequelize
- MySQL
- Nodemailer

## Installation

### 1. Cloner le projet

git clone <url-du-repository>
cd Trouve-ton-artisan

### 2. Installer le frontend

cd client
npm install
npm run dev

### 3. Installer le backend

cd server
npm install
npm run dev

### Base de données

Créer la base de données avec :

database/schema.sql

Puis insérer les données avec :

database/seed.sql

### Variables d’environnement backend

Créer un fichier .env dans server :

PORT=5000
DB_HOST=127.0.0.1
DB_PORT=3308
DB_NAME=trouve_ton_artisan
DB_USER=root
DB_PASSWORD=

CLIENT_URL=http://localhost:5173

SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=

### Scripts

### Frontend

npm run dev
npm run build

### Backend

npm run dev
npm start

### Fonctionnalités

Affichage des artisans par catégorie
Recherche d’artisans
Page détail artisan
Formulaire de contact
Pages légales en construction
Page 404
Responsive mobile/tablette/desktop
SEO avec titres et descriptions dynamiques
API REST sécurisée

### Sécurité

Protection des headers HTTP avec Helmet
CORS configuré
Limitation des requêtes sur le formulaire de contact
Validation backend avec express-validator
Requêtes SQL sécurisées via Sequelize
Variables sensibles stockées dans .env

### Validation W3W

Les validations HTML et CSS sont disponibles dans :

docs/validation/w3c-html.png
docs/validation/w3c-css.png

### Application en ligne

Frontend :
https://mon-site.vercel.app

Backend API :
https://mon-api.onrender.com

### Auteur

Projet réalisé par Jimmy Châtelier dans le cadre du devoir “Trouve ton artisan”.
