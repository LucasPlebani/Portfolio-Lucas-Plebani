import React, { useState, useEffect } from 'react';
import bookiFrame from "../images/frameBooki.png"
import jsonData from '../projet.json'; // Importez votre fichier JSON
import { Title } from "../components/globalStyledComponents";
import Footer from '../components/Footer';
import Tags from '../components/Tags';
import "../styles/projectPage.sass"
import { Container } from "react-bootstrap";

function BookiPage() {
    const [projectData, setProjectData] = useState([]);
    const projectDataId1 = projectData.filter((project) => project.id === 1);
  
    useEffect(() => {
  
      setProjectData(jsonData);
    }, []);
  
    return (
      <div>
              <Container className="text-center">
     <Title> 
          <h2>Booki</h2>
          <div className="underline"></div>
        </Title>
        </Container>
  
     
        {projectDataId1.map((project) => (
        <div key={project.id}>
       
       <img className='imgProject' src={bookiFrame} alt=" projet Booki" />

           <Tags tags={project.tags}/>
          <p className='descriptionProj'>{project.descriptionProjet} </p>
        </div>
      ))}
      <Footer />
    </div>
    );
  }
  
  
  export default BookiPage;