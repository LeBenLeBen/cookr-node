'use strict';

/**
 *  user-favorite-recipe controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::user-favorite-recipe.user-favorite-recipe'
);
