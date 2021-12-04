'use strict';

/**
 * user-favorite-recipe router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter(
  'api::user-favorite-recipe.user-favorite-recipe'
);
