import React from 'react';
import './Component.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'
// <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />


const SearchBar = props => {
    return (
        <div className="Form">
            <form onSubmit={e => props.handleSubmit(e)} >
                <label>
                    <FaSearch />
                    <input type="text" name="search"/>
                </label>
                <Link to="/search"> <input type="submit" value="Submit" className="SubmitButton"/> </Link>
            </form>
        </div>
    );
}

export default SearchBar;
