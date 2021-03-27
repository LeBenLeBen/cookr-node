'use strict';

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
  async update(ctx) {
    return await withOwnership('update', ctx);
  },

  async delete(ctx) {
    return await withOwnership('delete', ctx);
  },
};
