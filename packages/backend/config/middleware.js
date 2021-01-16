module.exports = ({ env }) => ({
  settings: {
    /**
     * CORS are required for server-side cookie-based auth
     */
    cors: {
      enabled: true,
      origin: [
        env('API_ORIGIN', 'http://localhost:1337'),
        env('APP_ORIGIN', 'http://localhost:3000'),
      ],
      headers: [
        'Content-Type',
        'Authorization',
        'X-Frame-Options',
        'Access-Control-Allow-Origin',
      ],
    },
  },
});
