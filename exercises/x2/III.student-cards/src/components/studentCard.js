import React from 'react';

export const StudentCard = () => {

    const name = 'Pepe';
    const direction = 'Street of Cordoba';
    const city = 'Cordoba';
    const cp = '14010';


    return (
        <div>
            <h1>Student Card</h1>

            <section className="infoCard">
                <h2>Name: </h2><p>{name}</p>
                <h2>Direction: </h2><p>{direction}</p>
                <h2>City: </h2><p>{city}</p>
                <h2>CP: </h2><p>{cp}</p>
            </section>
        </div>
    );
}