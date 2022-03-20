import { Card } from "react-bootstrap";
import "../assets/styles/portfolio.css";
import wirtusTricot from "../assets/images/wirtus-tricot.png";
import eCommerceApp from "../assets/images/e-commerce-app.png";
import portfolioSite from "../assets/images/portfolio-site.png";
import roadsUZB from "../assets/images/roadsUZB.png";

function Portfolio() {
  const portfolioData = [
    {
      link: "/",
      title: "Portfolio Site",
      image: portfolioSite,
      github: "https://github.com/faryozbekTFK/Portfolio",
    },
    {
      link: "https://wirtus-tricot.netlify.app/",
      title: "Wirtus Tricot",
      image: wirtusTricot,
      github: "https://github.com/faryozbekTFK/Portfolio/tree/Wirtus-Tricot",
    },
    {
      link: "https://e-commerce-site-app.netlify.app/",
      title: "E-commerce App",
      image: eCommerceApp,
      github: "https://github.com/faryozbekTFK/Portfolio/tree/E-Commerce-Site",
    },
    {
      link: "https://roads-uzb.netlify.app/",
      title: "Roads UZB",
      image: roadsUZB,
      github: "https://github.com/faryozbekTFK/Portfolio/tree/RoadsUZB",
    },
  ];

  const CardList = ({ link, title, image, github }) => {
    return (
      <a href={link} className="cardLink ">
        <Card className="card ">
          <img src={image} alt={title} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          <a href={github} className="gitLink">
            <Card.Footer>
              <small className="text-muted ">GitHub</small>
            </Card.Footer>
          </a>
        </Card>
      </a>
    );
  };

  return (
    <div className="portfolio m-auto">
      <h1 className="text-center m-2">MY PORTFOLIOS</h1>
      <div className="cont">
        {portfolioData.map((portfolio) => {
          return (
            <CardList
              key={portfolio.title}
              link={portfolio.link}
              title={portfolio.title}
              image={portfolio.image}
              github={portfolio.github}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
