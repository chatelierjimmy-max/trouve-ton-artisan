# Tests de déploiement — Trouve ton artisan

Ce document permet de vérifier que le frontend, le backend et la base de données fonctionnent correctement en production.

## 1. Tests API Render

### Route principale API

URL :

```txt
https://trouve-ton-artisan-8chh.onrender.com/

Résultat attendu :

{
  "message": "API Trouve ton artisan"
}
Liste des artisans

URL :

https://trouve-ton-artisan-8chh.onrender.com/api/artisans

Résultat attendu :

la requête répond avec un statut 200
une liste d’artisans est retournée
Liste des catégories

URL :

https://trouve-ton-artisan-8chh.onrender.com/api/categories

Résultat attendu :

- la requête répond avec un statut 200
- une liste de catégories est retournée
- Artisans par spécialité

URL :

https://trouve-ton-artisan-8chh.onrender.com/api/artisans/category/plombier

Résultat attendu :

- la requête répond avec un statut 200
- au moins un artisan plombier est retourné

## 2. Tests frontend Vercel

Page d’accueil : URL : https://trouve-ton-artisan-sepia.vercel.app/

Résultat attendu :

- la page se charge correctement
- aucune page blanche
- aucune erreur 404
- Page catégorie plomberie

URL : https://trouve-ton-artisan-sepia.vercel.app/categorie/plomberie

Résultat attendu :

- la page se charge correctement
- les artisans de la spécialité plomberie apparaissent
- aucun message Aucun artisan trouvé
- aucune erreur CORS

Test de rechargement

Action :

Ctrl + Shift + R

Résultat attendu :

- la page se recharge correctement
- aucune erreur Vercel 404: NOT_FOUND
- aucune page blanche

## 3. Tests de navigation.

Depuis le menu principal, tester les pages suivantes :

- Accueil
- Bâtiment
- Services
- Fabrication
- Alimentation
- Recherche
- Page détail artisan
- Mentions légales

Résultat attendu :

- chaque lien mène vers la bonne page
- aucune page blanche
- aucune erreur 404 inattendue
- les données artisans s’affichent lorsque la page en dépend
- Page 404

URL de test : https://trouve-ton-artisan-sepia.vercel.app/test-inconnu

Résultat attendu :

- la page 404 personnalisée s’affiche
- l’application React ne plante pas

## 4. Test console navigateur

Sur chaque page importante :

- ouvrir les outils développeur avec F12
- aller dans l’onglet Console
- vérifier les erreurs

Résultat attendu :

-Aucune erreur rouge

À surveiller particulièrement :

- erreur CORS
- erreur 404 sur une route API
- erreur 500 backend
- erreur JavaScript React
- erreur Axios

## 5. Test formulaire de contact

Depuis une fiche artisan :

- remplir le formulaire de contact
- envoyer le message
- vérifier le retour utilisateur

Résultat attendu :

- message de confirmation affiché
- pas d’erreur CORS
- pas d’erreur 500
- pas de blocage côté frontend

Résultat global attendu

Le projet est considéré comme fonctionnel si :

- le frontend Vercel se charge correctement
- le backend Render répond aux routes API
- la base MySQL Clever Cloud retourne les données
- les catégories affichent les artisans correspondants
- React Router fonctionne au rechargement
- le formulaire de contact ne génère pas d’erreur technique
```
