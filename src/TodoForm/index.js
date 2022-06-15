import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"

function TodoForm () {

    const [ newTodoValue, setNewTodoValue ] = useState('')

    // Importo la funcion "saveTodo" del contexto
    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event) => {

        // Cuando se haga submit evita que se recargue la pagina web
        event.preventDefault();
        
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <textarea
                value={ newTodoValue }
                placeholder="Write a new task"
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick ={onCancel}
                >
                    Cancel
                </button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type= "submit"
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export { TodoForm }
