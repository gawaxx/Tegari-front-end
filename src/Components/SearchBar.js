import React from 'react';
import { Input, Menu } from 'semantic-ui-react'

const SearchBar = () => {
    return (
        <div>
            <form>
                <label>
                    Logo:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default SearchBar;
