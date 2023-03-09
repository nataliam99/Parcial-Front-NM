import React, { useState } from 'react'



export const Form = ({handlerSubmit,handlerChangeNombre,handlerChange,nombre,color}) => {

    



    return(
        <form onSubmit = {(e) => handlerSubmit(e, { nombre,color})}>

            <input
            placeholder="Ingresar Nombre" 
            id="nombre"
            name= "nombre"
            value={nombre}
            onChange={handlerChangeNombre}
            />
            <input
            placeholder="Ingresa tu color favorito (formato HEX)" 
            id="color"
            name= "color"
            value={color}
            onChange={handlerChange}
            />
            
            <input type="submit" value="ENVIAR"/>

        </form>
    )
}