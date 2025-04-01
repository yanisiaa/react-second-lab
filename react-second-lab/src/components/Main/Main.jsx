import React from "react";
import { Container, Grid } from "@mui/material";
import CustomCard from "../Card/Card";

function Main({ cards }) {
    return (
        <Container sx={{ backgroundColor: "#fff4fb", py: 3 }}>
            <Grid container spacing={2} justifyContent="center">
                {cards.map((card) => (
                    <Grid item key={card.id}>
                        <CustomCard {...card} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Main;
