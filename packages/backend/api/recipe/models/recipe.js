'use strict';

const index = 'recipe';

function pushToIndex(recipe) {
  const { id, title, slug, author, tags } = recipe;

  strapi.services.algolia.saveObject(
    {
      id,
      title,
      slug,
      author: author.username,
      tags: tags.map((t) => t.title),
    },
    index
  );
}

function removeFromIndex(id) {
  strapi.services.algolia.deleteObject(id, index);
}

module.exports = {
  lifecycles: {
    afterCreate(result) {
      pushToIndex(result);
    },
    afterUpdate(result) {
      if (result.published_at) {
        pushToIndex(result);
      } else {
        removeFromIndex(result.id);
      }
    },
    afterDelete(result) {
      removeFromIndex(result.id);
    },
  },
};
