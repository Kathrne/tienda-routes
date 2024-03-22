import React from "react";
import { ThemeProvider } from "styled-components";
import { Button, invertTheme, theme } from "../estilos-componentes/theme";
import { Link } from "react-router-dom";



const Home = () => {
    return(
        <ThemeProvider theme={theme}>
            <div className="features">
                <h1>Bienvenidos</h1>
                    <h3>Somos una tienda online de Smartphones</h3>
                <ThemeProvider theme={invertTheme}>
                    <Link to="/search-page">
                        <Button> Ver Más </Button>
                    </Link>
                </ThemeProvider>
            </div>
        </ThemeProvider>
    );
};

export default Home;