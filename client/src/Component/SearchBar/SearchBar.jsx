import React, { useState } from 'react';
import products from '../Assets/products'
import './SearchBar.css'
import { Link } from 'react-router-dom';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Function to handle changes in the search input
  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Simulate fetching suggestions from a database or API
    // In a real application, you would fetch data based on the user input
    // const fakeDatabase = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango'];
    if (value === '') {
        setSuggestions([]);
        return;
      }
    const filteredSuggestions = products.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  return (
    <div className='searchBar'>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((item, index) => (
            <Link to={`/product/${item.id}`}onClick={()=>{setSuggestions([])}} style={{textDecoration:"none", color:"#626262"}}><li key={index}>{item.name}</li></Link>
          ))}
        </ul>
      )}
    </div>
  );
};

