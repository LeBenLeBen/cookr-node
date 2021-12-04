# Cookr

A Node.js app to manage cooking recipes.

## Third-parties

This app is configured to use some third-party services by default:

- [Amazon AWS S3](https://aws.amazon.com/s3/): to store file uploads
- [Imgix](https://imgix.com/): to optimize and operate on images (crop, resize, optimizations, …)
- [Algolia](https://www.algolia.com/): to search recipes

## Packages

- backend: [Strapi](https://strapi.io/) app interacting with the database and providing the GraphQL API
- frontend: [Vue 3](https://vuejs.org/) app fetching and displaying data from the GraphQL API

## Development setup

Dependencies: Docker

1. Copy `packages/backend/.env.example` to `packages/backend/.env` and fill-in the values
2. Copy `packages/frontend/.env.local.example` to `packages/frontend/.env.local` and fill-in the values
3. Run `docker-compose up`
4. Visit [localhost:1337/admin](http://localhost:1337/admin) for Strapi admin
5. Visit [localhost:3000](http://localhost:3000) for the app

### Running commands in containers

⚠️ The target container must be running.

For example if you want to add a new dependency to the `backend` app:

```
docker-compose exec backend npm install my-new-package
```

Where `backend` is the target container, see `docker-compose.yml` for all container names.

### Emails

By default, in development, the backend is configured to send emails to [Mailhog](https://github.com/mailhog/MailHog). You can browse outgoing emails at [localhost:8025](http://localhost:8025).

## Reindexing recipes

To reindex all the recipes in Algolia, you can do so using the Strapi console:

```sh
docker-compose exec backend /bin/bash
PORT=1338 strapi console
strapi.controllers.recipe.indexAll();
```
