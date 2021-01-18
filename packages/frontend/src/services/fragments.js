import gql from 'graphql-tag';

export const recipeCardFragment = gql`
  fragment RecipeCard on Recipe {
    id
    title
    slug
    time
    quantity
    image {
      hash
      ext
    }
    author {
      username
    }
  }
`;
