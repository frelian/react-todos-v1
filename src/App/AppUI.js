import React, { useContext } from "react";

import { TodoContext } from "../TodoContext";

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";

import { TodoForm } from "../TodoForm";

// Clase 20. Reto loading
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";

function AppUi() {

    const { dataStatus, searchedTodos, toggleCompleteTodo, deleteTodo, openModal, setOpenModal } = useContext(TodoContext)

    return (
        <>
            <TodoCounter />
            {!dataStatus.loading && <TodoSearch />}

            <TodoList>
                {dataStatus.error && <TodosError error={dataStatus.error} />}
                {dataStatus.loading && <TodosLoading />}
                {(!dataStatus.loading && !searchedTodos.length) && <EmptyTodos /> }

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => toggleCompleteTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text) }
                    />
                ))}
            </TodoList>

            {!! openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            {
                !dataStatus.loading && <CreateTodoButton setOpenModal={setOpenModal}/>
            }
        </>
    );
}

export {AppUi};