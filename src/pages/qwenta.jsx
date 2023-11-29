import React, { useState, useEffect } from 'react';
import Slideshow from '../components/carousel'; // Supposons que Slideshow se trouve dans ce chemin
import jsonData from '../projet.json'; // Importez votre fichier JSON
import { Title } from "../components/globalStyledComponents";
import Footer from '../components/Footer';
import Tags from '../components/Tags';
import "../styles/projectPage.sass"
import { Container } from "react-bootstrap";

function QwentaPage() {
  const [projectData, setProjectData] = useState([]);
  const projectDataId3 = projectData.filter((project) => project.id === 3);

  useEffect(() => {
    // Vous pouvez traiter les données ici si besoin
    setProjectData(jsonData); // Stockez les données du JSON dans l'état
  }, []);

  return (
    <div>
            <Container className="text-center">
   <Title> 
        <h2>Menu Maker By Qwenta </h2>
        <div className="underline"></div>
      </Title>
      </Container>

   
      {projectDataId3.map((project) => (
      <div key={project.id}>
      
        {Array.isArray(project.img) ? (
          <Slideshow pictures={project.img.map(img => `${process.env.PUBLIC_URL}${img}`)} />
        ) : (
          <img src={`${process.env.PUBLIC_URL}${project.img}`} alt={project.altText} />
        )}
         <Tags tags={project.tags}/>
        <p className='descriptionProj'>{project.descriptionProjet} </p>
      </div>
    ))}
    <Footer />
  </div>
  );
}


export default QwentaPage;
