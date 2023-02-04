/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** ISO8601 Date values */
  Date: any;
  /** BigInt value */
  GraphQLBigInt: any;
  /** A Float or a String */
  GraphQLStringOrFloat: any;
  /** Hashed string values */
  Hash: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** Represents NULL values */
  Void: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  auth_login?: Maybe<Auth_Tokens>;
  auth_logout?: Maybe<Scalars['Boolean']>;
  auth_password_request?: Maybe<Scalars['Boolean']>;
  auth_password_reset?: Maybe<Scalars['Boolean']>;
  auth_refresh?: Maybe<Auth_Tokens>;
  create_comment?: Maybe<Directus_Activity>;
  create_dashboards_item?: Maybe<Directus_Dashboards>;
  create_dashboards_items: Array<Directus_Dashboards>;
  create_files_item?: Maybe<Directus_Files>;
  create_files_items: Array<Directus_Files>;
  create_flows_item?: Maybe<Directus_Flows>;
  create_flows_items: Array<Directus_Flows>;
  create_folders_item?: Maybe<Directus_Folders>;
  create_folders_items: Array<Directus_Folders>;
  create_notifications_item?: Maybe<Directus_Notifications>;
  create_notifications_items: Array<Directus_Notifications>;
  create_operations_item?: Maybe<Directus_Operations>;
  create_operations_items: Array<Directus_Operations>;
  create_panels_item?: Maybe<Directus_Panels>;
  create_panels_items: Array<Directus_Panels>;
  create_permissions_item?: Maybe<Directus_Permissions>;
  create_permissions_items: Array<Directus_Permissions>;
  create_presets_item?: Maybe<Directus_Presets>;
  create_presets_items: Array<Directus_Presets>;
  create_recipes_item?: Maybe<Recipes>;
  create_recipes_items: Array<Recipes>;
  create_recipes_tags_item?: Maybe<Recipes_Tags>;
  create_recipes_tags_items: Array<Recipes_Tags>;
  create_roles_item?: Maybe<Directus_Roles>;
  create_roles_items: Array<Directus_Roles>;
  create_shares_item?: Maybe<Directus_Shares>;
  create_shares_items: Array<Directus_Shares>;
  create_tags_item?: Maybe<Tags>;
  create_tags_items: Array<Tags>;
  create_users_favorite_recipes_item?: Maybe<Users_Favorite_Recipes>;
  create_users_favorite_recipes_items: Array<Users_Favorite_Recipes>;
  create_users_item?: Maybe<Directus_Users>;
  create_users_items: Array<Directus_Users>;
  create_users_viewed_recipes_item?: Maybe<Users_Viewed_Recipes>;
  create_users_viewed_recipes_items: Array<Users_Viewed_Recipes>;
  create_webhooks_item?: Maybe<Directus_Webhooks>;
  create_webhooks_items: Array<Directus_Webhooks>;
  delete_comment?: Maybe<Delete_One>;
  delete_dashboards_item?: Maybe<Delete_One>;
  delete_dashboards_items?: Maybe<Delete_Many>;
  delete_files_item?: Maybe<Delete_One>;
  delete_files_items?: Maybe<Delete_Many>;
  delete_flows_item?: Maybe<Delete_One>;
  delete_flows_items?: Maybe<Delete_Many>;
  delete_folders_item?: Maybe<Delete_One>;
  delete_folders_items?: Maybe<Delete_Many>;
  delete_notifications_item?: Maybe<Delete_One>;
  delete_notifications_items?: Maybe<Delete_Many>;
  delete_operations_item?: Maybe<Delete_One>;
  delete_operations_items?: Maybe<Delete_Many>;
  delete_panels_item?: Maybe<Delete_One>;
  delete_panels_items?: Maybe<Delete_Many>;
  delete_permissions_item?: Maybe<Delete_One>;
  delete_permissions_items?: Maybe<Delete_Many>;
  delete_presets_item?: Maybe<Delete_One>;
  delete_presets_items?: Maybe<Delete_Many>;
  delete_recipes_item?: Maybe<Delete_One>;
  delete_recipes_items?: Maybe<Delete_Many>;
  delete_recipes_tags_item?: Maybe<Delete_One>;
  delete_recipes_tags_items?: Maybe<Delete_Many>;
  delete_roles_item?: Maybe<Delete_One>;
  delete_roles_items?: Maybe<Delete_Many>;
  delete_shares_item?: Maybe<Delete_One>;
  delete_shares_items?: Maybe<Delete_Many>;
  delete_tags_item?: Maybe<Delete_One>;
  delete_tags_items?: Maybe<Delete_Many>;
  delete_users_favorite_recipes_item?: Maybe<Delete_One>;
  delete_users_favorite_recipes_items?: Maybe<Delete_Many>;
  delete_users_item?: Maybe<Delete_One>;
  delete_users_items?: Maybe<Delete_Many>;
  delete_users_viewed_recipes_item?: Maybe<Delete_One>;
  delete_users_viewed_recipes_items?: Maybe<Delete_Many>;
  delete_webhooks_item?: Maybe<Delete_One>;
  delete_webhooks_items?: Maybe<Delete_Many>;
  import_file?: Maybe<Directus_Files>;
  update_comment?: Maybe<Directus_Activity>;
  update_dashboards_batch: Array<Directus_Dashboards>;
  update_dashboards_item?: Maybe<Directus_Dashboards>;
  update_dashboards_items: Array<Directus_Dashboards>;
  update_files_batch: Array<Directus_Files>;
  update_files_item?: Maybe<Directus_Files>;
  update_files_items: Array<Directus_Files>;
  update_flows_batch: Array<Directus_Flows>;
  update_flows_item?: Maybe<Directus_Flows>;
  update_flows_items: Array<Directus_Flows>;
  update_folders_batch: Array<Directus_Folders>;
  update_folders_item?: Maybe<Directus_Folders>;
  update_folders_items: Array<Directus_Folders>;
  update_notifications_batch: Array<Directus_Notifications>;
  update_notifications_item?: Maybe<Directus_Notifications>;
  update_notifications_items: Array<Directus_Notifications>;
  update_operations_batch: Array<Directus_Operations>;
  update_operations_item?: Maybe<Directus_Operations>;
  update_operations_items: Array<Directus_Operations>;
  update_panels_batch: Array<Directus_Panels>;
  update_panels_item?: Maybe<Directus_Panels>;
  update_panels_items: Array<Directus_Panels>;
  update_permissions_batch: Array<Directus_Permissions>;
  update_permissions_item?: Maybe<Directus_Permissions>;
  update_permissions_items: Array<Directus_Permissions>;
  update_presets_batch: Array<Directus_Presets>;
  update_presets_item?: Maybe<Directus_Presets>;
  update_presets_items: Array<Directus_Presets>;
  update_recipes_batch: Array<Recipes>;
  update_recipes_item?: Maybe<Recipes>;
  update_recipes_items: Array<Recipes>;
  update_recipes_tags_batch: Array<Recipes_Tags>;
  update_recipes_tags_item?: Maybe<Recipes_Tags>;
  update_recipes_tags_items: Array<Recipes_Tags>;
  update_roles_batch: Array<Directus_Roles>;
  update_roles_item?: Maybe<Directus_Roles>;
  update_roles_items: Array<Directus_Roles>;
  update_settings?: Maybe<Directus_Settings>;
  update_shares_batch: Array<Directus_Shares>;
  update_shares_item?: Maybe<Directus_Shares>;
  update_shares_items: Array<Directus_Shares>;
  update_tags_batch: Array<Tags>;
  update_tags_item?: Maybe<Tags>;
  update_tags_items: Array<Tags>;
  update_users_batch: Array<Directus_Users>;
  update_users_favorite_recipes_batch: Array<Users_Favorite_Recipes>;
  update_users_favorite_recipes_item?: Maybe<Users_Favorite_Recipes>;
  update_users_favorite_recipes_items: Array<Users_Favorite_Recipes>;
  update_users_item?: Maybe<Directus_Users>;
  update_users_items: Array<Directus_Users>;
  update_users_viewed_recipes_batch: Array<Users_Viewed_Recipes>;
  update_users_viewed_recipes_item?: Maybe<Users_Viewed_Recipes>;
  update_users_viewed_recipes_items: Array<Users_Viewed_Recipes>;
  update_webhooks_batch: Array<Directus_Webhooks>;
  update_webhooks_item?: Maybe<Directus_Webhooks>;
  update_webhooks_items: Array<Directus_Webhooks>;
  users_invite?: Maybe<Scalars['Boolean']>;
  users_invite_accept?: Maybe<Scalars['Boolean']>;
  users_me_tfa_disable?: Maybe<Scalars['Boolean']>;
  users_me_tfa_enable?: Maybe<Scalars['Boolean']>;
  users_me_tfa_generate?: Maybe<Users_Me_Tfa_Generate_Data>;
  utils_cache_clear?: Maybe<Scalars['Void']>;
  utils_hash_generate?: Maybe<Scalars['String']>;
  utils_hash_verify?: Maybe<Scalars['Boolean']>;
  utils_revert?: Maybe<Scalars['Boolean']>;
  utils_sort?: Maybe<Scalars['Boolean']>;
};


export type MutationAuth_LoginArgs = {
  email: Scalars['String'];
  mode?: InputMaybe<Auth_Mode>;
  otp?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationAuth_LogoutArgs = {
  refresh_token?: InputMaybe<Scalars['String']>;
};


export type MutationAuth_Password_RequestArgs = {
  email: Scalars['String'];
  reset_url?: InputMaybe<Scalars['String']>;
};


export type MutationAuth_Password_ResetArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationAuth_RefreshArgs = {
  mode?: InputMaybe<Auth_Mode>;
  refresh_token?: InputMaybe<Scalars['String']>;
};


export type MutationCreate_CommentArgs = {
  collection: Scalars['String'];
  comment: Scalars['String'];
  item: Scalars['ID'];
};


export type MutationCreate_Dashboards_ItemArgs = {
  data: Create_Directus_Dashboards_Input;
};


export type MutationCreate_Dashboards_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Dashboards_Input>>;
  filter?: InputMaybe<Directus_Dashboards_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Files_ItemArgs = {
  data: Create_Directus_Files_Input;
};


export type MutationCreate_Files_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Files_Input>>;
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Flows_ItemArgs = {
  data: Create_Directus_Flows_Input;
};


export type MutationCreate_Flows_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Flows_Input>>;
  filter?: InputMaybe<Directus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Folders_ItemArgs = {
  data: Create_Directus_Folders_Input;
};


export type MutationCreate_Folders_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Folders_Input>>;
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Notifications_ItemArgs = {
  data: Create_Directus_Notifications_Input;
};


export type MutationCreate_Notifications_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Notifications_Input>>;
  filter?: InputMaybe<Directus_Notifications_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Operations_ItemArgs = {
  data: Create_Directus_Operations_Input;
};


export type MutationCreate_Operations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Operations_Input>>;
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Panels_ItemArgs = {
  data: Create_Directus_Panels_Input;
};


export type MutationCreate_Panels_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Panels_Input>>;
  filter?: InputMaybe<Directus_Panels_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Permissions_ItemArgs = {
  data: Create_Directus_Permissions_Input;
};


export type MutationCreate_Permissions_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Permissions_Input>>;
  filter?: InputMaybe<Directus_Permissions_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Presets_ItemArgs = {
  data: Create_Directus_Presets_Input;
};


export type MutationCreate_Presets_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Presets_Input>>;
  filter?: InputMaybe<Directus_Presets_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Recipes_ItemArgs = {
  data: Create_Recipes_Input;
};


export type MutationCreate_Recipes_ItemsArgs = {
  data?: InputMaybe<Array<Create_Recipes_Input>>;
  filter?: InputMaybe<Recipes_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Recipes_Tags_ItemArgs = {
  data: Create_Recipes_Tags_Input;
};


export type MutationCreate_Recipes_Tags_ItemsArgs = {
  data?: InputMaybe<Array<Create_Recipes_Tags_Input>>;
  filter?: InputMaybe<Recipes_Tags_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Roles_ItemArgs = {
  data: Create_Directus_Roles_Input;
};


export type MutationCreate_Roles_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Roles_Input>>;
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Shares_ItemArgs = {
  data: Create_Directus_Shares_Input;
};


export type MutationCreate_Shares_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Shares_Input>>;
  filter?: InputMaybe<Directus_Shares_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Tags_ItemArgs = {
  data: Create_Tags_Input;
};


export type MutationCreate_Tags_ItemsArgs = {
  data?: InputMaybe<Array<Create_Tags_Input>>;
  filter?: InputMaybe<Tags_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Users_Favorite_Recipes_ItemArgs = {
  data: Create_Users_Favorite_Recipes_Input;
};


export type MutationCreate_Users_Favorite_Recipes_ItemsArgs = {
  data?: InputMaybe<Array<Create_Users_Favorite_Recipes_Input>>;
  filter?: InputMaybe<Users_Favorite_Recipes_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Users_ItemArgs = {
  data: Create_Directus_Users_Input;
};


export type MutationCreate_Users_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Users_Input>>;
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Users_Viewed_Recipes_ItemArgs = {
  data: Create_Users_Viewed_Recipes_Input;
};


export type MutationCreate_Users_Viewed_Recipes_ItemsArgs = {
  data?: InputMaybe<Array<Create_Users_Viewed_Recipes_Input>>;
  filter?: InputMaybe<Users_Viewed_Recipes_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Webhooks_ItemArgs = {
  data: Create_Directus_Webhooks_Input;
};


export type MutationCreate_Webhooks_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Webhooks_Input>>;
  filter?: InputMaybe<Directus_Webhooks_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationDelete_CommentArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Dashboards_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Dashboards_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Files_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Files_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Flows_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Flows_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Folders_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Folders_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Notifications_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Notifications_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Operations_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Operations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Panels_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Panels_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Permissions_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Permissions_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Presets_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Presets_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Recipes_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Recipes_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Recipes_Tags_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Recipes_Tags_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Roles_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Roles_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Shares_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Shares_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Tags_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Tags_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Users_Favorite_Recipes_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Users_Favorite_Recipes_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Users_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Users_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Users_Viewed_Recipes_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Users_Viewed_Recipes_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Webhooks_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Webhooks_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationImport_FileArgs = {
  data?: InputMaybe<Create_Directus_Files_Input>;
  url: Scalars['String'];
};


export type MutationUpdate_CommentArgs = {
  comment: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationUpdate_Dashboards_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Dashboards_Input>>;
  filter?: InputMaybe<Directus_Dashboards_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Dashboards_ItemArgs = {
  data: Update_Directus_Dashboards_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Dashboards_ItemsArgs = {
  data: Update_Directus_Dashboards_Input;
  filter?: InputMaybe<Directus_Dashboards_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Files_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Files_Input>>;
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Files_ItemArgs = {
  data: Update_Directus_Files_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Files_ItemsArgs = {
  data: Update_Directus_Files_Input;
  filter?: InputMaybe<Directus_Files_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Flows_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Flows_Input>>;
  filter?: InputMaybe<Directus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Flows_ItemArgs = {
  data: Update_Directus_Flows_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Flows_ItemsArgs = {
  data: Update_Directus_Flows_Input;
  filter?: InputMaybe<Directus_Flows_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Folders_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Folders_Input>>;
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Folders_ItemArgs = {
  data: Update_Directus_Folders_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Folders_ItemsArgs = {
  data: Update_Directus_Folders_Input;
  filter?: InputMaybe<Directus_Folders_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Notifications_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Notifications_Input>>;
  filter?: InputMaybe<Directus_Notifications_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Notifications_ItemArgs = {
  data: Update_Directus_Notifications_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Notifications_ItemsArgs = {
  data: Update_Directus_Notifications_Input;
  filter?: InputMaybe<Directus_Notifications_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Operations_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Operations_Input>>;
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Operations_ItemArgs = {
  data: Update_Directus_Operations_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Operations_ItemsArgs = {
  data: Update_Directus_Operations_Input;
  filter?: InputMaybe<Directus_Operations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Panels_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Panels_Input>>;
  filter?: InputMaybe<Directus_Panels_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Panels_ItemArgs = {
  data: Update_Directus_Panels_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Panels_ItemsArgs = {
  data: Update_Directus_Panels_Input;
  filter?: InputMaybe<Directus_Panels_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Permissions_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Permissions_Input>>;
  filter?: InputMaybe<Directus_Permissions_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Permissions_ItemArgs = {
  data: Update_Directus_Permissions_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Permissions_ItemsArgs = {
  data: Update_Directus_Permissions_Input;
  filter?: InputMaybe<Directus_Permissions_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Presets_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Presets_Input>>;
  filter?: InputMaybe<Directus_Presets_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Presets_ItemArgs = {
  data: Update_Directus_Presets_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Presets_ItemsArgs = {
  data: Update_Directus_Presets_Input;
  filter?: InputMaybe<Directus_Presets_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Recipes_BatchArgs = {
  data?: InputMaybe<Array<Update_Recipes_Input>>;
  filter?: InputMaybe<Recipes_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Recipes_ItemArgs = {
  data: Update_Recipes_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Recipes_ItemsArgs = {
  data: Update_Recipes_Input;
  filter?: InputMaybe<Recipes_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Recipes_Tags_BatchArgs = {
  data?: InputMaybe<Array<Update_Recipes_Tags_Input>>;
  filter?: InputMaybe<Recipes_Tags_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Recipes_Tags_ItemArgs = {
  data: Update_Recipes_Tags_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Recipes_Tags_ItemsArgs = {
  data: Update_Recipes_Tags_Input;
  filter?: InputMaybe<Recipes_Tags_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Roles_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Roles_Input>>;
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Roles_ItemArgs = {
  data: Update_Directus_Roles_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Roles_ItemsArgs = {
  data: Update_Directus_Roles_Input;
  filter?: InputMaybe<Directus_Roles_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_SettingsArgs = {
  data: Update_Directus_Settings_Input;
};


export type MutationUpdate_Shares_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Shares_Input>>;
  filter?: InputMaybe<Directus_Shares_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Shares_ItemArgs = {
  data: Update_Directus_Shares_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Shares_ItemsArgs = {
  data: Update_Directus_Shares_Input;
  filter?: InputMaybe<Directus_Shares_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Tags_BatchArgs = {
  data?: InputMaybe<Array<Update_Tags_Input>>;
  filter?: InputMaybe<Tags_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Tags_ItemArgs = {
  data: Update_Tags_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Tags_ItemsArgs = {
  data: Update_Tags_Input;
  filter?: InputMaybe<Tags_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Users_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Users_Input>>;
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Users_Favorite_Recipes_BatchArgs = {
  data?: InputMaybe<Array<Update_Users_Favorite_Recipes_Input>>;
  filter?: InputMaybe<Users_Favorite_Recipes_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Users_Favorite_Recipes_ItemArgs = {
  data: Update_Users_Favorite_Recipes_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Users_Favorite_Recipes_ItemsArgs = {
  data: Update_Users_Favorite_Recipes_Input;
  filter?: InputMaybe<Users_Favorite_Recipes_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Users_ItemArgs = {
  data: Update_Directus_Users_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Users_ItemsArgs = {
  data: Update_Directus_Users_Input;
  filter?: InputMaybe<Directus_Users_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Users_Viewed_Recipes_BatchArgs = {
  data?: InputMaybe<Array<Update_Users_Viewed_Recipes_Input>>;
  filter?: InputMaybe<Users_Viewed_Recipes_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Users_Viewed_Recipes_ItemArgs = {
  data: Update_Users_Viewed_Recipes_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Users_Viewed_Recipes_ItemsArgs = {
  data: Update_Users_Viewed_Recipes_Input;
  filter?: InputMaybe<Users_Viewed_Recipes_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Webhooks_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Webhooks_Input>>;
  filter?: InputMaybe<Directus_Webhooks_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Webhooks_ItemArgs = {
  data: Update_Directus_Webhooks_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Webhooks_ItemsArgs = {
  data: Update_Directus_Webhooks_Input;
  filter?: InputMaybe<Directus_Webhooks_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUsers_InviteArgs = {
  email: Scalars['String'];
  invite_url?: InputMaybe<Scalars['String']>;
  role: Scalars['String'];
};


export type MutationUsers_Invite_AcceptArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationUsers_Me_Tfa_DisableArgs = {
  otp: Scalars['String'];
};


export type MutationUsers_Me_Tfa_EnableArgs = {
  otp: Scalars['String'];
  secret: Scalars['String'];
};


export type MutationUsers_Me_Tfa_GenerateArgs = {
  password: Scalars['String'];
};


export type MutationUtils_Hash_GenerateArgs = {
  string: Scalars['String'];
};


export type MutationUtils_Hash_VerifyArgs = {
  hash: Scalars['String'];
  string: Scalars['String'];
};


export type MutationUtils_RevertArgs = {
  revision: Scalars['ID'];
};


export type MutationUtils_SortArgs = {
  collection: Scalars['String'];
  item: Scalars['ID'];
  to: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  activity: Array<Directus_Activity>;
  activity_aggregated: Array<Directus_Activity_Aggregated>;
  activity_by_id?: Maybe<Directus_Activity>;
  collections: Array<Directus_Collections>;
  collections_by_name?: Maybe<Directus_Collections>;
  dashboards: Array<Directus_Dashboards>;
  dashboards_aggregated: Array<Directus_Dashboards_Aggregated>;
  dashboards_by_id?: Maybe<Directus_Dashboards>;
  extensions?: Maybe<Extensions>;
  fields: Array<Directus_Fields>;
  fields_by_name?: Maybe<Directus_Fields>;
  fields_in_collection: Array<Directus_Fields>;
  files: Array<Directus_Files>;
  files_aggregated: Array<Directus_Files_Aggregated>;
  files_by_id?: Maybe<Directus_Files>;
  flows: Array<Directus_Flows>;
  flows_aggregated: Array<Directus_Flows_Aggregated>;
  flows_by_id?: Maybe<Directus_Flows>;
  folders: Array<Directus_Folders>;
  folders_aggregated: Array<Directus_Folders_Aggregated>;
  folders_by_id?: Maybe<Directus_Folders>;
  notifications: Array<Directus_Notifications>;
  notifications_aggregated: Array<Directus_Notifications_Aggregated>;
  notifications_by_id?: Maybe<Directus_Notifications>;
  operations: Array<Directus_Operations>;
  operations_aggregated: Array<Directus_Operations_Aggregated>;
  operations_by_id?: Maybe<Directus_Operations>;
  panels: Array<Directus_Panels>;
  panels_aggregated: Array<Directus_Panels_Aggregated>;
  panels_by_id?: Maybe<Directus_Panels>;
  permissions: Array<Directus_Permissions>;
  permissions_aggregated: Array<Directus_Permissions_Aggregated>;
  permissions_by_id?: Maybe<Directus_Permissions>;
  presets: Array<Directus_Presets>;
  presets_aggregated: Array<Directus_Presets_Aggregated>;
  presets_by_id?: Maybe<Directus_Presets>;
  recipes: Array<Recipes>;
  recipes_aggregated: Array<Recipes_Aggregated>;
  recipes_by_id?: Maybe<Recipes>;
  recipes_tags: Array<Recipes_Tags>;
  recipes_tags_aggregated: Array<Recipes_Tags_Aggregated>;
  recipes_tags_by_id?: Maybe<Recipes_Tags>;
  relations: Array<Directus_Relations>;
  relations_by_name?: Maybe<Directus_Relations>;
  relations_in_collection: Array<Directus_Relations>;
  revisions: Array<Directus_Revisions>;
  revisions_aggregated: Array<Directus_Revisions_Aggregated>;
  revisions_by_id?: Maybe<Directus_Revisions>;
  roles: Array<Directus_Roles>;
  roles_aggregated: Array<Directus_Roles_Aggregated>;
  roles_by_id?: Maybe<Directus_Roles>;
  server_health?: Maybe<Scalars['JSON']>;
  server_info?: Maybe<Server_Info>;
  server_ping?: Maybe<Scalars['String']>;
  server_specs_graphql?: Maybe<Scalars['String']>;
  server_specs_oas?: Maybe<Scalars['JSON']>;
  settings?: Maybe<Directus_Settings>;
  shares: Array<Directus_Shares>;
  shares_aggregated: Array<Directus_Shares_Aggregated>;
  shares_by_id?: Maybe<Directus_Shares>;
  tags: Array<Tags>;
  tags_aggregated: Array<Tags_Aggregated>;
  tags_by_id?: Maybe<Tags>;
  users: Array<Directus_Users>;
  users_aggregated: Array<Directus_Users_Aggregated>;
  users_by_id?: Maybe<Directus_Users>;
  users_favorite_recipes: Array<Users_Favorite_Recipes>;
  users_favorite_recipes_aggregated: Array<Users_Favorite_Recipes_Aggregated>;
  users_favorite_recipes_by_id?: Maybe<Users_Favorite_Recipes>;
  users_me?: Maybe<Directus_Users>;
  users_viewed_recipes: Array<Users_Viewed_Recipes>;
  users_viewed_recipes_aggregated: Array<Users_Viewed_Recipes_Aggregated>;
  users_viewed_recipes_by_id?: Maybe<Users_Viewed_Recipes>;
  webhooks: Array<Directus_Webhooks>;
  webhooks_aggregated: Array<Directus_Webhooks_Aggregated>;
  webhooks_by_id?: Maybe<Directus_Webhooks>;
};


export type QueryActivityArgs = {
  filter?: InputMaybe<Directus_Activity_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryActivity_AggregatedArgs = {
  filter?: InputMaybe<Directus_Activity_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryActivity_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryCollections_By_NameArgs = {
  name: Scalars['String'];
};


export type QueryDashboardsArgs = {
  filter?: InputMaybe<Directus_Dashboards_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryDashboards_AggregatedArgs = {
  filter?: InputMaybe<Directus_Dashboards_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryDashboards_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryFields_By_NameArgs = {
  collection: Scalars['String'];
  field: Scalars['String'];
};


export type QueryFields_In_CollectionArgs = {
  collection: Scalars['String'];
};


export type QueryFilesArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFiles_AggregatedArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFiles_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryFlowsArgs = {
  filter?: InputMaybe<Directus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFlows_AggregatedArgs = {
  filter?: InputMaybe<Directus_Flows_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFlows_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryFoldersArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFolders_AggregatedArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFolders_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryNotificationsArgs = {
  filter?: InputMaybe<Directus_Notifications_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNotifications_AggregatedArgs = {
  filter?: InputMaybe<Directus_Notifications_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNotifications_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryOperationsArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryOperations_AggregatedArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryOperations_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryPanelsArgs = {
  filter?: InputMaybe<Directus_Panels_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPanels_AggregatedArgs = {
  filter?: InputMaybe<Directus_Panels_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPanels_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryPermissionsArgs = {
  filter?: InputMaybe<Directus_Permissions_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPermissions_AggregatedArgs = {
  filter?: InputMaybe<Directus_Permissions_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPermissions_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryPresetsArgs = {
  filter?: InputMaybe<Directus_Presets_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPresets_AggregatedArgs = {
  filter?: InputMaybe<Directus_Presets_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPresets_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryRecipesArgs = {
  filter?: InputMaybe<Recipes_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRecipes_AggregatedArgs = {
  filter?: InputMaybe<Recipes_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRecipes_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryRecipes_TagsArgs = {
  filter?: InputMaybe<Recipes_Tags_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRecipes_Tags_AggregatedArgs = {
  filter?: InputMaybe<Recipes_Tags_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRecipes_Tags_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryRelations_By_NameArgs = {
  collection: Scalars['String'];
  field: Scalars['String'];
};


export type QueryRelations_In_CollectionArgs = {
  collection: Scalars['String'];
};


export type QueryRevisionsArgs = {
  filter?: InputMaybe<Directus_Revisions_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRevisions_AggregatedArgs = {
  filter?: InputMaybe<Directus_Revisions_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRevisions_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRoles_AggregatedArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRoles_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryServer_Specs_GraphqlArgs = {
  scope?: InputMaybe<Graphql_Sdl_Scope>;
};


export type QuerySharesArgs = {
  filter?: InputMaybe<Directus_Shares_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryShares_AggregatedArgs = {
  filter?: InputMaybe<Directus_Shares_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryShares_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryTagsArgs = {
  filter?: InputMaybe<Tags_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTags_AggregatedArgs = {
  filter?: InputMaybe<Tags_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTags_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsers_AggregatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsers_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryUsers_Favorite_RecipesArgs = {
  filter?: InputMaybe<Users_Favorite_Recipes_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsers_Favorite_Recipes_AggregatedArgs = {
  filter?: InputMaybe<Users_Favorite_Recipes_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsers_Favorite_Recipes_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryUsers_Viewed_RecipesArgs = {
  filter?: InputMaybe<Users_Viewed_Recipes_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsers_Viewed_Recipes_AggregatedArgs = {
  filter?: InputMaybe<Users_Viewed_Recipes_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsers_Viewed_Recipes_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryWebhooksArgs = {
  filter?: InputMaybe<Directus_Webhooks_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWebhooks_AggregatedArgs = {
  filter?: InputMaybe<Directus_Webhooks_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWebhooks_By_IdArgs = {
  id: Scalars['ID'];
};

export enum Auth_Mode {
  Cookie = 'cookie',
  Json = 'json'
}

export type Auth_Tokens = {
  __typename?: 'auth_tokens';
  access_token?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['Int']>;
  refresh_token?: Maybe<Scalars['String']>;
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']>;
};

export type Create_Directus_Dashboards_Input = {
  color?: InputMaybe<Scalars['String']>;
  date_created?: InputMaybe<Scalars['Date']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
  panels?: InputMaybe<Array<InputMaybe<Create_Directus_Panels_Input>>>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  embed?: InputMaybe<Scalars['String']>;
  filename_disk?: InputMaybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: InputMaybe<Scalars['GraphQLBigInt']>;
  folder?: InputMaybe<Create_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  modified_by?: InputMaybe<Create_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['Date']>;
  storage: Scalars['String'];
  tags?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uploaded_by?: InputMaybe<Create_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['Date']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Create_Directus_Flows_Input = {
  accountability?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  date_created?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  operation?: InputMaybe<Create_Directus_Operations_Input>;
  operations?: InputMaybe<Array<InputMaybe<Create_Directus_Operations_Input>>>;
  options?: InputMaybe<Scalars['JSON']>;
  status?: InputMaybe<Scalars['String']>;
  trigger?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: InputMaybe<Create_Directus_Folders_Input>;
};

export type Create_Directus_Notifications_Input = {
  collection?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  item?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  recipient?: InputMaybe<Create_Directus_Users_Input>;
  sender?: InputMaybe<Create_Directus_Users_Input>;
  status?: InputMaybe<Scalars['String']>;
  subject: Scalars['String'];
  timestamp?: InputMaybe<Scalars['Date']>;
};

export type Create_Directus_Operations_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  flow?: InputMaybe<Create_Directus_Flows_Input>;
  id?: InputMaybe<Scalars['ID']>;
  key: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Scalars['JSON']>;
  position_x: Scalars['Int'];
  position_y: Scalars['Int'];
  reject?: InputMaybe<Create_Directus_Operations_Input>;
  resolve?: InputMaybe<Create_Directus_Operations_Input>;
  type: Scalars['String'];
  user_created?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Directus_Panels_Input = {
  color?: InputMaybe<Scalars['String']>;
  dashboard?: InputMaybe<Create_Directus_Dashboards_Input>;
  date_created?: InputMaybe<Scalars['Date']>;
  height: Scalars['Int'];
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Scalars['JSON']>;
  position_x: Scalars['Int'];
  position_y: Scalars['Int'];
  show_header: Scalars['Boolean'];
  type: Scalars['String'];
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  width: Scalars['Int'];
};

export type Create_Directus_Permissions_Input = {
  action: Scalars['String'];
  collection: Scalars['String'];
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['ID']>;
  permissions?: InputMaybe<Scalars['JSON']>;
  presets?: InputMaybe<Scalars['JSON']>;
  role?: InputMaybe<Create_Directus_Roles_Input>;
  validation?: InputMaybe<Scalars['JSON']>;
};

export type Create_Directus_Presets_Input = {
  bookmark?: InputMaybe<Scalars['String']>;
  collection?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['JSON']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  layout?: InputMaybe<Scalars['String']>;
  layout_options?: InputMaybe<Scalars['JSON']>;
  layout_query?: InputMaybe<Scalars['JSON']>;
  refresh_interval?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<Create_Directus_Roles_Input>;
  search?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Directus_Roles_Input = {
  admin_access: Scalars['Boolean'];
  app_access?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  enforce_tfa: Scalars['Boolean'];
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: Scalars['String'];
  users?: InputMaybe<Array<InputMaybe<Create_Directus_Users_Input>>>;
};

export type Create_Directus_Shares_Input = {
  collection?: InputMaybe<Scalars['String']>;
  date_created?: InputMaybe<Scalars['Date']>;
  /** $t:shared_leave_blank_for_unlimited */
  date_end?: InputMaybe<Scalars['Date']>;
  /** $t:shared_leave_blank_for_unlimited */
  date_start?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  item?: InputMaybe<Scalars['String']>;
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  /** $t:shared_leave_blank_for_unlimited */
  password?: InputMaybe<Scalars['Hash']>;
  role?: InputMaybe<Create_Directus_Roles_Input>;
  times_used?: InputMaybe<Scalars['Int']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Directus_Users_Input = {
  auth_data?: InputMaybe<Scalars['JSON']>;
  avatar?: InputMaybe<Create_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_notifications?: InputMaybe<Scalars['Boolean']>;
  external_identifier?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  last_access?: InputMaybe<Scalars['Date']>;
  last_name?: InputMaybe<Scalars['String']>;
  last_page?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['Hash']>;
  provider?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Create_Directus_Roles_Input>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  tfa_secret?: InputMaybe<Scalars['Hash']>;
  theme?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['Hash']>;
  username?: InputMaybe<Scalars['String']>;
};

export type Create_Directus_Webhooks_Input = {
  actions: Array<InputMaybe<Scalars['String']>>;
  collections: Array<InputMaybe<Scalars['String']>>;
  data?: InputMaybe<Scalars['Boolean']>;
  headers?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  method?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  status?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

export type Create_Recipes_Input = {
  author?: InputMaybe<Create_Directus_Users_Input>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Create_Directus_Files_Input>;
  ingredients?: InputMaybe<Scalars['JSON']>;
  notes?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  steps?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Create_Recipes_Tags_Input>>>;
  time?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Create_Recipes_Tags_Input = {
  id?: InputMaybe<Scalars['ID']>;
  recipes_id?: InputMaybe<Create_Recipes_Input>;
  tags_id?: InputMaybe<Create_Tags_Input>;
};

export type Create_Tags_Input = {
  id?: InputMaybe<Scalars['ID']>;
  recipes?: InputMaybe<Array<InputMaybe<Create_Recipes_Tags_Input>>>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Create_Users_Favorite_Recipes_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  recipe?: InputMaybe<Create_Recipes_Input>;
  user?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Users_Viewed_Recipes_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  recipe?: InputMaybe<Create_Recipes_Input>;
  user?: InputMaybe<Create_Directus_Users_Input>;
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Delete_Many = {
  __typename?: 'delete_many';
  ids: Array<Maybe<Scalars['ID']>>;
};

export type Delete_One = {
  __typename?: 'delete_one';
  id: Scalars['ID'];
};

export type Directus_Activity = {
  __typename?: 'directus_activity';
  action: Scalars['String'];
  collection: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ip?: Maybe<Scalars['String']>;
  item: Scalars['String'];
  origin?: Maybe<Scalars['String']>;
  revisions?: Maybe<Array<Maybe<Directus_Revisions>>>;
  revisions_func?: Maybe<Count_Functions>;
  timestamp?: Maybe<Scalars['Date']>;
  timestamp_func?: Maybe<Datetime_Functions>;
  user?: Maybe<Directus_Users>;
  user_agent?: Maybe<Scalars['String']>;
};


export type Directus_ActivityRevisionsArgs = {
  filter?: InputMaybe<Directus_Revisions_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_ActivityUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Activity_Aggregated = {
  __typename?: 'directus_activity_aggregated';
  avg?: Maybe<Directus_Activity_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Activity_Aggregated_Fields>;
  count?: Maybe<Directus_Activity_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Directus_Activity_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Directus_Activity_Aggregated_Fields>;
  min?: Maybe<Directus_Activity_Aggregated_Fields>;
  sum?: Maybe<Directus_Activity_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Activity_Aggregated_Fields>;
};

export type Directus_Activity_Aggregated_Count = {
  __typename?: 'directus_activity_aggregated_count';
  action?: Maybe<Scalars['Int']>;
  collection?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  ip?: Maybe<Scalars['Int']>;
  item?: Maybe<Scalars['Int']>;
  origin?: Maybe<Scalars['Int']>;
  revisions?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['Int']>;
  user_agent?: Maybe<Scalars['Int']>;
};

export type Directus_Activity_Aggregated_Fields = {
  __typename?: 'directus_activity_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Directus_Activity_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Activity_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Activity_Filter>>>;
  action?: InputMaybe<String_Filter_Operators>;
  collection?: InputMaybe<String_Filter_Operators>;
  comment?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  ip?: InputMaybe<String_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  origin?: InputMaybe<String_Filter_Operators>;
  revisions?: InputMaybe<Directus_Revisions_Filter>;
  revisions_func?: InputMaybe<Count_Function_Filter_Operators>;
  timestamp?: InputMaybe<Date_Filter_Operators>;
  timestamp_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  user?: InputMaybe<Directus_Users_Filter>;
  user_agent?: InputMaybe<String_Filter_Operators>;
};

export type Directus_Collections = {
  __typename?: 'directus_collections';
  collection?: Maybe<Scalars['String']>;
  meta?: Maybe<Directus_Collections_Meta>;
  schema?: Maybe<Directus_Collections_Schema>;
};

export type Directus_Collections_Meta = {
  __typename?: 'directus_collections_meta';
  accountability?: Maybe<Scalars['String']>;
  archive_app_filter: Scalars['Boolean'];
  archive_field?: Maybe<Scalars['String']>;
  archive_value?: Maybe<Scalars['String']>;
  collapse: Scalars['String'];
  collection: Scalars['String'];
  color?: Maybe<Scalars['String']>;
  display_template?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  hidden: Scalars['Boolean'];
  icon?: Maybe<Scalars['String']>;
  item_duplication_fields?: Maybe<Scalars['JSON']>;
  note?: Maybe<Scalars['String']>;
  singleton: Scalars['Boolean'];
  sort?: Maybe<Scalars['Int']>;
  sort_field?: Maybe<Scalars['String']>;
  translations?: Maybe<Scalars['JSON']>;
  unarchive_value?: Maybe<Scalars['String']>;
};

export type Directus_Collections_Schema = {
  __typename?: 'directus_collections_schema';
  comment?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Directus_Dashboards = {
  __typename?: 'directus_dashboards';
  color?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  panels?: Maybe<Array<Maybe<Directus_Panels>>>;
  panels_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Directus_Users>;
};


export type Directus_DashboardsPanelsArgs = {
  filter?: InputMaybe<Directus_Panels_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_DashboardsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Dashboards_Aggregated = {
  __typename?: 'directus_dashboards_aggregated';
  count?: Maybe<Directus_Dashboards_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Directus_Dashboards_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
};

export type Directus_Dashboards_Aggregated_Count = {
  __typename?: 'directus_dashboards_aggregated_count';
  color?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  icon?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['Int']>;
  panels?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
};

export type Directus_Dashboards_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Dashboards_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Dashboards_Filter>>>;
  color?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  note?: InputMaybe<String_Filter_Operators>;
  panels?: InputMaybe<Directus_Panels_Filter>;
  panels_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Fields = {
  __typename?: 'directus_fields';
  collection?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  meta?: Maybe<Directus_Fields_Meta>;
  schema?: Maybe<Directus_Fields_Schema>;
  type?: Maybe<Scalars['String']>;
};

export type Directus_Fields_Meta = {
  __typename?: 'directus_fields_meta';
  collection: Scalars['String'];
  conditions?: Maybe<Scalars['JSON']>;
  display?: Maybe<Scalars['String']>;
  display_options?: Maybe<Scalars['JSON']>;
  field: Scalars['String'];
  group?: Maybe<Scalars['String']>;
  hidden: Scalars['Boolean'];
  id: Scalars['Int'];
  interface?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['JSON']>;
  readonly: Scalars['Boolean'];
  required?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  special?: Maybe<Array<Maybe<Scalars['String']>>>;
  translations?: Maybe<Scalars['JSON']>;
  validation?: Maybe<Scalars['JSON']>;
  validation_message?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

export type Directus_Fields_Schema = {
  __typename?: 'directus_fields_schema';
  comment?: Maybe<Scalars['String']>;
  data_type?: Maybe<Scalars['String']>;
  default_value?: Maybe<Scalars['String']>;
  foreign_key_column?: Maybe<Scalars['String']>;
  foreign_key_table?: Maybe<Scalars['String']>;
  has_auto_increment?: Maybe<Scalars['Boolean']>;
  is_nullable?: Maybe<Scalars['Boolean']>;
  is_primary_key?: Maybe<Scalars['Boolean']>;
  is_unique?: Maybe<Scalars['Boolean']>;
  max_length?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  numeric_precision?: Maybe<Scalars['Int']>;
  numeric_scale?: Maybe<Scalars['Int']>;
  table?: Maybe<Scalars['String']>;
};

export type Directus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['String']>;
  filename_disk?: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: Maybe<Scalars['GraphQLBigInt']>;
  folder?: Maybe<Directus_Folders>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Directus_Users>;
  modified_on?: Maybe<Scalars['Date']>;
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uploaded_by?: Maybe<Directus_Users>;
  uploaded_on?: Maybe<Scalars['Date']>;
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']>;
};


export type Directus_FilesFolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_FilesModified_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Files_Aggregated = {
  __typename?: 'directus_files_aggregated';
  avg?: Maybe<Directus_Files_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Files_Aggregated_Fields>;
  count?: Maybe<Directus_Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Directus_Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Directus_Files_Aggregated_Fields>;
  min?: Maybe<Directus_Files_Aggregated_Fields>;
  sum?: Maybe<Directus_Files_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Files_Aggregated_Fields>;
};

export type Directus_Files_Aggregated_Count = {
  __typename?: 'directus_files_aggregated_count';
  charset?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['Int']>;
  filename_disk?: Maybe<Scalars['Int']>;
  filename_download?: Maybe<Scalars['Int']>;
  filesize?: Maybe<Scalars['Int']>;
  folder?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['Int']>;
  metadata?: Maybe<Scalars['Int']>;
  modified_by?: Maybe<Scalars['Int']>;
  modified_on?: Maybe<Scalars['Int']>;
  storage?: Maybe<Scalars['Int']>;
  tags?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  uploaded_by?: Maybe<Scalars['Int']>;
  uploaded_on?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type Directus_Files_Aggregated_Fields = {
  __typename?: 'directus_files_aggregated_fields';
  duration?: Maybe<Scalars['Float']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<Number_Filter_Operators>;
  folder?: InputMaybe<Directus_Folders_Filter>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<Directus_Users_Filter>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<Directus_Users_Filter>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Flows = {
  __typename?: 'directus_flows';
  accountability?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  operation?: Maybe<Directus_Operations>;
  operations?: Maybe<Array<Maybe<Directus_Operations>>>;
  operations_func?: Maybe<Count_Functions>;
  options?: Maybe<Scalars['JSON']>;
  options_func?: Maybe<Count_Functions>;
  status?: Maybe<Scalars['String']>;
  trigger?: Maybe<Scalars['String']>;
  user_created?: Maybe<Directus_Users>;
};


export type Directus_FlowsOperationArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_FlowsOperationsArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_FlowsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Flows_Aggregated = {
  __typename?: 'directus_flows_aggregated';
  count?: Maybe<Directus_Flows_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Directus_Flows_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
};

export type Directus_Flows_Aggregated_Count = {
  __typename?: 'directus_flows_aggregated_count';
  accountability?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  icon?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  operation?: Maybe<Scalars['Int']>;
  operations?: Maybe<Scalars['Int']>;
  options?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  trigger?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
};

export type Directus_Flows_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Flows_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Flows_Filter>>>;
  accountability?: InputMaybe<String_Filter_Operators>;
  color?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  operation?: InputMaybe<Directus_Operations_Filter>;
  operations?: InputMaybe<Directus_Operations_Filter>;
  operations_func?: InputMaybe<Count_Function_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  trigger?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Folders = {
  __typename?: 'directus_folders';
  id: Scalars['ID'];
  name: Scalars['String'];
  parent?: Maybe<Directus_Folders>;
};


export type Directus_FoldersParentArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Folders_Aggregated = {
  __typename?: 'directus_folders_aggregated';
  count?: Maybe<Directus_Folders_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Directus_Folders_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
};

export type Directus_Folders_Aggregated_Count = {
  __typename?: 'directus_folders_aggregated_count';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['Int']>;
};

export type Directus_Folders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Folders_Filter>;
};

export type Directus_Notifications = {
  __typename?: 'directus_notifications';
  collection?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  item?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  recipient?: Maybe<Directus_Users>;
  sender?: Maybe<Directus_Users>;
  status?: Maybe<Scalars['String']>;
  subject: Scalars['String'];
  timestamp?: Maybe<Scalars['Date']>;
  timestamp_func?: Maybe<Datetime_Functions>;
};


export type Directus_NotificationsRecipientArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_NotificationsSenderArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Notifications_Aggregated = {
  __typename?: 'directus_notifications_aggregated';
  avg?: Maybe<Directus_Notifications_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Notifications_Aggregated_Fields>;
  count?: Maybe<Directus_Notifications_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Directus_Notifications_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Directus_Notifications_Aggregated_Fields>;
  min?: Maybe<Directus_Notifications_Aggregated_Fields>;
  sum?: Maybe<Directus_Notifications_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Notifications_Aggregated_Fields>;
};

export type Directus_Notifications_Aggregated_Count = {
  __typename?: 'directus_notifications_aggregated_count';
  collection?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  item?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['Int']>;
  recipient?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  subject?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['Int']>;
};

export type Directus_Notifications_Aggregated_Fields = {
  __typename?: 'directus_notifications_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Directus_Notifications_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Notifications_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Notifications_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  message?: InputMaybe<String_Filter_Operators>;
  recipient?: InputMaybe<Directus_Users_Filter>;
  sender?: InputMaybe<Directus_Users_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  subject?: InputMaybe<String_Filter_Operators>;
  timestamp?: InputMaybe<Date_Filter_Operators>;
  timestamp_func?: InputMaybe<Datetime_Function_Filter_Operators>;
};

export type Directus_Operations = {
  __typename?: 'directus_operations';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  flow?: Maybe<Directus_Flows>;
  id: Scalars['ID'];
  key: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['JSON']>;
  options_func?: Maybe<Count_Functions>;
  position_x: Scalars['Int'];
  position_y: Scalars['Int'];
  reject?: Maybe<Directus_Operations>;
  resolve?: Maybe<Directus_Operations>;
  type: Scalars['String'];
  user_created?: Maybe<Directus_Users>;
};


export type Directus_OperationsFlowArgs = {
  filter?: InputMaybe<Directus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_OperationsRejectArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_OperationsResolveArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_OperationsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Operations_Aggregated = {
  __typename?: 'directus_operations_aggregated';
  avg?: Maybe<Directus_Operations_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Operations_Aggregated_Fields>;
  count?: Maybe<Directus_Operations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Directus_Operations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Directus_Operations_Aggregated_Fields>;
  min?: Maybe<Directus_Operations_Aggregated_Fields>;
  sum?: Maybe<Directus_Operations_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Operations_Aggregated_Fields>;
};

export type Directus_Operations_Aggregated_Count = {
  __typename?: 'directus_operations_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  flow?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  options?: Maybe<Scalars['Int']>;
  position_x?: Maybe<Scalars['Int']>;
  position_y?: Maybe<Scalars['Int']>;
  reject?: Maybe<Scalars['Int']>;
  resolve?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
};

export type Directus_Operations_Aggregated_Fields = {
  __typename?: 'directus_operations_aggregated_fields';
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
};

export type Directus_Operations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  flow?: InputMaybe<Directus_Flows_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  key?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  position_x?: InputMaybe<Number_Filter_Operators>;
  position_y?: InputMaybe<Number_Filter_Operators>;
  reject?: InputMaybe<Directus_Operations_Filter>;
  resolve?: InputMaybe<Directus_Operations_Filter>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Panels = {
  __typename?: 'directus_panels';
  color?: Maybe<Scalars['String']>;
  dashboard?: Maybe<Directus_Dashboards>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  height: Scalars['Int'];
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['JSON']>;
  options_func?: Maybe<Count_Functions>;
  position_x: Scalars['Int'];
  position_y: Scalars['Int'];
  show_header: Scalars['Boolean'];
  type: Scalars['String'];
  user_created?: Maybe<Directus_Users>;
  width: Scalars['Int'];
};


export type Directus_PanelsDashboardArgs = {
  filter?: InputMaybe<Directus_Dashboards_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_PanelsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Panels_Aggregated = {
  __typename?: 'directus_panels_aggregated';
  avg?: Maybe<Directus_Panels_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Panels_Aggregated_Fields>;
  count?: Maybe<Directus_Panels_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Directus_Panels_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Directus_Panels_Aggregated_Fields>;
  min?: Maybe<Directus_Panels_Aggregated_Fields>;
  sum?: Maybe<Directus_Panels_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Panels_Aggregated_Fields>;
};

export type Directus_Panels_Aggregated_Count = {
  __typename?: 'directus_panels_aggregated_count';
  color?: Maybe<Scalars['Int']>;
  dashboard?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  icon?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['Int']>;
  options?: Maybe<Scalars['Int']>;
  position_x?: Maybe<Scalars['Int']>;
  position_y?: Maybe<Scalars['Int']>;
  show_header?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type Directus_Panels_Aggregated_Fields = {
  __typename?: 'directus_panels_aggregated_fields';
  height?: Maybe<Scalars['Float']>;
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type Directus_Panels_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>;
  color?: InputMaybe<String_Filter_Operators>;
  dashboard?: InputMaybe<Directus_Dashboards_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  note?: InputMaybe<String_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  position_x?: InputMaybe<Number_Filter_Operators>;
  position_y?: InputMaybe<Number_Filter_Operators>;
  show_header?: InputMaybe<Boolean_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Permissions = {
  __typename?: 'directus_permissions';
  action: Scalars['String'];
  collection: Scalars['String'];
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['ID'];
  permissions?: Maybe<Scalars['JSON']>;
  permissions_func?: Maybe<Count_Functions>;
  presets?: Maybe<Scalars['JSON']>;
  presets_func?: Maybe<Count_Functions>;
  role?: Maybe<Directus_Roles>;
  validation?: Maybe<Scalars['JSON']>;
  validation_func?: Maybe<Count_Functions>;
};


export type Directus_PermissionsRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Permissions_Aggregated = {
  __typename?: 'directus_permissions_aggregated';
  avg?: Maybe<Directus_Permissions_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Permissions_Aggregated_Fields>;
  count?: Maybe<Directus_Permissions_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Directus_Permissions_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Directus_Permissions_Aggregated_Fields>;
  min?: Maybe<Directus_Permissions_Aggregated_Fields>;
  sum?: Maybe<Directus_Permissions_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Permissions_Aggregated_Fields>;
};

export type Directus_Permissions_Aggregated_Count = {
  __typename?: 'directus_permissions_aggregated_count';
  action?: Maybe<Scalars['Int']>;
  collection?: Maybe<Scalars['Int']>;
  fields?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  permissions?: Maybe<Scalars['Int']>;
  presets?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  validation?: Maybe<Scalars['Int']>;
};

export type Directus_Permissions_Aggregated_Fields = {
  __typename?: 'directus_permissions_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Directus_Permissions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Permissions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Permissions_Filter>>>;
  action?: InputMaybe<String_Filter_Operators>;
  collection?: InputMaybe<String_Filter_Operators>;
  fields?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  permissions?: InputMaybe<String_Filter_Operators>;
  permissions_func?: InputMaybe<Count_Function_Filter_Operators>;
  presets?: InputMaybe<String_Filter_Operators>;
  presets_func?: InputMaybe<Count_Function_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  validation?: InputMaybe<String_Filter_Operators>;
  validation_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Presets = {
  __typename?: 'directus_presets';
  bookmark?: Maybe<Scalars['String']>;
  collection?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['JSON']>;
  filter_func?: Maybe<Count_Functions>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  layout?: Maybe<Scalars['String']>;
  layout_options?: Maybe<Scalars['JSON']>;
  layout_options_func?: Maybe<Count_Functions>;
  layout_query?: Maybe<Scalars['JSON']>;
  layout_query_func?: Maybe<Count_Functions>;
  refresh_interval?: Maybe<Scalars['Int']>;
  role?: Maybe<Directus_Roles>;
  search?: Maybe<Scalars['String']>;
  user?: Maybe<Directus_Users>;
};


export type Directus_PresetsRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_PresetsUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Presets_Aggregated = {
  __typename?: 'directus_presets_aggregated';
  avg?: Maybe<Directus_Presets_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Presets_Aggregated_Fields>;
  count?: Maybe<Directus_Presets_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Directus_Presets_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Directus_Presets_Aggregated_Fields>;
  min?: Maybe<Directus_Presets_Aggregated_Fields>;
  sum?: Maybe<Directus_Presets_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Presets_Aggregated_Fields>;
};

export type Directus_Presets_Aggregated_Count = {
  __typename?: 'directus_presets_aggregated_count';
  bookmark?: Maybe<Scalars['Int']>;
  collection?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['Int']>;
  icon?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  layout?: Maybe<Scalars['Int']>;
  layout_options?: Maybe<Scalars['Int']>;
  layout_query?: Maybe<Scalars['Int']>;
  refresh_interval?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['Int']>;
};

export type Directus_Presets_Aggregated_Fields = {
  __typename?: 'directus_presets_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  refresh_interval?: Maybe<Scalars['Float']>;
};

export type Directus_Presets_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Presets_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Presets_Filter>>>;
  bookmark?: InputMaybe<String_Filter_Operators>;
  collection?: InputMaybe<String_Filter_Operators>;
  color?: InputMaybe<String_Filter_Operators>;
  filter?: InputMaybe<String_Filter_Operators>;
  filter_func?: InputMaybe<Count_Function_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  layout?: InputMaybe<String_Filter_Operators>;
  layout_options?: InputMaybe<String_Filter_Operators>;
  layout_options_func?: InputMaybe<Count_Function_Filter_Operators>;
  layout_query?: InputMaybe<String_Filter_Operators>;
  layout_query_func?: InputMaybe<Count_Function_Filter_Operators>;
  refresh_interval?: InputMaybe<Number_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  search?: InputMaybe<String_Filter_Operators>;
  user?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Relations = {
  __typename?: 'directus_relations';
  collection?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  meta?: Maybe<Directus_Relations_Meta>;
  related_collection?: Maybe<Scalars['String']>;
  schema?: Maybe<Directus_Relations_Schema>;
};

export type Directus_Relations_Meta = {
  __typename?: 'directus_relations_meta';
  id?: Maybe<Scalars['Int']>;
  junction_field?: Maybe<Scalars['String']>;
  many_collection?: Maybe<Scalars['String']>;
  many_field?: Maybe<Scalars['String']>;
  one_allowed_collections?: Maybe<Array<Maybe<Scalars['String']>>>;
  one_collection?: Maybe<Scalars['String']>;
  one_collection_field?: Maybe<Scalars['String']>;
  one_deselect_action?: Maybe<Scalars['String']>;
  one_field?: Maybe<Scalars['String']>;
  sort_field?: Maybe<Scalars['String']>;
};

export type Directus_Relations_Schema = {
  __typename?: 'directus_relations_schema';
  column: Scalars['String'];
  constraint_name?: Maybe<Scalars['String']>;
  foreign_key_column: Scalars['String'];
  foreign_key_table: Scalars['String'];
  on_delete: Scalars['String'];
  on_update: Scalars['String'];
  table: Scalars['String'];
};

export type Directus_Revisions = {
  __typename?: 'directus_revisions';
  activity?: Maybe<Directus_Activity>;
  collection: Scalars['String'];
  data?: Maybe<Scalars['JSON']>;
  data_func?: Maybe<Count_Functions>;
  delta?: Maybe<Scalars['JSON']>;
  delta_func?: Maybe<Count_Functions>;
  id: Scalars['ID'];
  item: Scalars['String'];
  parent?: Maybe<Directus_Revisions>;
};


export type Directus_RevisionsActivityArgs = {
  filter?: InputMaybe<Directus_Activity_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_RevisionsParentArgs = {
  filter?: InputMaybe<Directus_Revisions_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Revisions_Aggregated = {
  __typename?: 'directus_revisions_aggregated';
  avg?: Maybe<Directus_Revisions_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Revisions_Aggregated_Fields>;
  count?: Maybe<Directus_Revisions_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Directus_Revisions_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Directus_Revisions_Aggregated_Fields>;
  min?: Maybe<Directus_Revisions_Aggregated_Fields>;
  sum?: Maybe<Directus_Revisions_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Revisions_Aggregated_Fields>;
};

export type Directus_Revisions_Aggregated_Count = {
  __typename?: 'directus_revisions_aggregated_count';
  activity?: Maybe<Scalars['Int']>;
  collection?: Maybe<Scalars['Int']>;
  data?: Maybe<Scalars['Int']>;
  delta?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  item?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['Int']>;
};

export type Directus_Revisions_Aggregated_Fields = {
  __typename?: 'directus_revisions_aggregated_fields';
  activity?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent?: Maybe<Scalars['Float']>;
};

export type Directus_Revisions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>;
  activity?: InputMaybe<Directus_Activity_Filter>;
  collection?: InputMaybe<String_Filter_Operators>;
  data?: InputMaybe<String_Filter_Operators>;
  data_func?: InputMaybe<Count_Function_Filter_Operators>;
  delta?: InputMaybe<String_Filter_Operators>;
  delta_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Revisions_Filter>;
};

export type Directus_Roles = {
  __typename?: 'directus_roles';
  admin_access: Scalars['Boolean'];
  app_access?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  enforce_tfa: Scalars['Boolean'];
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ip_access?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  users?: Maybe<Array<Maybe<Directus_Users>>>;
  users_func?: Maybe<Count_Functions>;
};


export type Directus_RolesUsersArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Roles_Aggregated = {
  __typename?: 'directus_roles_aggregated';
  count?: Maybe<Directus_Roles_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Directus_Roles_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
};

export type Directus_Roles_Aggregated_Count = {
  __typename?: 'directus_roles_aggregated_count';
  admin_access?: Maybe<Scalars['Int']>;
  app_access?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  enforce_tfa?: Maybe<Scalars['Int']>;
  icon?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  ip_access?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  users?: Maybe<Scalars['Int']>;
};

export type Directus_Roles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  admin_access?: InputMaybe<Boolean_Filter_Operators>;
  app_access?: InputMaybe<Boolean_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  enforce_tfa?: InputMaybe<Boolean_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  ip_access?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  users?: InputMaybe<Directus_Users_Filter>;
  users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Settings = {
  __typename?: 'directus_settings';
  auth_login_attempts?: Maybe<Scalars['Int']>;
  auth_password_policy?: Maybe<Scalars['String']>;
  basemaps?: Maybe<Scalars['JSON']>;
  basemaps_func?: Maybe<Count_Functions>;
  custom_aspect_ratios?: Maybe<Scalars['JSON']>;
  custom_aspect_ratios_func?: Maybe<Count_Functions>;
  custom_css?: Maybe<Scalars['String']>;
  default_language?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mapbox_key?: Maybe<Scalars['String']>;
  module_bar?: Maybe<Scalars['JSON']>;
  module_bar_func?: Maybe<Count_Functions>;
  /** $t:field_options.directus_settings.project_color_note */
  project_color?: Maybe<Scalars['String']>;
  project_descriptor?: Maybe<Scalars['String']>;
  project_logo?: Maybe<Directus_Files>;
  project_name?: Maybe<Scalars['String']>;
  project_url?: Maybe<Scalars['String']>;
  public_background?: Maybe<Directus_Files>;
  public_foreground?: Maybe<Directus_Files>;
  public_note?: Maybe<Scalars['String']>;
  storage_asset_presets?: Maybe<Scalars['JSON']>;
  storage_asset_presets_func?: Maybe<Count_Functions>;
  storage_asset_transform?: Maybe<Scalars['String']>;
  storage_default_folder?: Maybe<Directus_Folders>;
  translation_strings?: Maybe<Scalars['JSON']>;
  translation_strings_func?: Maybe<Count_Functions>;
};


export type Directus_SettingsProject_LogoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_SettingsPublic_BackgroundArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_SettingsPublic_ForegroundArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_SettingsStorage_Default_FolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Shares = {
  __typename?: 'directus_shares';
  collection?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  date_end?: Maybe<Scalars['Date']>;
  date_end_func?: Maybe<Datetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  date_start?: Maybe<Scalars['Date']>;
  date_start_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  item?: Maybe<Scalars['String']>;
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  /** $t:shared_leave_blank_for_unlimited */
  password?: Maybe<Scalars['Hash']>;
  role?: Maybe<Directus_Roles>;
  times_used?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Directus_Users>;
};


export type Directus_SharesRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_SharesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Shares_Aggregated = {
  __typename?: 'directus_shares_aggregated';
  avg?: Maybe<Directus_Shares_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Shares_Aggregated_Fields>;
  count?: Maybe<Directus_Shares_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Directus_Shares_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Directus_Shares_Aggregated_Fields>;
  min?: Maybe<Directus_Shares_Aggregated_Fields>;
  sum?: Maybe<Directus_Shares_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Shares_Aggregated_Fields>;
};

export type Directus_Shares_Aggregated_Count = {
  __typename?: 'directus_shares_aggregated_count';
  collection?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  /** $t:shared_leave_blank_for_unlimited */
  date_end?: Maybe<Scalars['Int']>;
  /** $t:shared_leave_blank_for_unlimited */
  date_start?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  item?: Maybe<Scalars['Int']>;
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  /** $t:shared_leave_blank_for_unlimited */
  password?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  times_used?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
};

export type Directus_Shares_Aggregated_Fields = {
  __typename?: 'directus_shares_aggregated_fields';
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: Maybe<Scalars['Float']>;
  times_used?: Maybe<Scalars['Float']>;
};

export type Directus_Shares_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Shares_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Shares_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_end?: InputMaybe<Date_Filter_Operators>;
  date_end_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_start?: InputMaybe<Date_Filter_Operators>;
  date_start_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  max_uses?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  password?: InputMaybe<Hash_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  times_used?: InputMaybe<Number_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Users = {
  __typename?: 'directus_users';
  auth_data?: Maybe<Scalars['JSON']>;
  auth_data_func?: Maybe<Count_Functions>;
  avatar?: Maybe<Directus_Files>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_notifications?: Maybe<Scalars['Boolean']>;
  external_identifier?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  last_access?: Maybe<Scalars['Date']>;
  last_access_func?: Maybe<Datetime_Functions>;
  last_name?: Maybe<Scalars['String']>;
  last_page?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['Hash']>;
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<Directus_Roles>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<Count_Functions>;
  tfa_secret?: Maybe<Scalars['Hash']>;
  theme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['Hash']>;
  username?: Maybe<Scalars['String']>;
};


export type Directus_UsersAvatarArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_UsersRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Users_Aggregated = {
  __typename?: 'directus_users_aggregated';
  count?: Maybe<Directus_Users_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Directus_Users_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
};

export type Directus_Users_Aggregated_Count = {
  __typename?: 'directus_users_aggregated_count';
  auth_data?: Maybe<Scalars['Int']>;
  avatar?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  email_notifications?: Maybe<Scalars['Int']>;
  external_identifier?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['Int']>;
  last_access?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['Int']>;
  last_page?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['Int']>;
  provider?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  tags?: Maybe<Scalars['Int']>;
  tfa_secret?: Maybe<Scalars['Int']>;
  theme?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['Int']>;
};

export type Directus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  auth_data?: InputMaybe<String_Filter_Operators>;
  auth_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  avatar?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  email_notifications?: InputMaybe<Boolean_Filter_Operators>;
  external_identifier?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  language?: InputMaybe<String_Filter_Operators>;
  last_access?: InputMaybe<Date_Filter_Operators>;
  last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  last_page?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  password?: InputMaybe<Hash_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  tfa_secret?: InputMaybe<Hash_Filter_Operators>;
  theme?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  token?: InputMaybe<Hash_Filter_Operators>;
  username?: InputMaybe<String_Filter_Operators>;
};

export type Directus_Webhooks = {
  __typename?: 'directus_webhooks';
  actions: Array<Maybe<Scalars['String']>>;
  collections: Array<Maybe<Scalars['String']>>;
  data?: Maybe<Scalars['Boolean']>;
  headers?: Maybe<Scalars['JSON']>;
  headers_func?: Maybe<Count_Functions>;
  id: Scalars['ID'];
  method?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type Directus_Webhooks_Aggregated = {
  __typename?: 'directus_webhooks_aggregated';
  avg?: Maybe<Directus_Webhooks_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Webhooks_Aggregated_Fields>;
  count?: Maybe<Directus_Webhooks_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Directus_Webhooks_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Directus_Webhooks_Aggregated_Fields>;
  min?: Maybe<Directus_Webhooks_Aggregated_Fields>;
  sum?: Maybe<Directus_Webhooks_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Webhooks_Aggregated_Fields>;
};

export type Directus_Webhooks_Aggregated_Count = {
  __typename?: 'directus_webhooks_aggregated_count';
  actions?: Maybe<Scalars['Int']>;
  collections?: Maybe<Scalars['Int']>;
  data?: Maybe<Scalars['Int']>;
  headers?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  method?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['Int']>;
};

export type Directus_Webhooks_Aggregated_Fields = {
  __typename?: 'directus_webhooks_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Directus_Webhooks_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Webhooks_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Webhooks_Filter>>>;
  actions?: InputMaybe<String_Filter_Operators>;
  collections?: InputMaybe<String_Filter_Operators>;
  data?: InputMaybe<Boolean_Filter_Operators>;
  headers?: InputMaybe<String_Filter_Operators>;
  headers_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  method?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  url?: InputMaybe<String_Filter_Operators>;
};

export type Extensions = {
  __typename?: 'extensions';
  displays?: Maybe<Array<Maybe<Scalars['String']>>>;
  interfaces?: Maybe<Array<Maybe<Scalars['String']>>>;
  layouts?: Maybe<Array<Maybe<Scalars['String']>>>;
  modules?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum Graphql_Sdl_Scope {
  Items = 'items',
  System = 'system'
}

export type Hash_Filter_Operators = {
  _empty?: InputMaybe<Scalars['Boolean']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Recipes = {
  __typename?: 'recipes';
  author?: Maybe<Directus_Users>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  image?: Maybe<Directus_Files>;
  ingredients?: Maybe<Scalars['JSON']>;
  ingredients_func?: Maybe<Count_Functions>;
  notes?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  steps?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Recipes_Tags>>>;
  tags_func?: Maybe<Count_Functions>;
  time?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type RecipesAuthorArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RecipesImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RecipesTagsArgs = {
  filter?: InputMaybe<Recipes_Tags_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Recipes_Aggregated = {
  __typename?: 'recipes_aggregated';
  avg?: Maybe<Recipes_Aggregated_Fields>;
  avgDistinct?: Maybe<Recipes_Aggregated_Fields>;
  count?: Maybe<Recipes_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Recipes_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Recipes_Aggregated_Fields>;
  min?: Maybe<Recipes_Aggregated_Fields>;
  sum?: Maybe<Recipes_Aggregated_Fields>;
  sumDistinct?: Maybe<Recipes_Aggregated_Fields>;
};

export type Recipes_Aggregated_Count = {
  __typename?: 'recipes_aggregated_count';
  author?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['Int']>;
  ingredients?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  steps?: Maybe<Scalars['Int']>;
  tags?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
};

export type Recipes_Aggregated_Fields = {
  __typename?: 'recipes_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Float']>;
};

export type Recipes_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Recipes_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Recipes_Filter>>>;
  author?: InputMaybe<Directus_Users_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  ingredients?: InputMaybe<String_Filter_Operators>;
  ingredients_func?: InputMaybe<Count_Function_Filter_Operators>;
  notes?: InputMaybe<String_Filter_Operators>;
  quantity?: InputMaybe<Number_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  steps?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<Recipes_Tags_Filter>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  time?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Recipes_Tags = {
  __typename?: 'recipes_tags';
  id: Scalars['ID'];
  recipes_id?: Maybe<Recipes>;
  tags_id?: Maybe<Tags>;
};


export type Recipes_TagsRecipes_IdArgs = {
  filter?: InputMaybe<Recipes_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Recipes_TagsTags_IdArgs = {
  filter?: InputMaybe<Tags_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Recipes_Tags_Aggregated = {
  __typename?: 'recipes_tags_aggregated';
  avg?: Maybe<Recipes_Tags_Aggregated_Fields>;
  avgDistinct?: Maybe<Recipes_Tags_Aggregated_Fields>;
  count?: Maybe<Recipes_Tags_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Recipes_Tags_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Recipes_Tags_Aggregated_Fields>;
  min?: Maybe<Recipes_Tags_Aggregated_Fields>;
  sum?: Maybe<Recipes_Tags_Aggregated_Fields>;
  sumDistinct?: Maybe<Recipes_Tags_Aggregated_Fields>;
};

export type Recipes_Tags_Aggregated_Count = {
  __typename?: 'recipes_tags_aggregated_count';
  id?: Maybe<Scalars['Int']>;
  recipes_id?: Maybe<Scalars['Int']>;
  tags_id?: Maybe<Scalars['Int']>;
};

export type Recipes_Tags_Aggregated_Fields = {
  __typename?: 'recipes_tags_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  recipes_id?: Maybe<Scalars['Float']>;
  tags_id?: Maybe<Scalars['Float']>;
};

export type Recipes_Tags_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Recipes_Tags_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Recipes_Tags_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  recipes_id?: InputMaybe<Recipes_Filter>;
  tags_id?: InputMaybe<Tags_Filter>;
};

export type Server_Info = {
  __typename?: 'server_info';
  custom_css?: Maybe<Scalars['String']>;
  project_background?: Maybe<Scalars['String']>;
  project_color?: Maybe<Scalars['String']>;
  project_foreground?: Maybe<Scalars['String']>;
  project_logo?: Maybe<Scalars['String']>;
  project_name?: Maybe<Scalars['String']>;
  project_note?: Maybe<Scalars['String']>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _icontains?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['String']>;
};

export type Tags = {
  __typename?: 'tags';
  id: Scalars['ID'];
  recipes?: Maybe<Array<Maybe<Recipes_Tags>>>;
  recipes_func?: Maybe<Count_Functions>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type TagsRecipesArgs = {
  filter?: InputMaybe<Recipes_Tags_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Tags_Aggregated = {
  __typename?: 'tags_aggregated';
  avg?: Maybe<Tags_Aggregated_Fields>;
  avgDistinct?: Maybe<Tags_Aggregated_Fields>;
  count?: Maybe<Tags_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Tags_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Tags_Aggregated_Fields>;
  min?: Maybe<Tags_Aggregated_Fields>;
  sum?: Maybe<Tags_Aggregated_Fields>;
  sumDistinct?: Maybe<Tags_Aggregated_Fields>;
};

export type Tags_Aggregated_Count = {
  __typename?: 'tags_aggregated_count';
  id?: Maybe<Scalars['Int']>;
  recipes?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
};

export type Tags_Aggregated_Fields = {
  __typename?: 'tags_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Tags_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Tags_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Tags_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  recipes?: InputMaybe<Recipes_Tags_Filter>;
  recipes_func?: InputMaybe<Count_Function_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Update_Directus_Dashboards_Input = {
  color?: InputMaybe<Scalars['String']>;
  date_created?: InputMaybe<Scalars['Date']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  panels?: InputMaybe<Array<InputMaybe<Update_Directus_Panels_Input>>>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  embed?: InputMaybe<Scalars['String']>;
  filename_disk?: InputMaybe<Scalars['String']>;
  filename_download?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['GraphQLBigInt']>;
  folder?: InputMaybe<Update_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  modified_by?: InputMaybe<Update_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['Date']>;
  storage?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uploaded_by?: InputMaybe<Update_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['Date']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Update_Directus_Flows_Input = {
  accountability?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  date_created?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  operation?: InputMaybe<Update_Directus_Operations_Input>;
  operations?: InputMaybe<Array<InputMaybe<Update_Directus_Operations_Input>>>;
  options?: InputMaybe<Scalars['JSON']>;
  status?: InputMaybe<Scalars['String']>;
  trigger?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Update_Directus_Folders_Input>;
};

export type Update_Directus_Notifications_Input = {
  collection?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  item?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  recipient?: InputMaybe<Update_Directus_Users_Input>;
  sender?: InputMaybe<Update_Directus_Users_Input>;
  status?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Date']>;
};

export type Update_Directus_Operations_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  flow?: InputMaybe<Update_Directus_Flows_Input>;
  id?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Scalars['JSON']>;
  position_x?: InputMaybe<Scalars['Int']>;
  position_y?: InputMaybe<Scalars['Int']>;
  reject?: InputMaybe<Update_Directus_Operations_Input>;
  resolve?: InputMaybe<Update_Directus_Operations_Input>;
  type?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Directus_Panels_Input = {
  color?: InputMaybe<Scalars['String']>;
  dashboard?: InputMaybe<Update_Directus_Dashboards_Input>;
  date_created?: InputMaybe<Scalars['Date']>;
  height?: InputMaybe<Scalars['Int']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Scalars['JSON']>;
  position_x?: InputMaybe<Scalars['Int']>;
  position_y?: InputMaybe<Scalars['Int']>;
  show_header?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Update_Directus_Permissions_Input = {
  action?: InputMaybe<Scalars['String']>;
  collection?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['ID']>;
  permissions?: InputMaybe<Scalars['JSON']>;
  presets?: InputMaybe<Scalars['JSON']>;
  role?: InputMaybe<Update_Directus_Roles_Input>;
  validation?: InputMaybe<Scalars['JSON']>;
};

export type Update_Directus_Presets_Input = {
  bookmark?: InputMaybe<Scalars['String']>;
  collection?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['JSON']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  layout?: InputMaybe<Scalars['String']>;
  layout_options?: InputMaybe<Scalars['JSON']>;
  layout_query?: InputMaybe<Scalars['JSON']>;
  refresh_interval?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<Update_Directus_Roles_Input>;
  search?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Directus_Roles_Input = {
  admin_access?: InputMaybe<Scalars['Boolean']>;
  app_access?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  enforce_tfa?: InputMaybe<Scalars['Boolean']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Update_Directus_Users_Input>>>;
};

export type Update_Directus_Settings_Input = {
  auth_login_attempts?: InputMaybe<Scalars['Int']>;
  auth_password_policy?: InputMaybe<Scalars['String']>;
  basemaps?: InputMaybe<Scalars['JSON']>;
  custom_aspect_ratios?: InputMaybe<Scalars['JSON']>;
  custom_css?: InputMaybe<Scalars['String']>;
  default_language?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  mapbox_key?: InputMaybe<Scalars['String']>;
  module_bar?: InputMaybe<Scalars['JSON']>;
  /** $t:field_options.directus_settings.project_color_note */
  project_color?: InputMaybe<Scalars['String']>;
  project_descriptor?: InputMaybe<Scalars['String']>;
  project_logo?: InputMaybe<Update_Directus_Files_Input>;
  project_name?: InputMaybe<Scalars['String']>;
  project_url?: InputMaybe<Scalars['String']>;
  public_background?: InputMaybe<Update_Directus_Files_Input>;
  public_foreground?: InputMaybe<Update_Directus_Files_Input>;
  public_note?: InputMaybe<Scalars['String']>;
  storage_asset_presets?: InputMaybe<Scalars['JSON']>;
  storage_asset_transform?: InputMaybe<Scalars['String']>;
  storage_default_folder?: InputMaybe<Update_Directus_Folders_Input>;
  translation_strings?: InputMaybe<Scalars['JSON']>;
};

export type Update_Directus_Shares_Input = {
  collection?: InputMaybe<Scalars['String']>;
  date_created?: InputMaybe<Scalars['Date']>;
  /** $t:shared_leave_blank_for_unlimited */
  date_end?: InputMaybe<Scalars['Date']>;
  /** $t:shared_leave_blank_for_unlimited */
  date_start?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  item?: InputMaybe<Scalars['String']>;
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  /** $t:shared_leave_blank_for_unlimited */
  password?: InputMaybe<Scalars['Hash']>;
  role?: InputMaybe<Update_Directus_Roles_Input>;
  times_used?: InputMaybe<Scalars['Int']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Directus_Users_Input = {
  auth_data?: InputMaybe<Scalars['JSON']>;
  avatar?: InputMaybe<Update_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_notifications?: InputMaybe<Scalars['Boolean']>;
  external_identifier?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  last_access?: InputMaybe<Scalars['Date']>;
  last_name?: InputMaybe<Scalars['String']>;
  last_page?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['Hash']>;
  provider?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Update_Directus_Roles_Input>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  tfa_secret?: InputMaybe<Scalars['Hash']>;
  theme?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['Hash']>;
  username?: InputMaybe<Scalars['String']>;
};

export type Update_Directus_Webhooks_Input = {
  actions?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  data?: InputMaybe<Scalars['Boolean']>;
  headers?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  method?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Update_Recipes_Input = {
  author?: InputMaybe<Update_Directus_Users_Input>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Update_Directus_Files_Input>;
  ingredients?: InputMaybe<Scalars['JSON']>;
  notes?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  steps?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Update_Recipes_Tags_Input>>>;
  time?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Update_Recipes_Tags_Input = {
  id?: InputMaybe<Scalars['ID']>;
  recipes_id?: InputMaybe<Update_Recipes_Input>;
  tags_id?: InputMaybe<Update_Tags_Input>;
};

export type Update_Tags_Input = {
  id?: InputMaybe<Scalars['ID']>;
  recipes?: InputMaybe<Array<InputMaybe<Update_Recipes_Tags_Input>>>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Update_Users_Favorite_Recipes_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  recipe?: InputMaybe<Update_Recipes_Input>;
  user?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Users_Viewed_Recipes_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  recipe?: InputMaybe<Update_Recipes_Input>;
  user?: InputMaybe<Update_Directus_Users_Input>;
};

export type Users_Favorite_Recipes = {
  __typename?: 'users_favorite_recipes';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  recipe?: Maybe<Recipes>;
  user?: Maybe<Directus_Users>;
};


export type Users_Favorite_RecipesRecipeArgs = {
  filter?: InputMaybe<Recipes_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Users_Favorite_RecipesUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Users_Favorite_Recipes_Aggregated = {
  __typename?: 'users_favorite_recipes_aggregated';
  avg?: Maybe<Users_Favorite_Recipes_Aggregated_Fields>;
  avgDistinct?: Maybe<Users_Favorite_Recipes_Aggregated_Fields>;
  count?: Maybe<Users_Favorite_Recipes_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Users_Favorite_Recipes_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Users_Favorite_Recipes_Aggregated_Fields>;
  min?: Maybe<Users_Favorite_Recipes_Aggregated_Fields>;
  sum?: Maybe<Users_Favorite_Recipes_Aggregated_Fields>;
  sumDistinct?: Maybe<Users_Favorite_Recipes_Aggregated_Fields>;
};

export type Users_Favorite_Recipes_Aggregated_Count = {
  __typename?: 'users_favorite_recipes_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  recipe?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['Int']>;
};

export type Users_Favorite_Recipes_Aggregated_Fields = {
  __typename?: 'users_favorite_recipes_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  recipe?: Maybe<Scalars['Float']>;
};

export type Users_Favorite_Recipes_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Users_Favorite_Recipes_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Users_Favorite_Recipes_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  recipe?: InputMaybe<Recipes_Filter>;
  user?: InputMaybe<Directus_Users_Filter>;
};

export type Users_Me_Tfa_Generate_Data = {
  __typename?: 'users_me_tfa_generate_data';
  otpauth_url?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
};

export type Users_Viewed_Recipes = {
  __typename?: 'users_viewed_recipes';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  recipe?: Maybe<Recipes>;
  user?: Maybe<Directus_Users>;
};


export type Users_Viewed_RecipesRecipeArgs = {
  filter?: InputMaybe<Recipes_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Users_Viewed_RecipesUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Users_Viewed_Recipes_Aggregated = {
  __typename?: 'users_viewed_recipes_aggregated';
  avg?: Maybe<Users_Viewed_Recipes_Aggregated_Fields>;
  avgDistinct?: Maybe<Users_Viewed_Recipes_Aggregated_Fields>;
  count?: Maybe<Users_Viewed_Recipes_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Users_Viewed_Recipes_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Users_Viewed_Recipes_Aggregated_Fields>;
  min?: Maybe<Users_Viewed_Recipes_Aggregated_Fields>;
  sum?: Maybe<Users_Viewed_Recipes_Aggregated_Fields>;
  sumDistinct?: Maybe<Users_Viewed_Recipes_Aggregated_Fields>;
};

export type Users_Viewed_Recipes_Aggregated_Count = {
  __typename?: 'users_viewed_recipes_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  recipe?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['Int']>;
};

export type Users_Viewed_Recipes_Aggregated_Fields = {
  __typename?: 'users_viewed_recipes_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  recipe?: Maybe<Scalars['Float']>;
};

export type Users_Viewed_Recipes_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Users_Viewed_Recipes_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Users_Viewed_Recipes_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  recipe?: InputMaybe<Recipes_Filter>;
  user?: InputMaybe<Directus_Users_Filter>;
};

export type ExploreQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  filter?: InputMaybe<Recipes_Filter>;
}>;


export type ExploreQuery = { __typename?: 'Query', recipes: Array<(
    { __typename?: 'recipes' }
    & { ' $fragmentRefs'?: { 'RecipeCardFragment': RecipeCardFragment } }
  )>, recipes_aggregated: Array<{ __typename?: 'recipes_aggregated', count?: { __typename?: 'recipes_aggregated_count', id?: number | null } | null }> };

export type RefreshMutationVariables = Exact<{
  refresh_token: Scalars['String'];
}>;


export type RefreshMutation = { __typename?: 'Mutation', auth_refresh?: { __typename?: 'auth_tokens', access_token?: string | null, refresh_token?: string | null, expires?: number | null } | null };

export type ImageFragment = { __typename?: 'directus_files', id: string, filename_disk?: string | null, storage: string } & { ' $fragmentName'?: 'ImageFragment' };

export type RecipeCardFragment = { __typename?: 'recipes', id: string, title?: string | null, slug?: string | null, time?: number | null, quantity?: number | null, image?: (
    { __typename?: 'directus_files' }
    & { ' $fragmentRefs'?: { 'ImageFragment': ImageFragment } }
  ) | null, author?: { __typename?: 'directus_users', id: string, username?: string | null } | null } & { ' $fragmentName'?: 'RecipeCardFragment' };

export type RecipeFragmentFragment = { __typename?: 'recipes', id: string, title?: string | null, slug?: string | null, time?: number | null, quantity?: number | null, steps?: string | null, notes?: string | null, ingredients?: any | null, author?: { __typename?: 'directus_users', id: string, username?: string | null } | null, tags?: Array<{ __typename?: 'recipes_tags', id: string, tags_id?: { __typename?: 'tags', id: string, title?: string | null, slug?: string | null } | null } | null> | null, image?: (
    { __typename?: 'directus_files' }
    & { ' $fragmentRefs'?: { 'ImageFragment': ImageFragment } }
  ) | null } & { ' $fragmentName'?: 'RecipeFragmentFragment' };

export type CurrentUserFragment = { __typename?: 'directus_users', id: string, email?: string | null, username?: string | null, avatar?: (
    { __typename?: 'directus_files' }
    & { ' $fragmentRefs'?: { 'ImageFragment': ImageFragment } }
  ) | null } & { ' $fragmentName'?: 'CurrentUserFragment' };

export const ImageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_disk"}},{"kind":"Field","name":{"kind":"Name","value":"storage"}}]}}]} as unknown as DocumentNode<ImageFragment, unknown>;
export const RecipeCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecipeCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"recipes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}},...ImageFragmentDoc.definitions]} as unknown as DocumentNode<RecipeCardFragment, unknown>;
export const RecipeFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecipeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"recipes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"steps"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tags_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}}]}},...ImageFragmentDoc.definitions]} as unknown as DocumentNode<RecipeFragmentFragment, unknown>;
export const CurrentUserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CurrentUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}}]}},...ImageFragmentDoc.definitions]} as unknown as DocumentNode<CurrentUserFragment, unknown>;
export const ExploreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"explore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"recipes_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecipeCard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recipes_aggregated"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},...RecipeCardFragmentDoc.definitions]} as unknown as DocumentNode<ExploreQuery, ExploreQueryVariables>;
export const RefreshDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"refresh"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refresh_token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth_refresh"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refresh_token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refresh_token"}}},{"kind":"Argument","name":{"kind":"Name","value":"mode"},"value":{"kind":"EnumValue","value":"json"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"}},{"kind":"Field","name":{"kind":"Name","value":"refresh_token"}},{"kind":"Field","name":{"kind":"Name","value":"expires"}}]}}]}}]} as unknown as DocumentNode<RefreshMutation, RefreshMutationVariables>;