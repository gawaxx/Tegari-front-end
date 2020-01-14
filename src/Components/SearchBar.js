import React, { useState } from 'react';
import './Component.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'
// <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />


const SearchBar = props => {

    const [value, setValue] = useState(" ");

    return (
        <div className="Form">
            <form>
                <label>
                    <FaSearch />
                    <input type="text" name="search" onChange={ (e) => setValue(e.target.value)}/>
                </label>
                <Link to="/search"> <input type="submit" value="Submit" className="SubmitButton" onClick={() => props.handleSubmit(value)}/> </Link>
            </form>
        </div>
    );
}

export default SearchBar;
