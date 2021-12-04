'use strict';

module.exports = {
  afterDelete({ result }) {
    if (result.image && result.image.id) {
      strapi.query('file', 'upload').delete({ id: result.image.id });
    }
  },

  afterDeleteMany({ result }) {
    result.forEach((res) => {
      if (res.image && res.image.id) {
        strapi.query('file', 'upload').delete({ id: res.image.id });
      }
    });
  },
};
