import { Directus_Files } from '@/gql/graphql';

export type Image = Pick<Directus_Files, 'id' | 'filename_disk' | 'storage'>;

export type RecipeIngredient = {
  title?: string;
  amount?: string;
};
