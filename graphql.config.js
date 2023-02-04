module.exports = {
  schema: [
    'http://localhost:8055/graphql',
    'http://localhost:8055/graphql/system',
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
