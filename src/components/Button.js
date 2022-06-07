import React from 'react';

const Button = ({buttonFn}) => {
    

    return (
        <div>
            <button onClick={() => buttonFn(1)}>Funcion</button>
            <button onClick={() => buttonFn(2)}>Clase</button>
        </div>
    );
}

export default Button;