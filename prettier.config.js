module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  importOrder: [
    '/services/(.*)$',
    '/gql/(.*)$',
    '/helpers/(.*)$',
    '/composables/(.*)$',
    '/views/(.*)$',
    '/components/(.*)$',
    '/assets/(.*)$',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
