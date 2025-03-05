import React from 'react';
import './Card.css';

function Card({ title, description, image }) {
    function showAlert() {
        alert(title);
    }

    return (
        <div className="card">
            <img src={image} alt="Зображення картки" className="card-image" />
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <button className="card-button" onClick={showAlert}>Дізнатися більше</button>
        </div>
    );
}

export default Card;
