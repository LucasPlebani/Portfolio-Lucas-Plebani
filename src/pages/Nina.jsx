import React, { useState, useEffect } from 'react';
import Slideshow from '../components/carousel'; // Supposons que Slideshow se trouve dans ce chemin
import jsonData from '../projet.json'; // Importez votre fichier JSON
import { Title } from "../components/globalStyledComponents";
import Footer from '../components/Footer';
import Tags from '../components/Tags';
import "../styles/projectPage.sass"
import { Container } from "react-bootstrap";

function NinaPage() {
    const [projectData, setProjectData] = useState([]);
    const projectDataId6 = projectData.filter((project) => project.id === 6);
  
    useEffect(() => {
      // Vous pouvez traiter les données ici si besoin
      setProjectData(jsonData); // Stockez les données du JSON dans l'état
    }, []);
  
    return (
      <div>
              <Container className="text-center">
     <Title> 
          <h2>Photographe Nina Carducci</h2>
          <div className="underline"></div>
        </Title>
        </Container>
  
     
        {projectDataId6.map((project) => (
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
  
  
  export default NinaPage;