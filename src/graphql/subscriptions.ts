/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateContactFormSubmission = /* GraphQL */ `subscription OnCreateContactFormSubmission(
  $filter: ModelSubscriptionContactFormSubmissionFilterInput
) {
  onCreateContactFormSubmission(filter: $filter) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateContactFormSubmissionSubscriptionVariables,
  APITypes.OnCreateContactFormSubmissionSubscription
>;
export const onUpdateContactFormSubmission = /* GraphQL */ `subscription OnUpdateContactFormSubmission(
  $filter: ModelSubscriptionContactFormSubmissionFilterInput
) {
  onUpdateContactFormSubmission(filter: $filter) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateContactFormSubmissionSubscriptionVariables,
  APITypes.OnUpdateContactFormSubmissionSubscription
>;
export const onDeleteContactFormSubmission = /* GraphQL */ `subscription OnDeleteContactFormSubmission(
  $filter: ModelSubscriptionContactFormSubmissionFilterInput
) {
  onDeleteContactFormSubmission(filter: $filter) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteContactFormSubmissionSubscriptionVariables,
  APITypes.OnDeleteContactFormSubmissionSubscription
>;
