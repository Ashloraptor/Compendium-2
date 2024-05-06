import React, { useState } from 'react';



const PlantSearchForm = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [comment, setComment] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery, comment);
  };

  return (
    <form onSubmit={handleSubmit} className="plant-search-form">
      <input
        type="text"
        placeholder="Search for plants..."
        value={searchQuery}
        onChange={handleChange}
        className="search-input"
      />
      <input
        type="text"
        placeholder="Add a comment"
        value={comment}
        onChange={handleCommentChange}
        className="comment-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default PlantSearchForm;