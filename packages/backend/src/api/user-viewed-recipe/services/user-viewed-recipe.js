'use strict';

/**
 * user-viewed-recipe service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService(
  'api::user-viewed-recipe.user-viewed-recipe'
);
