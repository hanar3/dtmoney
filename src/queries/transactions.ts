import { gql } from "@apollo/client";

export const LIST_TRANSACTIONS = gql`
  query listTransactions($deviceId: String!) {
    transactions(deviceId: $deviceId) {
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

export const DELETE_TRANSACTION = gql`
  mutation deleteTransaction($transactionId: String!) {
    deleteTransaction(transactionId: $transactionId) {
      ... on TransactionNotFound {
        code
        message
      }

      ... on TransactionType {
        id
      }
    }
  }
`;

export const UPDATE_TRANSACTION = gql`
  mutation updateTransaction(
    $id: String!
    $amount: Float
    $title: String
    $category: String
    $type: String
  ) {
    updateTransaction(
      id: $id
      updateFields: {
        amount: $amount
        title: $title
        category: $category
        type: $type
      }
    ) {
      ... on TransactionType {
        id
      }
    }
  }
`;
