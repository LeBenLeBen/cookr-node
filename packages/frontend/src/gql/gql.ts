/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n      query explore(\n        $limit: Int!\n        $offset: Int!\n        $sort: [String]\n        $filter: recipes_filter\n      ) {\n        recipes(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n          ...RecipeCard\n        }\n        recipes_aggregated(sort: $sort, filter: $filter) {\n          count {\n            id\n          }\n        }\n      }\n      \n    ": types.ExploreDocument,
    "\n            mutation refresh($refresh_token: String!) {\n              auth_refresh(refresh_token: $refresh_token, mode: json) {\n                access_token\n                refresh_token\n                expires\n              }\n            }\n          ": types.RefreshDocument,
    "\n  fragment Image on directus_files {\n    id\n    filename_disk\n    storage\n  }\n": types.ImageFragmentDoc,
    "\n  fragment RecipeCard on recipes {\n    id\n    title\n    slug\n    time\n    quantity\n    image {\n      ...Image\n    }\n    author {\n      id\n      username\n    }\n  }\n  \n": types.RecipeCardFragmentDoc,
    "\n  fragment RecipeFragment on recipes {\n    id\n    title\n    slug\n    author {\n      id\n      username\n    }\n    time\n    quantity\n    steps\n    notes\n    ingredients\n    tags {\n      id\n      tags_id {\n        id\n        title\n        slug\n      }\n    }\n    image {\n      ...Image\n    }\n  }\n  \n": types.RecipeFragmentFragmentDoc,
    "\n  fragment CurrentUser on directus_users {\n    id\n    email\n    username\n    avatar {\n      ...Image\n    }\n  }\n  \n": types.CurrentUserFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query explore(\n        $limit: Int!\n        $offset: Int!\n        $sort: [String]\n        $filter: recipes_filter\n      ) {\n        recipes(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n          ...RecipeCard\n        }\n        recipes_aggregated(sort: $sort, filter: $filter) {\n          count {\n            id\n          }\n        }\n      }\n      \n    "): (typeof documents)["\n      query explore(\n        $limit: Int!\n        $offset: Int!\n        $sort: [String]\n        $filter: recipes_filter\n      ) {\n        recipes(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n          ...RecipeCard\n        }\n        recipes_aggregated(sort: $sort, filter: $filter) {\n          count {\n            id\n          }\n        }\n      }\n      \n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n            mutation refresh($refresh_token: String!) {\n              auth_refresh(refresh_token: $refresh_token, mode: json) {\n                access_token\n                refresh_token\n                expires\n              }\n            }\n          "): (typeof documents)["\n            mutation refresh($refresh_token: String!) {\n              auth_refresh(refresh_token: $refresh_token, mode: json) {\n                access_token\n                refresh_token\n                expires\n              }\n            }\n          "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Image on directus_files {\n    id\n    filename_disk\n    storage\n  }\n"): (typeof documents)["\n  fragment Image on directus_files {\n    id\n    filename_disk\n    storage\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RecipeCard on recipes {\n    id\n    title\n    slug\n    time\n    quantity\n    image {\n      ...Image\n    }\n    author {\n      id\n      username\n    }\n  }\n  \n"): (typeof documents)["\n  fragment RecipeCard on recipes {\n    id\n    title\n    slug\n    time\n    quantity\n    image {\n      ...Image\n    }\n    author {\n      id\n      username\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RecipeFragment on recipes {\n    id\n    title\n    slug\n    author {\n      id\n      username\n    }\n    time\n    quantity\n    steps\n    notes\n    ingredients\n    tags {\n      id\n      tags_id {\n        id\n        title\n        slug\n      }\n    }\n    image {\n      ...Image\n    }\n  }\n  \n"): (typeof documents)["\n  fragment RecipeFragment on recipes {\n    id\n    title\n    slug\n    author {\n      id\n      username\n    }\n    time\n    quantity\n    steps\n    notes\n    ingredients\n    tags {\n      id\n      tags_id {\n        id\n        title\n        slug\n      }\n    }\n    image {\n      ...Image\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CurrentUser on directus_users {\n    id\n    email\n    username\n    avatar {\n      ...Image\n    }\n  }\n  \n"): (typeof documents)["\n  fragment CurrentUser on directus_users {\n    id\n    email\n    username\n    avatar {\n      ...Image\n    }\n  }\n  \n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;