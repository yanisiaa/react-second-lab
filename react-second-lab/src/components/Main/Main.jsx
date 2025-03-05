import React from 'react';
import Card from '../Card/Card';
import './Main.css';

function Main({ cards }) {
    return (
        <div className="main">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                />
            ))}
        </div>
    );
}

export default Main;
