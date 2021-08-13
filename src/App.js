import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/sections/About";

function App() {
  return (
    <>
      <Header />
      <Container>
        <About id="la empresa" />
        <About id="servicios" />
      </Container>
      <Footer />
    </>
  );
}

export default App;
