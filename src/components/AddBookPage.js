import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_BOOK } from '../graphql/mutations';
import { GET_ALL_BOOKS } from '../graphql/queries';

const AddBookPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const [addBook] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: GET_ALL_BOOKS }]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addBook({ variables: { title, author, description } });
      setTitle('');
      setAuthor('');
      setDescription('');
      setErrors({});
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (title.trim() === '') {
      errors.title = 'Title is required';
      isValid = false;
    }

    if (author.trim() === '') {
      errors.author = 'Author is required';
      isValid = false;
    }

    if (description.trim() === '') {
      errors.description = 'Description is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <div style={{ marginTop: '60px', margin: '40px auto', width: '60%', background: '#ADD8E6', color: 'white', padding: '20px', borderRadius: '5px' }}>
      <h1>Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ marginBottom: '10px', width: '100%' }}
          />
          {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            style={{ marginBottom: '10px', width: '100%' }}
          />
          {errors.author && <p style={{ color: 'red' }}>{errors.author}</p>}
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ marginBottom: '10px', width: '100%', height: '100px' }}
          />
          {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
        </div>
        <button type="submit" style={{ background: 'white', color: '#ADD8E6', border: '1px solid white', padding: '5px 10px', cursor: 'pointer' }}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage;
