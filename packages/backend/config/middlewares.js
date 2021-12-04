module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      // Allow images coming from AWS S3 to be displayed in the admin panel
      contentSecurityPolicy: {
        directives: {
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            `https://${env('AWS_BUCKET')}.s3.${env(
              'AWS_REGION'
            )}.amazonaws.com`,
          ],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  {
    name: 'strapi::session',
    config: {
      maxAge: 2592000000, // 30 days
      rolling: true,
      renew: true,
    },
  },
  'strapi::favicon',
  'strapi::public',
];
