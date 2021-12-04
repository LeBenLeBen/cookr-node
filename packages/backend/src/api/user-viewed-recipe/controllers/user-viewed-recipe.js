'use strict';

/**
 *  user-viewed-recipe controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::user-viewed-recipe.user-viewed-recipe'
);
