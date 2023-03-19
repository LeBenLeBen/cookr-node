let postgresFlags = '';

if (process.env.NODE_ENV !== 'production') {
  // Simulate production environment by populating `process.env` from .env file
  require('dotenv').config();
} else {
  // Prevent connection issue with Heroku Postgres in production
  postgresFlags = '?sslmode=no-verify';
}

module.exports = {
  KEY: process.env.KEY,
  SECRET: process.env.SECRET,

  DB_CLIENT: 'pg',
  // Heroku automatically populates `DATABASE_URL` and rotate it regularly, so we have to use it
  DB_CONNECTION_STRING: `${process.env.DATABASE_URL}${postgresFlags}`,

  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,

  LOG_LEVEL: process.env.LOG_LEVEL,
  EXTENSIONS_AUTO_RELOAD: process.env.EXTENSIONS_AUTO_RELOAD,

  ACCESS_TOKEN_TTL: process.env.ACCESS_TOKEN_TTL,
  REFRESH_TOKEN_TTL: process.env.REFRESH_TOKEN_TTL,

  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_TRANSPORT: process.env.EMAIL_TRANSPORT,
  EMAIL_SMTP_NAME: process.env.EMAIL_SMTP_NAME,
  EMAIL_SMTP_HOST: process.env.EMAIL_SMTP_HOST,
  EMAIL_SMTP_PORT: process.env.EMAIL_SMTP_PORT,

  PASSWORD_RESET_URL_ALLOW_LIST: process.env.PASSWORD_RESET_URL_ALLOW_LIST,

  ALGOLIA_APPLICATION_ID: process.env.ALGOLIA_APPLICATION_ID,
  ALGOLIA_ADMIN_API_KEY: process.env.ALGOLIA_ADMIN_API_KEY,
  ALGOLIA_RECIPES_INDEX_NAME: process.env.ALGOLIA_RECIPES_INDEX_NAME,
};
