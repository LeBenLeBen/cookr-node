'use strict';

/**
 * user-favorite-recipe service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService(
  'api::user-favorite-recipe.user-favorite-recipe'
);
