import React, { useState } from 'react';
import { Dropdown, Input, Form, Button } from 'semantic-ui-react'


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
        <div className="fullsearchbar" >

            <div className="searchbarleft">
                <Form onSubmit={() => handleSubmit() }> 
                    <Input className="searchBar"
                        action={
                        <Dropdown button inverted floating 
                        options={options} 
                        defaultValue='all' 
                        onChange={ (e, value) => getCategory(e, value)}
                        className="dropdown"
                        />
                        }
                        icon='search'
                        iconPosition='left'
                        placeholder='Search for a product!'
                        onChange={ (e) => setValue(e.target.value)}
                    />
                </Form>
            </div>

            <div className="searchbarcenter" >
                <p> and let's go! </p>
            </div>

            <div className="searchbarright">
                <Button inverted color='green' className="button" onClick={() => handleSubmit()} >
                    Go !
                </Button>
            </div>
        </div>
        
    );
}

export default SearchBar;
