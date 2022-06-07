import React from 'react';

const Card = ({img}) => {
    return (
        <div>
            <h1>Componente clase</h1>
                <div>
                    <img src={img} alt="" />
                </div>
                <button onClick={() => this.incrementId("prev")} >Prev</button> 
                <button onClick={() => this.incrementId("next")} >Next</button> 
        </div>
    );
}

export default Card;