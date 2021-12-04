module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET'),
        },
      },
    },
  },
  search: {
    enabled: true,
    config: {
      provider: 'algolia',
      providerOptions: {
        applicationId: env('ALGOLIA_APPLICATION_ID'),
        apiKey: env('ALGOLIA_ADMIN_API_KEY'),
      },
      contentTypes: [
        {
          name: 'api::recipe.recipe',
          index: 'recipe',
          fields: ['id', 'title', 'slug', 'author'],
        },
      ],
    },
  },
});
