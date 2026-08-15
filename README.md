# Cantine scolaire — application web (Netlify)

Application de gestion de cantine : tickets de vente, menu à prix évolutif,
dépenses par catégorie, CA et bénéfice par jour. Toutes les données sont
partagées entre les personnes qui utilisent l'application (plusieurs
caissiers en même temps), stockées côté serveur avec **Netlify Blobs** —
il n'y a pas de base de données externe à configurer.

## Structure du projet

```
cantine-app/
├── netlify.toml                  → configuration Netlify
├── package.json                  → dépendance @netlify/blobs
├── public/
│   └── index.html                → l'application (une seule page)
└── netlify/
    └── functions/
        └── storage.js            → API qui lit/écrit dans Netlify Blobs
```

## Déployer — option A (recommandée) : GitHub + Netlify

1. Crée un nouveau dépôt sur GitHub et pousse-y tout le contenu de ce dossier.
2. Sur [app.netlify.com](https://app.netlify.com), clique sur **Add new site
   → Import an existing project**, choisis GitHub et sélectionne le dépôt.
3. Netlify détecte automatiquement `netlify.toml` (dossier publié `public`,
   fonctions dans `netlify/functions`) — laisse les réglages par défaut et
   clique **Deploy**.
4. Après quelques secondes, ton site est en ligne (une URL du type
   `https://ton-site.netlify.app`). Chaque `git push` redéploiera
   automatiquement.

## Déployer — option B (rapide) : Netlify CLI, sans GitHub

1. Installe la CLI si besoin : `npm install -g netlify-cli`
2. Depuis le dossier `cantine-app` :
   ```
   npm install
   netlify login
   netlify deploy --prod
   ```
3. Réponds aux questions (crée un nouveau site, garde les valeurs par
   défaut pour le dossier publié `public` et les fonctions
   `netlify/functions`).

## Tester en local avant de déployer

```
npm install
netlify dev
```
Cela lance le site sur `http://localhost:8888` avec la fonction de
stockage fonctionnelle (Netlify Blobs simule le stockage en local dans un
dossier temporaire).

## Notes

- Toutes les données (tickets, dépenses, menu) sont stockées dans un seul
  store Netlify Blobs nommé `cantine`, accessible uniquement depuis la
  fonction serverless — donc jamais exposées directement au navigateur.
- L'application n'a pas de système de connexion : toute personne ayant le
  lien peut l'utiliser et voir les données. Si tu veux la protéger, active
  la **protection par mot de passe** ou le **contrôle d'accès Netlify**
  dans les réglages du site (Site settings → Sharing / Visitor access).
- Le fichier `public/index.html` ne fonctionnera pas correctement ouvert
  directement dans un navigateur (double-clic) ou dans un aperçu de chat :
  il a besoin de la fonction `/.netlify/functions/storage`, donc d'être
  servi par Netlify (ou par `netlify dev` en local).
