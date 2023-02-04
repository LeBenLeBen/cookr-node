import gql from 'graphql-tag';

export const imageFragment = gql`
  fragment Image on directus_files {
    id
    filename_disk
    storage
  }
`;

export const recipeCardFragment = gql`
  fragment RecipeCard on recipes {
    id
    title
    slug
    time
    quantity
    image {
      ...Image
    }
    author {
      id
      username
    }
  }
  ${imageFragment}
`;

export const recipeFragment = gql`
  fragment RecipeFragment on recipes {
    id
    title
    slug
    author {
      id
      username
    }
    time
    quantity
    steps
    notes
    ingredients
    tags {
      id
      tags_id {
        id
        title
        slug
      }
    }
    image {
      ...Image
    }
  }
  ${imageFragment}
`;

export const currentUserFragment = gql`
  fragment CurrentUser on directus_users {
    id
    email
    username
    avatar {
      ...Image
    }
  }
  ${imageFragment}
`;
