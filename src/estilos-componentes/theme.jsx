import styled from "styled-components"

export const colors = {
    primary: 'blue',
    secondary: 'dakgray',
    danger: 'red',
    warning: 'yellow',
    rosado: '#8f4f74',
    gris: '#333',
    light: '#dff5ff',
}

export const theme ={
    fg: '#000',
    bg: '#fff', 
}

export const invertTheme = ({fg, bg}) => ({
    fg: bg,
    bg: fg
})

export const Button = styled.button`
  color: white;
  border: ${props => props.theme.fg};
  background: transparent;

  font-size: 1em;
  margin: 0;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
  
  &:hover {
        background-color: black;
        text-decoration: underline;
    font-weight: bold;
    }
  `;

  export const CenteredCont = styled.div`
    height: 100vh;
    width: 60%;
    margin: 0 auto;
  `;

  export const CenterInfo = styled.div`
    justify-content: center;
    text-align: center;
    

    ul li {
        display: inline-block;
    }
  `;