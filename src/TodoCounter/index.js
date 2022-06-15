import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() {

    const { totalTodos, completedTodos } = useContext(TodoContext);

    // Evito hacer const {total, completedTodos} = props;
    //  y mejor desestructuro en los parametros del componete

    return (
        <h2 className="TodoCounter">You have completed {completedTodos} of {totalTodos} ToDos</h2>
    )
}

/*
CSS en React, algunas de muchas opciones son:
    const styles = {
        color: "blue",
        backgroundColor: "gray",
    }
    y <h2 style={styles}>algo</h2>

    Otra es:
        <h2 style={{
            color: "blue",
            backgroundColor: "gray",
        }}>Has completado x de y TODOs</h2>
*/

export { TodoCounter }
