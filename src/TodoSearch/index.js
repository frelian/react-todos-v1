import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {

    const { searchValue, setSearchValue } = useContext(TodoContext);
    
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }
    
    return (
        <input
            key={1}
            className="TodoSearch" 
            placeholder="Search" 
            value={ searchValue || "" }
            onChange={ onSearchValueChange }
        />
    );
}

export { TodoSearch }
