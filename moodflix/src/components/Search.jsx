import React from 'react'

const person = {
    name: "John Doe",
    age : 30,
    city: "New York"
}

const {name, age, city} = person;

// This is a destructuring assignment that extracts properties from the person object

const Search = ({searchTerm,setSearchTerm}) => {
  return (
    
    <div className='search'>
        <div>
            <img src="search.svg" alt="search" />

            <input type="text"
                placeholder='Search for movies...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    </div>

  )
}

export default Search