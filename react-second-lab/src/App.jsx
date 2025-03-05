import React from 'react';
import Main from './components/Main/Main';
import { cardsData } from './data'; 
import './App.css'; 
function App() {
    return (
        <div>
            <h1 className="app-title">Моя колекція карток</h1>
            <Main cards={cardsData} />
        </div>
    );
}

export default App;
