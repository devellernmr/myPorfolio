import { useState, useEffect, useRef } from "react";
import "./projects.css";
import { motion } from 'framer-motion';

import image1 from './projetos/site-mesa-posta.jpeg';
import image2 from './projetos/site-curso.jpeg';
import image3 from './projetos/site-portifolio.jpeg';

const images = [image1, image2, image3];

const ProjectsSection = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <section className="projectSection flex">
      <div className="projectDiv">
        <h1>Meus Projetos</h1>
        <div className="projectsContainers">
          <div className="projectContainer">
            <div className="containerImgProject">
              <img src={image1} alt="Site Mesa Posta" />
            </div>
            <div className="containerTextProject">
              <h2>Site Mesa Posta</h2>
              <p>Um site para venda de produtos de uma empresa de Mesa Posta</p>
              <a href="https://devellernmr.github.io/CidaCunhaServir/" target="_blank"><button>Visite</button></a>
            </div>
          </div>
          <div className="projectContainer">
            <div className="containerImgProject containerImg-2">
              <img src={image2} alt="Site Curso Front-End" />
            </div>
            <div className="containerTextProject">
              <h2>Site Curso Front-End</h2>
              <p>Um site de venda de curso de programação front-end</p>
              <a href="https://devellernmr.github.io/portifolio_curso/" target="_blank"><button>Visite</button></a>
            </div>
          </div>
          <div className="projectContainer">
            <div className="containerImgProject containerImg-3">
              <img src={image3} alt="Site Portifolio" />
            </div>
            <div className="containerTextProject">
              <h2>Site Portifolio</h2>
              <p>Um site para venda de produtos de uma empresa de Mesa Posta</p>
              <a href="https://devellernmr.github.io/My-Portfolio/" target="_blank"><button>Visite</button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;