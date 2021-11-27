module.exports = {
  RECIPE_INDEX: 'recipe',

  serializeForSearch(recipe) {
    const { id, title, slug, author, tags } = recipe;

    return {
      objectID: id,
      id,
      title,
      slug,
      author: author.username,
      tags: tags.map((t) => t.title),
    };
  },
};
