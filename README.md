# Starter d'API REST via les Vercel Serverless Functions

## 1) Particularités de ce starter

- Gestion des headers CORS incluse
- Endpoint via `/` et non `/api`

Tout cela est géré depuis le fichier [vercel.json](https://vercel.com/docs/configuration).


## 2) Comment utiliser ce Starter

Il vous suffit de faire un fork de ce projet, ou alors de cliquer sur le bouton "Use this template" qui fera quelque chose de similaire.

## 3) Pour plus de sécurité

Au niveau des headers CORS: modifier `Access-Control-Allow-Origin` pour passer de `*` à `www.votresiteweb.fr` afin de bloquer toutes les requêtes venant d'autres sites web que ceux autorisés.

Attention, en faisant ça le `localhost` de votre site sera également bloqué pendant votre phase de développement.