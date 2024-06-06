// src/components/EditBookPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_BOOKS } from '../graphql/queries';
import { EDIT_BOOK } from '../graphql/mutations';

const EditBookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_ALL_BOOKS);
  const [editBook] = useMutation(EDIT_BOOK, {
    onCompleted: () => navigate('/')
  });

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (data) {
      const book = data.books.find((book) => book.id === id);
      if (book) {
        setTitle(book.title);
        setAuthor(book.author);
        setDescription(book.description);
      }
    }
  }, [data, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editBook({ variables: { id, title, author, description } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditBookPage;
