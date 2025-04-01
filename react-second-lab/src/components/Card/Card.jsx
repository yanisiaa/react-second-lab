import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

function CustomCard({ title, description, image }) {
    return (
        <Card sx={{ maxWidth: 280, backgroundColor: "#fef9ff", border: "1px solid #f3d9fa", borderRadius: 2, boxShadow: 2, transition: "0.3s", '&:hover': { transform: "scale(1.03)" } }}>
            <CardMedia component="img" height="160" image={image} alt={title} sx={{ borderRadius: 1 }} />
            <CardContent>
                <Typography variant="h6" color="#b65fcf" sx={{ fontWeight: "bold" }}>{title}</Typography>
                <Typography variant="body2" color="#7b6d8d" sx={{ marginBottom: 2 }}>{description}</Typography>
                <Button variant="contained" sx={{ backgroundColor: "#dba1e1", '&:hover': { backgroundColor: "#c88ace" } }} onClick={() => alert(title)}>Дізнатися більше</Button>
            </CardContent>
        </Card>
    );
}

export default CustomCard;
