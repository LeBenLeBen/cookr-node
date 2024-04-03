require('dotenv').config();

module.exports = {
  schema: [
    {
      'http://localhost:8055/graphql': {
        headers: {
          Authorization: `Bearer ${process.env.DIRECTUS_ADMIN_ACCESS_TOKEN}`,
        },
      },
    },
    {
      'http://localhost:8055/graphql/system': {
        headers: {
          Authorization: `Bearer ${process.env.DIRECTUS_ADMIN_ACCESS_TOKEN}`,
        },
      },
    },
  ],
  documents: ['packages/frontend/src/**/*.ts'],
  extensions: {
    codegen: {
      overwrite: true,
      generates: {
        'packages/frontend/src/gql/': {
          preset: 'client',
          config: {
            useTypeImports: true,
          },
          plugins: [],
        },
      },
    },
  },
};
