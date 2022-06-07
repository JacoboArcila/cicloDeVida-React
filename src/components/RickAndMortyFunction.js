import React from 'react';
import { useState, useEffect } from 'react';

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
            <h1>Componente funcion</h1>
                <div>
                    <img src={data.image} alt="" />
                </div>
                <button onClick={() => incrementId("prev")} >Prev</button> 
                <button onClick={() => incrementId("next")} >Next</button>

        </div>
    );
}

export default RickAndMortyFunction;