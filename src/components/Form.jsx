import React from "react";
import Select from "./Select";
import Button from "./Button";
import Input from "./Input";


function Form(){
    const opciones=["Cedula","Tarjeta de Identidad","Pasaporte", "Cedula extranjería",]
    return(
        <form>
            <Select titulo="Tipo de identificación" opciones={opciones} />
            <Input titulo="Número de identificación" type="number" placeholder="Número de identificación" />
            <Input titulo="Nombre" type="text" placeholder="Nombre"/>
            <Input titulo="Apellido" type="text" placeholder="Apellido"/>
            <Input titulo="Telefono" type="number" placeholder="telefono"/>
            <Input titulo="Email" type="email" placeholder="correo"/>
            <Input titulo="LinkedId" type="text" placeholder="linkedID"/>
            <Input titulo="GitHub" type="text" placeholder="gitHub"/>
            <Button onClick={() => console.log("click")} disabled={true} label="Enviar" />
        </form>
    )
}
export default Form;