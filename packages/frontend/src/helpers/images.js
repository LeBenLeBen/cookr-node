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
