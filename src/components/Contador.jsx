import React,{useState} from "react";

function Contador(){
    const [count, setCount]=useState(0);
    const aumentar= () =>setCount(count + 1);
    const disminuir=() =>setCount(count - 1);
    const reset = () => setCount(0);
    return(
        <div>
            <h1>Me gusta: {count}</h1>
            <button onClick={aumentar}>Me gusta</button>
            <button onClick={disminuir}>No me gusta</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Contador;