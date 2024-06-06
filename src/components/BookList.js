import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_BOOKS } from '../graphql/queries';
import { DELETE_BOOK } from '../graphql/mutations';
import { Link } from 'react-router-dom';

const BookList = () => {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS);
  const [deleteBook] = useMutation(DELETE_BOOK, {
    refetchQueries: [{ query: GET_ALL_BOOKS }]
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  if (!data || !data.books) return <p>No data available</p>;

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      deleteBook({ variables: { id } });
    }
  };

  return (
    <div className="book-list">
      <h1>All Books</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.books.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No books available</td>
            </tr>
          ) : (
            data.books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.description}</td>
                <td>
                  <Link to={`/edit/${book.id}`} className="edit-link">Edit</Link>
                  <button onClick={() => handleDelete(book.id)} className="delete-button">Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
