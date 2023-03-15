# Cookr

A Node.js app to manage cooking recipes.

## Packages

- backend: [Directus](https://directus.io/) app interacting with the database and providing the GraphQL API
- frontend: [Vue 3](https://vuejs.org/) app fetching and displaying data from the GraphQL API

## Third-parties

This app rely on some third-party services:

- [Algolia](https://www.algolia.com/): to search recipes

## Development setup

Dependencies: Docker

1. Copy `packages/backend/.env.example` to `packages/backend/.env` and fill-in the values
2. Copy `packages/frontend/.env.local.example` to `packages/frontend/.env.local` and fill-in the values
3. Run `docker compose up` and wait for the containers to build and start
4. Load the schema in the database `docker compose exec backend npx directus schema apply schema.yml`
5. Visit [localhost:8055/admin](http://localhost:8055/admin) for Directus admin
6. Visit [localhost:3000](http://localhost:3000) for the app

### Running commands in containers

⚠️ The target container must be running.

For example if you want to add a new dependency to the `backend` app:

```
docker compose exec backend npm install my-new-package
```

Where `backend` is the target container, see `docker-compose.yml` for all container names.

### Emails

By default, in development, the backend is configured to send emails to [Mailhog](https://github.com/mailhog/MailHog). You can browse outgoing emails at [localhost:8025](http://localhost:8025).

### Updating GraphQL types

GraphQL types for TypeScript are automatically generated. To update them to match the Directus schema:

```sh
# 1) In the project root, ensure you have Node dependencies installed
npm install
# 2) Ensure Directus "Public" role has full CRUD permissions on all collections in http://localhost:8055/admin/settings/roles/public
# 3) Generate the types based on /graphql.config.js settings
npm run gen:graphql:types
```

## Reindexing recipes

To reindex all the recipes in Algolia, you can do so using the Directus CLI:

```sh
docker compose exec backend npx directus extension:searchsync index
```

## Pulling a remote Heroku database

You need to drop your local database first:

```sh
docker compose exec db dropdb -U cookr cookr
```

Password is `cookr`.

You can now pull the database using the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli):

```sh
PGUSER=cookr PGHOST=127.0.0.1 heroku pg:pull {heroku-postgres-db-id} cookr --app {heroku-app-id}
```

Same password.
