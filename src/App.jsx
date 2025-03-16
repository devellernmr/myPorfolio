import React from "react";
import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import ProjectsSection from "./Pages/Projetos/Projects";
import ProjectsCarrossel from "./Pages/Projetos/Carrossel"
import "./App.css";

function App() {
  return (
    <>
      <div className="fade-in">
        <Navbar />
        <Home />
        <ProjectsSection />
        <ProjectsCarrossel />
      </div>
    </>
  );
}

export default App;
