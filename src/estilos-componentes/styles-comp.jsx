import styled from "styled-components";
import { colors } from "./theme";

export const Header = styled.header`
  display: flex;
  background-color: #000;
  color: ${colors.light};
  flex-direction: row;
  align-content: center;
  padding: 1rem;
  justify-content: space-between;
`;

export const BtnLink = styled.button`
 background-color: transparent;
 width: 100px;
 height: 40px;
 color: white;
 padding: 0.5em;
 border-radius: 5px;
 border: 0;
 cursor: pointer;
 margin-right: 0.7em;
 margin-top:0.7em;
 &:hover {
        background-color: black;
        text-decoration: underline;
        font-weight: bold;
    }
`;

export const DetailsCont = styled.div`
  background: linear-gradient(to bottom, white, #808080);
  font-family: 'Century Gothic', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
  padding: 0.7em;
  border-radius: 10px;
  margin-top: 1em;
  width: 85%;
  margin: 0 auto;
  border: 1px solid;
  border-image: linear-gradient(to right, #743ad5, #b64aed) 1;
  /* El gradiente va desde un tono morado oscuro (#743ad5) a un tono morado claro (#b64aed) */

  h3, h4 {
    
  }
`;

export const CenteredCont = styled.div`
     height: 100vh;
     width: 50%;
     margin: 0 auto;
`;