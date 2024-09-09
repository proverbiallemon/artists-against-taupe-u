/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createContactFormSubmission = /* GraphQL */ `mutation CreateContactFormSubmission(
  $input: CreateContactFormSubmissionInput!
  $condition: ModelContactFormSubmissionConditionInput
) {
  createContactFormSubmission(input: $input, condition: $condition) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContactFormSubmissionMutationVariables,
  APITypes.CreateContactFormSubmissionMutation
>;
export const updateContactFormSubmission = /* GraphQL */ `mutation UpdateContactFormSubmission(
  $input: UpdateContactFormSubmissionInput!
  $condition: ModelContactFormSubmissionConditionInput
) {
  updateContactFormSubmission(input: $input, condition: $condition) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContactFormSubmissionMutationVariables,
  APITypes.UpdateContactFormSubmissionMutation
>;
export const deleteContactFormSubmission = /* GraphQL */ `mutation DeleteContactFormSubmission(
  $input: DeleteContactFormSubmissionInput!
  $condition: ModelContactFormSubmissionConditionInput
) {
  deleteContactFormSubmission(input: $input, condition: $condition) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContactFormSubmissionMutationVariables,
  APITypes.DeleteContactFormSubmissionMutation
>;
