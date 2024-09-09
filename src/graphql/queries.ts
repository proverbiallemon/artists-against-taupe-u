/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getContactFormSubmission = /* GraphQL */ `query GetContactFormSubmission($id: ID!) {
  getContactFormSubmission(id: $id) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetContactFormSubmissionQueryVariables,
  APITypes.GetContactFormSubmissionQuery
>;
export const listContactFormSubmissions = /* GraphQL */ `query ListContactFormSubmissions(
  $filter: ModelContactFormSubmissionFilterInput
  $limit: Int
  $nextToken: String
) {
  listContactFormSubmissions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      email
      message
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContactFormSubmissionsQueryVariables,
  APITypes.ListContactFormSubmissionsQuery
>;
