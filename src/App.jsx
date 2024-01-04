// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import About from "./Components/About.jsx";
import Planos from "./Components/Planos.jsx";
import Contato from "./Components/Contato.jsx";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Planos />
      <Contato />
    </>
  );
}

export default App;
