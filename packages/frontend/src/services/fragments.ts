import gql from 'graphql-tag';

export const recipeCardFragment = gql`
  fragment RecipeCard on Recipe {
    title
    slug
    time
    quantity
    image {
      data {
        id
        attributes {
          hash
          ext
        }
      }
    }
    author {
      data {
        id
        attributes {
          username
        }
      }
    }
  }
`;

export const recipeFragment = gql`
  fragment RecipeFragment on Recipe {
    title
    slug
    author {
      data {
        id
        attributes {
          username
        }
      }
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
      data {
        id
        attributes {
          title
          slug
        }
      }
    }
    image {
      data {
        id
        attributes {
          hash
          ext
        }
      }
    }
  }
`;

export const currentUserFragment = gql`
  fragment CurrentUser on UsersPermissionsMe {
    id
    user {
      data {
        id
        attributes {
          email
          username
          avatar {
            data {
              id
              attributes {
                hash
                ext
              }
            }
          }
        }
      }
    }
  }
`;
