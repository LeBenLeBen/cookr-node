import { Image } from '@/services/types';

import { objectToUrlParams } from './url';

type ImageTransformOptions = {
  fit?: 'cover' | 'conatin' | 'inside' | 'outside';
  width?: number;
  height?: number;
  quality?: number;
  withoutEnlargement?: boolean;
  format?: 'auto' | 'jpg' | 'png' | 'webp' | 'tiff';
};

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
export function crop(
  imageUrl: string,
  options: ImageTransformOptions,
  dpr = 1
) {
  options = Object.assign(
    {
      fit: 'cover',
    },
    options
  );

  if (dpr > 1) {
    // Lower the quality for hi-density pictures
    options.quality ??= 60;

    if (options.width) {
      options.width *= dpr;
    }
    if (options.height) {
      options.height *= dpr;
    }
  }

  return `${imageUrl}${objectToUrlParams(options)}`;
}

export function hdpiSources(imageUrl: string, options: ImageTransformOptions) {
  return [
    {
      srcset: `${crop(imageUrl, {
        ...options,
        format: 'webp',
      })}, ${crop(imageUrl, { ...options, format: 'webp' }, 2)} 2x`,
      type: 'image/webp',
    },
    {
      srcset: `${crop(imageUrl, options)}, ${crop(
        imageUrl,
        {
          ...options,
        },
        2
      )} 2x`,
      type: 'image/jpg',
    },
  ];
}
