import { BrowserRouter, Routes, Route } from "react-router-dom";

// Estilos de Cascada 
import "./style/pre.css";
import "./style/display.css";

// Componentes primarios 
import { Navbar } from "./components/nav/nav.component";

// Copmponentes display 
import { Main_display } from "./components/display/main.component";
import { Product_display } from "./components/display/product.component";
import { Tech_display } from "./components/display/tech.component";
import { Contact_display } from "./components/display/contact.component";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main_display />} />
          <Route path="/productos" element={<Product_display />} />
          <Route path="/tecnologias" element={<Tech_display />} />
          <Route path="/contacto" element={<Contact_display />} />
        </Routes>
      </BrowserRouter>

      {/*
      <CardContainer />
      
      */}
    </>
  );
}

export default App;
