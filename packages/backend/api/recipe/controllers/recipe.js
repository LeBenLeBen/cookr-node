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
      ].services.user.fetch({ id: ctx.state.user.id });

      if (user) {
        const lastViewedRecipes = await strapi.services[
          'users-viewed-recipes'
        ].find({ user: user.id, _sort: 'updated_at:desc' });
        const existingRecipe = lastViewedRecipes.find((r) => {
          return r.recipe.id === Number(id);
        });

        if (existingRecipe) {
          // Recipe has already been viewed, let’s update it with the same data
          // So the updated_at is refreshed
          await strapi.services['users-viewed-recipes'].update(
            {
              id: existingRecipe.id,
            },
            existingRecipe
          );
        } else {
          const newView = await strapi.services['users-viewed-recipes'].create({
            user: user.id,
            recipe: id,
          });

          lastViewedRecipes.unshift(newView);

          if (lastViewedRecipes.length > 5) {
            for (let i = 5; i < lastViewedRecipes.length; i++) {
              const viewToDelete = lastViewedRecipes[i];
              await strapi.services['users-viewed-recipes'].delete({
                id: viewToDelete.id,
              });
            }
          }
        }
      }
    }

    return sanitizeEntity(entity, { model: strapi.models.recipe });
  },

  async update(ctx) {
    return await withOwnership('update', ctx);
  },

  async delete(ctx) {
    const entity = await withOwnership('delete', ctx);

    if (entity) {
      // Remove recently viewed recipes without recipe
      await strapi.services['users-viewed-recipes'].delete({
        user: ctx.state.user.id,
        recipe_null: true,
      });

      // Delete favorites recipes without recipe
      await strapi.services['users-favorite-recipes'].delete({
        user: ctx.state.user.id,
        recipe_null: true,
      });
    }

    return entity;
  },
};
