module.exports = {
  server: {
    type: 'algolia',
    appId: process.env.ALGOLIA_APPLICATION_ID,
    key: process.env.ALGOLIA_ADMIN_API_KEY,
  },
  collections: {
    recipes: {
      indexName: process.env.ALGOLIA_RECIPES_INDEX_NAME,
      fields: ['id', 'title', 'slug', 'author.username'],
    },
  },
};
