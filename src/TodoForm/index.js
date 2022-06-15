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
                placeholder="Escribe una nueva tarea"
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick ={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type= "submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }