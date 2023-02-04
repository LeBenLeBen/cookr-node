module.exports = ({ action }, { services }) => {
  action(
    'recipes.items.read',
    /**
     * Whenever a user read a recipe, add it to the viewed recipes collection
     * so we can display recently viewed recipes on the home page
     */
    async (input, { schema, database, accountability }) => {
      // Read is called also when accessing multiple recipes
      // We care only about users viewing the recipe detail page
      if (input.payload.length === 1 && input.query.limit === 1) {
        const [recipe] = input.payload;

        const itemsService = new services.ItemsService('users_viewed_recipes', {
          knex: database,
          schema,
          accountability,
        });

        if (accountability.user) {
          const lastViewedRecipes = await itemsService.readByQuery({
            filter: { user: { id: { _eq: accountability.user.id } } },
            sort: ['-date_updated'],
          });

          const existingRecipe = lastViewedRecipes.find((r) => {
            return r.recipe === recipe.id;
          });

          if (existingRecipe) {
            // Recipe has already been viewed, let’s update it with the same data
            // So the date_updated field is refreshed
            await itemsService.updateOne(existingRecipe.id, existingRecipe);
          } else {
            const newView = await itemsService.createOne({
              // Current user is automatically added by the service
              recipe: recipe.id,
            });

            lastViewedRecipes.unshift(newView);

            // Only keep the last 5 viewed recipes
            if (lastViewedRecipes.length > 5) {
              for (let i = 5; i < lastViewedRecipes.length; i++) {
                const viewToDelete = lastViewedRecipes[i];
                await itemsService.deleteOne(viewToDelete.id);
              }
            }
          }
        }
      }

      return input;
    }
  );
};
