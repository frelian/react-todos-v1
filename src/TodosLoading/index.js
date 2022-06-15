import React from "react";

import loading1 from "./loading_1.gif"
import "./TodosLoading.css"

function TodosLoading({ error }) {

    return (
        <>
            <div className="LoadingTodo-container">
                {/* <span className="LoadingTodo-completeIcon"></span> */}
                <p className="LoadingTodo-text">Cargando TODOs...</p>
                {/* <span className="LoadingTodo-deleteIcon"></span>  */}
            </div>
            <div style={{ textAlign: "center" }}>
                <img src={loading1} alt="Imagen de carga" />
            </div>
        </>
    )
}

export { TodosLoading }
