import React from 'react';
import '../styles/CardStyles.css';

const Card = ({img, incrementId, text, name}) => {
    return (
        <div className="card">
            <h1>{text}</h1>
            <div className='card-body'>
                <div className='card-img'>
                    <img src={img} alt="" />
                </div>
                <div className='card-footer'>
                    <h3>{name}</h3>
                    <button className="card-button" onClick={() => incrementId("prev")} >Prev</button> 
                    <button className="card-button"  onClick={() => incrementId("next")} >Next</button> 
                </div>
            </div>
        </div>
    );
}

export default Card;