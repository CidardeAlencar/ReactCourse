/* Ejemplo de uso del hook useState
    Crear un componente de tipo funcion y acceder a su estado
    privado atraves de un hook y  ademas poder modificarlo
*/

import React, { useState } from 'react';

const Ejemplo1 = () => {

    //Valor inicial para un contador
    const valorInicial=0;
    //Valor inicial para una persona
    const personaInicial={
        nombre:'Cidar',
        email:'cidarandresdac@gmail.com'
    }
    //  q   ueremos que nuestras variables creadas sean parte del estadoy asi poder gestionar su cambio 
    //  reflejandolo en la vista
    //  const const [Nombre variable, Funcion para cambiar] = useState(valorInicial);

    const [valor, setValor] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /*
    Funcion para actualizar estado que contiene el contador
    */
    function incremntarContador() {
        //funcion para cambiar(nuevoValor)
        setValor(valor+1)
    }
    /*
    Funcion para actualizar estado de persona en el componente
    */
    function actualizaPersona() {
        setPersona(
            {
            nombre:'pepe'.toUpperCase(),
            email:'pepe@gmail.com'
            }
        )
    }

    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>Contador: {valor}</h2>
            <h2>Datos de la persona:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Nombre: {persona.email}</h3>
            {/* Bloque de botones */}
            <button onClick={incremntarContador}>Incrementar</button>
            <button onClick={actualizaPersona}>Actualizar</button>
        </div>
    );
}

export default Ejemplo1;

