import React, { useState } from 'react';

const Data = [
  { id: 1, name: 'Toyota' },
  { id: 2, name: 'Maruthi' },
  { id: 3, name: 'Benz' },
  { id: 4, name: 'Ferrari' },
  { id: 5, name: 'Range Rover' },
];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    const results = Data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul className="mt-2">
        {searchResults.map(item => (
          <li key={item.id} className="border-b border-gray-300 py-2">{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
