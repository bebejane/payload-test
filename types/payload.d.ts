type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
};

type Access = {
  __typename?: 'Access';
  authors?: Maybe<authorsAccess>;
  canAccessAdmin: Scalars['Boolean']['output'];
  folder?: Maybe<folderAccess>;
  home?: Maybe<homeAccess>;
  media?: Maybe<mediaAccess>;
  payload_kv?: Maybe<payload_kvAccess>;
  payload_locked_documents?: Maybe<payload_locked_documentsAccess>;
  payload_preferences?: Maybe<payload_preferencesAccess>;
  posts?: Maybe<postsAccess>;
  users?: Maybe<usersAccess>;
};

type Author = {
  __typename?: 'Author';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  i18n?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

type Author_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type Author_i18n_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Author_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Author_name_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Author_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type Author_where = {
  AND?: InputMaybe<Array<InputMaybe<Author_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Author_where_or>>>;
  createdAt?: InputMaybe<Author_createdAt_operator>;
  i18n?: InputMaybe<Author_i18n_operator>;
  id?: InputMaybe<Author_id_operator>;
  name?: InputMaybe<Author_name_operator>;
  updatedAt?: InputMaybe<Author_updatedAt_operator>;
};

type Author_where_and = {
  AND?: InputMaybe<Array<InputMaybe<Author_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Author_where_or>>>;
  createdAt?: InputMaybe<Author_createdAt_operator>;
  i18n?: InputMaybe<Author_i18n_operator>;
  id?: InputMaybe<Author_id_operator>;
  name?: InputMaybe<Author_name_operator>;
  updatedAt?: InputMaybe<Author_updatedAt_operator>;
};

type Author_where_or = {
  AND?: InputMaybe<Array<InputMaybe<Author_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Author_where_or>>>;
  createdAt?: InputMaybe<Author_createdAt_operator>;
  i18n?: InputMaybe<Author_i18n_operator>;
  id?: InputMaybe<Author_id_operator>;
  name?: InputMaybe<Author_name_operator>;
  updatedAt?: InputMaybe<Author_updatedAt_operator>;
};

type Authors = {
  __typename?: 'Authors';
  docs: Array<Author>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

type AuthorsCreateAccess = {
  __typename?: 'AuthorsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type AuthorsCreateDocAccess = {
  __typename?: 'AuthorsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type AuthorsDeleteAccess = {
  __typename?: 'AuthorsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type AuthorsDeleteDocAccess = {
  __typename?: 'AuthorsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type AuthorsDocAccessFields = {
  __typename?: 'AuthorsDocAccessFields';
  createdAt?: Maybe<AuthorsDocAccessFields_createdAt>;
  i18n?: Maybe<AuthorsDocAccessFields_i18n>;
  name?: Maybe<AuthorsDocAccessFields_name>;
  updatedAt?: Maybe<AuthorsDocAccessFields_updatedAt>;
};

type AuthorsDocAccessFields_createdAt = {
  __typename?: 'AuthorsDocAccessFields_createdAt';
  create?: Maybe<AuthorsDocAccessFields_createdAt_Create>;
  delete?: Maybe<AuthorsDocAccessFields_createdAt_Delete>;
  read?: Maybe<AuthorsDocAccessFields_createdAt_Read>;
  update?: Maybe<AuthorsDocAccessFields_createdAt_Update>;
};

type AuthorsDocAccessFields_createdAt_Create = {
  __typename?: 'AuthorsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

type AuthorsDocAccessFields_createdAt_Delete = {
  __typename?: 'AuthorsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type AuthorsDocAccessFields_createdAt_Read = {
  __typename?: 'AuthorsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

type AuthorsDocAccessFields_createdAt_Update = {
  __typename?: 'AuthorsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

type AuthorsDocAccessFields_i18n = {
  __typename?: 'AuthorsDocAccessFields_i18n';
  create?: Maybe<AuthorsDocAccessFields_i18n_Create>;
  delete?: Maybe<AuthorsDocAccessFields_i18n_Delete>;
  read?: Maybe<AuthorsDocAccessFields_i18n_Read>;
  update?: Maybe<AuthorsDocAccessFields_i18n_Update>;
};

type AuthorsDocAccessFields_i18n_Create = {
  __typename?: 'AuthorsDocAccessFields_i18n_Create';
  permission: Scalars['Boolean']['output'];
};

type AuthorsDocAccessFields_i18n_Delete = {
  __typename?: 'AuthorsDocAccessFields_i18n_Delete';
  permission: Scalars['Boolean']['output'];
};

type AuthorsDocAccessFields_i18n_Read = {
  __typename?: 'AuthorsDocAccessFields_i18n_Read';
  permission: Scalars['Boolean']['output'];
};

type AuthorsDocAccessFields_i18n_Update = {
  __typename?: 'AuthorsDocAccessFields_i18n_Update';
  permission: Scalars['Boolean']['output'];
};

type AuthorsDocAccessFields_name = {
  __typename?: 'AuthorsDocAccessFields_name';
  create?: Maybe<AuthorsDocAccessFields_name_Create>;
  delete?: Maybe<AuthorsDocAccessFields_name_Delete>;
  read?: Maybe<AuthorsDocAccessFields_name_Read>;
  update?: Maybe<AuthorsDocAccessFields_name_Update>;
};

type AuthorsDocAccessFields_name_Create = {
  __typename?: 'AuthorsDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

type AuthorsDocAccessFields_name_Delete = {
  __typename?: 'AuthorsDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

type AuthorsDocAccessFields_name_Read = {
  __typename?: 'AuthorsDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

type AuthorsDocAccessFields_name_Update = {
  __typename?: 'AuthorsDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

type AuthorsDocAccessFields_updatedAt = {
  __typename?: 'AuthorsDocAccessFields_updatedAt';
  create?: Maybe<AuthorsDocAccessFields_updatedAt_Create>;
  delete?: Maybe<AuthorsDocAccessFields_updatedAt_Delete>;
  read?: Maybe<AuthorsDocAccessFields_updatedAt_Read>;
  update?: Maybe<AuthorsDocAccessFields_updatedAt_Update>;
};

type AuthorsDocAccessFields_updatedAt_Create = {
  __typename?: 'AuthorsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

type AuthorsDocAccessFields_updatedAt_Delete = {
  __typename?: 'AuthorsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type AuthorsDocAccessFields_updatedAt_Read = {
  __typename?: 'AuthorsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

type AuthorsDocAccessFields_updatedAt_Update = {
  __typename?: 'AuthorsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

type AuthorsFields = {
  __typename?: 'AuthorsFields';
  createdAt?: Maybe<AuthorsFields_createdAt>;
  i18n?: Maybe<AuthorsFields_i18n>;
  name?: Maybe<AuthorsFields_name>;
  updatedAt?: Maybe<AuthorsFields_updatedAt>;
};

type AuthorsFields_createdAt = {
  __typename?: 'AuthorsFields_createdAt';
  create?: Maybe<AuthorsFields_createdAt_Create>;
  delete?: Maybe<AuthorsFields_createdAt_Delete>;
  read?: Maybe<AuthorsFields_createdAt_Read>;
  update?: Maybe<AuthorsFields_createdAt_Update>;
};

type AuthorsFields_createdAt_Create = {
  __typename?: 'AuthorsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

type AuthorsFields_createdAt_Delete = {
  __typename?: 'AuthorsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type AuthorsFields_createdAt_Read = {
  __typename?: 'AuthorsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

type AuthorsFields_createdAt_Update = {
  __typename?: 'AuthorsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

type AuthorsFields_i18n = {
  __typename?: 'AuthorsFields_i18n';
  create?: Maybe<AuthorsFields_i18n_Create>;
  delete?: Maybe<AuthorsFields_i18n_Delete>;
  read?: Maybe<AuthorsFields_i18n_Read>;
  update?: Maybe<AuthorsFields_i18n_Update>;
};

type AuthorsFields_i18n_Create = {
  __typename?: 'AuthorsFields_i18n_Create';
  permission: Scalars['Boolean']['output'];
};

type AuthorsFields_i18n_Delete = {
  __typename?: 'AuthorsFields_i18n_Delete';
  permission: Scalars['Boolean']['output'];
};

type AuthorsFields_i18n_Read = {
  __typename?: 'AuthorsFields_i18n_Read';
  permission: Scalars['Boolean']['output'];
};

type AuthorsFields_i18n_Update = {
  __typename?: 'AuthorsFields_i18n_Update';
  permission: Scalars['Boolean']['output'];
};

type AuthorsFields_name = {
  __typename?: 'AuthorsFields_name';
  create?: Maybe<AuthorsFields_name_Create>;
  delete?: Maybe<AuthorsFields_name_Delete>;
  read?: Maybe<AuthorsFields_name_Read>;
  update?: Maybe<AuthorsFields_name_Update>;
};

type AuthorsFields_name_Create = {
  __typename?: 'AuthorsFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

type AuthorsFields_name_Delete = {
  __typename?: 'AuthorsFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

type AuthorsFields_name_Read = {
  __typename?: 'AuthorsFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

type AuthorsFields_name_Update = {
  __typename?: 'AuthorsFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

type AuthorsFields_updatedAt = {
  __typename?: 'AuthorsFields_updatedAt';
  create?: Maybe<AuthorsFields_updatedAt_Create>;
  delete?: Maybe<AuthorsFields_updatedAt_Delete>;
  read?: Maybe<AuthorsFields_updatedAt_Read>;
  update?: Maybe<AuthorsFields_updatedAt_Update>;
};

type AuthorsFields_updatedAt_Create = {
  __typename?: 'AuthorsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

type AuthorsFields_updatedAt_Delete = {
  __typename?: 'AuthorsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type AuthorsFields_updatedAt_Read = {
  __typename?: 'AuthorsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

type AuthorsFields_updatedAt_Update = {
  __typename?: 'AuthorsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

type AuthorsReadAccess = {
  __typename?: 'AuthorsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type AuthorsReadDocAccess = {
  __typename?: 'AuthorsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type AuthorsUpdateAccess = {
  __typename?: 'AuthorsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type AuthorsUpdateDocAccess = {
  __typename?: 'AuthorsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

enum FallbackLocaleInputType {
  en = 'en',
  none = 'none',
  se = 'se'
}

type Folder = {
  __typename?: 'Folder';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentsAndFolders?: Maybe<Folder_DocumentsAndFolders>;
  folder?: Maybe<Folder>;
  folderType?: Maybe<Array<Folder_folderType>>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


type FolderdocumentsAndFoldersArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


type FolderfolderArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

type FolderCreateAccess = {
  __typename?: 'FolderCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type FolderCreateDocAccess = {
  __typename?: 'FolderCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type FolderDeleteAccess = {
  __typename?: 'FolderDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type FolderDeleteDocAccess = {
  __typename?: 'FolderDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type FolderDocAccessFields = {
  __typename?: 'FolderDocAccessFields';
  createdAt?: Maybe<FolderDocAccessFields_createdAt>;
  documentsAndFolders?: Maybe<FolderDocAccessFields_documentsAndFolders>;
  folder?: Maybe<FolderDocAccessFields_folder>;
  folderType?: Maybe<FolderDocAccessFields_folderType>;
  name?: Maybe<FolderDocAccessFields_name>;
  updatedAt?: Maybe<FolderDocAccessFields_updatedAt>;
};

type FolderDocAccessFields_createdAt = {
  __typename?: 'FolderDocAccessFields_createdAt';
  create?: Maybe<FolderDocAccessFields_createdAt_Create>;
  delete?: Maybe<FolderDocAccessFields_createdAt_Delete>;
  read?: Maybe<FolderDocAccessFields_createdAt_Read>;
  update?: Maybe<FolderDocAccessFields_createdAt_Update>;
};

type FolderDocAccessFields_createdAt_Create = {
  __typename?: 'FolderDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_createdAt_Delete = {
  __typename?: 'FolderDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_createdAt_Read = {
  __typename?: 'FolderDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_createdAt_Update = {
  __typename?: 'FolderDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_documentsAndFolders = {
  __typename?: 'FolderDocAccessFields_documentsAndFolders';
  create?: Maybe<FolderDocAccessFields_documentsAndFolders_Create>;
  delete?: Maybe<FolderDocAccessFields_documentsAndFolders_Delete>;
  read?: Maybe<FolderDocAccessFields_documentsAndFolders_Read>;
  update?: Maybe<FolderDocAccessFields_documentsAndFolders_Update>;
};

type FolderDocAccessFields_documentsAndFolders_Create = {
  __typename?: 'FolderDocAccessFields_documentsAndFolders_Create';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_documentsAndFolders_Delete = {
  __typename?: 'FolderDocAccessFields_documentsAndFolders_Delete';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_documentsAndFolders_Read = {
  __typename?: 'FolderDocAccessFields_documentsAndFolders_Read';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_documentsAndFolders_Update = {
  __typename?: 'FolderDocAccessFields_documentsAndFolders_Update';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_folder = {
  __typename?: 'FolderDocAccessFields_folder';
  create?: Maybe<FolderDocAccessFields_folder_Create>;
  delete?: Maybe<FolderDocAccessFields_folder_Delete>;
  read?: Maybe<FolderDocAccessFields_folder_Read>;
  update?: Maybe<FolderDocAccessFields_folder_Update>;
};

type FolderDocAccessFields_folderType = {
  __typename?: 'FolderDocAccessFields_folderType';
  create?: Maybe<FolderDocAccessFields_folderType_Create>;
  delete?: Maybe<FolderDocAccessFields_folderType_Delete>;
  read?: Maybe<FolderDocAccessFields_folderType_Read>;
  update?: Maybe<FolderDocAccessFields_folderType_Update>;
};

type FolderDocAccessFields_folderType_Create = {
  __typename?: 'FolderDocAccessFields_folderType_Create';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_folderType_Delete = {
  __typename?: 'FolderDocAccessFields_folderType_Delete';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_folderType_Read = {
  __typename?: 'FolderDocAccessFields_folderType_Read';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_folderType_Update = {
  __typename?: 'FolderDocAccessFields_folderType_Update';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_folder_Create = {
  __typename?: 'FolderDocAccessFields_folder_Create';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_folder_Delete = {
  __typename?: 'FolderDocAccessFields_folder_Delete';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_folder_Read = {
  __typename?: 'FolderDocAccessFields_folder_Read';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_folder_Update = {
  __typename?: 'FolderDocAccessFields_folder_Update';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_name = {
  __typename?: 'FolderDocAccessFields_name';
  create?: Maybe<FolderDocAccessFields_name_Create>;
  delete?: Maybe<FolderDocAccessFields_name_Delete>;
  read?: Maybe<FolderDocAccessFields_name_Read>;
  update?: Maybe<FolderDocAccessFields_name_Update>;
};

type FolderDocAccessFields_name_Create = {
  __typename?: 'FolderDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_name_Delete = {
  __typename?: 'FolderDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_name_Read = {
  __typename?: 'FolderDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_name_Update = {
  __typename?: 'FolderDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_updatedAt = {
  __typename?: 'FolderDocAccessFields_updatedAt';
  create?: Maybe<FolderDocAccessFields_updatedAt_Create>;
  delete?: Maybe<FolderDocAccessFields_updatedAt_Delete>;
  read?: Maybe<FolderDocAccessFields_updatedAt_Read>;
  update?: Maybe<FolderDocAccessFields_updatedAt_Update>;
};

type FolderDocAccessFields_updatedAt_Create = {
  __typename?: 'FolderDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_updatedAt_Delete = {
  __typename?: 'FolderDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_updatedAt_Read = {
  __typename?: 'FolderDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

type FolderDocAccessFields_updatedAt_Update = {
  __typename?: 'FolderDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

type FolderFields = {
  __typename?: 'FolderFields';
  createdAt?: Maybe<FolderFields_createdAt>;
  documentsAndFolders?: Maybe<FolderFields_documentsAndFolders>;
  folder?: Maybe<FolderFields_folder>;
  folderType?: Maybe<FolderFields_folderType>;
  name?: Maybe<FolderFields_name>;
  updatedAt?: Maybe<FolderFields_updatedAt>;
};

type FolderFields_createdAt = {
  __typename?: 'FolderFields_createdAt';
  create?: Maybe<FolderFields_createdAt_Create>;
  delete?: Maybe<FolderFields_createdAt_Delete>;
  read?: Maybe<FolderFields_createdAt_Read>;
  update?: Maybe<FolderFields_createdAt_Update>;
};

type FolderFields_createdAt_Create = {
  __typename?: 'FolderFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_createdAt_Delete = {
  __typename?: 'FolderFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_createdAt_Read = {
  __typename?: 'FolderFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_createdAt_Update = {
  __typename?: 'FolderFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_documentsAndFolders = {
  __typename?: 'FolderFields_documentsAndFolders';
  create?: Maybe<FolderFields_documentsAndFolders_Create>;
  delete?: Maybe<FolderFields_documentsAndFolders_Delete>;
  read?: Maybe<FolderFields_documentsAndFolders_Read>;
  update?: Maybe<FolderFields_documentsAndFolders_Update>;
};

type FolderFields_documentsAndFolders_Create = {
  __typename?: 'FolderFields_documentsAndFolders_Create';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_documentsAndFolders_Delete = {
  __typename?: 'FolderFields_documentsAndFolders_Delete';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_documentsAndFolders_Read = {
  __typename?: 'FolderFields_documentsAndFolders_Read';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_documentsAndFolders_Update = {
  __typename?: 'FolderFields_documentsAndFolders_Update';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_folder = {
  __typename?: 'FolderFields_folder';
  create?: Maybe<FolderFields_folder_Create>;
  delete?: Maybe<FolderFields_folder_Delete>;
  read?: Maybe<FolderFields_folder_Read>;
  update?: Maybe<FolderFields_folder_Update>;
};

type FolderFields_folderType = {
  __typename?: 'FolderFields_folderType';
  create?: Maybe<FolderFields_folderType_Create>;
  delete?: Maybe<FolderFields_folderType_Delete>;
  read?: Maybe<FolderFields_folderType_Read>;
  update?: Maybe<FolderFields_folderType_Update>;
};

type FolderFields_folderType_Create = {
  __typename?: 'FolderFields_folderType_Create';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_folderType_Delete = {
  __typename?: 'FolderFields_folderType_Delete';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_folderType_Read = {
  __typename?: 'FolderFields_folderType_Read';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_folderType_Update = {
  __typename?: 'FolderFields_folderType_Update';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_folder_Create = {
  __typename?: 'FolderFields_folder_Create';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_folder_Delete = {
  __typename?: 'FolderFields_folder_Delete';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_folder_Read = {
  __typename?: 'FolderFields_folder_Read';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_folder_Update = {
  __typename?: 'FolderFields_folder_Update';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_name = {
  __typename?: 'FolderFields_name';
  create?: Maybe<FolderFields_name_Create>;
  delete?: Maybe<FolderFields_name_Delete>;
  read?: Maybe<FolderFields_name_Read>;
  update?: Maybe<FolderFields_name_Update>;
};

type FolderFields_name_Create = {
  __typename?: 'FolderFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_name_Delete = {
  __typename?: 'FolderFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_name_Read = {
  __typename?: 'FolderFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_name_Update = {
  __typename?: 'FolderFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_updatedAt = {
  __typename?: 'FolderFields_updatedAt';
  create?: Maybe<FolderFields_updatedAt_Create>;
  delete?: Maybe<FolderFields_updatedAt_Delete>;
  read?: Maybe<FolderFields_updatedAt_Read>;
  update?: Maybe<FolderFields_updatedAt_Update>;
};

type FolderFields_updatedAt_Create = {
  __typename?: 'FolderFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_updatedAt_Delete = {
  __typename?: 'FolderFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_updatedAt_Read = {
  __typename?: 'FolderFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

type FolderFields_updatedAt_Update = {
  __typename?: 'FolderFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

type FolderReadAccess = {
  __typename?: 'FolderReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type FolderReadDocAccess = {
  __typename?: 'FolderReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type FolderUpdateAccess = {
  __typename?: 'FolderUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type FolderUpdateDocAccess = {
  __typename?: 'FolderUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

enum FolderUpdate_folderType_MutationInput {
  media = 'media'
}

type Folder_DocumentsAndFolders = {
  __typename?: 'Folder_DocumentsAndFolders';
  docs: Scalars['JSON']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

type Folder_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

enum Folder_folderType {
  media = 'media'
}

enum Folder_folderType_Input {
  media = 'media'
}

enum Folder_folderType_MutationInput {
  media = 'media'
}

type Folder_folderType_operator = {
  all?: InputMaybe<Array<InputMaybe<Folder_folderType_Input>>>;
  equals?: InputMaybe<Folder_folderType_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Folder_folderType_Input>>>;
  not_equals?: InputMaybe<Folder_folderType_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Folder_folderType_Input>>>;
};

type Folder_folder_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

type Folder_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Folder_name_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Folder_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type Folder_where = {
  AND?: InputMaybe<Array<InputMaybe<Folder_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Folder_where_or>>>;
  createdAt?: InputMaybe<Folder_createdAt_operator>;
  folder?: InputMaybe<Folder_folder_operator>;
  folderType?: InputMaybe<Folder_folderType_operator>;
  id?: InputMaybe<Folder_id_operator>;
  name?: InputMaybe<Folder_name_operator>;
  updatedAt?: InputMaybe<Folder_updatedAt_operator>;
};

type Folder_where_and = {
  AND?: InputMaybe<Array<InputMaybe<Folder_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Folder_where_or>>>;
  createdAt?: InputMaybe<Folder_createdAt_operator>;
  folder?: InputMaybe<Folder_folder_operator>;
  folderType?: InputMaybe<Folder_folderType_operator>;
  id?: InputMaybe<Folder_id_operator>;
  name?: InputMaybe<Folder_name_operator>;
  updatedAt?: InputMaybe<Folder_updatedAt_operator>;
};

type Folder_where_or = {
  AND?: InputMaybe<Array<InputMaybe<Folder_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Folder_where_or>>>;
  createdAt?: InputMaybe<Folder_createdAt_operator>;
  folder?: InputMaybe<Folder_folder_operator>;
  folderType?: InputMaybe<Folder_folderType_operator>;
  id?: InputMaybe<Folder_id_operator>;
  name?: InputMaybe<Folder_name_operator>;
  updatedAt?: InputMaybe<Folder_updatedAt_operator>;
};

type Folders = {
  __typename?: 'Folders';
  docs: Array<Folder>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

type Home = {
  __typename?: 'Home';
  _pathname?: Maybe<Scalars['String']['output']>;
  _status?: Maybe<Home__status>;
  content?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  header?: Maybe<Scalars['String']['output']>;
  i18n?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  other?: Maybe<Home_Other>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


type HomecontentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


type HomeimageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

type HomeDocAccessFields = {
  __typename?: 'HomeDocAccessFields';
  _pathname?: Maybe<HomeDocAccessFields__pathname>;
  _status?: Maybe<HomeDocAccessFields__status>;
  content?: Maybe<HomeDocAccessFields_content>;
  createdAt?: Maybe<HomeDocAccessFields_createdAt>;
  header?: Maybe<HomeDocAccessFields_header>;
  i18n?: Maybe<HomeDocAccessFields_i18n>;
  image?: Maybe<HomeDocAccessFields_image>;
  other?: Maybe<HomeDocAccessFields_other>;
  updatedAt?: Maybe<HomeDocAccessFields_updatedAt>;
};

type HomeDocAccessFields__pathname = {
  __typename?: 'HomeDocAccessFields__pathname';
  create?: Maybe<HomeDocAccessFields__pathname_Create>;
  delete?: Maybe<HomeDocAccessFields__pathname_Delete>;
  read?: Maybe<HomeDocAccessFields__pathname_Read>;
  update?: Maybe<HomeDocAccessFields__pathname_Update>;
};

type HomeDocAccessFields__pathname_Create = {
  __typename?: 'HomeDocAccessFields__pathname_Create';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields__pathname_Delete = {
  __typename?: 'HomeDocAccessFields__pathname_Delete';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields__pathname_Read = {
  __typename?: 'HomeDocAccessFields__pathname_Read';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields__pathname_Update = {
  __typename?: 'HomeDocAccessFields__pathname_Update';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields__status = {
  __typename?: 'HomeDocAccessFields__status';
  create?: Maybe<HomeDocAccessFields__status_Create>;
  delete?: Maybe<HomeDocAccessFields__status_Delete>;
  read?: Maybe<HomeDocAccessFields__status_Read>;
  update?: Maybe<HomeDocAccessFields__status_Update>;
};

type HomeDocAccessFields__status_Create = {
  __typename?: 'HomeDocAccessFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields__status_Delete = {
  __typename?: 'HomeDocAccessFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields__status_Read = {
  __typename?: 'HomeDocAccessFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields__status_Update = {
  __typename?: 'HomeDocAccessFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_content = {
  __typename?: 'HomeDocAccessFields_content';
  create?: Maybe<HomeDocAccessFields_content_Create>;
  delete?: Maybe<HomeDocAccessFields_content_Delete>;
  read?: Maybe<HomeDocAccessFields_content_Read>;
  update?: Maybe<HomeDocAccessFields_content_Update>;
};

type HomeDocAccessFields_content_Create = {
  __typename?: 'HomeDocAccessFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_content_Delete = {
  __typename?: 'HomeDocAccessFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_content_Read = {
  __typename?: 'HomeDocAccessFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_content_Update = {
  __typename?: 'HomeDocAccessFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_createdAt = {
  __typename?: 'HomeDocAccessFields_createdAt';
  create?: Maybe<HomeDocAccessFields_createdAt_Create>;
  delete?: Maybe<HomeDocAccessFields_createdAt_Delete>;
  read?: Maybe<HomeDocAccessFields_createdAt_Read>;
  update?: Maybe<HomeDocAccessFields_createdAt_Update>;
};

type HomeDocAccessFields_createdAt_Create = {
  __typename?: 'HomeDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_createdAt_Delete = {
  __typename?: 'HomeDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_createdAt_Read = {
  __typename?: 'HomeDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_createdAt_Update = {
  __typename?: 'HomeDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_header = {
  __typename?: 'HomeDocAccessFields_header';
  create?: Maybe<HomeDocAccessFields_header_Create>;
  delete?: Maybe<HomeDocAccessFields_header_Delete>;
  read?: Maybe<HomeDocAccessFields_header_Read>;
  update?: Maybe<HomeDocAccessFields_header_Update>;
};

type HomeDocAccessFields_header_Create = {
  __typename?: 'HomeDocAccessFields_header_Create';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_header_Delete = {
  __typename?: 'HomeDocAccessFields_header_Delete';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_header_Read = {
  __typename?: 'HomeDocAccessFields_header_Read';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_header_Update = {
  __typename?: 'HomeDocAccessFields_header_Update';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_i18n = {
  __typename?: 'HomeDocAccessFields_i18n';
  create?: Maybe<HomeDocAccessFields_i18n_Create>;
  delete?: Maybe<HomeDocAccessFields_i18n_Delete>;
  read?: Maybe<HomeDocAccessFields_i18n_Read>;
  update?: Maybe<HomeDocAccessFields_i18n_Update>;
};

type HomeDocAccessFields_i18n_Create = {
  __typename?: 'HomeDocAccessFields_i18n_Create';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_i18n_Delete = {
  __typename?: 'HomeDocAccessFields_i18n_Delete';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_i18n_Read = {
  __typename?: 'HomeDocAccessFields_i18n_Read';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_i18n_Update = {
  __typename?: 'HomeDocAccessFields_i18n_Update';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_image = {
  __typename?: 'HomeDocAccessFields_image';
  create?: Maybe<HomeDocAccessFields_image_Create>;
  delete?: Maybe<HomeDocAccessFields_image_Delete>;
  read?: Maybe<HomeDocAccessFields_image_Read>;
  update?: Maybe<HomeDocAccessFields_image_Update>;
};

type HomeDocAccessFields_image_Create = {
  __typename?: 'HomeDocAccessFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_image_Delete = {
  __typename?: 'HomeDocAccessFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_image_Read = {
  __typename?: 'HomeDocAccessFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_image_Update = {
  __typename?: 'HomeDocAccessFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_other = {
  __typename?: 'HomeDocAccessFields_other';
  create?: Maybe<HomeDocAccessFields_other_Create>;
  delete?: Maybe<HomeDocAccessFields_other_Delete>;
  fields?: Maybe<HomeDocAccessFields_other_Fields>;
  read?: Maybe<HomeDocAccessFields_other_Read>;
  update?: Maybe<HomeDocAccessFields_other_Update>;
};

type HomeDocAccessFields_other_Create = {
  __typename?: 'HomeDocAccessFields_other_Create';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_other_Delete = {
  __typename?: 'HomeDocAccessFields_other_Delete';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_other_Fields = {
  __typename?: 'HomeDocAccessFields_other_Fields';
  posts?: Maybe<HomeDocAccessFields_other_posts>;
};

type HomeDocAccessFields_other_Read = {
  __typename?: 'HomeDocAccessFields_other_Read';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_other_Update = {
  __typename?: 'HomeDocAccessFields_other_Update';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_other_posts = {
  __typename?: 'HomeDocAccessFields_other_posts';
  create?: Maybe<HomeDocAccessFields_other_posts_Create>;
  delete?: Maybe<HomeDocAccessFields_other_posts_Delete>;
  read?: Maybe<HomeDocAccessFields_other_posts_Read>;
  update?: Maybe<HomeDocAccessFields_other_posts_Update>;
};

type HomeDocAccessFields_other_posts_Create = {
  __typename?: 'HomeDocAccessFields_other_posts_Create';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_other_posts_Delete = {
  __typename?: 'HomeDocAccessFields_other_posts_Delete';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_other_posts_Read = {
  __typename?: 'HomeDocAccessFields_other_posts_Read';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_other_posts_Update = {
  __typename?: 'HomeDocAccessFields_other_posts_Update';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_updatedAt = {
  __typename?: 'HomeDocAccessFields_updatedAt';
  create?: Maybe<HomeDocAccessFields_updatedAt_Create>;
  delete?: Maybe<HomeDocAccessFields_updatedAt_Delete>;
  read?: Maybe<HomeDocAccessFields_updatedAt_Read>;
  update?: Maybe<HomeDocAccessFields_updatedAt_Update>;
};

type HomeDocAccessFields_updatedAt_Create = {
  __typename?: 'HomeDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_updatedAt_Delete = {
  __typename?: 'HomeDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_updatedAt_Read = {
  __typename?: 'HomeDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

type HomeDocAccessFields_updatedAt_Update = {
  __typename?: 'HomeDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

type HomeFields = {
  __typename?: 'HomeFields';
  _pathname?: Maybe<HomeFields__pathname>;
  _status?: Maybe<HomeFields__status>;
  content?: Maybe<HomeFields_content>;
  createdAt?: Maybe<HomeFields_createdAt>;
  header?: Maybe<HomeFields_header>;
  i18n?: Maybe<HomeFields_i18n>;
  image?: Maybe<HomeFields_image>;
  other?: Maybe<HomeFields_other>;
  updatedAt?: Maybe<HomeFields_updatedAt>;
};

type HomeFields__pathname = {
  __typename?: 'HomeFields__pathname';
  create?: Maybe<HomeFields__pathname_Create>;
  delete?: Maybe<HomeFields__pathname_Delete>;
  read?: Maybe<HomeFields__pathname_Read>;
  update?: Maybe<HomeFields__pathname_Update>;
};

type HomeFields__pathname_Create = {
  __typename?: 'HomeFields__pathname_Create';
  permission: Scalars['Boolean']['output'];
};

type HomeFields__pathname_Delete = {
  __typename?: 'HomeFields__pathname_Delete';
  permission: Scalars['Boolean']['output'];
};

type HomeFields__pathname_Read = {
  __typename?: 'HomeFields__pathname_Read';
  permission: Scalars['Boolean']['output'];
};

type HomeFields__pathname_Update = {
  __typename?: 'HomeFields__pathname_Update';
  permission: Scalars['Boolean']['output'];
};

type HomeFields__status = {
  __typename?: 'HomeFields__status';
  create?: Maybe<HomeFields__status_Create>;
  delete?: Maybe<HomeFields__status_Delete>;
  read?: Maybe<HomeFields__status_Read>;
  update?: Maybe<HomeFields__status_Update>;
};

type HomeFields__status_Create = {
  __typename?: 'HomeFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

type HomeFields__status_Delete = {
  __typename?: 'HomeFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

type HomeFields__status_Read = {
  __typename?: 'HomeFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

type HomeFields__status_Update = {
  __typename?: 'HomeFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_content = {
  __typename?: 'HomeFields_content';
  create?: Maybe<HomeFields_content_Create>;
  delete?: Maybe<HomeFields_content_Delete>;
  read?: Maybe<HomeFields_content_Read>;
  update?: Maybe<HomeFields_content_Update>;
};

type HomeFields_content_Create = {
  __typename?: 'HomeFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_content_Delete = {
  __typename?: 'HomeFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_content_Read = {
  __typename?: 'HomeFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_content_Update = {
  __typename?: 'HomeFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_createdAt = {
  __typename?: 'HomeFields_createdAt';
  create?: Maybe<HomeFields_createdAt_Create>;
  delete?: Maybe<HomeFields_createdAt_Delete>;
  read?: Maybe<HomeFields_createdAt_Read>;
  update?: Maybe<HomeFields_createdAt_Update>;
};

type HomeFields_createdAt_Create = {
  __typename?: 'HomeFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_createdAt_Delete = {
  __typename?: 'HomeFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_createdAt_Read = {
  __typename?: 'HomeFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_createdAt_Update = {
  __typename?: 'HomeFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_header = {
  __typename?: 'HomeFields_header';
  create?: Maybe<HomeFields_header_Create>;
  delete?: Maybe<HomeFields_header_Delete>;
  read?: Maybe<HomeFields_header_Read>;
  update?: Maybe<HomeFields_header_Update>;
};

type HomeFields_header_Create = {
  __typename?: 'HomeFields_header_Create';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_header_Delete = {
  __typename?: 'HomeFields_header_Delete';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_header_Read = {
  __typename?: 'HomeFields_header_Read';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_header_Update = {
  __typename?: 'HomeFields_header_Update';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_i18n = {
  __typename?: 'HomeFields_i18n';
  create?: Maybe<HomeFields_i18n_Create>;
  delete?: Maybe<HomeFields_i18n_Delete>;
  read?: Maybe<HomeFields_i18n_Read>;
  update?: Maybe<HomeFields_i18n_Update>;
};

type HomeFields_i18n_Create = {
  __typename?: 'HomeFields_i18n_Create';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_i18n_Delete = {
  __typename?: 'HomeFields_i18n_Delete';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_i18n_Read = {
  __typename?: 'HomeFields_i18n_Read';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_i18n_Update = {
  __typename?: 'HomeFields_i18n_Update';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_image = {
  __typename?: 'HomeFields_image';
  create?: Maybe<HomeFields_image_Create>;
  delete?: Maybe<HomeFields_image_Delete>;
  read?: Maybe<HomeFields_image_Read>;
  update?: Maybe<HomeFields_image_Update>;
};

type HomeFields_image_Create = {
  __typename?: 'HomeFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_image_Delete = {
  __typename?: 'HomeFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_image_Read = {
  __typename?: 'HomeFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_image_Update = {
  __typename?: 'HomeFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_other = {
  __typename?: 'HomeFields_other';
  create?: Maybe<HomeFields_other_Create>;
  delete?: Maybe<HomeFields_other_Delete>;
  fields?: Maybe<HomeFields_other_Fields>;
  read?: Maybe<HomeFields_other_Read>;
  update?: Maybe<HomeFields_other_Update>;
};

type HomeFields_other_Create = {
  __typename?: 'HomeFields_other_Create';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_other_Delete = {
  __typename?: 'HomeFields_other_Delete';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_other_Fields = {
  __typename?: 'HomeFields_other_Fields';
  posts?: Maybe<HomeFields_other_posts>;
};

type HomeFields_other_Read = {
  __typename?: 'HomeFields_other_Read';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_other_Update = {
  __typename?: 'HomeFields_other_Update';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_other_posts = {
  __typename?: 'HomeFields_other_posts';
  create?: Maybe<HomeFields_other_posts_Create>;
  delete?: Maybe<HomeFields_other_posts_Delete>;
  read?: Maybe<HomeFields_other_posts_Read>;
  update?: Maybe<HomeFields_other_posts_Update>;
};

type HomeFields_other_posts_Create = {
  __typename?: 'HomeFields_other_posts_Create';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_other_posts_Delete = {
  __typename?: 'HomeFields_other_posts_Delete';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_other_posts_Read = {
  __typename?: 'HomeFields_other_posts_Read';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_other_posts_Update = {
  __typename?: 'HomeFields_other_posts_Update';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_updatedAt = {
  __typename?: 'HomeFields_updatedAt';
  create?: Maybe<HomeFields_updatedAt_Create>;
  delete?: Maybe<HomeFields_updatedAt_Delete>;
  read?: Maybe<HomeFields_updatedAt_Read>;
  update?: Maybe<HomeFields_updatedAt_Update>;
};

type HomeFields_updatedAt_Create = {
  __typename?: 'HomeFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_updatedAt_Delete = {
  __typename?: 'HomeFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_updatedAt_Read = {
  __typename?: 'HomeFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

type HomeFields_updatedAt_Update = {
  __typename?: 'HomeFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

type HomeReadAccess = {
  __typename?: 'HomeReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type HomeReadDocAccess = {
  __typename?: 'HomeReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type HomeReadVersionsAccess = {
  __typename?: 'HomeReadVersionsAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type HomeReadVersionsDocAccess = {
  __typename?: 'HomeReadVersionsDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type HomeUpdateAccess = {
  __typename?: 'HomeUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type HomeUpdateDocAccess = {
  __typename?: 'HomeUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type HomeVersion = {
  __typename?: 'HomeVersion';
  autosave?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  latest?: Maybe<Scalars['Boolean']['output']>;
  publishedLocale?: Maybe<HomeVersion_publishedLocale>;
  snapshot?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<HomeVersion_Version>;
};

type HomeVersion_Version = {
  __typename?: 'HomeVersion_Version';
  _pathname?: Maybe<Scalars['String']['output']>;
  _status?: Maybe<HomeVersion_Version__status>;
  content?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  header?: Maybe<Scalars['String']['output']>;
  i18n?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  other?: Maybe<HomeVersion_Version_Other>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


type HomeVersion_VersioncontentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


type HomeVersion_VersionimageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

type HomeVersion_Version_Other = {
  __typename?: 'HomeVersion_Version_Other';
  posts?: Maybe<Array<Post>>;
};


type HomeVersion_Version_OtherpostsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

enum HomeVersion_Version__status {
  draft = 'draft',
  published = 'published'
}

enum HomeVersion_publishedLocale {
  en = 'en',
  se = 'se'
}

type Home_Other = {
  __typename?: 'Home_Other';
  posts?: Maybe<Array<Post>>;
};


type Home_OtherpostsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

enum Home__status {
  draft = 'draft',
  published = 'published'
}

enum Home__status_MutationInput {
  draft = 'draft',
  published = 'published'
}

enum LocaleInputType {
  en = 'en',
  se = 'se'
}

type Media = {
  __typename?: 'Media';
  alt?: Maybe<Scalars['String']['output']>;
  cloudinary?: Maybe<Media_Cloudinary>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  focalX?: Maybe<Scalars['Float']['output']>;
  focalY?: Maybe<Scalars['Float']['output']>;
  folder?: Maybe<Folder>;
  height?: Maybe<Scalars['Float']['output']>;
  i18n?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  mimeType?: Maybe<Scalars['String']['output']>;
  sizes?: Maybe<Media_Sizes>;
  thumbnailURL?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};


type MediafolderArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt?: Maybe<MediaDocAccessFields_alt>;
  cloudinary?: Maybe<MediaDocAccessFields_cloudinary>;
  createdAt?: Maybe<MediaDocAccessFields_createdAt>;
  filename?: Maybe<MediaDocAccessFields_filename>;
  filesize?: Maybe<MediaDocAccessFields_filesize>;
  focalX?: Maybe<MediaDocAccessFields_focalX>;
  focalY?: Maybe<MediaDocAccessFields_focalY>;
  folder?: Maybe<MediaDocAccessFields_folder>;
  height?: Maybe<MediaDocAccessFields_height>;
  i18n?: Maybe<MediaDocAccessFields_i18n>;
  mimeType?: Maybe<MediaDocAccessFields_mimeType>;
  sizes?: Maybe<MediaDocAccessFields_sizes>;
  thumbnailURL?: Maybe<MediaDocAccessFields_thumbnailURL>;
  updatedAt?: Maybe<MediaDocAccessFields_updatedAt>;
  url?: Maybe<MediaDocAccessFields_url>;
  width?: Maybe<MediaDocAccessFields_width>;
};

type MediaDocAccessFields_alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create?: Maybe<MediaDocAccessFields_alt_Create>;
  delete?: Maybe<MediaDocAccessFields_alt_Delete>;
  read?: Maybe<MediaDocAccessFields_alt_Read>;
  update?: Maybe<MediaDocAccessFields_alt_Update>;
};

type MediaDocAccessFields_alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary = {
  __typename?: 'MediaDocAccessFields_cloudinary';
  create?: Maybe<MediaDocAccessFields_cloudinary_Create>;
  delete?: Maybe<MediaDocAccessFields_cloudinary_Delete>;
  fields?: Maybe<MediaDocAccessFields_cloudinary_Fields>;
  read?: Maybe<MediaDocAccessFields_cloudinary_Read>;
  update?: Maybe<MediaDocAccessFields_cloudinary_Update>;
};

type MediaDocAccessFields_cloudinary_Create = {
  __typename?: 'MediaDocAccessFields_cloudinary_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_Delete = {
  __typename?: 'MediaDocAccessFields_cloudinary_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_Fields = {
  __typename?: 'MediaDocAccessFields_cloudinary_Fields';
  format?: Maybe<MediaDocAccessFields_cloudinary_format>;
  original_filename?: Maybe<MediaDocAccessFields_cloudinary_original_filename>;
  public_id?: Maybe<MediaDocAccessFields_cloudinary_public_id>;
  resource_type?: Maybe<MediaDocAccessFields_cloudinary_resource_type>;
  secure_url?: Maybe<MediaDocAccessFields_cloudinary_secure_url>;
};

type MediaDocAccessFields_cloudinary_Read = {
  __typename?: 'MediaDocAccessFields_cloudinary_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_Update = {
  __typename?: 'MediaDocAccessFields_cloudinary_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_format = {
  __typename?: 'MediaDocAccessFields_cloudinary_format';
  create?: Maybe<MediaDocAccessFields_cloudinary_format_Create>;
  delete?: Maybe<MediaDocAccessFields_cloudinary_format_Delete>;
  read?: Maybe<MediaDocAccessFields_cloudinary_format_Read>;
  update?: Maybe<MediaDocAccessFields_cloudinary_format_Update>;
};

type MediaDocAccessFields_cloudinary_format_Create = {
  __typename?: 'MediaDocAccessFields_cloudinary_format_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_format_Delete = {
  __typename?: 'MediaDocAccessFields_cloudinary_format_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_format_Read = {
  __typename?: 'MediaDocAccessFields_cloudinary_format_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_format_Update = {
  __typename?: 'MediaDocAccessFields_cloudinary_format_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_original_filename = {
  __typename?: 'MediaDocAccessFields_cloudinary_original_filename';
  create?: Maybe<MediaDocAccessFields_cloudinary_original_filename_Create>;
  delete?: Maybe<MediaDocAccessFields_cloudinary_original_filename_Delete>;
  read?: Maybe<MediaDocAccessFields_cloudinary_original_filename_Read>;
  update?: Maybe<MediaDocAccessFields_cloudinary_original_filename_Update>;
};

type MediaDocAccessFields_cloudinary_original_filename_Create = {
  __typename?: 'MediaDocAccessFields_cloudinary_original_filename_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_original_filename_Delete = {
  __typename?: 'MediaDocAccessFields_cloudinary_original_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_original_filename_Read = {
  __typename?: 'MediaDocAccessFields_cloudinary_original_filename_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_original_filename_Update = {
  __typename?: 'MediaDocAccessFields_cloudinary_original_filename_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_public_id = {
  __typename?: 'MediaDocAccessFields_cloudinary_public_id';
  create?: Maybe<MediaDocAccessFields_cloudinary_public_id_Create>;
  delete?: Maybe<MediaDocAccessFields_cloudinary_public_id_Delete>;
  read?: Maybe<MediaDocAccessFields_cloudinary_public_id_Read>;
  update?: Maybe<MediaDocAccessFields_cloudinary_public_id_Update>;
};

type MediaDocAccessFields_cloudinary_public_id_Create = {
  __typename?: 'MediaDocAccessFields_cloudinary_public_id_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_public_id_Delete = {
  __typename?: 'MediaDocAccessFields_cloudinary_public_id_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_public_id_Read = {
  __typename?: 'MediaDocAccessFields_cloudinary_public_id_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_public_id_Update = {
  __typename?: 'MediaDocAccessFields_cloudinary_public_id_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_resource_type = {
  __typename?: 'MediaDocAccessFields_cloudinary_resource_type';
  create?: Maybe<MediaDocAccessFields_cloudinary_resource_type_Create>;
  delete?: Maybe<MediaDocAccessFields_cloudinary_resource_type_Delete>;
  read?: Maybe<MediaDocAccessFields_cloudinary_resource_type_Read>;
  update?: Maybe<MediaDocAccessFields_cloudinary_resource_type_Update>;
};

type MediaDocAccessFields_cloudinary_resource_type_Create = {
  __typename?: 'MediaDocAccessFields_cloudinary_resource_type_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_resource_type_Delete = {
  __typename?: 'MediaDocAccessFields_cloudinary_resource_type_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_resource_type_Read = {
  __typename?: 'MediaDocAccessFields_cloudinary_resource_type_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_resource_type_Update = {
  __typename?: 'MediaDocAccessFields_cloudinary_resource_type_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_secure_url = {
  __typename?: 'MediaDocAccessFields_cloudinary_secure_url';
  create?: Maybe<MediaDocAccessFields_cloudinary_secure_url_Create>;
  delete?: Maybe<MediaDocAccessFields_cloudinary_secure_url_Delete>;
  read?: Maybe<MediaDocAccessFields_cloudinary_secure_url_Read>;
  update?: Maybe<MediaDocAccessFields_cloudinary_secure_url_Update>;
};

type MediaDocAccessFields_cloudinary_secure_url_Create = {
  __typename?: 'MediaDocAccessFields_cloudinary_secure_url_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_secure_url_Delete = {
  __typename?: 'MediaDocAccessFields_cloudinary_secure_url_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_secure_url_Read = {
  __typename?: 'MediaDocAccessFields_cloudinary_secure_url_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_cloudinary_secure_url_Update = {
  __typename?: 'MediaDocAccessFields_cloudinary_secure_url_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_createdAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_createdAt_Create>;
  delete?: Maybe<MediaDocAccessFields_createdAt_Delete>;
  read?: Maybe<MediaDocAccessFields_createdAt_Read>;
  update?: Maybe<MediaDocAccessFields_createdAt_Update>;
};

type MediaDocAccessFields_createdAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_createdAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_createdAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_createdAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_filename_Create>;
  delete?: Maybe<MediaDocAccessFields_filename_Delete>;
  read?: Maybe<MediaDocAccessFields_filename_Read>;
  update?: Maybe<MediaDocAccessFields_filename_Update>;
};

type MediaDocAccessFields_filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_filesize_Read>;
  update?: Maybe<MediaDocAccessFields_filesize_Update>;
};

type MediaDocAccessFields_filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_focalX = {
  __typename?: 'MediaDocAccessFields_focalX';
  create?: Maybe<MediaDocAccessFields_focalX_Create>;
  delete?: Maybe<MediaDocAccessFields_focalX_Delete>;
  read?: Maybe<MediaDocAccessFields_focalX_Read>;
  update?: Maybe<MediaDocAccessFields_focalX_Update>;
};

type MediaDocAccessFields_focalX_Create = {
  __typename?: 'MediaDocAccessFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_focalX_Delete = {
  __typename?: 'MediaDocAccessFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_focalX_Read = {
  __typename?: 'MediaDocAccessFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_focalX_Update = {
  __typename?: 'MediaDocAccessFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_focalY = {
  __typename?: 'MediaDocAccessFields_focalY';
  create?: Maybe<MediaDocAccessFields_focalY_Create>;
  delete?: Maybe<MediaDocAccessFields_focalY_Delete>;
  read?: Maybe<MediaDocAccessFields_focalY_Read>;
  update?: Maybe<MediaDocAccessFields_focalY_Update>;
};

type MediaDocAccessFields_focalY_Create = {
  __typename?: 'MediaDocAccessFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_focalY_Delete = {
  __typename?: 'MediaDocAccessFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_focalY_Read = {
  __typename?: 'MediaDocAccessFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_focalY_Update = {
  __typename?: 'MediaDocAccessFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_folder = {
  __typename?: 'MediaDocAccessFields_folder';
  create?: Maybe<MediaDocAccessFields_folder_Create>;
  delete?: Maybe<MediaDocAccessFields_folder_Delete>;
  read?: Maybe<MediaDocAccessFields_folder_Read>;
  update?: Maybe<MediaDocAccessFields_folder_Update>;
};

type MediaDocAccessFields_folder_Create = {
  __typename?: 'MediaDocAccessFields_folder_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_folder_Delete = {
  __typename?: 'MediaDocAccessFields_folder_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_folder_Read = {
  __typename?: 'MediaDocAccessFields_folder_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_folder_Update = {
  __typename?: 'MediaDocAccessFields_folder_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_height_Create>;
  delete?: Maybe<MediaDocAccessFields_height_Delete>;
  read?: Maybe<MediaDocAccessFields_height_Read>;
  update?: Maybe<MediaDocAccessFields_height_Update>;
};

type MediaDocAccessFields_height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_i18n = {
  __typename?: 'MediaDocAccessFields_i18n';
  create?: Maybe<MediaDocAccessFields_i18n_Create>;
  delete?: Maybe<MediaDocAccessFields_i18n_Delete>;
  read?: Maybe<MediaDocAccessFields_i18n_Read>;
  update?: Maybe<MediaDocAccessFields_i18n_Update>;
};

type MediaDocAccessFields_i18n_Create = {
  __typename?: 'MediaDocAccessFields_i18n_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_i18n_Delete = {
  __typename?: 'MediaDocAccessFields_i18n_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_i18n_Read = {
  __typename?: 'MediaDocAccessFields_i18n_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_i18n_Update = {
  __typename?: 'MediaDocAccessFields_i18n_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_mimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_mimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_mimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_mimeType_Read>;
  update?: Maybe<MediaDocAccessFields_mimeType_Update>;
};

type MediaDocAccessFields_mimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_mimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_mimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_mimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes = {
  __typename?: 'MediaDocAccessFields_sizes';
  create?: Maybe<MediaDocAccessFields_sizes_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_Delete>;
  fields?: Maybe<MediaDocAccessFields_sizes_Fields>;
  read?: Maybe<MediaDocAccessFields_sizes_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_Update>;
};

type MediaDocAccessFields_sizes_Create = {
  __typename?: 'MediaDocAccessFields_sizes_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_Fields';
  card?: Maybe<MediaDocAccessFields_sizes_card>;
  tablet?: Maybe<MediaDocAccessFields_sizes_tablet>;
  thumbnail?: Maybe<MediaDocAccessFields_sizes_thumbnail>;
};

type MediaDocAccessFields_sizes_Read = {
  __typename?: 'MediaDocAccessFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_Update = {
  __typename?: 'MediaDocAccessFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card = {
  __typename?: 'MediaDocAccessFields_sizes_card';
  create?: Maybe<MediaDocAccessFields_sizes_card_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_card_Delete>;
  fields?: Maybe<MediaDocAccessFields_sizes_card_Fields>;
  read?: Maybe<MediaDocAccessFields_sizes_card_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_card_Update>;
};

type MediaDocAccessFields_sizes_card_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_card_Fields';
  filename?: Maybe<MediaDocAccessFields_sizes_card_filename>;
  filesize?: Maybe<MediaDocAccessFields_sizes_card_filesize>;
  height?: Maybe<MediaDocAccessFields_sizes_card_height>;
  mimeType?: Maybe<MediaDocAccessFields_sizes_card_mimeType>;
  url?: Maybe<MediaDocAccessFields_sizes_card_url>;
  width?: Maybe<MediaDocAccessFields_sizes_card_width>;
};

type MediaDocAccessFields_sizes_card_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_filename = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename';
  create?: Maybe<MediaDocAccessFields_sizes_card_filename_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_card_filename_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_card_filename_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_card_filename_Update>;
};

type MediaDocAccessFields_sizes_card_filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_filesize = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize';
  create?: Maybe<MediaDocAccessFields_sizes_card_filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_card_filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_card_filesize_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_card_filesize_Update>;
};

type MediaDocAccessFields_sizes_card_filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_height = {
  __typename?: 'MediaDocAccessFields_sizes_card_height';
  create?: Maybe<MediaDocAccessFields_sizes_card_height_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_card_height_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_card_height_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_card_height_Update>;
};

type MediaDocAccessFields_sizes_card_height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_mimeType = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType';
  create?: Maybe<MediaDocAccessFields_sizes_card_mimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_card_mimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_card_mimeType_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_card_mimeType_Update>;
};

type MediaDocAccessFields_sizes_card_mimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_mimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_mimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_mimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_url = {
  __typename?: 'MediaDocAccessFields_sizes_card_url';
  create?: Maybe<MediaDocAccessFields_sizes_card_url_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_card_url_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_card_url_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_card_url_Update>;
};

type MediaDocAccessFields_sizes_card_url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_width = {
  __typename?: 'MediaDocAccessFields_sizes_card_width';
  create?: Maybe<MediaDocAccessFields_sizes_card_width_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_card_width_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_card_width_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_card_width_Update>;
};

type MediaDocAccessFields_sizes_card_width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_card_width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet = {
  __typename?: 'MediaDocAccessFields_sizes_tablet';
  create?: Maybe<MediaDocAccessFields_sizes_tablet_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_tablet_Delete>;
  fields?: Maybe<MediaDocAccessFields_sizes_tablet_Fields>;
  read?: Maybe<MediaDocAccessFields_sizes_tablet_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_tablet_Update>;
};

type MediaDocAccessFields_sizes_tablet_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_Fields';
  filename?: Maybe<MediaDocAccessFields_sizes_tablet_filename>;
  filesize?: Maybe<MediaDocAccessFields_sizes_tablet_filesize>;
  height?: Maybe<MediaDocAccessFields_sizes_tablet_height>;
  mimeType?: Maybe<MediaDocAccessFields_sizes_tablet_mimeType>;
  url?: Maybe<MediaDocAccessFields_sizes_tablet_url>;
  width?: Maybe<MediaDocAccessFields_sizes_tablet_width>;
};

type MediaDocAccessFields_sizes_tablet_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_filename = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filename';
  create?: Maybe<MediaDocAccessFields_sizes_tablet_filename_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_tablet_filename_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_tablet_filename_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_tablet_filename_Update>;
};

type MediaDocAccessFields_sizes_tablet_filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filename_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filename_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filename_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_filesize = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filesize';
  create?: Maybe<MediaDocAccessFields_sizes_tablet_filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_tablet_filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_tablet_filesize_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_tablet_filesize_Update>;
};

type MediaDocAccessFields_sizes_tablet_filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_height = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_height';
  create?: Maybe<MediaDocAccessFields_sizes_tablet_height_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_tablet_height_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_tablet_height_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_tablet_height_Update>;
};

type MediaDocAccessFields_sizes_tablet_height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_height_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_height_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_height_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_height_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_mimeType = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_mimeType';
  create?: Maybe<MediaDocAccessFields_sizes_tablet_mimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_tablet_mimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_tablet_mimeType_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_tablet_mimeType_Update>;
};

type MediaDocAccessFields_sizes_tablet_mimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_mimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_mimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_mimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_url = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_url';
  create?: Maybe<MediaDocAccessFields_sizes_tablet_url_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_tablet_url_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_tablet_url_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_tablet_url_Update>;
};

type MediaDocAccessFields_sizes_tablet_url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_url_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_url_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_url_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_url_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_width = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_width';
  create?: Maybe<MediaDocAccessFields_sizes_tablet_width_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_tablet_width_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_tablet_width_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_tablet_width_Update>;
};

type MediaDocAccessFields_sizes_tablet_width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_width_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_width_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_width_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_tablet_width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_width_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail';
  create?: Maybe<MediaDocAccessFields_sizes_thumbnail_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_thumbnail_Delete>;
  fields?: Maybe<MediaDocAccessFields_sizes_thumbnail_Fields>;
  read?: Maybe<MediaDocAccessFields_sizes_thumbnail_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_thumbnail_Update>;
};

type MediaDocAccessFields_sizes_thumbnail_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Fields';
  filename?: Maybe<MediaDocAccessFields_sizes_thumbnail_filename>;
  filesize?: Maybe<MediaDocAccessFields_sizes_thumbnail_filesize>;
  height?: Maybe<MediaDocAccessFields_sizes_thumbnail_height>;
  mimeType?: Maybe<MediaDocAccessFields_sizes_thumbnail_mimeType>;
  url?: Maybe<MediaDocAccessFields_sizes_thumbnail_url>;
  width?: Maybe<MediaDocAccessFields_sizes_thumbnail_width>;
};

type MediaDocAccessFields_sizes_thumbnail_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_filename = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename';
  create?: Maybe<MediaDocAccessFields_sizes_thumbnail_filename_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_thumbnail_filename_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_thumbnail_filename_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_thumbnail_filename_Update>;
};

type MediaDocAccessFields_sizes_thumbnail_filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_filesize = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize';
  create?: Maybe<MediaDocAccessFields_sizes_thumbnail_filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_thumbnail_filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_thumbnail_filesize_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_thumbnail_filesize_Update>;
};

type MediaDocAccessFields_sizes_thumbnail_filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_height = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height';
  create?: Maybe<MediaDocAccessFields_sizes_thumbnail_height_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_thumbnail_height_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_thumbnail_height_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_thumbnail_height_Update>;
};

type MediaDocAccessFields_sizes_thumbnail_height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_mimeType = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType';
  create?: Maybe<MediaDocAccessFields_sizes_thumbnail_mimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_thumbnail_mimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_thumbnail_mimeType_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_thumbnail_mimeType_Update>;
};

type MediaDocAccessFields_sizes_thumbnail_mimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_mimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_mimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_mimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_url = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url';
  create?: Maybe<MediaDocAccessFields_sizes_thumbnail_url_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_thumbnail_url_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_thumbnail_url_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_thumbnail_url_Update>;
};

type MediaDocAccessFields_sizes_thumbnail_url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_width = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width';
  create?: Maybe<MediaDocAccessFields_sizes_thumbnail_width_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_thumbnail_width_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_thumbnail_width_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_thumbnail_width_Update>;
};

type MediaDocAccessFields_sizes_thumbnail_width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_sizes_thumbnail_width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_thumbnailURL = {
  __typename?: 'MediaDocAccessFields_thumbnailURL';
  create?: Maybe<MediaDocAccessFields_thumbnailURL_Create>;
  delete?: Maybe<MediaDocAccessFields_thumbnailURL_Delete>;
  read?: Maybe<MediaDocAccessFields_thumbnailURL_Read>;
  update?: Maybe<MediaDocAccessFields_thumbnailURL_Update>;
};

type MediaDocAccessFields_thumbnailURL_Create = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_thumbnailURL_Delete = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_thumbnailURL_Read = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_thumbnailURL_Update = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_updatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_updatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_updatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_updatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_updatedAt_Update>;
};

type MediaDocAccessFields_updatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_updatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_updatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_updatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_url_Create>;
  delete?: Maybe<MediaDocAccessFields_url_Delete>;
  read?: Maybe<MediaDocAccessFields_url_Read>;
  update?: Maybe<MediaDocAccessFields_url_Update>;
};

type MediaDocAccessFields_url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_width_Create>;
  delete?: Maybe<MediaDocAccessFields_width_Delete>;
  read?: Maybe<MediaDocAccessFields_width_Read>;
  update?: Maybe<MediaDocAccessFields_width_Update>;
};

type MediaDocAccessFields_width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaDocAccessFields_width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields = {
  __typename?: 'MediaFields';
  alt?: Maybe<MediaFields_alt>;
  cloudinary?: Maybe<MediaFields_cloudinary>;
  createdAt?: Maybe<MediaFields_createdAt>;
  filename?: Maybe<MediaFields_filename>;
  filesize?: Maybe<MediaFields_filesize>;
  focalX?: Maybe<MediaFields_focalX>;
  focalY?: Maybe<MediaFields_focalY>;
  folder?: Maybe<MediaFields_folder>;
  height?: Maybe<MediaFields_height>;
  i18n?: Maybe<MediaFields_i18n>;
  mimeType?: Maybe<MediaFields_mimeType>;
  sizes?: Maybe<MediaFields_sizes>;
  thumbnailURL?: Maybe<MediaFields_thumbnailURL>;
  updatedAt?: Maybe<MediaFields_updatedAt>;
  url?: Maybe<MediaFields_url>;
  width?: Maybe<MediaFields_width>;
};

type MediaFields_alt = {
  __typename?: 'MediaFields_alt';
  create?: Maybe<MediaFields_alt_Create>;
  delete?: Maybe<MediaFields_alt_Delete>;
  read?: Maybe<MediaFields_alt_Read>;
  update?: Maybe<MediaFields_alt_Update>;
};

type MediaFields_alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary = {
  __typename?: 'MediaFields_cloudinary';
  create?: Maybe<MediaFields_cloudinary_Create>;
  delete?: Maybe<MediaFields_cloudinary_Delete>;
  fields?: Maybe<MediaFields_cloudinary_Fields>;
  read?: Maybe<MediaFields_cloudinary_Read>;
  update?: Maybe<MediaFields_cloudinary_Update>;
};

type MediaFields_cloudinary_Create = {
  __typename?: 'MediaFields_cloudinary_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_Delete = {
  __typename?: 'MediaFields_cloudinary_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_Fields = {
  __typename?: 'MediaFields_cloudinary_Fields';
  format?: Maybe<MediaFields_cloudinary_format>;
  original_filename?: Maybe<MediaFields_cloudinary_original_filename>;
  public_id?: Maybe<MediaFields_cloudinary_public_id>;
  resource_type?: Maybe<MediaFields_cloudinary_resource_type>;
  secure_url?: Maybe<MediaFields_cloudinary_secure_url>;
};

type MediaFields_cloudinary_Read = {
  __typename?: 'MediaFields_cloudinary_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_Update = {
  __typename?: 'MediaFields_cloudinary_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_format = {
  __typename?: 'MediaFields_cloudinary_format';
  create?: Maybe<MediaFields_cloudinary_format_Create>;
  delete?: Maybe<MediaFields_cloudinary_format_Delete>;
  read?: Maybe<MediaFields_cloudinary_format_Read>;
  update?: Maybe<MediaFields_cloudinary_format_Update>;
};

type MediaFields_cloudinary_format_Create = {
  __typename?: 'MediaFields_cloudinary_format_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_format_Delete = {
  __typename?: 'MediaFields_cloudinary_format_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_format_Read = {
  __typename?: 'MediaFields_cloudinary_format_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_format_Update = {
  __typename?: 'MediaFields_cloudinary_format_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_original_filename = {
  __typename?: 'MediaFields_cloudinary_original_filename';
  create?: Maybe<MediaFields_cloudinary_original_filename_Create>;
  delete?: Maybe<MediaFields_cloudinary_original_filename_Delete>;
  read?: Maybe<MediaFields_cloudinary_original_filename_Read>;
  update?: Maybe<MediaFields_cloudinary_original_filename_Update>;
};

type MediaFields_cloudinary_original_filename_Create = {
  __typename?: 'MediaFields_cloudinary_original_filename_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_original_filename_Delete = {
  __typename?: 'MediaFields_cloudinary_original_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_original_filename_Read = {
  __typename?: 'MediaFields_cloudinary_original_filename_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_original_filename_Update = {
  __typename?: 'MediaFields_cloudinary_original_filename_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_public_id = {
  __typename?: 'MediaFields_cloudinary_public_id';
  create?: Maybe<MediaFields_cloudinary_public_id_Create>;
  delete?: Maybe<MediaFields_cloudinary_public_id_Delete>;
  read?: Maybe<MediaFields_cloudinary_public_id_Read>;
  update?: Maybe<MediaFields_cloudinary_public_id_Update>;
};

type MediaFields_cloudinary_public_id_Create = {
  __typename?: 'MediaFields_cloudinary_public_id_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_public_id_Delete = {
  __typename?: 'MediaFields_cloudinary_public_id_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_public_id_Read = {
  __typename?: 'MediaFields_cloudinary_public_id_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_public_id_Update = {
  __typename?: 'MediaFields_cloudinary_public_id_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_resource_type = {
  __typename?: 'MediaFields_cloudinary_resource_type';
  create?: Maybe<MediaFields_cloudinary_resource_type_Create>;
  delete?: Maybe<MediaFields_cloudinary_resource_type_Delete>;
  read?: Maybe<MediaFields_cloudinary_resource_type_Read>;
  update?: Maybe<MediaFields_cloudinary_resource_type_Update>;
};

type MediaFields_cloudinary_resource_type_Create = {
  __typename?: 'MediaFields_cloudinary_resource_type_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_resource_type_Delete = {
  __typename?: 'MediaFields_cloudinary_resource_type_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_resource_type_Read = {
  __typename?: 'MediaFields_cloudinary_resource_type_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_resource_type_Update = {
  __typename?: 'MediaFields_cloudinary_resource_type_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_secure_url = {
  __typename?: 'MediaFields_cloudinary_secure_url';
  create?: Maybe<MediaFields_cloudinary_secure_url_Create>;
  delete?: Maybe<MediaFields_cloudinary_secure_url_Delete>;
  read?: Maybe<MediaFields_cloudinary_secure_url_Read>;
  update?: Maybe<MediaFields_cloudinary_secure_url_Update>;
};

type MediaFields_cloudinary_secure_url_Create = {
  __typename?: 'MediaFields_cloudinary_secure_url_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_secure_url_Delete = {
  __typename?: 'MediaFields_cloudinary_secure_url_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_secure_url_Read = {
  __typename?: 'MediaFields_cloudinary_secure_url_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_cloudinary_secure_url_Update = {
  __typename?: 'MediaFields_cloudinary_secure_url_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_createdAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_createdAt_Create>;
  delete?: Maybe<MediaFields_createdAt_Delete>;
  read?: Maybe<MediaFields_createdAt_Read>;
  update?: Maybe<MediaFields_createdAt_Update>;
};

type MediaFields_createdAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_createdAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_createdAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_createdAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_filename_Create>;
  delete?: Maybe<MediaFields_filename_Delete>;
  read?: Maybe<MediaFields_filename_Read>;
  update?: Maybe<MediaFields_filename_Update>;
};

type MediaFields_filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_filesize_Create>;
  delete?: Maybe<MediaFields_filesize_Delete>;
  read?: Maybe<MediaFields_filesize_Read>;
  update?: Maybe<MediaFields_filesize_Update>;
};

type MediaFields_filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_focalX = {
  __typename?: 'MediaFields_focalX';
  create?: Maybe<MediaFields_focalX_Create>;
  delete?: Maybe<MediaFields_focalX_Delete>;
  read?: Maybe<MediaFields_focalX_Read>;
  update?: Maybe<MediaFields_focalX_Update>;
};

type MediaFields_focalX_Create = {
  __typename?: 'MediaFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_focalX_Delete = {
  __typename?: 'MediaFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_focalX_Read = {
  __typename?: 'MediaFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_focalX_Update = {
  __typename?: 'MediaFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_focalY = {
  __typename?: 'MediaFields_focalY';
  create?: Maybe<MediaFields_focalY_Create>;
  delete?: Maybe<MediaFields_focalY_Delete>;
  read?: Maybe<MediaFields_focalY_Read>;
  update?: Maybe<MediaFields_focalY_Update>;
};

type MediaFields_focalY_Create = {
  __typename?: 'MediaFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_focalY_Delete = {
  __typename?: 'MediaFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_focalY_Read = {
  __typename?: 'MediaFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_focalY_Update = {
  __typename?: 'MediaFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_folder = {
  __typename?: 'MediaFields_folder';
  create?: Maybe<MediaFields_folder_Create>;
  delete?: Maybe<MediaFields_folder_Delete>;
  read?: Maybe<MediaFields_folder_Read>;
  update?: Maybe<MediaFields_folder_Update>;
};

type MediaFields_folder_Create = {
  __typename?: 'MediaFields_folder_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_folder_Delete = {
  __typename?: 'MediaFields_folder_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_folder_Read = {
  __typename?: 'MediaFields_folder_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_folder_Update = {
  __typename?: 'MediaFields_folder_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_height_Create>;
  delete?: Maybe<MediaFields_height_Delete>;
  read?: Maybe<MediaFields_height_Read>;
  update?: Maybe<MediaFields_height_Update>;
};

type MediaFields_height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_i18n = {
  __typename?: 'MediaFields_i18n';
  create?: Maybe<MediaFields_i18n_Create>;
  delete?: Maybe<MediaFields_i18n_Delete>;
  read?: Maybe<MediaFields_i18n_Read>;
  update?: Maybe<MediaFields_i18n_Update>;
};

type MediaFields_i18n_Create = {
  __typename?: 'MediaFields_i18n_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_i18n_Delete = {
  __typename?: 'MediaFields_i18n_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_i18n_Read = {
  __typename?: 'MediaFields_i18n_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_i18n_Update = {
  __typename?: 'MediaFields_i18n_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_mimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_mimeType_Create>;
  delete?: Maybe<MediaFields_mimeType_Delete>;
  read?: Maybe<MediaFields_mimeType_Read>;
  update?: Maybe<MediaFields_mimeType_Update>;
};

type MediaFields_mimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_mimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_mimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_mimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes = {
  __typename?: 'MediaFields_sizes';
  create?: Maybe<MediaFields_sizes_Create>;
  delete?: Maybe<MediaFields_sizes_Delete>;
  fields?: Maybe<MediaFields_sizes_Fields>;
  read?: Maybe<MediaFields_sizes_Read>;
  update?: Maybe<MediaFields_sizes_Update>;
};

type MediaFields_sizes_Create = {
  __typename?: 'MediaFields_sizes_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_Delete = {
  __typename?: 'MediaFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_Fields = {
  __typename?: 'MediaFields_sizes_Fields';
  card?: Maybe<MediaFields_sizes_card>;
  tablet?: Maybe<MediaFields_sizes_tablet>;
  thumbnail?: Maybe<MediaFields_sizes_thumbnail>;
};

type MediaFields_sizes_Read = {
  __typename?: 'MediaFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_Update = {
  __typename?: 'MediaFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card = {
  __typename?: 'MediaFields_sizes_card';
  create?: Maybe<MediaFields_sizes_card_Create>;
  delete?: Maybe<MediaFields_sizes_card_Delete>;
  fields?: Maybe<MediaFields_sizes_card_Fields>;
  read?: Maybe<MediaFields_sizes_card_Read>;
  update?: Maybe<MediaFields_sizes_card_Update>;
};

type MediaFields_sizes_card_Create = {
  __typename?: 'MediaFields_sizes_card_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_Delete = {
  __typename?: 'MediaFields_sizes_card_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_Fields = {
  __typename?: 'MediaFields_sizes_card_Fields';
  filename?: Maybe<MediaFields_sizes_card_filename>;
  filesize?: Maybe<MediaFields_sizes_card_filesize>;
  height?: Maybe<MediaFields_sizes_card_height>;
  mimeType?: Maybe<MediaFields_sizes_card_mimeType>;
  url?: Maybe<MediaFields_sizes_card_url>;
  width?: Maybe<MediaFields_sizes_card_width>;
};

type MediaFields_sizes_card_Read = {
  __typename?: 'MediaFields_sizes_card_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_Update = {
  __typename?: 'MediaFields_sizes_card_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_filename = {
  __typename?: 'MediaFields_sizes_card_filename';
  create?: Maybe<MediaFields_sizes_card_filename_Create>;
  delete?: Maybe<MediaFields_sizes_card_filename_Delete>;
  read?: Maybe<MediaFields_sizes_card_filename_Read>;
  update?: Maybe<MediaFields_sizes_card_filename_Update>;
};

type MediaFields_sizes_card_filename_Create = {
  __typename?: 'MediaFields_sizes_card_filename_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_filename_Delete = {
  __typename?: 'MediaFields_sizes_card_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_filename_Read = {
  __typename?: 'MediaFields_sizes_card_filename_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_filename_Update = {
  __typename?: 'MediaFields_sizes_card_filename_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_filesize = {
  __typename?: 'MediaFields_sizes_card_filesize';
  create?: Maybe<MediaFields_sizes_card_filesize_Create>;
  delete?: Maybe<MediaFields_sizes_card_filesize_Delete>;
  read?: Maybe<MediaFields_sizes_card_filesize_Read>;
  update?: Maybe<MediaFields_sizes_card_filesize_Update>;
};

type MediaFields_sizes_card_filesize_Create = {
  __typename?: 'MediaFields_sizes_card_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_filesize_Delete = {
  __typename?: 'MediaFields_sizes_card_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_filesize_Read = {
  __typename?: 'MediaFields_sizes_card_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_filesize_Update = {
  __typename?: 'MediaFields_sizes_card_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_height = {
  __typename?: 'MediaFields_sizes_card_height';
  create?: Maybe<MediaFields_sizes_card_height_Create>;
  delete?: Maybe<MediaFields_sizes_card_height_Delete>;
  read?: Maybe<MediaFields_sizes_card_height_Read>;
  update?: Maybe<MediaFields_sizes_card_height_Update>;
};

type MediaFields_sizes_card_height_Create = {
  __typename?: 'MediaFields_sizes_card_height_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_height_Delete = {
  __typename?: 'MediaFields_sizes_card_height_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_height_Read = {
  __typename?: 'MediaFields_sizes_card_height_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_height_Update = {
  __typename?: 'MediaFields_sizes_card_height_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_mimeType = {
  __typename?: 'MediaFields_sizes_card_mimeType';
  create?: Maybe<MediaFields_sizes_card_mimeType_Create>;
  delete?: Maybe<MediaFields_sizes_card_mimeType_Delete>;
  read?: Maybe<MediaFields_sizes_card_mimeType_Read>;
  update?: Maybe<MediaFields_sizes_card_mimeType_Update>;
};

type MediaFields_sizes_card_mimeType_Create = {
  __typename?: 'MediaFields_sizes_card_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_mimeType_Delete = {
  __typename?: 'MediaFields_sizes_card_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_mimeType_Read = {
  __typename?: 'MediaFields_sizes_card_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_mimeType_Update = {
  __typename?: 'MediaFields_sizes_card_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_url = {
  __typename?: 'MediaFields_sizes_card_url';
  create?: Maybe<MediaFields_sizes_card_url_Create>;
  delete?: Maybe<MediaFields_sizes_card_url_Delete>;
  read?: Maybe<MediaFields_sizes_card_url_Read>;
  update?: Maybe<MediaFields_sizes_card_url_Update>;
};

type MediaFields_sizes_card_url_Create = {
  __typename?: 'MediaFields_sizes_card_url_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_url_Delete = {
  __typename?: 'MediaFields_sizes_card_url_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_url_Read = {
  __typename?: 'MediaFields_sizes_card_url_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_url_Update = {
  __typename?: 'MediaFields_sizes_card_url_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_width = {
  __typename?: 'MediaFields_sizes_card_width';
  create?: Maybe<MediaFields_sizes_card_width_Create>;
  delete?: Maybe<MediaFields_sizes_card_width_Delete>;
  read?: Maybe<MediaFields_sizes_card_width_Read>;
  update?: Maybe<MediaFields_sizes_card_width_Update>;
};

type MediaFields_sizes_card_width_Create = {
  __typename?: 'MediaFields_sizes_card_width_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_width_Delete = {
  __typename?: 'MediaFields_sizes_card_width_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_width_Read = {
  __typename?: 'MediaFields_sizes_card_width_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_card_width_Update = {
  __typename?: 'MediaFields_sizes_card_width_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet = {
  __typename?: 'MediaFields_sizes_tablet';
  create?: Maybe<MediaFields_sizes_tablet_Create>;
  delete?: Maybe<MediaFields_sizes_tablet_Delete>;
  fields?: Maybe<MediaFields_sizes_tablet_Fields>;
  read?: Maybe<MediaFields_sizes_tablet_Read>;
  update?: Maybe<MediaFields_sizes_tablet_Update>;
};

type MediaFields_sizes_tablet_Create = {
  __typename?: 'MediaFields_sizes_tablet_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_Delete = {
  __typename?: 'MediaFields_sizes_tablet_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_Fields = {
  __typename?: 'MediaFields_sizes_tablet_Fields';
  filename?: Maybe<MediaFields_sizes_tablet_filename>;
  filesize?: Maybe<MediaFields_sizes_tablet_filesize>;
  height?: Maybe<MediaFields_sizes_tablet_height>;
  mimeType?: Maybe<MediaFields_sizes_tablet_mimeType>;
  url?: Maybe<MediaFields_sizes_tablet_url>;
  width?: Maybe<MediaFields_sizes_tablet_width>;
};

type MediaFields_sizes_tablet_Read = {
  __typename?: 'MediaFields_sizes_tablet_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_Update = {
  __typename?: 'MediaFields_sizes_tablet_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_filename = {
  __typename?: 'MediaFields_sizes_tablet_filename';
  create?: Maybe<MediaFields_sizes_tablet_filename_Create>;
  delete?: Maybe<MediaFields_sizes_tablet_filename_Delete>;
  read?: Maybe<MediaFields_sizes_tablet_filename_Read>;
  update?: Maybe<MediaFields_sizes_tablet_filename_Update>;
};

type MediaFields_sizes_tablet_filename_Create = {
  __typename?: 'MediaFields_sizes_tablet_filename_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_filename_Delete = {
  __typename?: 'MediaFields_sizes_tablet_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_filename_Read = {
  __typename?: 'MediaFields_sizes_tablet_filename_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_filename_Update = {
  __typename?: 'MediaFields_sizes_tablet_filename_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_filesize = {
  __typename?: 'MediaFields_sizes_tablet_filesize';
  create?: Maybe<MediaFields_sizes_tablet_filesize_Create>;
  delete?: Maybe<MediaFields_sizes_tablet_filesize_Delete>;
  read?: Maybe<MediaFields_sizes_tablet_filesize_Read>;
  update?: Maybe<MediaFields_sizes_tablet_filesize_Update>;
};

type MediaFields_sizes_tablet_filesize_Create = {
  __typename?: 'MediaFields_sizes_tablet_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_filesize_Delete = {
  __typename?: 'MediaFields_sizes_tablet_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_filesize_Read = {
  __typename?: 'MediaFields_sizes_tablet_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_filesize_Update = {
  __typename?: 'MediaFields_sizes_tablet_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_height = {
  __typename?: 'MediaFields_sizes_tablet_height';
  create?: Maybe<MediaFields_sizes_tablet_height_Create>;
  delete?: Maybe<MediaFields_sizes_tablet_height_Delete>;
  read?: Maybe<MediaFields_sizes_tablet_height_Read>;
  update?: Maybe<MediaFields_sizes_tablet_height_Update>;
};

type MediaFields_sizes_tablet_height_Create = {
  __typename?: 'MediaFields_sizes_tablet_height_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_height_Delete = {
  __typename?: 'MediaFields_sizes_tablet_height_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_height_Read = {
  __typename?: 'MediaFields_sizes_tablet_height_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_height_Update = {
  __typename?: 'MediaFields_sizes_tablet_height_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_mimeType = {
  __typename?: 'MediaFields_sizes_tablet_mimeType';
  create?: Maybe<MediaFields_sizes_tablet_mimeType_Create>;
  delete?: Maybe<MediaFields_sizes_tablet_mimeType_Delete>;
  read?: Maybe<MediaFields_sizes_tablet_mimeType_Read>;
  update?: Maybe<MediaFields_sizes_tablet_mimeType_Update>;
};

type MediaFields_sizes_tablet_mimeType_Create = {
  __typename?: 'MediaFields_sizes_tablet_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_mimeType_Delete = {
  __typename?: 'MediaFields_sizes_tablet_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_mimeType_Read = {
  __typename?: 'MediaFields_sizes_tablet_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_mimeType_Update = {
  __typename?: 'MediaFields_sizes_tablet_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_url = {
  __typename?: 'MediaFields_sizes_tablet_url';
  create?: Maybe<MediaFields_sizes_tablet_url_Create>;
  delete?: Maybe<MediaFields_sizes_tablet_url_Delete>;
  read?: Maybe<MediaFields_sizes_tablet_url_Read>;
  update?: Maybe<MediaFields_sizes_tablet_url_Update>;
};

type MediaFields_sizes_tablet_url_Create = {
  __typename?: 'MediaFields_sizes_tablet_url_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_url_Delete = {
  __typename?: 'MediaFields_sizes_tablet_url_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_url_Read = {
  __typename?: 'MediaFields_sizes_tablet_url_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_url_Update = {
  __typename?: 'MediaFields_sizes_tablet_url_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_width = {
  __typename?: 'MediaFields_sizes_tablet_width';
  create?: Maybe<MediaFields_sizes_tablet_width_Create>;
  delete?: Maybe<MediaFields_sizes_tablet_width_Delete>;
  read?: Maybe<MediaFields_sizes_tablet_width_Read>;
  update?: Maybe<MediaFields_sizes_tablet_width_Update>;
};

type MediaFields_sizes_tablet_width_Create = {
  __typename?: 'MediaFields_sizes_tablet_width_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_width_Delete = {
  __typename?: 'MediaFields_sizes_tablet_width_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_width_Read = {
  __typename?: 'MediaFields_sizes_tablet_width_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_tablet_width_Update = {
  __typename?: 'MediaFields_sizes_tablet_width_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail = {
  __typename?: 'MediaFields_sizes_thumbnail';
  create?: Maybe<MediaFields_sizes_thumbnail_Create>;
  delete?: Maybe<MediaFields_sizes_thumbnail_Delete>;
  fields?: Maybe<MediaFields_sizes_thumbnail_Fields>;
  read?: Maybe<MediaFields_sizes_thumbnail_Read>;
  update?: Maybe<MediaFields_sizes_thumbnail_Update>;
};

type MediaFields_sizes_thumbnail_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_Fields = {
  __typename?: 'MediaFields_sizes_thumbnail_Fields';
  filename?: Maybe<MediaFields_sizes_thumbnail_filename>;
  filesize?: Maybe<MediaFields_sizes_thumbnail_filesize>;
  height?: Maybe<MediaFields_sizes_thumbnail_height>;
  mimeType?: Maybe<MediaFields_sizes_thumbnail_mimeType>;
  url?: Maybe<MediaFields_sizes_thumbnail_url>;
  width?: Maybe<MediaFields_sizes_thumbnail_width>;
};

type MediaFields_sizes_thumbnail_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_filename = {
  __typename?: 'MediaFields_sizes_thumbnail_filename';
  create?: Maybe<MediaFields_sizes_thumbnail_filename_Create>;
  delete?: Maybe<MediaFields_sizes_thumbnail_filename_Delete>;
  read?: Maybe<MediaFields_sizes_thumbnail_filename_Read>;
  update?: Maybe<MediaFields_sizes_thumbnail_filename_Update>;
};

type MediaFields_sizes_thumbnail_filename_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_filename_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_filename_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_filename_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_filesize = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize';
  create?: Maybe<MediaFields_sizes_thumbnail_filesize_Create>;
  delete?: Maybe<MediaFields_sizes_thumbnail_filesize_Delete>;
  read?: Maybe<MediaFields_sizes_thumbnail_filesize_Read>;
  update?: Maybe<MediaFields_sizes_thumbnail_filesize_Update>;
};

type MediaFields_sizes_thumbnail_filesize_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_filesize_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_filesize_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_filesize_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_height = {
  __typename?: 'MediaFields_sizes_thumbnail_height';
  create?: Maybe<MediaFields_sizes_thumbnail_height_Create>;
  delete?: Maybe<MediaFields_sizes_thumbnail_height_Delete>;
  read?: Maybe<MediaFields_sizes_thumbnail_height_Read>;
  update?: Maybe<MediaFields_sizes_thumbnail_height_Update>;
};

type MediaFields_sizes_thumbnail_height_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_height_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_height_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_height_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_mimeType = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType';
  create?: Maybe<MediaFields_sizes_thumbnail_mimeType_Create>;
  delete?: Maybe<MediaFields_sizes_thumbnail_mimeType_Delete>;
  read?: Maybe<MediaFields_sizes_thumbnail_mimeType_Read>;
  update?: Maybe<MediaFields_sizes_thumbnail_mimeType_Update>;
};

type MediaFields_sizes_thumbnail_mimeType_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_mimeType_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_mimeType_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_mimeType_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_url = {
  __typename?: 'MediaFields_sizes_thumbnail_url';
  create?: Maybe<MediaFields_sizes_thumbnail_url_Create>;
  delete?: Maybe<MediaFields_sizes_thumbnail_url_Delete>;
  read?: Maybe<MediaFields_sizes_thumbnail_url_Read>;
  update?: Maybe<MediaFields_sizes_thumbnail_url_Update>;
};

type MediaFields_sizes_thumbnail_url_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_url_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_url_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_url_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_width = {
  __typename?: 'MediaFields_sizes_thumbnail_width';
  create?: Maybe<MediaFields_sizes_thumbnail_width_Create>;
  delete?: Maybe<MediaFields_sizes_thumbnail_width_Delete>;
  read?: Maybe<MediaFields_sizes_thumbnail_width_Read>;
  update?: Maybe<MediaFields_sizes_thumbnail_width_Update>;
};

type MediaFields_sizes_thumbnail_width_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_width_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_width_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_sizes_thumbnail_width_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_thumbnailURL = {
  __typename?: 'MediaFields_thumbnailURL';
  create?: Maybe<MediaFields_thumbnailURL_Create>;
  delete?: Maybe<MediaFields_thumbnailURL_Delete>;
  read?: Maybe<MediaFields_thumbnailURL_Read>;
  update?: Maybe<MediaFields_thumbnailURL_Update>;
};

type MediaFields_thumbnailURL_Create = {
  __typename?: 'MediaFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_thumbnailURL_Delete = {
  __typename?: 'MediaFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_thumbnailURL_Read = {
  __typename?: 'MediaFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_thumbnailURL_Update = {
  __typename?: 'MediaFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_updatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_updatedAt_Create>;
  delete?: Maybe<MediaFields_updatedAt_Delete>;
  read?: Maybe<MediaFields_updatedAt_Read>;
  update?: Maybe<MediaFields_updatedAt_Update>;
};

type MediaFields_updatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_updatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_updatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_updatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_url_Create>;
  delete?: Maybe<MediaFields_url_Delete>;
  read?: Maybe<MediaFields_url_Read>;
  update?: Maybe<MediaFields_url_Update>;
};

type MediaFields_url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_width_Create>;
  delete?: Maybe<MediaFields_width_Delete>;
  read?: Maybe<MediaFields_width_Read>;
  update?: Maybe<MediaFields_width_Update>;
};

type MediaFields_width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

type MediaFields_width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type Media_Cloudinary = {
  __typename?: 'Media_Cloudinary';
  format?: Maybe<Scalars['String']['output']>;
  original_filename?: Maybe<Scalars['String']['output']>;
  public_id?: Maybe<Scalars['String']['output']>;
  resource_type?: Maybe<Scalars['String']['output']>;
  secure_url?: Maybe<Scalars['String']['output']>;
};

type Media_Sizes = {
  __typename?: 'Media_Sizes';
  card?: Maybe<Media_Sizes_Card>;
  tablet?: Maybe<Media_Sizes_Tablet>;
  thumbnail?: Maybe<Media_Sizes_Thumbnail>;
};

type Media_Sizes_Card = {
  __typename?: 'Media_Sizes_Card';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

type Media_Sizes_Tablet = {
  __typename?: 'Media_Sizes_Tablet';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

type Media_Sizes_Thumbnail = {
  __typename?: 'Media_Sizes_Thumbnail';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

type Media_alt_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_cloudinary__format_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_cloudinary__original_filename_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_cloudinary__public_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_cloudinary__resource_type_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_cloudinary__secure_url_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type Media_filename_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_filesize_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

type Media_focalX_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

type Media_focalY_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

type Media_folder_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

type Media_height_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

type Media_i18n_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_mimeType_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_sizes__card__filename_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_sizes__card__filesize_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

type Media_sizes__card__height_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

type Media_sizes__card__mimeType_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_sizes__card__url_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_sizes__card__width_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

type Media_sizes__tablet__filename_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_sizes__tablet__filesize_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

type Media_sizes__tablet__height_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

type Media_sizes__tablet__mimeType_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_sizes__tablet__url_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_sizes__tablet__width_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

type Media_sizes__thumbnail__filename_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_sizes__thumbnail__filesize_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

type Media_sizes__thumbnail__height_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

type Media_sizes__thumbnail__mimeType_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_sizes__thumbnail__url_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_sizes__thumbnail__width_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

type Media_thumbnailURL_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type Media_url_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Media_where = {
  AND?: InputMaybe<Array<InputMaybe<Media_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_where_or>>>;
  alt?: InputMaybe<Media_alt_operator>;
  cloudinary__format?: InputMaybe<Media_cloudinary__format_operator>;
  cloudinary__original_filename?: InputMaybe<Media_cloudinary__original_filename_operator>;
  cloudinary__public_id?: InputMaybe<Media_cloudinary__public_id_operator>;
  cloudinary__resource_type?: InputMaybe<Media_cloudinary__resource_type_operator>;
  cloudinary__secure_url?: InputMaybe<Media_cloudinary__secure_url_operator>;
  createdAt?: InputMaybe<Media_createdAt_operator>;
  filename?: InputMaybe<Media_filename_operator>;
  filesize?: InputMaybe<Media_filesize_operator>;
  focalX?: InputMaybe<Media_focalX_operator>;
  focalY?: InputMaybe<Media_focalY_operator>;
  folder?: InputMaybe<Media_folder_operator>;
  height?: InputMaybe<Media_height_operator>;
  i18n?: InputMaybe<Media_i18n_operator>;
  id?: InputMaybe<Media_id_operator>;
  mimeType?: InputMaybe<Media_mimeType_operator>;
  sizes__card__filename?: InputMaybe<Media_sizes__card__filename_operator>;
  sizes__card__filesize?: InputMaybe<Media_sizes__card__filesize_operator>;
  sizes__card__height?: InputMaybe<Media_sizes__card__height_operator>;
  sizes__card__mimeType?: InputMaybe<Media_sizes__card__mimeType_operator>;
  sizes__card__url?: InputMaybe<Media_sizes__card__url_operator>;
  sizes__card__width?: InputMaybe<Media_sizes__card__width_operator>;
  sizes__tablet__filename?: InputMaybe<Media_sizes__tablet__filename_operator>;
  sizes__tablet__filesize?: InputMaybe<Media_sizes__tablet__filesize_operator>;
  sizes__tablet__height?: InputMaybe<Media_sizes__tablet__height_operator>;
  sizes__tablet__mimeType?: InputMaybe<Media_sizes__tablet__mimeType_operator>;
  sizes__tablet__url?: InputMaybe<Media_sizes__tablet__url_operator>;
  sizes__tablet__width?: InputMaybe<Media_sizes__tablet__width_operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_sizes__thumbnail__filename_operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_sizes__thumbnail__filesize_operator>;
  sizes__thumbnail__height?: InputMaybe<Media_sizes__thumbnail__height_operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_sizes__thumbnail__mimeType_operator>;
  sizes__thumbnail__url?: InputMaybe<Media_sizes__thumbnail__url_operator>;
  sizes__thumbnail__width?: InputMaybe<Media_sizes__thumbnail__width_operator>;
  thumbnailURL?: InputMaybe<Media_thumbnailURL_operator>;
  updatedAt?: InputMaybe<Media_updatedAt_operator>;
  url?: InputMaybe<Media_url_operator>;
  width?: InputMaybe<Media_width_operator>;
};

type Media_where_and = {
  AND?: InputMaybe<Array<InputMaybe<Media_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_where_or>>>;
  alt?: InputMaybe<Media_alt_operator>;
  cloudinary__format?: InputMaybe<Media_cloudinary__format_operator>;
  cloudinary__original_filename?: InputMaybe<Media_cloudinary__original_filename_operator>;
  cloudinary__public_id?: InputMaybe<Media_cloudinary__public_id_operator>;
  cloudinary__resource_type?: InputMaybe<Media_cloudinary__resource_type_operator>;
  cloudinary__secure_url?: InputMaybe<Media_cloudinary__secure_url_operator>;
  createdAt?: InputMaybe<Media_createdAt_operator>;
  filename?: InputMaybe<Media_filename_operator>;
  filesize?: InputMaybe<Media_filesize_operator>;
  focalX?: InputMaybe<Media_focalX_operator>;
  focalY?: InputMaybe<Media_focalY_operator>;
  folder?: InputMaybe<Media_folder_operator>;
  height?: InputMaybe<Media_height_operator>;
  i18n?: InputMaybe<Media_i18n_operator>;
  id?: InputMaybe<Media_id_operator>;
  mimeType?: InputMaybe<Media_mimeType_operator>;
  sizes__card__filename?: InputMaybe<Media_sizes__card__filename_operator>;
  sizes__card__filesize?: InputMaybe<Media_sizes__card__filesize_operator>;
  sizes__card__height?: InputMaybe<Media_sizes__card__height_operator>;
  sizes__card__mimeType?: InputMaybe<Media_sizes__card__mimeType_operator>;
  sizes__card__url?: InputMaybe<Media_sizes__card__url_operator>;
  sizes__card__width?: InputMaybe<Media_sizes__card__width_operator>;
  sizes__tablet__filename?: InputMaybe<Media_sizes__tablet__filename_operator>;
  sizes__tablet__filesize?: InputMaybe<Media_sizes__tablet__filesize_operator>;
  sizes__tablet__height?: InputMaybe<Media_sizes__tablet__height_operator>;
  sizes__tablet__mimeType?: InputMaybe<Media_sizes__tablet__mimeType_operator>;
  sizes__tablet__url?: InputMaybe<Media_sizes__tablet__url_operator>;
  sizes__tablet__width?: InputMaybe<Media_sizes__tablet__width_operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_sizes__thumbnail__filename_operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_sizes__thumbnail__filesize_operator>;
  sizes__thumbnail__height?: InputMaybe<Media_sizes__thumbnail__height_operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_sizes__thumbnail__mimeType_operator>;
  sizes__thumbnail__url?: InputMaybe<Media_sizes__thumbnail__url_operator>;
  sizes__thumbnail__width?: InputMaybe<Media_sizes__thumbnail__width_operator>;
  thumbnailURL?: InputMaybe<Media_thumbnailURL_operator>;
  updatedAt?: InputMaybe<Media_updatedAt_operator>;
  url?: InputMaybe<Media_url_operator>;
  width?: InputMaybe<Media_width_operator>;
};

type Media_where_or = {
  AND?: InputMaybe<Array<InputMaybe<Media_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_where_or>>>;
  alt?: InputMaybe<Media_alt_operator>;
  cloudinary__format?: InputMaybe<Media_cloudinary__format_operator>;
  cloudinary__original_filename?: InputMaybe<Media_cloudinary__original_filename_operator>;
  cloudinary__public_id?: InputMaybe<Media_cloudinary__public_id_operator>;
  cloudinary__resource_type?: InputMaybe<Media_cloudinary__resource_type_operator>;
  cloudinary__secure_url?: InputMaybe<Media_cloudinary__secure_url_operator>;
  createdAt?: InputMaybe<Media_createdAt_operator>;
  filename?: InputMaybe<Media_filename_operator>;
  filesize?: InputMaybe<Media_filesize_operator>;
  focalX?: InputMaybe<Media_focalX_operator>;
  focalY?: InputMaybe<Media_focalY_operator>;
  folder?: InputMaybe<Media_folder_operator>;
  height?: InputMaybe<Media_height_operator>;
  i18n?: InputMaybe<Media_i18n_operator>;
  id?: InputMaybe<Media_id_operator>;
  mimeType?: InputMaybe<Media_mimeType_operator>;
  sizes__card__filename?: InputMaybe<Media_sizes__card__filename_operator>;
  sizes__card__filesize?: InputMaybe<Media_sizes__card__filesize_operator>;
  sizes__card__height?: InputMaybe<Media_sizes__card__height_operator>;
  sizes__card__mimeType?: InputMaybe<Media_sizes__card__mimeType_operator>;
  sizes__card__url?: InputMaybe<Media_sizes__card__url_operator>;
  sizes__card__width?: InputMaybe<Media_sizes__card__width_operator>;
  sizes__tablet__filename?: InputMaybe<Media_sizes__tablet__filename_operator>;
  sizes__tablet__filesize?: InputMaybe<Media_sizes__tablet__filesize_operator>;
  sizes__tablet__height?: InputMaybe<Media_sizes__tablet__height_operator>;
  sizes__tablet__mimeType?: InputMaybe<Media_sizes__tablet__mimeType_operator>;
  sizes__tablet__url?: InputMaybe<Media_sizes__tablet__url_operator>;
  sizes__tablet__width?: InputMaybe<Media_sizes__tablet__width_operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_sizes__thumbnail__filename_operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_sizes__thumbnail__filesize_operator>;
  sizes__thumbnail__height?: InputMaybe<Media_sizes__thumbnail__height_operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_sizes__thumbnail__mimeType_operator>;
  sizes__thumbnail__url?: InputMaybe<Media_sizes__thumbnail__url_operator>;
  sizes__thumbnail__width?: InputMaybe<Media_sizes__thumbnail__width_operator>;
  thumbnailURL?: InputMaybe<Media_thumbnailURL_operator>;
  updatedAt?: InputMaybe<Media_updatedAt_operator>;
  url?: InputMaybe<Media_url_operator>;
  width?: InputMaybe<Media_width_operator>;
};

type Media_width_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

type Mutation = {
  __typename?: 'Mutation';
  createAuthor?: Maybe<Author>;
  createFolder?: Maybe<Folder>;
  createMedia?: Maybe<Media>;
  createPayloadKv?: Maybe<PayloadKv>;
  createPayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createPost?: Maybe<Post>;
  createUser?: Maybe<User>;
  deleteAuthor?: Maybe<Author>;
  deleteFolder?: Maybe<Folder>;
  deleteMedia?: Maybe<Media>;
  deletePayloadKv?: Maybe<PayloadKv>;
  deletePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deletePost?: Maybe<Post>;
  deleteUser?: Maybe<User>;
  duplicateAuthor?: Maybe<Author>;
  duplicateFolder?: Maybe<Folder>;
  duplicateMedia?: Maybe<Media>;
  duplicatePayloadKv?: Maybe<PayloadKv>;
  duplicatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  duplicatePayloadPreference?: Maybe<PayloadPreference>;
  duplicatePost?: Maybe<Post>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<usersLoginResult>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  refreshTokenUser?: Maybe<usersRefreshedUser>;
  resetPasswordUser?: Maybe<usersResetPassword>;
  restoreVersionHome?: Maybe<Home>;
  restoreVersionPost?: Maybe<Post>;
  unlockUser: Scalars['Boolean']['output'];
  updateAuthor?: Maybe<Author>;
  updateFolder?: Maybe<Folder>;
  updateHome?: Maybe<Home>;
  updateMedia?: Maybe<Media>;
  updatePayloadKv?: Maybe<PayloadKv>;
  updatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updatePost?: Maybe<Post>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};


type MutationcreateAuthorArgs = {
  data: mutationAuthorInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


type MutationcreateFolderArgs = {
  data: mutationFolderInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


type MutationcreateMediaArgs = {
  data: mutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


type MutationcreatePayloadKvArgs = {
  data: mutationPayloadKvInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


type MutationcreatePayloadLockedDocumentArgs = {
  data: mutationPayloadLockedDocumentInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


type MutationcreatePayloadPreferenceArgs = {
  data: mutationPayloadPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


type MutationcreatePostArgs = {
  data: mutationPostInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


type MutationcreateUserArgs = {
  data: mutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


type MutationdeleteAuthorArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type MutationdeleteFolderArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type MutationdeleteMediaArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type MutationdeletePayloadKvArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type MutationdeletePayloadLockedDocumentArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type MutationdeletePayloadPreferenceArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type MutationdeletePostArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type MutationdeleteUserArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type MutationduplicateAuthorArgs = {
  data: mutationAuthorInput;
  id: Scalars['String']['input'];
};


type MutationduplicateFolderArgs = {
  data: mutationFolderInput;
  id: Scalars['String']['input'];
};


type MutationduplicateMediaArgs = {
  data: mutationMediaInput;
  id: Scalars['String']['input'];
};


type MutationduplicatePayloadKvArgs = {
  data: mutationPayloadKvInput;
  id: Scalars['String']['input'];
};


type MutationduplicatePayloadLockedDocumentArgs = {
  data: mutationPayloadLockedDocumentInput;
  id: Scalars['String']['input'];
};


type MutationduplicatePayloadPreferenceArgs = {
  data: mutationPayloadPreferenceInput;
  id: Scalars['String']['input'];
};


type MutationduplicatePostArgs = {
  data: mutationPostInput;
  id: Scalars['String']['input'];
};


type MutationforgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  expiration?: InputMaybe<Scalars['Int']['input']>;
};


type MutationloginUserArgs = {
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


type MutationlogoutUserArgs = {
  allSessions?: InputMaybe<Scalars['Boolean']['input']>;
};


type MutationresetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


type MutationrestoreVersionHomeArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


type MutationrestoreVersionPostArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


type MutationunlockUserArgs = {
  email: Scalars['String']['input'];
};


type MutationupdateAuthorArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationAuthorUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type MutationupdateFolderArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationFolderUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type MutationupdateHomeArgs = {
  data: mutationHomeInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


type MutationupdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type MutationupdatePayloadKvArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationPayloadKvUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type MutationupdatePayloadLockedDocumentArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationPayloadLockedDocumentUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type MutationupdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type MutationupdatePostArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationPostUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type MutationupdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type MutationverifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

type PayloadKv = {
  __typename?: 'PayloadKv';
  data: Scalars['JSON']['output'];
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
};

type PayloadKvCreateAccess = {
  __typename?: 'PayloadKvCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadKvCreateDocAccess = {
  __typename?: 'PayloadKvCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadKvDeleteAccess = {
  __typename?: 'PayloadKvDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadKvDeleteDocAccess = {
  __typename?: 'PayloadKvDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadKvDocAccessFields = {
  __typename?: 'PayloadKvDocAccessFields';
  data?: Maybe<PayloadKvDocAccessFields_data>;
  key?: Maybe<PayloadKvDocAccessFields_key>;
};

type PayloadKvDocAccessFields_data = {
  __typename?: 'PayloadKvDocAccessFields_data';
  create?: Maybe<PayloadKvDocAccessFields_data_Create>;
  delete?: Maybe<PayloadKvDocAccessFields_data_Delete>;
  read?: Maybe<PayloadKvDocAccessFields_data_Read>;
  update?: Maybe<PayloadKvDocAccessFields_data_Update>;
};

type PayloadKvDocAccessFields_data_Create = {
  __typename?: 'PayloadKvDocAccessFields_data_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadKvDocAccessFields_data_Delete = {
  __typename?: 'PayloadKvDocAccessFields_data_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadKvDocAccessFields_data_Read = {
  __typename?: 'PayloadKvDocAccessFields_data_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadKvDocAccessFields_data_Update = {
  __typename?: 'PayloadKvDocAccessFields_data_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadKvDocAccessFields_key = {
  __typename?: 'PayloadKvDocAccessFields_key';
  create?: Maybe<PayloadKvDocAccessFields_key_Create>;
  delete?: Maybe<PayloadKvDocAccessFields_key_Delete>;
  read?: Maybe<PayloadKvDocAccessFields_key_Read>;
  update?: Maybe<PayloadKvDocAccessFields_key_Update>;
};

type PayloadKvDocAccessFields_key_Create = {
  __typename?: 'PayloadKvDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadKvDocAccessFields_key_Delete = {
  __typename?: 'PayloadKvDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadKvDocAccessFields_key_Read = {
  __typename?: 'PayloadKvDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadKvDocAccessFields_key_Update = {
  __typename?: 'PayloadKvDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadKvFields = {
  __typename?: 'PayloadKvFields';
  data?: Maybe<PayloadKvFields_data>;
  key?: Maybe<PayloadKvFields_key>;
};

type PayloadKvFields_data = {
  __typename?: 'PayloadKvFields_data';
  create?: Maybe<PayloadKvFields_data_Create>;
  delete?: Maybe<PayloadKvFields_data_Delete>;
  read?: Maybe<PayloadKvFields_data_Read>;
  update?: Maybe<PayloadKvFields_data_Update>;
};

type PayloadKvFields_data_Create = {
  __typename?: 'PayloadKvFields_data_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadKvFields_data_Delete = {
  __typename?: 'PayloadKvFields_data_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadKvFields_data_Read = {
  __typename?: 'PayloadKvFields_data_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadKvFields_data_Update = {
  __typename?: 'PayloadKvFields_data_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadKvFields_key = {
  __typename?: 'PayloadKvFields_key';
  create?: Maybe<PayloadKvFields_key_Create>;
  delete?: Maybe<PayloadKvFields_key_Delete>;
  read?: Maybe<PayloadKvFields_key_Read>;
  update?: Maybe<PayloadKvFields_key_Update>;
};

type PayloadKvFields_key_Create = {
  __typename?: 'PayloadKvFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadKvFields_key_Delete = {
  __typename?: 'PayloadKvFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadKvFields_key_Read = {
  __typename?: 'PayloadKvFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadKvFields_key_Update = {
  __typename?: 'PayloadKvFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadKvReadAccess = {
  __typename?: 'PayloadKvReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadKvReadDocAccess = {
  __typename?: 'PayloadKvReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadKvUpdateAccess = {
  __typename?: 'PayloadKvUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadKvUpdateDocAccess = {
  __typename?: 'PayloadKvUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadKv_data_operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

type PayloadKv_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type PayloadKv_key_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type PayloadKv_where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_where_or>>>;
  data?: InputMaybe<PayloadKv_data_operator>;
  id?: InputMaybe<PayloadKv_id_operator>;
  key?: InputMaybe<PayloadKv_key_operator>;
};

type PayloadKv_where_and = {
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_where_or>>>;
  data?: InputMaybe<PayloadKv_data_operator>;
  id?: InputMaybe<PayloadKv_id_operator>;
  key?: InputMaybe<PayloadKv_key_operator>;
};

type PayloadKv_where_or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_where_or>>>;
  data?: InputMaybe<PayloadKv_data_operator>;
  id?: InputMaybe<PayloadKv_id_operator>;
  key?: InputMaybe<PayloadKv_key_operator>;
};

type PayloadKvs = {
  __typename?: 'PayloadKvs';
  docs: Array<PayloadKv>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

type PayloadLockedDocument = {
  __typename?: 'PayloadLockedDocument';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  document?: Maybe<PayloadLockedDocument_Document_Relationship>;
  globalSlug?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadLockedDocument_User_Relationship;
};


type PayloadLockedDocumentdocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


type PayloadLockedDocumentuserArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

type PayloadLockedDocumentUpdate_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

enum PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo {
  authors = 'authors',
  folder = 'folder',
  media = 'media',
  posts = 'posts',
  users = 'users'
}

type PayloadLockedDocumentUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

enum PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo {
  users = 'users'
}

type PayloadLockedDocument_Document = Author | Folder | Media | Post | User;

type PayloadLockedDocument_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

enum PayloadLockedDocument_DocumentRelationshipInputRelationTo {
  authors = 'authors',
  folder = 'folder',
  media = 'media',
  posts = 'posts',
  users = 'users'
}

enum PayloadLockedDocument_Document_RelationTo {
  authors = 'authors',
  folder = 'folder',
  media = 'media',
  posts = 'posts',
  users = 'users'
}

type PayloadLockedDocument_Document_Relationship = {
  __typename?: 'PayloadLockedDocument_Document_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_Document_RelationTo>;
  value?: Maybe<PayloadLockedDocument_Document>;
};

type PayloadLockedDocument_User = User;

type PayloadLockedDocument_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

enum PayloadLockedDocument_UserRelationshipInputRelationTo {
  users = 'users'
}

enum PayloadLockedDocument_User_RelationTo {
  users = 'users'
}

type PayloadLockedDocument_User_Relationship = {
  __typename?: 'PayloadLockedDocument_User_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_User_RelationTo>;
  value?: Maybe<PayloadLockedDocument_User>;
};

type PayloadLockedDocument_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type PayloadLockedDocument_document_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_document_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

enum PayloadLockedDocument_document_Relation_RelationTo {
  authors = 'authors',
  folder = 'folder',
  media = 'media',
  posts = 'posts',
  users = 'users'
}

type PayloadLockedDocument_globalSlug_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type PayloadLockedDocument_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type PayloadLockedDocument_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type PayloadLockedDocument_user_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_user_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

enum PayloadLockedDocument_user_Relation_RelationTo {
  users = 'users'
}

type PayloadLockedDocument_where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_where_or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_createdAt_operator>;
  document?: InputMaybe<PayloadLockedDocument_document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_globalSlug_operator>;
  id?: InputMaybe<PayloadLockedDocument_id_operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_updatedAt_operator>;
  user?: InputMaybe<PayloadLockedDocument_user_Relation>;
};

type PayloadLockedDocument_where_and = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_where_or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_createdAt_operator>;
  document?: InputMaybe<PayloadLockedDocument_document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_globalSlug_operator>;
  id?: InputMaybe<PayloadLockedDocument_id_operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_updatedAt_operator>;
  user?: InputMaybe<PayloadLockedDocument_user_Relation>;
};

type PayloadLockedDocument_where_or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_where_or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_createdAt_operator>;
  document?: InputMaybe<PayloadLockedDocument_document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_globalSlug_operator>;
  id?: InputMaybe<PayloadLockedDocument_id_operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_updatedAt_operator>;
  user?: InputMaybe<PayloadLockedDocument_user_Relation>;
};

type PayloadLockedDocuments = {
  __typename?: 'PayloadLockedDocuments';
  docs: Array<PayloadLockedDocument>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

type PayloadLockedDocumentsCreateAccess = {
  __typename?: 'PayloadLockedDocumentsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadLockedDocumentsCreateDocAccess = {
  __typename?: 'PayloadLockedDocumentsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadLockedDocumentsDeleteAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadLockedDocumentsDeleteDocAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadLockedDocumentsDocAccessFields = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields';
  createdAt?: Maybe<PayloadLockedDocumentsDocAccessFields_createdAt>;
  document?: Maybe<PayloadLockedDocumentsDocAccessFields_document>;
  globalSlug?: Maybe<PayloadLockedDocumentsDocAccessFields_globalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsDocAccessFields_updatedAt>;
  user?: Maybe<PayloadLockedDocumentsDocAccessFields_user>;
};

type PayloadLockedDocumentsDocAccessFields_createdAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_createdAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_createdAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_createdAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_createdAt_Update>;
};

type PayloadLockedDocumentsDocAccessFields_createdAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsDocAccessFields_createdAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsDocAccessFields_createdAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsDocAccessFields_createdAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsDocAccessFields_document = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_document_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_document_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_document_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_document_Update>;
};

type PayloadLockedDocumentsDocAccessFields_document_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsDocAccessFields_document_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsDocAccessFields_document_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsDocAccessFields_document_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsDocAccessFields_globalSlug = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_globalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_globalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_globalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_globalSlug_Update>;
};

type PayloadLockedDocumentsDocAccessFields_globalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsDocAccessFields_globalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsDocAccessFields_globalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsDocAccessFields_globalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsDocAccessFields_updatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_updatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_updatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_updatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_updatedAt_Update>;
};

type PayloadLockedDocumentsDocAccessFields_updatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsDocAccessFields_updatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsDocAccessFields_updatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsDocAccessFields_updatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsDocAccessFields_user = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_user_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_user_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_user_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_user_Update>;
};

type PayloadLockedDocumentsDocAccessFields_user_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsDocAccessFields_user_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsDocAccessFields_user_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsDocAccessFields_user_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsFields = {
  __typename?: 'PayloadLockedDocumentsFields';
  createdAt?: Maybe<PayloadLockedDocumentsFields_createdAt>;
  document?: Maybe<PayloadLockedDocumentsFields_document>;
  globalSlug?: Maybe<PayloadLockedDocumentsFields_globalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsFields_updatedAt>;
  user?: Maybe<PayloadLockedDocumentsFields_user>;
};

type PayloadLockedDocumentsFields_createdAt = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsFields_createdAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_createdAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_createdAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_createdAt_Update>;
};

type PayloadLockedDocumentsFields_createdAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsFields_createdAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsFields_createdAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsFields_createdAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsFields_document = {
  __typename?: 'PayloadLockedDocumentsFields_document';
  create?: Maybe<PayloadLockedDocumentsFields_document_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_document_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_document_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_document_Update>;
};

type PayloadLockedDocumentsFields_document_Create = {
  __typename?: 'PayloadLockedDocumentsFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsFields_document_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsFields_document_Read = {
  __typename?: 'PayloadLockedDocumentsFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsFields_document_Update = {
  __typename?: 'PayloadLockedDocumentsFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsFields_globalSlug = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsFields_globalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_globalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_globalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_globalSlug_Update>;
};

type PayloadLockedDocumentsFields_globalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsFields_globalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsFields_globalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsFields_globalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsFields_updatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsFields_updatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_updatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_updatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_updatedAt_Update>;
};

type PayloadLockedDocumentsFields_updatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsFields_updatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsFields_updatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsFields_updatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsFields_user = {
  __typename?: 'PayloadLockedDocumentsFields_user';
  create?: Maybe<PayloadLockedDocumentsFields_user_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_user_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_user_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_user_Update>;
};

type PayloadLockedDocumentsFields_user_Create = {
  __typename?: 'PayloadLockedDocumentsFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsFields_user_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsFields_user_Read = {
  __typename?: 'PayloadLockedDocumentsFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsFields_user_Update = {
  __typename?: 'PayloadLockedDocumentsFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadLockedDocumentsReadAccess = {
  __typename?: 'PayloadLockedDocumentsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadLockedDocumentsReadDocAccess = {
  __typename?: 'PayloadLockedDocumentsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadLockedDocumentsUpdateAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadLockedDocumentsUpdateDocAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<Scalars['JSON']['output']>;
};


type PayloadPreferenceuserArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  users = 'users'
}

type PayloadPreference_User = User;

type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

enum PayloadPreference_UserRelationshipInputRelationTo {
  users = 'users'
}

enum PayloadPreference_User_RelationTo {
  users = 'users'
}

type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

type PayloadPreference_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type PayloadPreference_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type PayloadPreference_key_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type PayloadPreference_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type PayloadPreference_user_Relation = {
  relationTo?: InputMaybe<PayloadPreference_user_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

enum PayloadPreference_user_Relation_RelationTo {
  users = 'users'
}

type PayloadPreference_value_operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

type PayloadPreference_where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_where_or>>>;
  createdAt?: InputMaybe<PayloadPreference_createdAt_operator>;
  id?: InputMaybe<PayloadPreference_id_operator>;
  key?: InputMaybe<PayloadPreference_key_operator>;
  updatedAt?: InputMaybe<PayloadPreference_updatedAt_operator>;
  user?: InputMaybe<PayloadPreference_user_Relation>;
  value?: InputMaybe<PayloadPreference_value_operator>;
};

type PayloadPreference_where_and = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_where_or>>>;
  createdAt?: InputMaybe<PayloadPreference_createdAt_operator>;
  id?: InputMaybe<PayloadPreference_id_operator>;
  key?: InputMaybe<PayloadPreference_key_operator>;
  updatedAt?: InputMaybe<PayloadPreference_updatedAt_operator>;
  user?: InputMaybe<PayloadPreference_user_Relation>;
  value?: InputMaybe<PayloadPreference_value_operator>;
};

type PayloadPreference_where_or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_where_or>>>;
  createdAt?: InputMaybe<PayloadPreference_createdAt_operator>;
  id?: InputMaybe<PayloadPreference_id_operator>;
  key?: InputMaybe<PayloadPreference_key_operator>;
  updatedAt?: InputMaybe<PayloadPreference_updatedAt_operator>;
  user?: InputMaybe<PayloadPreference_user_Relation>;
  value?: InputMaybe<PayloadPreference_value_operator>;
};

type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs: Array<PayloadPreference>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_createdAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_updatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_user>;
  value?: Maybe<PayloadPreferencesDocAccessFields_value>;
};

type PayloadPreferencesDocAccessFields_createdAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_createdAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_createdAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_createdAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_createdAt_Update>;
};

type PayloadPreferencesDocAccessFields_createdAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesDocAccessFields_createdAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesDocAccessFields_createdAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesDocAccessFields_createdAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesDocAccessFields_key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_key_Update>;
};

type PayloadPreferencesDocAccessFields_key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesDocAccessFields_key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesDocAccessFields_key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesDocAccessFields_key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesDocAccessFields_updatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_updatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_updatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_updatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_updatedAt_Update>;
};

type PayloadPreferencesDocAccessFields_updatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesDocAccessFields_updatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesDocAccessFields_updatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesDocAccessFields_updatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesDocAccessFields_user = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_user_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_user_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_user_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_user_Update>;
};

type PayloadPreferencesDocAccessFields_user_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesDocAccessFields_user_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesDocAccessFields_user_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesDocAccessFields_user_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesDocAccessFields_value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_value_Update>;
};

type PayloadPreferencesDocAccessFields_value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesDocAccessFields_value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesDocAccessFields_value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesDocAccessFields_value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_createdAt>;
  key?: Maybe<PayloadPreferencesFields_key>;
  updatedAt?: Maybe<PayloadPreferencesFields_updatedAt>;
  user?: Maybe<PayloadPreferencesFields_user>;
  value?: Maybe<PayloadPreferencesFields_value>;
};

type PayloadPreferencesFields_createdAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_createdAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_createdAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_createdAt_Read>;
  update?: Maybe<PayloadPreferencesFields_createdAt_Update>;
};

type PayloadPreferencesFields_createdAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesFields_createdAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesFields_createdAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesFields_createdAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesFields_key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_key_Create>;
  delete?: Maybe<PayloadPreferencesFields_key_Delete>;
  read?: Maybe<PayloadPreferencesFields_key_Read>;
  update?: Maybe<PayloadPreferencesFields_key_Update>;
};

type PayloadPreferencesFields_key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesFields_key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesFields_key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesFields_key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesFields_updatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_updatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_updatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_updatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_updatedAt_Update>;
};

type PayloadPreferencesFields_updatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesFields_updatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesFields_updatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesFields_updatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesFields_user = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_user_Create>;
  delete?: Maybe<PayloadPreferencesFields_user_Delete>;
  read?: Maybe<PayloadPreferencesFields_user_Read>;
  update?: Maybe<PayloadPreferencesFields_user_Update>;
};

type PayloadPreferencesFields_user_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesFields_user_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesFields_user_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesFields_user_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesFields_value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_value_Create>;
  delete?: Maybe<PayloadPreferencesFields_value_Delete>;
  read?: Maybe<PayloadPreferencesFields_value_Read>;
  update?: Maybe<PayloadPreferencesFields_value_Update>;
};

type PayloadPreferencesFields_value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesFields_value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesFields_value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesFields_value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type Post = {
  __typename?: 'Post';
  _pathname?: Maybe<Scalars['String']['output']>;
  _status?: Maybe<Post__status>;
  author?: Maybe<Author>;
  blocks?: Maybe<Array<Post_Blocks>>;
  content?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  generateSlug?: Maybe<Scalars['Boolean']['output']>;
  i18n?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Media>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


type PostauthorArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


type PostcontentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


type PostimageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

enum PostUpdate__status_MutationInput {
  draft = 'draft',
  published = 'published'
}

type PostVersion = {
  __typename?: 'PostVersion';
  autosave?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  latest?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Post>;
  publishedLocale?: Maybe<PostVersion_publishedLocale>;
  snapshot?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<PostVersion_Version>;
};


type PostVersionparentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

type PostVersion_Version = {
  __typename?: 'PostVersion_Version';
  _pathname?: Maybe<Scalars['String']['output']>;
  _status?: Maybe<PostVersion_Version__status>;
  author?: Maybe<Author>;
  blocks?: Maybe<Array<PostVersion_Version_Blocks>>;
  content?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  generateSlug?: Maybe<Scalars['Boolean']['output']>;
  i18n?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


type PostVersion_VersionauthorArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


type PostVersion_VersioncontentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


type PostVersion_VersionimageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

type PostVersion_Version_Blocks = QuoteBlock;

enum PostVersion_Version__status {
  draft = 'draft',
  published = 'published'
}

enum PostVersion_publishedLocale {
  en = 'en',
  se = 'se'
}

type Post_Blocks = QuoteBlock;

type Post__pathname_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

enum Post__status {
  draft = 'draft',
  published = 'published'
}

enum Post__status_Input {
  draft = 'draft',
  published = 'published'
}

enum Post__status_MutationInput {
  draft = 'draft',
  published = 'published'
}

type Post__status_operator = {
  all?: InputMaybe<Array<InputMaybe<Post__status_Input>>>;
  equals?: InputMaybe<Post__status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Post__status_Input>>>;
  not_equals?: InputMaybe<Post__status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Post__status_Input>>>;
};

type Post_author_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

type Post_content_operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

type Post_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type Post_date_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type Post_generateSlug_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

type Post_i18n_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Post_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Post_image_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

type Post_slug_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Post_title_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Post_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type Post_where = {
  AND?: InputMaybe<Array<InputMaybe<Post_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Post_where_or>>>;
  _pathname?: InputMaybe<Post__pathname_operator>;
  _status?: InputMaybe<Post__status_operator>;
  author?: InputMaybe<Post_author_operator>;
  content?: InputMaybe<Post_content_operator>;
  createdAt?: InputMaybe<Post_createdAt_operator>;
  date?: InputMaybe<Post_date_operator>;
  generateSlug?: InputMaybe<Post_generateSlug_operator>;
  i18n?: InputMaybe<Post_i18n_operator>;
  id?: InputMaybe<Post_id_operator>;
  image?: InputMaybe<Post_image_operator>;
  slug?: InputMaybe<Post_slug_operator>;
  title?: InputMaybe<Post_title_operator>;
  updatedAt?: InputMaybe<Post_updatedAt_operator>;
};

type Post_where_and = {
  AND?: InputMaybe<Array<InputMaybe<Post_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Post_where_or>>>;
  _pathname?: InputMaybe<Post__pathname_operator>;
  _status?: InputMaybe<Post__status_operator>;
  author?: InputMaybe<Post_author_operator>;
  content?: InputMaybe<Post_content_operator>;
  createdAt?: InputMaybe<Post_createdAt_operator>;
  date?: InputMaybe<Post_date_operator>;
  generateSlug?: InputMaybe<Post_generateSlug_operator>;
  i18n?: InputMaybe<Post_i18n_operator>;
  id?: InputMaybe<Post_id_operator>;
  image?: InputMaybe<Post_image_operator>;
  slug?: InputMaybe<Post_slug_operator>;
  title?: InputMaybe<Post_title_operator>;
  updatedAt?: InputMaybe<Post_updatedAt_operator>;
};

type Post_where_or = {
  AND?: InputMaybe<Array<InputMaybe<Post_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Post_where_or>>>;
  _pathname?: InputMaybe<Post__pathname_operator>;
  _status?: InputMaybe<Post__status_operator>;
  author?: InputMaybe<Post_author_operator>;
  content?: InputMaybe<Post_content_operator>;
  createdAt?: InputMaybe<Post_createdAt_operator>;
  date?: InputMaybe<Post_date_operator>;
  generateSlug?: InputMaybe<Post_generateSlug_operator>;
  i18n?: InputMaybe<Post_i18n_operator>;
  id?: InputMaybe<Post_id_operator>;
  image?: InputMaybe<Post_image_operator>;
  slug?: InputMaybe<Post_slug_operator>;
  title?: InputMaybe<Post_title_operator>;
  updatedAt?: InputMaybe<Post_updatedAt_operator>;
};

type Posts = {
  __typename?: 'Posts';
  docs: Array<Post>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

type PostsCreateAccess = {
  __typename?: 'PostsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PostsCreateDocAccess = {
  __typename?: 'PostsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PostsDeleteAccess = {
  __typename?: 'PostsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PostsDeleteDocAccess = {
  __typename?: 'PostsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PostsDocAccessFields = {
  __typename?: 'PostsDocAccessFields';
  _pathname?: Maybe<PostsDocAccessFields__pathname>;
  _status?: Maybe<PostsDocAccessFields__status>;
  author?: Maybe<PostsDocAccessFields_author>;
  blocks?: Maybe<PostsDocAccessFields_blocks>;
  content?: Maybe<PostsDocAccessFields_content>;
  createdAt?: Maybe<PostsDocAccessFields_createdAt>;
  date?: Maybe<PostsDocAccessFields_date>;
  generateSlug?: Maybe<PostsDocAccessFields_generateSlug>;
  i18n?: Maybe<PostsDocAccessFields_i18n>;
  image?: Maybe<PostsDocAccessFields_image>;
  slug?: Maybe<PostsDocAccessFields_slug>;
  title?: Maybe<PostsDocAccessFields_title>;
  updatedAt?: Maybe<PostsDocAccessFields_updatedAt>;
};

type PostsDocAccessFields__pathname = {
  __typename?: 'PostsDocAccessFields__pathname';
  create?: Maybe<PostsDocAccessFields__pathname_Create>;
  delete?: Maybe<PostsDocAccessFields__pathname_Delete>;
  read?: Maybe<PostsDocAccessFields__pathname_Read>;
  update?: Maybe<PostsDocAccessFields__pathname_Update>;
};

type PostsDocAccessFields__pathname_Create = {
  __typename?: 'PostsDocAccessFields__pathname_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields__pathname_Delete = {
  __typename?: 'PostsDocAccessFields__pathname_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields__pathname_Read = {
  __typename?: 'PostsDocAccessFields__pathname_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields__pathname_Update = {
  __typename?: 'PostsDocAccessFields__pathname_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields__status = {
  __typename?: 'PostsDocAccessFields__status';
  create?: Maybe<PostsDocAccessFields__status_Create>;
  delete?: Maybe<PostsDocAccessFields__status_Delete>;
  read?: Maybe<PostsDocAccessFields__status_Read>;
  update?: Maybe<PostsDocAccessFields__status_Update>;
};

type PostsDocAccessFields__status_Create = {
  __typename?: 'PostsDocAccessFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields__status_Delete = {
  __typename?: 'PostsDocAccessFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields__status_Read = {
  __typename?: 'PostsDocAccessFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields__status_Update = {
  __typename?: 'PostsDocAccessFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_author = {
  __typename?: 'PostsDocAccessFields_author';
  create?: Maybe<PostsDocAccessFields_author_Create>;
  delete?: Maybe<PostsDocAccessFields_author_Delete>;
  read?: Maybe<PostsDocAccessFields_author_Read>;
  update?: Maybe<PostsDocAccessFields_author_Update>;
};

type PostsDocAccessFields_author_Create = {
  __typename?: 'PostsDocAccessFields_author_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_author_Delete = {
  __typename?: 'PostsDocAccessFields_author_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_author_Read = {
  __typename?: 'PostsDocAccessFields_author_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_author_Update = {
  __typename?: 'PostsDocAccessFields_author_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_blocks = {
  __typename?: 'PostsDocAccessFields_blocks';
  create?: Maybe<PostsDocAccessFields_blocks_Create>;
  delete?: Maybe<PostsDocAccessFields_blocks_Delete>;
  read?: Maybe<PostsDocAccessFields_blocks_Read>;
  update?: Maybe<PostsDocAccessFields_blocks_Update>;
};

type PostsDocAccessFields_blocks_Create = {
  __typename?: 'PostsDocAccessFields_blocks_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_blocks_Delete = {
  __typename?: 'PostsDocAccessFields_blocks_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_blocks_Read = {
  __typename?: 'PostsDocAccessFields_blocks_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_blocks_Update = {
  __typename?: 'PostsDocAccessFields_blocks_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_content = {
  __typename?: 'PostsDocAccessFields_content';
  create?: Maybe<PostsDocAccessFields_content_Create>;
  delete?: Maybe<PostsDocAccessFields_content_Delete>;
  read?: Maybe<PostsDocAccessFields_content_Read>;
  update?: Maybe<PostsDocAccessFields_content_Update>;
};

type PostsDocAccessFields_content_Create = {
  __typename?: 'PostsDocAccessFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_content_Delete = {
  __typename?: 'PostsDocAccessFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_content_Read = {
  __typename?: 'PostsDocAccessFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_content_Update = {
  __typename?: 'PostsDocAccessFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_createdAt = {
  __typename?: 'PostsDocAccessFields_createdAt';
  create?: Maybe<PostsDocAccessFields_createdAt_Create>;
  delete?: Maybe<PostsDocAccessFields_createdAt_Delete>;
  read?: Maybe<PostsDocAccessFields_createdAt_Read>;
  update?: Maybe<PostsDocAccessFields_createdAt_Update>;
};

type PostsDocAccessFields_createdAt_Create = {
  __typename?: 'PostsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_createdAt_Delete = {
  __typename?: 'PostsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_createdAt_Read = {
  __typename?: 'PostsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_createdAt_Update = {
  __typename?: 'PostsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_date = {
  __typename?: 'PostsDocAccessFields_date';
  create?: Maybe<PostsDocAccessFields_date_Create>;
  delete?: Maybe<PostsDocAccessFields_date_Delete>;
  read?: Maybe<PostsDocAccessFields_date_Read>;
  update?: Maybe<PostsDocAccessFields_date_Update>;
};

type PostsDocAccessFields_date_Create = {
  __typename?: 'PostsDocAccessFields_date_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_date_Delete = {
  __typename?: 'PostsDocAccessFields_date_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_date_Read = {
  __typename?: 'PostsDocAccessFields_date_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_date_Update = {
  __typename?: 'PostsDocAccessFields_date_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_generateSlug = {
  __typename?: 'PostsDocAccessFields_generateSlug';
  create?: Maybe<PostsDocAccessFields_generateSlug_Create>;
  delete?: Maybe<PostsDocAccessFields_generateSlug_Delete>;
  read?: Maybe<PostsDocAccessFields_generateSlug_Read>;
  update?: Maybe<PostsDocAccessFields_generateSlug_Update>;
};

type PostsDocAccessFields_generateSlug_Create = {
  __typename?: 'PostsDocAccessFields_generateSlug_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_generateSlug_Delete = {
  __typename?: 'PostsDocAccessFields_generateSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_generateSlug_Read = {
  __typename?: 'PostsDocAccessFields_generateSlug_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_generateSlug_Update = {
  __typename?: 'PostsDocAccessFields_generateSlug_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_i18n = {
  __typename?: 'PostsDocAccessFields_i18n';
  create?: Maybe<PostsDocAccessFields_i18n_Create>;
  delete?: Maybe<PostsDocAccessFields_i18n_Delete>;
  read?: Maybe<PostsDocAccessFields_i18n_Read>;
  update?: Maybe<PostsDocAccessFields_i18n_Update>;
};

type PostsDocAccessFields_i18n_Create = {
  __typename?: 'PostsDocAccessFields_i18n_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_i18n_Delete = {
  __typename?: 'PostsDocAccessFields_i18n_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_i18n_Read = {
  __typename?: 'PostsDocAccessFields_i18n_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_i18n_Update = {
  __typename?: 'PostsDocAccessFields_i18n_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_image = {
  __typename?: 'PostsDocAccessFields_image';
  create?: Maybe<PostsDocAccessFields_image_Create>;
  delete?: Maybe<PostsDocAccessFields_image_Delete>;
  read?: Maybe<PostsDocAccessFields_image_Read>;
  update?: Maybe<PostsDocAccessFields_image_Update>;
};

type PostsDocAccessFields_image_Create = {
  __typename?: 'PostsDocAccessFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_image_Delete = {
  __typename?: 'PostsDocAccessFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_image_Read = {
  __typename?: 'PostsDocAccessFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_image_Update = {
  __typename?: 'PostsDocAccessFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_slug = {
  __typename?: 'PostsDocAccessFields_slug';
  create?: Maybe<PostsDocAccessFields_slug_Create>;
  delete?: Maybe<PostsDocAccessFields_slug_Delete>;
  read?: Maybe<PostsDocAccessFields_slug_Read>;
  update?: Maybe<PostsDocAccessFields_slug_Update>;
};

type PostsDocAccessFields_slug_Create = {
  __typename?: 'PostsDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_slug_Delete = {
  __typename?: 'PostsDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_slug_Read = {
  __typename?: 'PostsDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_slug_Update = {
  __typename?: 'PostsDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_title = {
  __typename?: 'PostsDocAccessFields_title';
  create?: Maybe<PostsDocAccessFields_title_Create>;
  delete?: Maybe<PostsDocAccessFields_title_Delete>;
  read?: Maybe<PostsDocAccessFields_title_Read>;
  update?: Maybe<PostsDocAccessFields_title_Update>;
};

type PostsDocAccessFields_title_Create = {
  __typename?: 'PostsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_title_Delete = {
  __typename?: 'PostsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_title_Read = {
  __typename?: 'PostsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_title_Update = {
  __typename?: 'PostsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_updatedAt = {
  __typename?: 'PostsDocAccessFields_updatedAt';
  create?: Maybe<PostsDocAccessFields_updatedAt_Create>;
  delete?: Maybe<PostsDocAccessFields_updatedAt_Delete>;
  read?: Maybe<PostsDocAccessFields_updatedAt_Read>;
  update?: Maybe<PostsDocAccessFields_updatedAt_Update>;
};

type PostsDocAccessFields_updatedAt_Create = {
  __typename?: 'PostsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_updatedAt_Delete = {
  __typename?: 'PostsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_updatedAt_Read = {
  __typename?: 'PostsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsDocAccessFields_updatedAt_Update = {
  __typename?: 'PostsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsFields = {
  __typename?: 'PostsFields';
  _pathname?: Maybe<PostsFields__pathname>;
  _status?: Maybe<PostsFields__status>;
  author?: Maybe<PostsFields_author>;
  blocks?: Maybe<PostsFields_blocks>;
  content?: Maybe<PostsFields_content>;
  createdAt?: Maybe<PostsFields_createdAt>;
  date?: Maybe<PostsFields_date>;
  generateSlug?: Maybe<PostsFields_generateSlug>;
  i18n?: Maybe<PostsFields_i18n>;
  image?: Maybe<PostsFields_image>;
  slug?: Maybe<PostsFields_slug>;
  title?: Maybe<PostsFields_title>;
  updatedAt?: Maybe<PostsFields_updatedAt>;
};

type PostsFields__pathname = {
  __typename?: 'PostsFields__pathname';
  create?: Maybe<PostsFields__pathname_Create>;
  delete?: Maybe<PostsFields__pathname_Delete>;
  read?: Maybe<PostsFields__pathname_Read>;
  update?: Maybe<PostsFields__pathname_Update>;
};

type PostsFields__pathname_Create = {
  __typename?: 'PostsFields__pathname_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsFields__pathname_Delete = {
  __typename?: 'PostsFields__pathname_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsFields__pathname_Read = {
  __typename?: 'PostsFields__pathname_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsFields__pathname_Update = {
  __typename?: 'PostsFields__pathname_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsFields__status = {
  __typename?: 'PostsFields__status';
  create?: Maybe<PostsFields__status_Create>;
  delete?: Maybe<PostsFields__status_Delete>;
  read?: Maybe<PostsFields__status_Read>;
  update?: Maybe<PostsFields__status_Update>;
};

type PostsFields__status_Create = {
  __typename?: 'PostsFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsFields__status_Delete = {
  __typename?: 'PostsFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsFields__status_Read = {
  __typename?: 'PostsFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsFields__status_Update = {
  __typename?: 'PostsFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_author = {
  __typename?: 'PostsFields_author';
  create?: Maybe<PostsFields_author_Create>;
  delete?: Maybe<PostsFields_author_Delete>;
  read?: Maybe<PostsFields_author_Read>;
  update?: Maybe<PostsFields_author_Update>;
};

type PostsFields_author_Create = {
  __typename?: 'PostsFields_author_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_author_Delete = {
  __typename?: 'PostsFields_author_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_author_Read = {
  __typename?: 'PostsFields_author_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_author_Update = {
  __typename?: 'PostsFields_author_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_blocks = {
  __typename?: 'PostsFields_blocks';
  create?: Maybe<PostsFields_blocks_Create>;
  delete?: Maybe<PostsFields_blocks_Delete>;
  read?: Maybe<PostsFields_blocks_Read>;
  update?: Maybe<PostsFields_blocks_Update>;
};

type PostsFields_blocks_Create = {
  __typename?: 'PostsFields_blocks_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_blocks_Delete = {
  __typename?: 'PostsFields_blocks_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_blocks_Read = {
  __typename?: 'PostsFields_blocks_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_blocks_Update = {
  __typename?: 'PostsFields_blocks_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_content = {
  __typename?: 'PostsFields_content';
  create?: Maybe<PostsFields_content_Create>;
  delete?: Maybe<PostsFields_content_Delete>;
  read?: Maybe<PostsFields_content_Read>;
  update?: Maybe<PostsFields_content_Update>;
};

type PostsFields_content_Create = {
  __typename?: 'PostsFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_content_Delete = {
  __typename?: 'PostsFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_content_Read = {
  __typename?: 'PostsFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_content_Update = {
  __typename?: 'PostsFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_createdAt = {
  __typename?: 'PostsFields_createdAt';
  create?: Maybe<PostsFields_createdAt_Create>;
  delete?: Maybe<PostsFields_createdAt_Delete>;
  read?: Maybe<PostsFields_createdAt_Read>;
  update?: Maybe<PostsFields_createdAt_Update>;
};

type PostsFields_createdAt_Create = {
  __typename?: 'PostsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_createdAt_Delete = {
  __typename?: 'PostsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_createdAt_Read = {
  __typename?: 'PostsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_createdAt_Update = {
  __typename?: 'PostsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_date = {
  __typename?: 'PostsFields_date';
  create?: Maybe<PostsFields_date_Create>;
  delete?: Maybe<PostsFields_date_Delete>;
  read?: Maybe<PostsFields_date_Read>;
  update?: Maybe<PostsFields_date_Update>;
};

type PostsFields_date_Create = {
  __typename?: 'PostsFields_date_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_date_Delete = {
  __typename?: 'PostsFields_date_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_date_Read = {
  __typename?: 'PostsFields_date_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_date_Update = {
  __typename?: 'PostsFields_date_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_generateSlug = {
  __typename?: 'PostsFields_generateSlug';
  create?: Maybe<PostsFields_generateSlug_Create>;
  delete?: Maybe<PostsFields_generateSlug_Delete>;
  read?: Maybe<PostsFields_generateSlug_Read>;
  update?: Maybe<PostsFields_generateSlug_Update>;
};

type PostsFields_generateSlug_Create = {
  __typename?: 'PostsFields_generateSlug_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_generateSlug_Delete = {
  __typename?: 'PostsFields_generateSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_generateSlug_Read = {
  __typename?: 'PostsFields_generateSlug_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_generateSlug_Update = {
  __typename?: 'PostsFields_generateSlug_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_i18n = {
  __typename?: 'PostsFields_i18n';
  create?: Maybe<PostsFields_i18n_Create>;
  delete?: Maybe<PostsFields_i18n_Delete>;
  read?: Maybe<PostsFields_i18n_Read>;
  update?: Maybe<PostsFields_i18n_Update>;
};

type PostsFields_i18n_Create = {
  __typename?: 'PostsFields_i18n_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_i18n_Delete = {
  __typename?: 'PostsFields_i18n_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_i18n_Read = {
  __typename?: 'PostsFields_i18n_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_i18n_Update = {
  __typename?: 'PostsFields_i18n_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_image = {
  __typename?: 'PostsFields_image';
  create?: Maybe<PostsFields_image_Create>;
  delete?: Maybe<PostsFields_image_Delete>;
  read?: Maybe<PostsFields_image_Read>;
  update?: Maybe<PostsFields_image_Update>;
};

type PostsFields_image_Create = {
  __typename?: 'PostsFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_image_Delete = {
  __typename?: 'PostsFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_image_Read = {
  __typename?: 'PostsFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_image_Update = {
  __typename?: 'PostsFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_slug = {
  __typename?: 'PostsFields_slug';
  create?: Maybe<PostsFields_slug_Create>;
  delete?: Maybe<PostsFields_slug_Delete>;
  read?: Maybe<PostsFields_slug_Read>;
  update?: Maybe<PostsFields_slug_Update>;
};

type PostsFields_slug_Create = {
  __typename?: 'PostsFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_slug_Delete = {
  __typename?: 'PostsFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_slug_Read = {
  __typename?: 'PostsFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_slug_Update = {
  __typename?: 'PostsFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_title = {
  __typename?: 'PostsFields_title';
  create?: Maybe<PostsFields_title_Create>;
  delete?: Maybe<PostsFields_title_Delete>;
  read?: Maybe<PostsFields_title_Read>;
  update?: Maybe<PostsFields_title_Update>;
};

type PostsFields_title_Create = {
  __typename?: 'PostsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_title_Delete = {
  __typename?: 'PostsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_title_Read = {
  __typename?: 'PostsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_title_Update = {
  __typename?: 'PostsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_updatedAt = {
  __typename?: 'PostsFields_updatedAt';
  create?: Maybe<PostsFields_updatedAt_Create>;
  delete?: Maybe<PostsFields_updatedAt_Delete>;
  read?: Maybe<PostsFields_updatedAt_Read>;
  update?: Maybe<PostsFields_updatedAt_Update>;
};

type PostsFields_updatedAt_Create = {
  __typename?: 'PostsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_updatedAt_Delete = {
  __typename?: 'PostsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_updatedAt_Read = {
  __typename?: 'PostsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

type PostsFields_updatedAt_Update = {
  __typename?: 'PostsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

type PostsReadAccess = {
  __typename?: 'PostsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PostsReadDocAccess = {
  __typename?: 'PostsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PostsReadVersionsAccess = {
  __typename?: 'PostsReadVersionsAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PostsReadVersionsDocAccess = {
  __typename?: 'PostsReadVersionsDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PostsUpdateAccess = {
  __typename?: 'PostsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type PostsUpdateDocAccess = {
  __typename?: 'PostsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Author?: Maybe<Author>;
  Authors?: Maybe<Authors>;
  Folder?: Maybe<Folder>;
  Folders?: Maybe<Folders>;
  Home?: Maybe<Home>;
  Media?: Maybe<Media>;
  PayloadKv?: Maybe<PayloadKv>;
  PayloadKvs?: Maybe<PayloadKvs>;
  PayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  PayloadLockedDocuments?: Maybe<PayloadLockedDocuments>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  Post?: Maybe<Post>;
  Posts?: Maybe<Posts>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<allMedia>;
  countAuthors?: Maybe<countAuthors>;
  countFolders?: Maybe<countFolders>;
  countPayloadKvs?: Maybe<countPayloadKvs>;
  countPayloadLockedDocuments?: Maybe<countPayloadLockedDocuments>;
  countPayloadPreferences?: Maybe<countPayloadPreferences>;
  countPosts?: Maybe<countPosts>;
  countUsers?: Maybe<countUsers>;
  countallMedia?: Maybe<countallMedia>;
  docAccessAuthor?: Maybe<authorsDocAccess>;
  docAccessFolder?: Maybe<folderDocAccess>;
  docAccessHome?: Maybe<homeDocAccess>;
  docAccessMedia?: Maybe<mediaDocAccess>;
  docAccessPayloadKv?: Maybe<payload_kvDocAccess>;
  docAccessPayloadLockedDocument?: Maybe<payload_locked_documentsDocAccess>;
  docAccessPayloadPreference?: Maybe<payload_preferencesDocAccess>;
  docAccessPost?: Maybe<postsDocAccess>;
  docAccessUser?: Maybe<usersDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  meUser?: Maybe<usersMe>;
  versionHome?: Maybe<HomeVersion>;
  versionPost?: Maybe<PostVersion>;
  versionsHome?: Maybe<versionsHome>;
  versionsPosts?: Maybe<versionsPosts>;
};


type QueryAuthorArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type QueryAuthorsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Author_where>;
};


type QueryFolderArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type QueryFoldersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Folder_where>;
};


type QueryHomeArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
};


type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type QueryPayloadKvArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type QueryPayloadKvsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadKv_where>;
};


type QueryPayloadLockedDocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type QueryPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_where>;
};


type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_where>;
};


type QueryPostArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type QueryPostsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Post_where>;
};


type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_where>;
};


type QueryallMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_where>;
};


type QuerycountAuthorsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Author_where>;
};


type QuerycountFoldersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Folder_where>;
};


type QuerycountPayloadKvsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadKv_where>;
};


type QuerycountPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_where>;
};


type QuerycountPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_where>;
};


type QuerycountPostsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Post_where>;
};


type QuerycountUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_where>;
};


type QuerycountallMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_where>;
};


type QuerydocAccessAuthorArgs = {
  id: Scalars['String']['input'];
};


type QuerydocAccessFolderArgs = {
  id: Scalars['String']['input'];
};


type QuerydocAccessMediaArgs = {
  id: Scalars['String']['input'];
};


type QuerydocAccessPayloadKvArgs = {
  id: Scalars['String']['input'];
};


type QuerydocAccessPayloadLockedDocumentArgs = {
  id: Scalars['String']['input'];
};


type QuerydocAccessPayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


type QuerydocAccessPostArgs = {
  id: Scalars['String']['input'];
};


type QuerydocAccessUserArgs = {
  id: Scalars['String']['input'];
};


type QueryversionHomeArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
};


type QueryversionPostArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


type QueryversionsHomeArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<versionsHome_where>;
};


type QueryversionsPostsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<versionsPost_where>;
};

type QuoteBlock = {
  __typename?: 'QuoteBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  quoteHeader?: Maybe<Scalars['String']['output']>;
  quoteText?: Maybe<Scalars['String']['output']>;
};

type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  i18n?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  role: User_role;
  salt?: Maybe<Scalars['String']['output']>;
  sessions?: Maybe<Array<User_Sessions>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

enum UserUpdate_role_MutationInput {
  admin = 'admin',
  user = 'user'
}

type User_Sessions = {
  __typename?: 'User_Sessions';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

type User_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type User_email_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

type User_i18n_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type User_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

enum User_role {
  admin = 'admin',
  user = 'user'
}

enum User_role_Input {
  admin = 'admin',
  user = 'user'
}

enum User_role_MutationInput {
  admin = 'admin',
  user = 'user'
}

type User_role_operator = {
  all?: InputMaybe<Array<InputMaybe<User_role_Input>>>;
  equals?: InputMaybe<User_role_Input>;
  in?: InputMaybe<Array<InputMaybe<User_role_Input>>>;
  not_equals?: InputMaybe<User_role_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_role_Input>>>;
};

type User_sessions__createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type User_sessions__expiresAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type User_sessions__id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type User_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type User_where = {
  AND?: InputMaybe<Array<InputMaybe<User_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<User_where_or>>>;
  createdAt?: InputMaybe<User_createdAt_operator>;
  email?: InputMaybe<User_email_operator>;
  i18n?: InputMaybe<User_i18n_operator>;
  id?: InputMaybe<User_id_operator>;
  role?: InputMaybe<User_role_operator>;
  sessions__createdAt?: InputMaybe<User_sessions__createdAt_operator>;
  sessions__expiresAt?: InputMaybe<User_sessions__expiresAt_operator>;
  sessions__id?: InputMaybe<User_sessions__id_operator>;
  updatedAt?: InputMaybe<User_updatedAt_operator>;
};

type User_where_and = {
  AND?: InputMaybe<Array<InputMaybe<User_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<User_where_or>>>;
  createdAt?: InputMaybe<User_createdAt_operator>;
  email?: InputMaybe<User_email_operator>;
  i18n?: InputMaybe<User_i18n_operator>;
  id?: InputMaybe<User_id_operator>;
  role?: InputMaybe<User_role_operator>;
  sessions__createdAt?: InputMaybe<User_sessions__createdAt_operator>;
  sessions__expiresAt?: InputMaybe<User_sessions__expiresAt_operator>;
  sessions__id?: InputMaybe<User_sessions__id_operator>;
  updatedAt?: InputMaybe<User_updatedAt_operator>;
};

type User_where_or = {
  AND?: InputMaybe<Array<InputMaybe<User_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<User_where_or>>>;
  createdAt?: InputMaybe<User_createdAt_operator>;
  email?: InputMaybe<User_email_operator>;
  i18n?: InputMaybe<User_i18n_operator>;
  id?: InputMaybe<User_id_operator>;
  role?: InputMaybe<User_role_operator>;
  sessions__createdAt?: InputMaybe<User_sessions__createdAt_operator>;
  sessions__expiresAt?: InputMaybe<User_sessions__expiresAt_operator>;
  sessions__id?: InputMaybe<User_sessions__id_operator>;
  updatedAt?: InputMaybe<User_updatedAt_operator>;
};

type Users = {
  __typename?: 'Users';
  docs: Array<User>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  createdAt?: Maybe<UsersDocAccessFields_createdAt>;
  email?: Maybe<UsersDocAccessFields_email>;
  i18n?: Maybe<UsersDocAccessFields_i18n>;
  role?: Maybe<UsersDocAccessFields_role>;
  sessions?: Maybe<UsersDocAccessFields_sessions>;
  updatedAt?: Maybe<UsersDocAccessFields_updatedAt>;
};

type UsersDocAccessFields_createdAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_createdAt_Create>;
  delete?: Maybe<UsersDocAccessFields_createdAt_Delete>;
  read?: Maybe<UsersDocAccessFields_createdAt_Read>;
  update?: Maybe<UsersDocAccessFields_createdAt_Update>;
};

type UsersDocAccessFields_createdAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_createdAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_createdAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_createdAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_email_Create>;
  delete?: Maybe<UsersDocAccessFields_email_Delete>;
  read?: Maybe<UsersDocAccessFields_email_Read>;
  update?: Maybe<UsersDocAccessFields_email_Update>;
};

type UsersDocAccessFields_email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_i18n = {
  __typename?: 'UsersDocAccessFields_i18n';
  create?: Maybe<UsersDocAccessFields_i18n_Create>;
  delete?: Maybe<UsersDocAccessFields_i18n_Delete>;
  read?: Maybe<UsersDocAccessFields_i18n_Read>;
  update?: Maybe<UsersDocAccessFields_i18n_Update>;
};

type UsersDocAccessFields_i18n_Create = {
  __typename?: 'UsersDocAccessFields_i18n_Create';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_i18n_Delete = {
  __typename?: 'UsersDocAccessFields_i18n_Delete';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_i18n_Read = {
  __typename?: 'UsersDocAccessFields_i18n_Read';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_i18n_Update = {
  __typename?: 'UsersDocAccessFields_i18n_Update';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_role = {
  __typename?: 'UsersDocAccessFields_role';
  create?: Maybe<UsersDocAccessFields_role_Create>;
  delete?: Maybe<UsersDocAccessFields_role_Delete>;
  read?: Maybe<UsersDocAccessFields_role_Read>;
  update?: Maybe<UsersDocAccessFields_role_Update>;
};

type UsersDocAccessFields_role_Create = {
  __typename?: 'UsersDocAccessFields_role_Create';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_role_Delete = {
  __typename?: 'UsersDocAccessFields_role_Delete';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_role_Read = {
  __typename?: 'UsersDocAccessFields_role_Read';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_role_Update = {
  __typename?: 'UsersDocAccessFields_role_Update';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_sessions = {
  __typename?: 'UsersDocAccessFields_sessions';
  create?: Maybe<UsersDocAccessFields_sessions_Create>;
  delete?: Maybe<UsersDocAccessFields_sessions_Delete>;
  fields?: Maybe<UsersDocAccessFields_sessions_Fields>;
  read?: Maybe<UsersDocAccessFields_sessions_Read>;
  update?: Maybe<UsersDocAccessFields_sessions_Update>;
};

type UsersDocAccessFields_sessions_Create = {
  __typename?: 'UsersDocAccessFields_sessions_Create';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_sessions_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_Delete';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_sessions_Fields = {
  __typename?: 'UsersDocAccessFields_sessions_Fields';
  createdAt?: Maybe<UsersDocAccessFields_sessions_createdAt>;
  expiresAt?: Maybe<UsersDocAccessFields_sessions_expiresAt>;
  id?: Maybe<UsersDocAccessFields_sessions_id>;
};

type UsersDocAccessFields_sessions_Read = {
  __typename?: 'UsersDocAccessFields_sessions_Read';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_sessions_Update = {
  __typename?: 'UsersDocAccessFields_sessions_Update';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_sessions_createdAt = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt';
  create?: Maybe<UsersDocAccessFields_sessions_createdAt_Create>;
  delete?: Maybe<UsersDocAccessFields_sessions_createdAt_Delete>;
  read?: Maybe<UsersDocAccessFields_sessions_createdAt_Read>;
  update?: Maybe<UsersDocAccessFields_sessions_createdAt_Update>;
};

type UsersDocAccessFields_sessions_createdAt_Create = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_sessions_createdAt_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_sessions_createdAt_Read = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_sessions_createdAt_Update = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_sessions_expiresAt = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt';
  create?: Maybe<UsersDocAccessFields_sessions_expiresAt_Create>;
  delete?: Maybe<UsersDocAccessFields_sessions_expiresAt_Delete>;
  read?: Maybe<UsersDocAccessFields_sessions_expiresAt_Read>;
  update?: Maybe<UsersDocAccessFields_sessions_expiresAt_Update>;
};

type UsersDocAccessFields_sessions_expiresAt_Create = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Create';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_sessions_expiresAt_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_sessions_expiresAt_Read = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Read';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_sessions_expiresAt_Update = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Update';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_sessions_id = {
  __typename?: 'UsersDocAccessFields_sessions_id';
  create?: Maybe<UsersDocAccessFields_sessions_id_Create>;
  delete?: Maybe<UsersDocAccessFields_sessions_id_Delete>;
  read?: Maybe<UsersDocAccessFields_sessions_id_Read>;
  update?: Maybe<UsersDocAccessFields_sessions_id_Update>;
};

type UsersDocAccessFields_sessions_id_Create = {
  __typename?: 'UsersDocAccessFields_sessions_id_Create';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_sessions_id_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_id_Delete';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_sessions_id_Read = {
  __typename?: 'UsersDocAccessFields_sessions_id_Read';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_sessions_id_Update = {
  __typename?: 'UsersDocAccessFields_sessions_id_Update';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_updatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_updatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_updatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_updatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_updatedAt_Update>;
};

type UsersDocAccessFields_updatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_updatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_updatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

type UsersDocAccessFields_updatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

type UsersFields = {
  __typename?: 'UsersFields';
  createdAt?: Maybe<UsersFields_createdAt>;
  email?: Maybe<UsersFields_email>;
  i18n?: Maybe<UsersFields_i18n>;
  role?: Maybe<UsersFields_role>;
  sessions?: Maybe<UsersFields_sessions>;
  updatedAt?: Maybe<UsersFields_updatedAt>;
};

type UsersFields_createdAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_createdAt_Create>;
  delete?: Maybe<UsersFields_createdAt_Delete>;
  read?: Maybe<UsersFields_createdAt_Read>;
  update?: Maybe<UsersFields_createdAt_Update>;
};

type UsersFields_createdAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_createdAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_createdAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_createdAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_email_Create>;
  delete?: Maybe<UsersFields_email_Delete>;
  read?: Maybe<UsersFields_email_Read>;
  update?: Maybe<UsersFields_email_Update>;
};

type UsersFields_email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_i18n = {
  __typename?: 'UsersFields_i18n';
  create?: Maybe<UsersFields_i18n_Create>;
  delete?: Maybe<UsersFields_i18n_Delete>;
  read?: Maybe<UsersFields_i18n_Read>;
  update?: Maybe<UsersFields_i18n_Update>;
};

type UsersFields_i18n_Create = {
  __typename?: 'UsersFields_i18n_Create';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_i18n_Delete = {
  __typename?: 'UsersFields_i18n_Delete';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_i18n_Read = {
  __typename?: 'UsersFields_i18n_Read';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_i18n_Update = {
  __typename?: 'UsersFields_i18n_Update';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_role = {
  __typename?: 'UsersFields_role';
  create?: Maybe<UsersFields_role_Create>;
  delete?: Maybe<UsersFields_role_Delete>;
  read?: Maybe<UsersFields_role_Read>;
  update?: Maybe<UsersFields_role_Update>;
};

type UsersFields_role_Create = {
  __typename?: 'UsersFields_role_Create';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_role_Delete = {
  __typename?: 'UsersFields_role_Delete';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_role_Read = {
  __typename?: 'UsersFields_role_Read';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_role_Update = {
  __typename?: 'UsersFields_role_Update';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_sessions = {
  __typename?: 'UsersFields_sessions';
  create?: Maybe<UsersFields_sessions_Create>;
  delete?: Maybe<UsersFields_sessions_Delete>;
  fields?: Maybe<UsersFields_sessions_Fields>;
  read?: Maybe<UsersFields_sessions_Read>;
  update?: Maybe<UsersFields_sessions_Update>;
};

type UsersFields_sessions_Create = {
  __typename?: 'UsersFields_sessions_Create';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_sessions_Delete = {
  __typename?: 'UsersFields_sessions_Delete';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_sessions_Fields = {
  __typename?: 'UsersFields_sessions_Fields';
  createdAt?: Maybe<UsersFields_sessions_createdAt>;
  expiresAt?: Maybe<UsersFields_sessions_expiresAt>;
  id?: Maybe<UsersFields_sessions_id>;
};

type UsersFields_sessions_Read = {
  __typename?: 'UsersFields_sessions_Read';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_sessions_Update = {
  __typename?: 'UsersFields_sessions_Update';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_sessions_createdAt = {
  __typename?: 'UsersFields_sessions_createdAt';
  create?: Maybe<UsersFields_sessions_createdAt_Create>;
  delete?: Maybe<UsersFields_sessions_createdAt_Delete>;
  read?: Maybe<UsersFields_sessions_createdAt_Read>;
  update?: Maybe<UsersFields_sessions_createdAt_Update>;
};

type UsersFields_sessions_createdAt_Create = {
  __typename?: 'UsersFields_sessions_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_sessions_createdAt_Delete = {
  __typename?: 'UsersFields_sessions_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_sessions_createdAt_Read = {
  __typename?: 'UsersFields_sessions_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_sessions_createdAt_Update = {
  __typename?: 'UsersFields_sessions_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_sessions_expiresAt = {
  __typename?: 'UsersFields_sessions_expiresAt';
  create?: Maybe<UsersFields_sessions_expiresAt_Create>;
  delete?: Maybe<UsersFields_sessions_expiresAt_Delete>;
  read?: Maybe<UsersFields_sessions_expiresAt_Read>;
  update?: Maybe<UsersFields_sessions_expiresAt_Update>;
};

type UsersFields_sessions_expiresAt_Create = {
  __typename?: 'UsersFields_sessions_expiresAt_Create';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_sessions_expiresAt_Delete = {
  __typename?: 'UsersFields_sessions_expiresAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_sessions_expiresAt_Read = {
  __typename?: 'UsersFields_sessions_expiresAt_Read';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_sessions_expiresAt_Update = {
  __typename?: 'UsersFields_sessions_expiresAt_Update';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_sessions_id = {
  __typename?: 'UsersFields_sessions_id';
  create?: Maybe<UsersFields_sessions_id_Create>;
  delete?: Maybe<UsersFields_sessions_id_Delete>;
  read?: Maybe<UsersFields_sessions_id_Read>;
  update?: Maybe<UsersFields_sessions_id_Update>;
};

type UsersFields_sessions_id_Create = {
  __typename?: 'UsersFields_sessions_id_Create';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_sessions_id_Delete = {
  __typename?: 'UsersFields_sessions_id_Delete';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_sessions_id_Read = {
  __typename?: 'UsersFields_sessions_id_Read';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_sessions_id_Update = {
  __typename?: 'UsersFields_sessions_id_Update';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_updatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_updatedAt_Create>;
  delete?: Maybe<UsersFields_updatedAt_Delete>;
  read?: Maybe<UsersFields_updatedAt_Read>;
  update?: Maybe<UsersFields_updatedAt_Update>;
};

type UsersFields_updatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_updatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_updatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

type UsersFields_updatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

type allMedia = {
  __typename?: 'allMedia';
  docs: Array<Media>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

type authorsAccess = {
  __typename?: 'authorsAccess';
  create?: Maybe<AuthorsCreateAccess>;
  delete?: Maybe<AuthorsDeleteAccess>;
  fields?: Maybe<AuthorsFields>;
  read?: Maybe<AuthorsReadAccess>;
  update?: Maybe<AuthorsUpdateAccess>;
};

type authorsDocAccess = {
  __typename?: 'authorsDocAccess';
  create?: Maybe<AuthorsCreateDocAccess>;
  delete?: Maybe<AuthorsDeleteDocAccess>;
  fields?: Maybe<AuthorsDocAccessFields>;
  read?: Maybe<AuthorsReadDocAccess>;
  update?: Maybe<AuthorsUpdateDocAccess>;
};

type countAuthors = {
  __typename?: 'countAuthors';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

type countFolders = {
  __typename?: 'countFolders';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

type countPayloadKvs = {
  __typename?: 'countPayloadKvs';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

type countPayloadLockedDocuments = {
  __typename?: 'countPayloadLockedDocuments';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

type countPayloadPreferences = {
  __typename?: 'countPayloadPreferences';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

type countPosts = {
  __typename?: 'countPosts';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

type countUsers = {
  __typename?: 'countUsers';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

type countallMedia = {
  __typename?: 'countallMedia';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

type folderAccess = {
  __typename?: 'folderAccess';
  create?: Maybe<FolderCreateAccess>;
  delete?: Maybe<FolderDeleteAccess>;
  fields?: Maybe<FolderFields>;
  read?: Maybe<FolderReadAccess>;
  update?: Maybe<FolderUpdateAccess>;
};

type folderDocAccess = {
  __typename?: 'folderDocAccess';
  create?: Maybe<FolderCreateDocAccess>;
  delete?: Maybe<FolderDeleteDocAccess>;
  fields?: Maybe<FolderDocAccessFields>;
  read?: Maybe<FolderReadDocAccess>;
  update?: Maybe<FolderUpdateDocAccess>;
};

type homeAccess = {
  __typename?: 'homeAccess';
  fields?: Maybe<HomeFields>;
  read?: Maybe<HomeReadAccess>;
  readVersions?: Maybe<HomeReadVersionsAccess>;
  update?: Maybe<HomeUpdateAccess>;
};

type homeDocAccess = {
  __typename?: 'homeDocAccess';
  fields?: Maybe<HomeDocAccessFields>;
  read?: Maybe<HomeReadDocAccess>;
  readVersions?: Maybe<HomeReadVersionsDocAccess>;
  update?: Maybe<HomeUpdateDocAccess>;
};

type mediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

type mediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

type mutationAuthorInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  i18n?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

type mutationAuthorUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  i18n?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

type mutationFolderInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['String']['input']>;
  folderType?: InputMaybe<Array<InputMaybe<Folder_folderType_MutationInput>>>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

type mutationFolderUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['String']['input']>;
  folderType?: InputMaybe<Array<InputMaybe<FolderUpdate_folderType_MutationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

type mutationHomeInput = {
  _pathname?: InputMaybe<Scalars['String']['input']>;
  _status?: InputMaybe<Home__status_MutationInput>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  i18n?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  other?: InputMaybe<mutationHome_OtherInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

type mutationHome_OtherInput = {
  posts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type mutationMediaInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  cloudinary?: InputMaybe<mutationMedia_CloudinaryInput>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  folder?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  i18n?: InputMaybe<Scalars['String']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<mutationMedia_SizesInput>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

type mutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  cloudinary?: InputMaybe<mutationMediaUpdate_CloudinaryInput>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  folder?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  i18n?: InputMaybe<Scalars['String']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<mutationMediaUpdate_SizesInput>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

type mutationMediaUpdate_CloudinaryInput = {
  format?: InputMaybe<Scalars['String']['input']>;
  original_filename?: InputMaybe<Scalars['String']['input']>;
  public_id?: InputMaybe<Scalars['String']['input']>;
  resource_type?: InputMaybe<Scalars['String']['input']>;
  secure_url?: InputMaybe<Scalars['String']['input']>;
};

type mutationMediaUpdate_SizesInput = {
  card?: InputMaybe<mutationMediaUpdate_Sizes_CardInput>;
  tablet?: InputMaybe<mutationMediaUpdate_Sizes_TabletInput>;
  thumbnail?: InputMaybe<mutationMediaUpdate_Sizes_ThumbnailInput>;
};

type mutationMediaUpdate_Sizes_CardInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

type mutationMediaUpdate_Sizes_TabletInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

type mutationMediaUpdate_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

type mutationMedia_CloudinaryInput = {
  format?: InputMaybe<Scalars['String']['input']>;
  original_filename?: InputMaybe<Scalars['String']['input']>;
  public_id?: InputMaybe<Scalars['String']['input']>;
  resource_type?: InputMaybe<Scalars['String']['input']>;
  secure_url?: InputMaybe<Scalars['String']['input']>;
};

type mutationMedia_SizesInput = {
  card?: InputMaybe<mutationMedia_Sizes_CardInput>;
  tablet?: InputMaybe<mutationMedia_Sizes_TabletInput>;
  thumbnail?: InputMaybe<mutationMedia_Sizes_ThumbnailInput>;
};

type mutationMedia_Sizes_CardInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

type mutationMedia_Sizes_TabletInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

type mutationMedia_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

type mutationPayloadKvInput = {
  data: Scalars['JSON']['input'];
  key: Scalars['String']['input'];
};

type mutationPayloadKvUpdateInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

type mutationPayloadLockedDocumentInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocument_UserRelationshipInput>;
};

type mutationPayloadLockedDocumentUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInput>;
};

type mutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

type mutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

type mutationPostInput = {
  _pathname?: InputMaybe<Scalars['String']['input']>;
  _status?: InputMaybe<Post__status_MutationInput>;
  author?: InputMaybe<Scalars['String']['input']>;
  blocks?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  i18n?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

type mutationPostUpdateInput = {
  _pathname?: InputMaybe<Scalars['String']['input']>;
  _status?: InputMaybe<PostUpdate__status_MutationInput>;
  author?: InputMaybe<Scalars['String']['input']>;
  blocks?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  i18n?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

type mutationUserInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  hash?: InputMaybe<Scalars['String']['input']>;
  i18n?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password: Scalars['String']['input'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role: User_role_MutationInput;
  salt?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Array<InputMaybe<mutationUser_SessionsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

type mutationUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  i18n?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserUpdate_role_MutationInput>;
  salt?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Array<InputMaybe<mutationUserUpdate_SessionsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

type mutationUserUpdate_SessionsInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

type mutationUser_SessionsInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

type payload_kvAccess = {
  __typename?: 'payload_kvAccess';
  create?: Maybe<PayloadKvCreateAccess>;
  delete?: Maybe<PayloadKvDeleteAccess>;
  fields?: Maybe<PayloadKvFields>;
  read?: Maybe<PayloadKvReadAccess>;
  update?: Maybe<PayloadKvUpdateAccess>;
};

type payload_kvDocAccess = {
  __typename?: 'payload_kvDocAccess';
  create?: Maybe<PayloadKvCreateDocAccess>;
  delete?: Maybe<PayloadKvDeleteDocAccess>;
  fields?: Maybe<PayloadKvDocAccessFields>;
  read?: Maybe<PayloadKvReadDocAccess>;
  update?: Maybe<PayloadKvUpdateDocAccess>;
};

type payload_locked_documentsAccess = {
  __typename?: 'payload_locked_documentsAccess';
  create?: Maybe<PayloadLockedDocumentsCreateAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteAccess>;
  fields?: Maybe<PayloadLockedDocumentsFields>;
  read?: Maybe<PayloadLockedDocumentsReadAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateAccess>;
};

type payload_locked_documentsDocAccess = {
  __typename?: 'payload_locked_documentsDocAccess';
  create?: Maybe<PayloadLockedDocumentsCreateDocAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteDocAccess>;
  fields?: Maybe<PayloadLockedDocumentsDocAccessFields>;
  read?: Maybe<PayloadLockedDocumentsReadDocAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateDocAccess>;
};

type payload_preferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

type payload_preferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

type postsAccess = {
  __typename?: 'postsAccess';
  create?: Maybe<PostsCreateAccess>;
  delete?: Maybe<PostsDeleteAccess>;
  fields?: Maybe<PostsFields>;
  read?: Maybe<PostsReadAccess>;
  readVersions?: Maybe<PostsReadVersionsAccess>;
  update?: Maybe<PostsUpdateAccess>;
};

type postsDocAccess = {
  __typename?: 'postsDocAccess';
  create?: Maybe<PostsCreateDocAccess>;
  delete?: Maybe<PostsDeleteDocAccess>;
  fields?: Maybe<PostsDocAccessFields>;
  read?: Maybe<PostsReadDocAccess>;
  readVersions?: Maybe<PostsReadVersionsDocAccess>;
  update?: Maybe<PostsUpdateDocAccess>;
};

type usersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

type usersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

type usersJWT = {
  __typename?: 'usersJWT';
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
};

type usersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

type usersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

type usersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  user?: Maybe<usersJWT>;
};

type usersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

type versionsHome = {
  __typename?: 'versionsHome';
  docs: Array<HomeVersion>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

type versionsHome_autosave_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

type versionsHome_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type versionsHome_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type versionsHome_latest_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

enum versionsHome_publishedLocale_Input {
  en = 'en',
  se = 'se'
}

type versionsHome_publishedLocale_operator = {
  all?: InputMaybe<Array<InputMaybe<versionsHome_publishedLocale_Input>>>;
  equals?: InputMaybe<versionsHome_publishedLocale_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<versionsHome_publishedLocale_Input>>>;
  not_equals?: InputMaybe<versionsHome_publishedLocale_Input>;
  not_in?: InputMaybe<Array<InputMaybe<versionsHome_publishedLocale_Input>>>;
};

type versionsHome_snapshot_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

type versionsHome_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type versionsHome_version___pathname_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

enum versionsHome_version___status_Input {
  draft = 'draft',
  published = 'published'
}

type versionsHome_version___status_operator = {
  all?: InputMaybe<Array<InputMaybe<versionsHome_version___status_Input>>>;
  equals?: InputMaybe<versionsHome_version___status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<versionsHome_version___status_Input>>>;
  not_equals?: InputMaybe<versionsHome_version___status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<versionsHome_version___status_Input>>>;
};

type versionsHome_version__content_operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

type versionsHome_version__createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type versionsHome_version__header_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type versionsHome_version__i18n_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type versionsHome_version__image_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

type versionsHome_version__other__posts_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

type versionsHome_version__updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type versionsHome_where = {
  AND?: InputMaybe<Array<InputMaybe<versionsHome_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<versionsHome_where_or>>>;
  autosave?: InputMaybe<versionsHome_autosave_operator>;
  createdAt?: InputMaybe<versionsHome_createdAt_operator>;
  id?: InputMaybe<versionsHome_id_operator>;
  latest?: InputMaybe<versionsHome_latest_operator>;
  publishedLocale?: InputMaybe<versionsHome_publishedLocale_operator>;
  snapshot?: InputMaybe<versionsHome_snapshot_operator>;
  updatedAt?: InputMaybe<versionsHome_updatedAt_operator>;
  version___pathname?: InputMaybe<versionsHome_version___pathname_operator>;
  version___status?: InputMaybe<versionsHome_version___status_operator>;
  version__content?: InputMaybe<versionsHome_version__content_operator>;
  version__createdAt?: InputMaybe<versionsHome_version__createdAt_operator>;
  version__header?: InputMaybe<versionsHome_version__header_operator>;
  version__i18n?: InputMaybe<versionsHome_version__i18n_operator>;
  version__image?: InputMaybe<versionsHome_version__image_operator>;
  version__other__posts?: InputMaybe<versionsHome_version__other__posts_operator>;
  version__updatedAt?: InputMaybe<versionsHome_version__updatedAt_operator>;
};

type versionsHome_where_and = {
  AND?: InputMaybe<Array<InputMaybe<versionsHome_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<versionsHome_where_or>>>;
  autosave?: InputMaybe<versionsHome_autosave_operator>;
  createdAt?: InputMaybe<versionsHome_createdAt_operator>;
  id?: InputMaybe<versionsHome_id_operator>;
  latest?: InputMaybe<versionsHome_latest_operator>;
  publishedLocale?: InputMaybe<versionsHome_publishedLocale_operator>;
  snapshot?: InputMaybe<versionsHome_snapshot_operator>;
  updatedAt?: InputMaybe<versionsHome_updatedAt_operator>;
  version___pathname?: InputMaybe<versionsHome_version___pathname_operator>;
  version___status?: InputMaybe<versionsHome_version___status_operator>;
  version__content?: InputMaybe<versionsHome_version__content_operator>;
  version__createdAt?: InputMaybe<versionsHome_version__createdAt_operator>;
  version__header?: InputMaybe<versionsHome_version__header_operator>;
  version__i18n?: InputMaybe<versionsHome_version__i18n_operator>;
  version__image?: InputMaybe<versionsHome_version__image_operator>;
  version__other__posts?: InputMaybe<versionsHome_version__other__posts_operator>;
  version__updatedAt?: InputMaybe<versionsHome_version__updatedAt_operator>;
};

type versionsHome_where_or = {
  AND?: InputMaybe<Array<InputMaybe<versionsHome_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<versionsHome_where_or>>>;
  autosave?: InputMaybe<versionsHome_autosave_operator>;
  createdAt?: InputMaybe<versionsHome_createdAt_operator>;
  id?: InputMaybe<versionsHome_id_operator>;
  latest?: InputMaybe<versionsHome_latest_operator>;
  publishedLocale?: InputMaybe<versionsHome_publishedLocale_operator>;
  snapshot?: InputMaybe<versionsHome_snapshot_operator>;
  updatedAt?: InputMaybe<versionsHome_updatedAt_operator>;
  version___pathname?: InputMaybe<versionsHome_version___pathname_operator>;
  version___status?: InputMaybe<versionsHome_version___status_operator>;
  version__content?: InputMaybe<versionsHome_version__content_operator>;
  version__createdAt?: InputMaybe<versionsHome_version__createdAt_operator>;
  version__header?: InputMaybe<versionsHome_version__header_operator>;
  version__i18n?: InputMaybe<versionsHome_version__i18n_operator>;
  version__image?: InputMaybe<versionsHome_version__image_operator>;
  version__other__posts?: InputMaybe<versionsHome_version__other__posts_operator>;
  version__updatedAt?: InputMaybe<versionsHome_version__updatedAt_operator>;
};

type versionsPost_autosave_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

type versionsPost_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type versionsPost_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type versionsPost_latest_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

type versionsPost_parent_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

enum versionsPost_publishedLocale_Input {
  en = 'en',
  se = 'se'
}

type versionsPost_publishedLocale_operator = {
  all?: InputMaybe<Array<InputMaybe<versionsPost_publishedLocale_Input>>>;
  equals?: InputMaybe<versionsPost_publishedLocale_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<versionsPost_publishedLocale_Input>>>;
  not_equals?: InputMaybe<versionsPost_publishedLocale_Input>;
  not_in?: InputMaybe<Array<InputMaybe<versionsPost_publishedLocale_Input>>>;
};

type versionsPost_snapshot_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

type versionsPost_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type versionsPost_version___pathname_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

enum versionsPost_version___status_Input {
  draft = 'draft',
  published = 'published'
}

type versionsPost_version___status_operator = {
  all?: InputMaybe<Array<InputMaybe<versionsPost_version___status_Input>>>;
  equals?: InputMaybe<versionsPost_version___status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<versionsPost_version___status_Input>>>;
  not_equals?: InputMaybe<versionsPost_version___status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<versionsPost_version___status_Input>>>;
};

type versionsPost_version__author_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

type versionsPost_version__content_operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

type versionsPost_version__createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type versionsPost_version__date_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type versionsPost_version__generateSlug_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

type versionsPost_version__i18n_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type versionsPost_version__image_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

type versionsPost_version__slug_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type versionsPost_version__title_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type versionsPost_version__updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

type versionsPost_where = {
  AND?: InputMaybe<Array<InputMaybe<versionsPost_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<versionsPost_where_or>>>;
  autosave?: InputMaybe<versionsPost_autosave_operator>;
  createdAt?: InputMaybe<versionsPost_createdAt_operator>;
  id?: InputMaybe<versionsPost_id_operator>;
  latest?: InputMaybe<versionsPost_latest_operator>;
  parent?: InputMaybe<versionsPost_parent_operator>;
  publishedLocale?: InputMaybe<versionsPost_publishedLocale_operator>;
  snapshot?: InputMaybe<versionsPost_snapshot_operator>;
  updatedAt?: InputMaybe<versionsPost_updatedAt_operator>;
  version___pathname?: InputMaybe<versionsPost_version___pathname_operator>;
  version___status?: InputMaybe<versionsPost_version___status_operator>;
  version__author?: InputMaybe<versionsPost_version__author_operator>;
  version__content?: InputMaybe<versionsPost_version__content_operator>;
  version__createdAt?: InputMaybe<versionsPost_version__createdAt_operator>;
  version__date?: InputMaybe<versionsPost_version__date_operator>;
  version__generateSlug?: InputMaybe<versionsPost_version__generateSlug_operator>;
  version__i18n?: InputMaybe<versionsPost_version__i18n_operator>;
  version__image?: InputMaybe<versionsPost_version__image_operator>;
  version__slug?: InputMaybe<versionsPost_version__slug_operator>;
  version__title?: InputMaybe<versionsPost_version__title_operator>;
  version__updatedAt?: InputMaybe<versionsPost_version__updatedAt_operator>;
};

type versionsPost_where_and = {
  AND?: InputMaybe<Array<InputMaybe<versionsPost_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<versionsPost_where_or>>>;
  autosave?: InputMaybe<versionsPost_autosave_operator>;
  createdAt?: InputMaybe<versionsPost_createdAt_operator>;
  id?: InputMaybe<versionsPost_id_operator>;
  latest?: InputMaybe<versionsPost_latest_operator>;
  parent?: InputMaybe<versionsPost_parent_operator>;
  publishedLocale?: InputMaybe<versionsPost_publishedLocale_operator>;
  snapshot?: InputMaybe<versionsPost_snapshot_operator>;
  updatedAt?: InputMaybe<versionsPost_updatedAt_operator>;
  version___pathname?: InputMaybe<versionsPost_version___pathname_operator>;
  version___status?: InputMaybe<versionsPost_version___status_operator>;
  version__author?: InputMaybe<versionsPost_version__author_operator>;
  version__content?: InputMaybe<versionsPost_version__content_operator>;
  version__createdAt?: InputMaybe<versionsPost_version__createdAt_operator>;
  version__date?: InputMaybe<versionsPost_version__date_operator>;
  version__generateSlug?: InputMaybe<versionsPost_version__generateSlug_operator>;
  version__i18n?: InputMaybe<versionsPost_version__i18n_operator>;
  version__image?: InputMaybe<versionsPost_version__image_operator>;
  version__slug?: InputMaybe<versionsPost_version__slug_operator>;
  version__title?: InputMaybe<versionsPost_version__title_operator>;
  version__updatedAt?: InputMaybe<versionsPost_version__updatedAt_operator>;
};

type versionsPost_where_or = {
  AND?: InputMaybe<Array<InputMaybe<versionsPost_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<versionsPost_where_or>>>;
  autosave?: InputMaybe<versionsPost_autosave_operator>;
  createdAt?: InputMaybe<versionsPost_createdAt_operator>;
  id?: InputMaybe<versionsPost_id_operator>;
  latest?: InputMaybe<versionsPost_latest_operator>;
  parent?: InputMaybe<versionsPost_parent_operator>;
  publishedLocale?: InputMaybe<versionsPost_publishedLocale_operator>;
  snapshot?: InputMaybe<versionsPost_snapshot_operator>;
  updatedAt?: InputMaybe<versionsPost_updatedAt_operator>;
  version___pathname?: InputMaybe<versionsPost_version___pathname_operator>;
  version___status?: InputMaybe<versionsPost_version___status_operator>;
  version__author?: InputMaybe<versionsPost_version__author_operator>;
  version__content?: InputMaybe<versionsPost_version__content_operator>;
  version__createdAt?: InputMaybe<versionsPost_version__createdAt_operator>;
  version__date?: InputMaybe<versionsPost_version__date_operator>;
  version__generateSlug?: InputMaybe<versionsPost_version__generateSlug_operator>;
  version__i18n?: InputMaybe<versionsPost_version__i18n_operator>;
  version__image?: InputMaybe<versionsPost_version__image_operator>;
  version__slug?: InputMaybe<versionsPost_version__slug_operator>;
  version__title?: InputMaybe<versionsPost_version__title_operator>;
  version__updatedAt?: InputMaybe<versionsPost_version__updatedAt_operator>;
};

type versionsPosts = {
  __typename?: 'versionsPosts';
  docs: Array<PostVersion>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

type MediaFragment = { __typename?: 'Media', id: string, url?: string | null, alt?: string | null, width?: number | null, height?: number | null };

type HomeQueryVariables = Exact<{
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
}>;


type HomeQuery = { __typename?: 'Query', Home?: { __typename?: 'Home', _status?: Home__status | null, header?: string | null, content?: any | null, other?: { __typename?: 'Home_Other', posts?: Array<{ __typename?: 'Post', id: string, title?: string | null, content?: any | null, _status?: Post__status | null, slug?: string | null, blocks?: Array<{ __typename: 'QuoteBlock', quoteHeader?: string | null, quoteText?: string | null }> | null, image?: { __typename?: 'Media', id: string, url?: string | null, alt?: string | null, width?: number | null, height?: number | null } | null }> | null } | null, image?: { __typename?: 'Media', id: string, url?: string | null, alt?: string | null, width?: number | null, height?: number | null } | null } | null };

type PostQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
}>;


type PostQuery = { __typename?: 'Query', Posts?: { __typename?: 'Posts', docs: Array<{ __typename?: 'Post', id: string, title?: string | null, content?: any | null, _status?: Post__status | null, slug?: string | null, blocks?: Array<{ __typename: 'QuoteBlock', quoteHeader?: string | null, quoteText?: string | null }> | null, image?: { __typename?: 'Media', id: string, url?: string | null, alt?: string | null, width?: number | null, height?: number | null } | null }> } | null };

type AllPostsQueryVariables = Exact<{
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
}>;


type AllPostsQuery = { __typename?: 'Query', Posts?: { __typename?: 'Posts', docs: Array<{ __typename?: 'Post', id: string, title?: string | null, content?: any | null, _status?: Post__status | null, slug?: string | null, blocks?: Array<{ __typename: 'QuoteBlock', quoteHeader?: string | null, quoteText?: string | null }> | null, image?: { __typename?: 'Media', id: string, url?: string | null, alt?: string | null, width?: number | null, height?: number | null } | null }> } | null };

type PostFragment = { __typename?: 'Post', id: string, title?: string | null, content?: any | null, _status?: Post__status | null, slug?: string | null, blocks?: Array<{ __typename: 'QuoteBlock', quoteHeader?: string | null, quoteText?: string | null }> | null, image?: { __typename?: 'Media', id: string, url?: string | null, alt?: string | null, width?: number | null, height?: number | null } | null };
