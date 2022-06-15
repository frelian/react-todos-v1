import React from "react";
import { AppUi } from "./AppUI";
import { TodoProvider } from "../TodoContext";

/*
const defaultTodos = [
    { text: "Comprar miel", completed: false },
    { text: "Tomar el curso de Redux", completed: true },
    { text: "Hacer mi portafolio", completed: false },
];
*/

function App() {

    return (
        <TodoProvider>
            <AppUi />
        </TodoProvider>
    );
}

export default App;
