import React from "react";
import { Button, CenterInfo, theme } from "../estilos-componentes/theme";
import { ThemeProvider } from "styled-components";
import { Link, Outlet } from "react-router-dom";


//Componentes para llamar el nombre del celular seleccionado
// eslint-disable-next-line react/prop-types
const Celulares = ({ nameCelular }) => {

    return (
        <CenterInfo>
            <ThemeProvider theme= {theme}>
              <div className="features">
                <h2 style={{ fontSize: "3em", marginBottom: "10px" }}>Información de Celulares</h2>
                <h2>{ nameCelular }</h2>
                   <Link to="details">
                    {" "}
                    <Button>Ver detalles</Button>{" "}
                    </Link>
                <Outlet />
              </div>
            </ThemeProvider>
        </CenterInfo>
    );
};

export default Celulares;