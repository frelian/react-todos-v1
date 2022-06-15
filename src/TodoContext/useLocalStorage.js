import { useState, useEffect } from "react";

function useLocalStorage ( itemName, initialValue ) {

    // Clase 15, Simular que se hace peticion a un API, quiere decir que se requieren crear varios estados
    // de carga y de error

    // Alternativa 1, usar 2 state distintos
    /// const [loading, setLoading] = useState(true);
    /// const [error, setError] = useState(false);
    const [dataStatus, setDataStatus] = useState({ loading:true, error:false })

    /*
    Alternativa 2 para el loading y error: Lo inicio como un objeto con ambos estados, error y false
    const [dataStatus,setDataStatus] = useState({loading:true, error:false})

    // y lo edito de esta forma, para evitar la sobreescritura.
    //Para editar solo el loading
    setDataStatus({...dataStatus, loading:false})

    //Para editar solo el error
    setDataStatus({...dataStatus, error:true})

    //Para editar ambos  ヽ(•‿•)ノ
    setDataStatus({loading:false, error:false})
    */
    
    // Clase 10
    const [item, setItem] = useState(initialValue);

    // Clase 15. Voy a simular la peticion de API que la app se va a demorar un poco usando setTimeout
    useEffect(() => {

        // setTimeout(() => {})
        setTimeout(() => {
            
            try {
                // Clase 13 LocalStorage
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                
                // Verifico si no hay nada en locaStorage
                if (! localStorageItem ) {

                    const stringifiedTodos = JSON.stringify(initialValue);
                    localStorage.setItem(itemName, stringifiedTodos);
                    parsedItem = initialValue;

                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);

                // setLoading(false);
                setDataStatus({...dataStatus, loading:false})
            } catch (e) {
                // setError(true)
                setDataStatus({...dataStatus, error:true})
            }
        }, 4000);
    });

    // Clase 13 
    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);

            // Guardo en localStorage
            localStorage.setItem(itemName, stringifiedItem);
    
            // Guardo en el estado
            setItem(newItem)

        } catch (error) {
            // setError(true)
            setDataStatus({...dataStatus, error:true})
        }
    }

    return {        
        item,
        saveItem,
        dataStatus,
    };
}

export { useLocalStorage }
