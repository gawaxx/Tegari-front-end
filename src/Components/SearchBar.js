import React, { useState } from 'react';
import { Dropdown, Input, Form } from 'semantic-ui-react'
import Select from 'react-select';


const options = [
    { key: 'all', text: 'In everything', value: "all" },
    { key: 'entertainment', text: 'In entertainment', value: 'entertainment' },
    { key: 'electronic', text: 'In electronic', value: 'electronic' },
    { key: 'furniture', text: 'In furniture', value: 'furniture' },
  ]

const SearchBar = props => {


    const [value, setValue] = useState(" ");
    const [category, setCategory] = useState("");
    
    const getCategory = (e, value) => {
        setCategory(value.value)
    }

    const handleSubmit = () => {
        console.log(value)
        console.log(category)
        const searchParams = {
            value: value,
            category: category
        }
        props.handleSearchSubmit(searchParams)
    }

    return (
        <Form onSubmit={() => handleSubmit() }> 
            <Input className="searchBar"
                action={
                <Dropdown button basic floating 
                options={options} 
                defaultValue='page' 
                onChange={ (e, value) => getCategory(e, value)}
                />
                }
                icon='search'
                iconPosition='left'
                placeholder='Search for a product!'
                onChange={ (e) => setValue(e.target.value)}
            />
        </Form>
        
    );
}

export default SearchBar;
