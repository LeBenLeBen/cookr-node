module.exports = ({ env }) => ({
  url: env('API_ORIGIN'),
  proxy: true,
});
