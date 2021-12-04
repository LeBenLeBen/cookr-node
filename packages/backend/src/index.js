'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const { service: getService } = strapi.plugin('graphql');
    const extensionService = getService('extension');
    const { toEntityResponse } = getService('format').returnTypes;

    extensionService.use(({ nexus }) => ({
      types: [
        nexus.extendType({
          type: 'UsersPermissionsMe',
          definition(t) {
            t.field('user', {
              type: 'UsersPermissionsUserEntityResponse',
              resolve: async (parent, args, ctx) => {
                const user = await strapi.db
                  .query('plugin::users-permissions.user')
                  .findOne({
                    // When logging in, the user isn’t in the state yet
                    // so we get the user ID from the parent
                    where: { id: ctx.state.user?.id || parent.id },
                    populate: { avatar: true },
                  });

                return toEntityResponse(user);
              },
            });
          },
        }),
      ],
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
