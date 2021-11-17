module.exports = {
  projects: [
    {
      root: './packages/frontend',
      globalComponents: [
        './src/components/**/*.vue',
        './node_modules/chusho/dist/esm/components/**/*.js',
        './node_modules/chusho/dist/esm/components/**/*.ts',
      ],
    },
  ],
};
