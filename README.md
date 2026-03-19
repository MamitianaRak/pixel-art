# Pixel Art

Monorepo TypeScript avec:

- `client/`: React + Vite
- `api/`: Node.js + Express + Mongoose
- `docker-compose.yml`: MongoDB

## Prérequis

- Node.js 20+
- Yarn 1.x
- Docker (pour MongoDB)

## Installation

```bash
yarn install
```

## Variables d'environnement

Créer les fichiers locaux:

```bash
cp .env.example .env
cp api/.env.example api/.env
cp client/.env.example client/.env
```

`api/.env`:

- `PORT` (port de l'API)
- `MONGO_URI` (connexion MongoDB)
- `CORS_ORIGIN` (origine frontend autorisée)

`.env` (racine, pour Docker Compose):

- `MONGO_CONTAINER_NAME`
- `MONGO_PORT`
- `MONGO_DB`

`client/.env` (frontend Vite):

- `VITE_API_URL` (URL de base de l'API, ex: `http://localhost:3000`)

## Lancer la base de données (optionnel)

```bash
docker compose up -d
```

## Développement

Terminal 1 (frontend):

```bash
yarn dev:client
```

Terminal 2 (API):

```bash
yarn dev:api
```

## Build

```bash
yarn build:client
yarn build:api
```
