/*  Se utilizara los siguientes hooks 
    useState()
    useEffect()
    useRef()
*/
import React,{useState,useEffect,useRef} from 'react';


const Ejemplo2 = () => {

const [contador1, setcontador1] = useState(0);
const [contador2, setcontador2] = useState(0);


const incrementar1 = () => {
    setcontador1(contador1 + 1);
}

const incrementar2 = () => {
    setcontador2(contador2 + 1);
}
const myRef=useRef();
/* ? CASO1 Ejecuta siempre un snippet de codigo
useEffect(() => {
    console.log('Estamos mostrado la referencia del DOM de un elemnto');
    console.log(myRef);
});
*/
/* ? CASO2 Ejecuta el snippet de codigo solo cuando cambia el contador1
useEffect(() => {
    console.log('Estamos mostrado la referencia del DOM de un elemnto');
    console.log(myRef);
}, [contador1]);*/
// ? CASO2 Ejecuta el snippet de codigo solo cuando cambia el contador1 y contador2
useEffect(() => {
    console.log('Estamos mostrado la referencia del DOM de un elemnto');
    console.log(myRef);
}, [contador1,contador2]);
    return (
        <div>
            <h1>Ejemplo de useState,useEffect,useRef</h1>
            <h2>Contador: {contador1}</h2>
            <h2>Contador2: {contador2}</h2>
            <h3 ref={myRef}>
                Referido
            </h3>
            <button onClick={incrementar1}>Incrementar 1</button>
            <button onClick={incrementar2}>Incrementar 2</button>
        </div>
    );
}

export default Ejemplo2;
