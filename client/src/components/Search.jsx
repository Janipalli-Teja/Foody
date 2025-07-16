import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Orange', 'Watermelon'];

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
        }}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index} style={{ padding: '5px 0' }}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
