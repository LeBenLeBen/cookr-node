module.exports = {
  RECIPE_INDEX: 'recipe',

  serializeForSearch(recipe) {
    const { id, title, slug, author } = recipe;

    return {
      objectID: id,
      id,
      title,
      slug,
      author: author.username,
    };
  },
};
