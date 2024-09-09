/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateContactFormSubmissionInput = {
  id?: string | null,
  name: string,
  email: string,
  message: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelContactFormSubmissionConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  message?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelContactFormSubmissionConditionInput | null > | null,
  or?: Array< ModelContactFormSubmissionConditionInput | null > | null,
  not?: ModelContactFormSubmissionConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ContactFormSubmission = {
  __typename: "ContactFormSubmission",
  id: string,
  name: string,
  email: string,
  message: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateContactFormSubmissionInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  message?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteContactFormSubmissionInput = {
  id: string,
};

export type ModelContactFormSubmissionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  message?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelContactFormSubmissionFilterInput | null > | null,
  or?: Array< ModelContactFormSubmissionFilterInput | null > | null,
  not?: ModelContactFormSubmissionFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelContactFormSubmissionConnection = {
  __typename: "ModelContactFormSubmissionConnection",
  items:  Array<ContactFormSubmission | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionContactFormSubmissionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  message?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContactFormSubmissionFilterInput | null > | null,
  or?: Array< ModelSubscriptionContactFormSubmissionFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateContactFormSubmissionMutationVariables = {
  input: CreateContactFormSubmissionInput,
  condition?: ModelContactFormSubmissionConditionInput | null,
};

export type CreateContactFormSubmissionMutation = {
  createContactFormSubmission?:  {
    __typename: "ContactFormSubmission",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateContactFormSubmissionMutationVariables = {
  input: UpdateContactFormSubmissionInput,
  condition?: ModelContactFormSubmissionConditionInput | null,
};

export type UpdateContactFormSubmissionMutation = {
  updateContactFormSubmission?:  {
    __typename: "ContactFormSubmission",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteContactFormSubmissionMutationVariables = {
  input: DeleteContactFormSubmissionInput,
  condition?: ModelContactFormSubmissionConditionInput | null,
};

export type DeleteContactFormSubmissionMutation = {
  deleteContactFormSubmission?:  {
    __typename: "ContactFormSubmission",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetContactFormSubmissionQueryVariables = {
  id: string,
};

export type GetContactFormSubmissionQuery = {
  getContactFormSubmission?:  {
    __typename: "ContactFormSubmission",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListContactFormSubmissionsQueryVariables = {
  filter?: ModelContactFormSubmissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactFormSubmissionsQuery = {
  listContactFormSubmissions?:  {
    __typename: "ModelContactFormSubmissionConnection",
    items:  Array< {
      __typename: "ContactFormSubmission",
      id: string,
      name: string,
      email: string,
      message: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateContactFormSubmissionSubscriptionVariables = {
  filter?: ModelSubscriptionContactFormSubmissionFilterInput | null,
};

export type OnCreateContactFormSubmissionSubscription = {
  onCreateContactFormSubmission?:  {
    __typename: "ContactFormSubmission",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateContactFormSubmissionSubscriptionVariables = {
  filter?: ModelSubscriptionContactFormSubmissionFilterInput | null,
};

export type OnUpdateContactFormSubmissionSubscription = {
  onUpdateContactFormSubmission?:  {
    __typename: "ContactFormSubmission",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteContactFormSubmissionSubscriptionVariables = {
  filter?: ModelSubscriptionContactFormSubmissionFilterInput | null,
};

export type OnDeleteContactFormSubmissionSubscription = {
  onDeleteContactFormSubmission?:  {
    __typename: "ContactFormSubmission",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};
