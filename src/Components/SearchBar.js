import React from 'react';
import './NavBar.css';

const SearchBar = props => {
    return (
        <div className="Form">
            <form onSubmit={e => props.handleSubmit(e)} >
                <label>
                    Q:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" className="SubmitButton"/>
            </form>
        </div>
    );
}

export default SearchBar;
