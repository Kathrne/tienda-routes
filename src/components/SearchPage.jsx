import React from "react";
import { Link } from "react-router-dom";
import { BtnLink } from "../estilos-componentes/styles-comp";
import { CenterInfo } from "../estilos-componentes/theme";

const SearchPage = () => {
    const celulares = ['Samsung', 'Xiaomi', 'Huawei', 'Apple', 'Motorola', 'Honor'];

    return(
        <CenterInfo>
            <h1 style={{ 
                fontSize: "5em", 
                background: "linear-gradient(to right, #c0c0c0, #808080)", /* Degradado de color plateado */
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent" /* Hace que el texto sea transparente para mostrar el degradado */
            }}>Smartphone</h1>
            <ul>
                {celulares.map((celular) => (
                    <li key={celular}>
                        <Link to={`/celulares/${celular}`}>
                            <BtnLink>{celular}</BtnLink>
                        </Link>
                    </li>
                ))}
            </ul>
        </CenterInfo>
    );
 };

export default  SearchPage;