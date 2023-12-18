import React, { useState, useEffect } from 'react';
import ninaFrame from '../images/FrameNina.png'
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
  
        <img className='imgProject' src={ninaFrame} alt=" projet nina carducci" />

        {projectDataId6.map((project) => (
        <div key={project.id}>
       
        
           <Tags tags={project.tags}/>
          <p className='descriptionProj'>{project.descriptionProjet} </p>
        </div>
      ))}
      <Footer />
    </div>
    );
  }
  
  
  export default NinaPage;