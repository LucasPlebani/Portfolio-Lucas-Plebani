import React from "react";
import { Title } from "./globalStyledComponents";

import opcLogo from "../images/opclogo.png"
import styled from "styled-components";
import { Card } from "react-bootstrap";

import { Container } from "react-bootstrap";


const StyledCardComponent = styled.div`
  .card {
    width: 30%;
    margin: auto;
    height: auto;
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => (theme.name === "light" ? "" : "#797B7B")};
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 3px 10px rgb(0 0 0 / 0.2)"
        : "0 3px 10px rgb(255 255 255 / 0.2)"};

        
   

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.color};

      &:hover {
        color: var(--primary);
      }
    }

    .card-footer {
      border-top: var(--border);
      background: ${({ theme }) => (theme.name === "light" ? "" : "#404040")};
    }
  }
  
`;



export default function StyledCard() {
   
    

    return (
        <> 
        <Container className="text-center">
      <Title> 
        <h2>Formation</h2>
        <div className="underline"></div>
      </Title>
      
      </Container>

      <StyledCardComponent>
     
        <Card>
          <Card.Img
            variant="top"
            src={opcLogo}
            
            className="mx-auto"
          />
          <Card.Body className="overflow-auto text-center">
            <Card.Title>Développeur web</Card.Title>
            <Card.Text>Diplôme bac +2 <br />  Projet professionalisation  </Card.Text>
            
      
             
          </Card.Body>
          <Card.Footer className="text-center">
            
          </Card.Footer>
        </Card>
      
      </StyledCardComponent>
      </>
    );
  }
  


 