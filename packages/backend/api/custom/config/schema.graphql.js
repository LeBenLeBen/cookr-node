module.exports = {
  definition: `
    type UsersPermissionsLogoutPayload {
      authorized: Boolean!
      message: String!
    }
  `,
  mutation: `
    logout(email: String): UsersPermissionsLogoutPayload!
  `,
  resolver: {
    Mutation: {
      logout: {
        description: 'Destroy current user session',
        resolver: 'application::custom.custom.logout',
      },
    },
  },
};
