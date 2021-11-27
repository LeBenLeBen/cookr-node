# Cookr backend

This is a [Strapi](https://strapi.io/) application preconfigured with a [PostgreSQL](https://www.postgresql.org/) database.

## Development setup

Dependencies: Docker

1. Copy `.env.example` to `.env` and fill-in the values
2. Run `docker-compose up`
3. Visit [localhost:1337](http://localhost:1337)

## Running commands in containers

⚠️ The target container must be running.

For example if you want to add a new dependency to the `backend` app:

```
docker-compose exec backend npm install my-new-package
```

Where `backend` is the target container, see `container_name` in `docker-compose.yml` for all container names.

## Emails

By default, in development, the backend is configured to send emails to [Mailhog](https://github.com/mailhog/MailHog). You can browse outgoing emails at [localhost:8025](http://localhost:8025).

## Reindexing recipes

To reindex all the recipes in Algolia, you can do so using the Strapi console:

```sh
docker-compose exec backend /bin/bash
PORT=1338 strapi console
strapi.controllers.recipe.indexAll();
```
