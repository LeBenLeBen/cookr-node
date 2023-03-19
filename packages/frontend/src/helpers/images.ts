import { Image } from '@/services/types';

import { objectToUrlParams } from './url';

type ImageTransformOptions = Record<string, string | number>;

/**
 * Return an image URL based on its hashed named and file extension
 */
export function imageUrl(image: Image | null = null) {
  if (image) {
    const { filename_disk } = image;
    const base = '/uploads';

    if (filename_disk) {
      return `${base}/${filename_disk}`;
    }
  }

  return null;
}

/**
 * Add cropping params to the given image URL
 */
export function crop(imageUrl: string, options: ImageTransformOptions) {
  options = Object.assign(
    {
      fit: 'cover',
    },
    options
  );

  return `${imageUrl}${objectToUrlParams(options)}`;
}

export function hdpiSources(imageUrl: string, options: ImageTransformOptions) {
  return [
    {
      srcset: `${crop(imageUrl, {
        ...options,
        format: 'webp',
      })}, ${crop(imageUrl, { ...options, format: 'webp', dpr: 2 })} 2x`,
      type: 'image/webp',
    },
    {
      srcset: `${crop(imageUrl, options)}, ${crop(imageUrl, {
        ...options,
        dpr: 2,
      })} 2x`,
      type: 'image/jpg',
    },
  ];
}
