'use strict';

const { serializeForSearch, RECIPE_INDEX } = require('../helpers');

function pushToIndex(recipe) {
  strapi.services.algolia.saveObject(serializeForSearch(recipe), RECIPE_INDEX);
}

function removeFromIndex(id) {
  strapi.services.algolia.deleteObject(id, RECIPE_INDEX);
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
