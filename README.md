# Cookr

A Node.js app to manage cooking recipes.

## Third-parties

This app is configured to use some third-party services by default:

- Amazon AWS S3: to store file uploads
- Imgix: to optimize and operate on images (crop, resize, optimizations, …)

## Packages

- backend: [Strapi](https://strapi.io/) app interacting with the database and providing the GraphQL API
- frontend: [Vue 3](https://vuejs.org/) app fetching and displaying data from the GraphQL API
