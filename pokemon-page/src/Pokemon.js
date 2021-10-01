import React, { Component } from 'react';
import './Pokemon.css';

function Pokemon(props) {
    const { title, image, description } = props
    return (
        <div className="Pokecard">
            <div className="img-container">
                <div className="Pokecard-img">
                    <img src={image} alt={title} />
                </div>
            </div>
            <h1 className="Pokecard-title">{title}</h1>
            <p className="Pokecard-text">{description.length > 58 ? `${description.slice(0, 58)}...` : description}</p>
        </div>
    )
}

export default Pokemon