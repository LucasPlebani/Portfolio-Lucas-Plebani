import React, { useState, useEffect } from 'react';
import SBFrame from '../images/FrameSB.png'
import jsonData from '../projet.json'; // Importez votre fichier JSON
import { Title } from "../components/globalStyledComponents";
import Footer from '../components/Footer';
import Tags from '../components/Tags';
import "../styles/projectPage.sass"
import { Container } from "react-bootstrap";

function ArchitectePage() {
    const [projectData, setProjectData] = useState([]);
    const projectDataId4 = projectData.filter((project) => project.id === 4);
  
    useEffect(() => {
      // Vous pouvez traiter les données ici si besoin
      setProjectData(jsonData); // Stockez les données du JSON dans l'état
    }, []);
  
    return (
      <div>
              <Container className="text-center">
     <Title> 
          <h2>Architect Sophie Bluel </h2>
          <div className="underline"></div>
        </Title>
        </Container>
        <img className='imgProject' src={SBFrame} alt=" projet Sophie Bluel" />

     
        {projectDataId4.map((project) => (
        <div key={project.id}>
         
           <Tags tags={project.tags}/>
          <p className='descriptionProj'>{project.descriptionProjet} </p>
        </div>
      ))}
      <Footer />
    </div>
    );
  }
  
  
  export default ArchitectePage;