'use strict';

const _ = require('lodash');
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

async function withOwnership(action, ctx) {
  const { id } = ctx.params;

  let entity;

  const [recipe] = await strapi.services.recipe.find({
    id: ctx.params.id,
    author: ctx.state.user.id,
  });

  if (!recipe) {
    throw strapi.errors.unauthorized(
      `You’re not authorized to execute this action.`
    );
  }

  if (ctx.is('multipart')) {
    const { data, files } = parseMultipartData(ctx);
    entity = await strapi.services.recipe[action]({ id }, data, {
      files,
    });
  } else {
    entity = await strapi.services.recipe[action]({ id }, ctx.request.body);
  }

  return sanitizeEntity(entity, { model: strapi.models.recipe });
}

module.exports = {
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.recipe.findOne({ id });

    if (entity) {
      const user = await strapi.plugins[
        'users-permissions'
      ].services.user.fetch({ id: ctx.state.user.id }, ['lastViewedRecipes']);

      if (user) {
        let lastViewedRecipes = user.lastViewedRecipes.filter(
          (r) => r && r.recipe && r.recipe.id
        );
        // Add the viewed recipe to the beginnning of the list
        lastViewedRecipes.unshift({
          recipe: { id: entity.id },
          viewedAt: Date.now(),
        });
        // Remove duplicates
        lastViewedRecipes = _.uniqWith(
          lastViewedRecipes,
          (val, otherVal) => val.recipe.id === otherVal.recipe.id
        );
        // Never store more than 5 recipes
        lastViewedRecipes = lastViewedRecipes.slice(0, 5);

        await strapi.plugins['users-permissions'].services.user.edit(
          { id: ctx.state.user.id },
          { lastViewedRecipes: lastViewedRecipes }
        );
      }
    }

    return sanitizeEntity(entity, { model: strapi.models.recipe });
  },

  async update(ctx) {
    return await withOwnership('update', ctx);
  },

  async delete(ctx) {
    return await withOwnership('delete', ctx);
  },
};
