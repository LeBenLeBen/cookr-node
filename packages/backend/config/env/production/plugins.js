module.exports = ({ env }) => ({
  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: env('SMTP_HOST'),
      port: env('SMTP_PORT'),
      auth: {
        user: env('SMTP_USERNAME'),
        pass: env('SMTP_PASSWORD'),
      },
    },
    settings: {
      defaultFrom: env('EMAIL_FROM'),
      defaultReplyTo: env('EMAIL_FROM'),
    },
  },
});
