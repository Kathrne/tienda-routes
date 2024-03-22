import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header, CenteredCont } from "./estilos-componentes/styles-comp";
import SearchPage from "./components/SearchPage";
import CelularDetails from "./components/CelularDetails";
import Celulares from "./components/Celulares";
import NavLink from "./components/NavLink";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header>
      <div >
       <h1>
        LOGO
        </h1>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Inicio </NavLink>
            </li>
            <li>
              <NavLink to="/search-page">Smartphones</NavLink>
            </li>
          </ul>
        </nav>
      </Header>

      <CenteredCont>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-page" element={<SearchPage />} />

          <Route path="/celulares/:nameCelular" element={<Celulares />}>
            <Route path="details" element={<CelularDetails />} />
          </Route>

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </CenteredCont>
    </>
  );
}

export default App;
