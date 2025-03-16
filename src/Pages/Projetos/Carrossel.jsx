import { useState, useRef } from "react";
import "./projectscarrossel.css";

import image1 from "./projetos/site-mesa-posta.jpeg";
import image2 from "./projetos/site-curso.jpeg";
import image3 from "./projetos/site-portifolio.jpeg";

const projects = [
  { image: image1, description: "Site para uma empresa de venda de Mesa posta e Etiqueta" },
  { image: image2, description: "Site para um curso online de programação" },
  { image: image3, description: "Meu portfólio profissional de desenvolvimento web" },
];

const ProjectsCarrossel = () => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);
  const totalSlides = projects.length;

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="project-section">
      <h1>Meus Projetos</h1>
      <div className="carousel-container">
        <button className="prev-btn" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="carousel" ref={carouselRef} style={{ transform: `translateX(${-index * 100}%)` }}>
          {projects.map((project, idx) => (
            <div className="carousel-item" key={idx}>
              <img src={project.image} alt={`Projeto ${idx + 1}`} />
              <h3>Site {idx + 1}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        <button className="next-btn" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default ProjectsCarrossel;
