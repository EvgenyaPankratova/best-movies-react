import React from "react";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";


function App() { //использовать div в качестве корневого элемента не обязательно, используем пустой тег
  return (
    <> 
     <Header/> 
     <Main/>
     <Footer/>
    </>
  );
}

export default App;
