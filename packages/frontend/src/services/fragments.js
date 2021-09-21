import gql from 'graphql-tag';

export const recipeCardFragment = gql`
  fragment RecipeCard on Recipe {
    id
    title
    slug
    time
    quantity
    image {
      id
      hash
      ext
    }
    author {
      id
      username
    }
  }
`;

export const recipeFragment = gql`
  fragment RecipeFragment on Recipe {
    id
    title
    author {
      id
      username
    }
    time
    quantity
    steps
    notes
    ingredients {
      id
      amount
      title
    }
    tags {
      id
      title
      slug
    }
    image {
      id
      hash
      ext
    }
  }
`;

export const currentUserFragment = gql`
  fragment CurrentUser on UsersPermissionsMe {
    id
    email
    username
    user {
      id
      avatar {
        id
        hash
        ext
      }
    }
  }
`;
