module.exports = () => ({
  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: 'mailhog',
      port: 1025,
      ignoreTLS: true,
    },
  },
});
