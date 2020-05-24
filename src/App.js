import React, { useState } from "react";
import "./styles.css";
import BmiDashboard from "./pages/BmiDashboard";

//Theming
import {ThemeProvider } from 'styled-components';
import light from './styling/themes/light';
import dark from './styling/themes/dark';
import styled from 'styled-components';

const AppTheme = styled.div`
background: ${props => props.theme.colors.background};
height: 100%;
padding: 20px;

*:focus {
  outline: 0;
}
`;

export default function App() {
  const [themeState, setThemeState] = useState(light);
  const changeThemme = ()=>{
    if(themeState.themeName == "light")
    {
      setThemeState(dark);
    }
    else{
      setThemeState(light);
    }
  }
  return (
    <ThemeProvider theme={themeState}>
      <button onClick={changeThemme}>Change theme</button>
    {/* <div className="App" id="mainApp"> */}
      <AppTheme>
      <BmiDashboard />
      </AppTheme>
    {/* </div> */}
    </ThemeProvider>
  );
}
