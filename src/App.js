import { GlobalStyle } from "GlobalStyle";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";
import {BrowserRouter as Router} from "react-router-dom";
import { Header, Hero, Menu, Service, Reviews, Chefs, Footer } from "components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if(theme === "light"){
      setTheme("dark");
    }else{
      setTheme("light");
    }
  }
  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle/>
        <Header setTheme={changeTheme}/>
        <Hero />
        <Menu />
        <Service /> 
        <Reviews />
        <Chefs />
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
