import React, { useState } from 'react';

function ListFilter() {
  const [list] = useState([
    { name: 'Cordoba'},
    { name: 'Sevilla'},
    { name: 'Granada'},
    { name: 'Malaga'},
    { name: 'Jaen'},
    { name: 'Almeria'},
    { name: 'Huelva'},
    { name: 'Cadiz'}
  ]);

  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = event => {
    setFilterValue(event.target.value);
  };

  const filteredList = list.filter(item =>
      item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
      <div>
        <input type="text" value={filterValue} onChange={handleFilterChange} />
        <ul>
          {filteredList.map(item => (
              <li key={item.name}>
                {item.name}
              </li>
          ))}
        </ul>
      </div>
  );
}

export default ListFilter;
