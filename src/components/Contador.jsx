import React,{useState} from "react";

function Contador(){
    let valorInicial=10;
    const [count, setCount]=useState(valorInicial);
    const aumentar= () =>setCount(count + 1);
    const disminuir=() => {
        if (count> 0){
            setCount(count - 1);
        }else{
            alert('No se puede disminuir más')
        }
    } ;
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