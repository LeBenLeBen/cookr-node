import { objectToUrlParams } from './url';

/**
 * Return an image URL based on its hashed named and file extension
 */
export function imageUrl(image = {}) {
  if (image) {
    const { hash, ext } = image;

    if (hash && ext) {
      return `http://${
        import.meta.env.VITE_IMGIX_SOURCE
      }.imgix.net/${hash}${ext}`;
    }
  }

  return null;
}

/**
 * Add cropping params to the given image URL
 */
export function crop(imageUrl, options) {
  options = Object.assign(
    {
      fit: 'crop',
    },
    options
  );

  return `${imageUrl}${objectToUrlParams(options)}`;
}

export function hdpiSources(imageUrl, options) {
  return [
    {
      srcset: `${crop(imageUrl, options)}, ${crop(imageUrl, {
        ...options,
        dpr: 2,
      })} 2x`,
      type: 'image/webp',
    },
    {
      srcset: `${crop(imageUrl, {
        ...options,
        format: 'webp',
      })}, ${crop(imageUrl, { ...options, format: 'webp', dpr: 2 })} 2x`,
      type: 'image/jpg',
    },
  ];
}
