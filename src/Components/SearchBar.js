import React from 'react';

const SearchBar = props => {
    return (
        <div>
            <form onSubmit={e => props.handleSubmit(e)} >
                <label>
                    Q:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default SearchBar;
