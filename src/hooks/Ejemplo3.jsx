//uso de los hooks usestate y usecontext
import React, { useState,useContext, createContext } from 'react';

const padre=React.createContext(null);

const componente1 = () => {
    const context = useContext(padre);

    return (
        <div>
            
        </div>
    );
}

const componente2 = () => {
    const context = useContext(padre);
    return (
        <div>
            
        </div>
    );
}

export default Ejemplo3;
