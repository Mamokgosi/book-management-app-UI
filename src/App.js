/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookList from './components/BookList';
import AddBookPage from './components/AddBookPage';
import EditBookPage from './components/EditBookPage';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">Add Book</Link>
          </li>
          <li className="nav-item">
            <Link to="/books" className="nav-link">Book List</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddBookPage />} />
        <Route path="/edit/:id" element={<EditBookPage />} />
        <Route path="/books" element={<BookList />} />
      </Routes>
    </Router>
  );
}

export default App;
