module.exports = {
  client: {
    service: {
      name: 'cookr',
      url: 'http://localhost:1337/graphql',
    },
    includes: [
      './packages/frontend/src/**/*.vue',
      './packages/frontend/src/**/*.js',
    ],
  },
};
