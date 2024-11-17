import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Stock Tracking Automation"
              description="I developed a stock tracking desktop application using C#, MS SQL, and Microsoft technologies. The application features product addition, deletion, and updating functionalities. It allows stock additions and updates, with alerts when stock levels fall below 10. Additionally, products can be listed by categories."
              ghLink="https://github.com/omerfarukdilek/StockTracking_Automation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Travel Blog"
              description="I developed a stock tracking desktop application using C#, MS SQL, and Microsoft technologies. The application features product addition, deletion, and updating functionalities. It allows stock additions and updates, with alerts when stock levels fall below 10. Additionally, products can be listed by categories."
              ghLink="https://github.com/omerfarukdilek/TravelBlog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Hospital Automation"
              description="I developed a hospital automation system as a desktop application using C# and Microsoft technologies with SQL Server. The system has three user types: patient, doctor, and pharmacist. Patients can book appointments online, selecting suitable dates and times, which then appear on the doctor's screen. After examining the patient, the doctor inputs the prescribed medications into the system. When the patient visits the pharmacy, the pharmacist's system automatically receives the patient's medication details."
              ghLink="https://github.com/omerfarukdilek/Hospital_Automation"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
