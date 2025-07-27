import { CardContainer } from "./components/cards/cardContainer.component";
import { Navbar } from "./components/nav/nav.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main_display } from "./components/display/main.component";
import { Product_display } from "./components/display/product.component";
import { Tech_display } from "./components/display/tech.component";
import "./style/pre.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main_display />} />
          <Route path="/productos" element={<Product_display />} />
          <Route path="/tecnologias" element={<Tech_display />} />
        </Routes>
      </BrowserRouter>

      {/*
      <CardContainer />
      
      */}
    </>
  );
}

export default App;
