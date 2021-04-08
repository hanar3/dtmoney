import { gql } from "@apollo/client";

export const LIST_TRANSACTIONS = gql`
  query listTransactions($deviceId: String!) {
    transactions(input: { deviceId: $deviceId }) {
      id
      deviceId
      type
      category
      title
      amount
      createdAt
    }
  }
`;

export const CREATE_TRANSACTION = gql`
  mutation transaction(
    $deviceId: String!
    $amount: Float!
    $title: String!
    $category: String!
    $type: String!
  ) {
    createTransaction(
      input: {
        deviceId: $deviceId
        amount: $amount
        title: $title
        category: $category
        type: $type
      }
    ) {
      id
    }
  }
`;
