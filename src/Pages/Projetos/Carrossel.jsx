import { useState, useRef } from "react";
import "./projectscarrossel.css";

import image1 from "./projetos/site-mesa-posta.jpeg";
import image2 from "./projetos/site-curso.jpeg";
import image3 from "./projetos/site-portifolio.jpeg";

const projects = [
  { 
    site: "Site Mesa posta",
    image: image1, 
    description: "Site para uma empresa de venda de Mesa posta e Etiqueta",
    link: "https://devellernmr.github.io/CidaCunhaServir/"
  },
  { 
    site: "Site Curso Front-End",
    image: image2, 
    description: "Um site de venda de curso de programação front-end",
    link: "https://devellernmr.github.io/portifolio_curso/"
  },
  { 
    site: "Site Portifólio",
    image: image3, 
    description: "Um site para venda de produtos de uma empresa de Mesa Posta",
    link: "https://devellernmr.github.io/My-Portfolio/"
  },
];

const ProjectsCarrossel = () => {
  const [index, setIndex] = useState(0);
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
        <div className="carousel" style={{ transform: `translateX(${-index * 100}%)` }}>
          {projects.map((project, idx) => (
            <div className="carousel-item" key={idx}>
              <img src={project.image} alt={`Projeto ${idx + 1}`} />
              <h3>{project.site}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="visit-btn">Visitar Site</button>
              </a>
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
