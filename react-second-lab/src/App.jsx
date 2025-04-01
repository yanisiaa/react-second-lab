import React from "react";
import { Typography, Container } from "@mui/material";
import Main from "./components/Main/Main";
import { cardsData } from "./data"; 

function App() {
    return (
        <Container>
            <Typography variant="h4" textAlign="center" color="#b65fcf" marginY={3}>
                Моя колекція карток
            </Typography>
            <Main cards={cardsData} />
        </Container>
    );
}

export default App;
