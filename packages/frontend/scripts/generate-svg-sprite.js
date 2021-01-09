const path = require('path');
const createSvgSpritesheet = require('ikonate/scripts/createSvgSpritesheet.js');

/**
 * Take Ikonate icons specified below and build a sprite out of them
 * Can be run with `npm run generate:sprite`
 */
createSvgSpritesheet({
  spriteDistName: '/icons.svg',
  spriteDistCatalog: path.resolve(__dirname, '../src/assets/images/'),
  spriteTemplateSrc: path.resolve(
    __dirname,
    '../node_modules/ikonate/templates/ikonate-template.svg'
  ),
  iconsCatalogSrc: path.resolve(__dirname, '../node_modules/ikonate/icons'),
  selectedSvgs: [
    'book.svg',
    'home-alt2.svg',
    'people.svg',
    'search.svg',
    'timer.svg',
  ],
  save: true,
});
