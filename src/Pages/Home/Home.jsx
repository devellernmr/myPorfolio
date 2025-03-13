import "./home.css";

const Home = () => {
  return (
    <section className="homeSection" id="home">
      <div className="homeDiv flex">
        <div className="homeText">
          <h1 className="homeMain">
            Desenvolvedor
            <br />
            Front-End
            <br />
            <span>LeoEller</span>
          </h1>
          <p className="homeSecond">
            Programador Front-End de 16 anos especializado em HTML, CSS,
            JavaScript e React. Confira meus projetos!
          </p>
          <div className="imgDiv">
          <img className="img-mobile" src="img/laptop+smartphone.png" alt="" />
          </div>
          <div className="buttonDiv flex">
            <a href="#contact" className="button buttonContact">
              Contate-me
            </a>
            <a href="#projects" className="button buttonProjects">
              Projetos
            </a>
          </div>
        </div>
        <div className="imgDiv">
            <img className="img-pc" src="img/laptop.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
