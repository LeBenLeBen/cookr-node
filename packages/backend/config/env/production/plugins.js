module.exports = ({ env, log }) => ({
  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: env('SMTP_HOST'),
      port: env('SMTP_PORT', 465),
      secure: true,
      auth: {
        user: env('SMTP_USERNAME'),
        pass: env('SMTP_PASSWORD'),
      },
      logger: log,
      debug: true,
    },
    settings: {
      defaultFrom: env('EMAIL_FROM'),
      defaultReplyTo: env('EMAIL_FROM'),
    },
  },
});
