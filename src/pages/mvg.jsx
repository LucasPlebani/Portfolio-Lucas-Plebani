import React, { useState, useEffect } from 'react';
import Mvg from '../images/frame3mvg.png'
import jsonData from '../projet.json'; // Importez votre fichier JSON
import { Title } from "../components/globalStyledComponents";
import Footer from '../components/Footer';
import Tags from '../components/Tags';
import "../styles/projectPage.sass"
import "../styles/projectImg.sass"
import { Container } from "react-bootstrap";

function MvgPage() {
    const [projectData, setProjectData] = useState([]);
    const projectDataId5 = projectData.filter((project) => project.id === 5);
  
    useEffect(() => {
      // Vous pouvez traiter les données ici si besoin
      setProjectData(jsonData); // Stockez les données du JSON dans l'état
    }, []);
  
    return (
      <div>
              <Container className="text-center">
     <Title> 
          <h2>Mon Vieux Grimoire </h2>
          <div className="underline"></div>
        </Title>
        </Container>
   
     <img className='imgProject' src={Mvg} alt=" projet mon vieux grimoire" />

        {projectDataId5.map((project) => (
        <div key={project.id}>
       
         
           <Tags tags={project.tags}/>
          <p className='descriptionProj'>{project.descriptionProjet} </p>
        </div>
      ))}
      <Footer />
    </div>
    );
  }
  
  
  export default MvgPage;