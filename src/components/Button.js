import React from 'react';
import '../styles/ButtonStyles.css';

const Button = ({buttonFn, num, text}) => {
    
    return (
        <div className='botoncito'>
            <button onClick={() => buttonFn(num)}>{text}</button>
        </div>
    );
}

export default Button;