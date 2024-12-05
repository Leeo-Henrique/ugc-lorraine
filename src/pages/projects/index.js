import { Brand } from "./brand";
import { Container } from "./styles";

const Projects = () => {
  const projects = [];
  return (
    <Container>
      <h1>Portifolio</h1>
      {projects.map((project) => (
        <Brand project={project} />
      ))}
    </Container>
  );
};

export default Projects;
