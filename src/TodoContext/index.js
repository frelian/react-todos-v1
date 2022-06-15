import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {

    const {
        item: todos,
        saveItem: saveTodos,
        dataStatus,
    } = useLocalStorage('TODO_V1', []);

    const [ searchValue, setSearchValue ] = useState('');

    // Clase 18 
    const [ openModal, setOpenModal ] = useState(false);

    // Creo un filtro de los completados
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];
    if (! searchValue >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {

            // Convierto todo a minuscula para evitar erroes
            const todoText = todo.text.toLowerCase();
            
            // Convierto tambien lo buscado a miniscula
            const searchText = searchValue.toLowerCase()
            
            // Comparo, le digo al metodo filter el criterio de evalucacion con el includes
            return todoText.includes(searchText)
        })
    }

    /**
     * Clase 11 establecer el todo en true, Es "complete" = completar, no completed = completado
     * Al ejecutar el metodo se va a provocar un RE-RENDER
     * Entonces para ello, se busca el texto en la lista de "todos" que coincida
     * 
     * @param {*} text 
     */
    const completeTodo = (text) => {

        // Busco todo x todo cual tiene ese mismo texto
        // Devuelve el index de la posicion encontrada
        const todoIndex = todos.findIndex(todo => todo.text === text)

        // Creo una copia de mi lista de todos
        const newTodos = [...todos];

        // Seteo en true completed
        newTodos[todoIndex].completed = true; 

        // Actualizo el estado
        saveTodos(newTodos);
    }

    /**
     * Clase 11, codigo alternativo para quitar de completeado en caso se haya completador por error
     * 
     * @param {*} text 
     */
    const toggleCompleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]; 
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {

        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos];

        // Elimino del array usando splice, parametro 1) un numero de inicio 
        // y 2) la cantidad de caracteres a quitar, seria solo 1
        newTodos.splice(todoIndex, 1)

        saveTodos(newTodos);
    }

    // Clase 19 formulario para crear TODOs
    const addTodo = (text) => {

        const newTodos = [...todos];

        // Seteo en true completed
        newTodos.push({
            completed: false,
            text,
        }); 

        // Actualizo el estado
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            dataStatus,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            toggleCompleteTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {
                props.children
            }
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }