import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card.js';

const RickAndMortyFunction = () => {
    const [data, setData] = useState({});
    const [id, setId] = useState(1);

    useEffect(() => {
        const request = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const result = await response.json();
            setData(result);
        };
        request();
    }, [id]);

    const incrementId = arg => {
        console.log(id)
        if(arg === "prev") {
            if(id > 1) {
                setId(prevState => prevState - 1);
            }
        } else if(arg === "next") {
            setId(prevState => prevState + 1);
        }
    };
    
    return (
        <div className="funcion">
            <Card name={data.name} img={data.image} incrementId={incrementId} text="Componente Funcion" />
        </div>
    );
}

export default RickAndMortyFunction;