import { GQLUploadFile } from '@/types/graphqlTypes';
import { objectToUrlParams } from './url';

type ImgixOptions = Record<string, string | number>;

/**
 * Return an image URL based on its hashed named and file extension
 */
export function imageUrl(
  image: Pick<GQLUploadFile, 'hash' | 'ext'> | null = null
) {
  if (image) {
    const { hash, ext } = image;

    if (hash && ext) {
      return `https://${
        import.meta.env.VITE_IMGIX_SOURCE
      }.imgix.net/${hash}${ext}`;
    }
  }

  return null;
}

/**
 * Add cropping params to the given image URL
 */
export function crop(imageUrl: string, options: ImgixOptions) {
  options = Object.assign(
    {
      fit: 'crop',
    },
    options
  );

  return `${imageUrl}${objectToUrlParams(options)}`;
}

export function hdpiSources(imageUrl: string, options: ImgixOptions) {
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
