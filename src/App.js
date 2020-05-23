import React, { useState } from "react";
import "./styles.css";
import BmiDashboard from "./pages/BmiDashboard";

//Theming
import {ThemeProvider } from 'styled-components';
import light from './styling/themes/light';
import dark from './styling/themes/dark';

export default function App() {
  const [themeState, setThemeState] = useState(light)
  return (
    <ThemeProvider theme={themeState}>
    <div className="App" id="mainApp">
      <BmiDashboard />
    </div>
    </ThemeProvider>
  );
}
