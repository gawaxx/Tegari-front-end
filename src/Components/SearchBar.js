import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { Dropdown, Input } from 'semantic-ui-react'
// <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />

const options = [
    { key: 'page', text: 'This Page', value: 'page' },
    { key: 'org', text: 'This Organization', value: 'org' },
    { key: 'site', text: 'Entire Site', value: 'site' },
  ]

const SearchBar = props => {

    const [value, setValue] = useState(" ");

    return (
        // <div classNameName="Form">
        //     <form>
        //         <label>
        //             <FaSearch />
        //             <input type="text" name="search" onChange={ (e) => setValue(e.target.value)}/>
        //         </label>
        //         <Link to="/search"> <input type="submit" value="Submit" classNameName="SubmitButton" onClick={() => props.handleSearchSubmit(value)}/> </Link>
        //     </form>
        // </div>

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

        <Input
            action={
            <Dropdown button basic floating options={options} defaultValue='page' />
            }
            icon='search'
            iconPosition='left'
            placeholder='Search...'
        />
        
    );
}

export default SearchBar;
