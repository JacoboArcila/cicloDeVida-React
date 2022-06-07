import React from 'react';

const Button = ({buttonFn, num, text}) => {
    
    return (
        <div>
            <button onClick={() => buttonFn(num)}>{text}</button>
        </div>
    );
}

export default Button;