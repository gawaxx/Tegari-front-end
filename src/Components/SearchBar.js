import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { Dropdown, Input } from 'semantic-ui-react'
// <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />

const options = [
    { key: 'entertainment', text: 'In entertainment', value: 'entertainment' },
    { key: 'electronic', text: 'In electronic', value: 'electronic' },
    { key: 'furniture', text: 'In furniture', value: 'furniture' },
    // { key: 'all', text: 'In all', value: {} },
  ]

const SearchBar = props => {

    const [value, setValue] = useState(" ");

    const handleSubmit = (e) => {
        debugger
    }

    return (
        // onChange={ (e) => setValue(e.target.value)}

        // <div className="SearchWrap">
        //     <div className="search">
        //         <input type="text" placeholder="What are you looking for?" className="searchTerm" onChange={ (e) => setValue(e.target.value)}/>
        //         <Link to="/search"> <button type="submit" className="searchButton" onClick={() => props.handleSearchSubmit(value)}>
        //             <i> <FaSearch /> </i>
        //         </button>
        //         </Link>
        //     </div>
        // </div>

        <Input className="searchBar"
            action={
            <Dropdown button basic floating options={options} defaultValue='page' />
            }
            icon='search'
            iconPosition='left'
            placeholder='Search for a product!'
            onChange={ (e) => setValue(e.target.value)}
            onSubmit={(e) => handleSubmit(e, value)}
        />
        
    );
}

export default SearchBar;
