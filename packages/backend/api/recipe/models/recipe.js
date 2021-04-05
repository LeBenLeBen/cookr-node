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
      const results = Array.isArray(result) ? result : [result];

      results.forEach((res) => {
        removeFromIndex(res.id);

        if (res.image && res.image.id) {
          strapi.query('file', 'upload').delete({ id: res.image.id });
        }
      });
    },
  },
};
