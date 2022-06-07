import React from 'react';


const ButtonChange = ({text}) => {

    const rickFuncion = document.querySelector('.funcion');
    const rickClass = document.querySelector('.clase');

    const cambiar = () => {
        console.log(rickClass)
        rickClass.classList.toggle('clase');
        rickFuncion.classList.toggle('clase');
        console.log(rickFuncion)

    }

    return (
       <div>
            <button onClick={() => cambiar()}>{text}</button>
       </div> 
    );
}

export default ButtonChange;