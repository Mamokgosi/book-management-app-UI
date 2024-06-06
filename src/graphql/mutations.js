import { gql } from '@apollo/client';

export const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!, $description: String!) {
    addBook(title: $title, author: $author, description: $description) {
      id
      title
      author
      description
    }
  }
`;

export const EDIT_BOOK = gql`
  mutation EditBook($id: ID!, $title: String!, $author: String!, $description: String!) {
    editBook(id: $id, title: $title, author: $author, description: $description) {
      id
      title
      author
      description
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation DeleteBook($id: ID!) {
    deleteBook(id: $id) {
      id
    }
  }
`;
