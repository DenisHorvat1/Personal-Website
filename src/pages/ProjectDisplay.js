import { useParams } from "react-router-dom";
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from "@mui/icons-material/GitHub"

import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
  const { id } = useParams();
  const projectId = id ? parseInt(id, 10) : -1; // Convert id to a number

  const project = ProjectList[projectId];

  if (!project) {
      return <div className="NotFound">Project not found</div>;
  }

  return (
      <div className='project'>
          <h1>{project.name}</h1>
          <img src={project.image} alt={project.name} />
          <p>
              <b>Skills :</b> {project.skills}
          </p>
          <div className="socialMedia">
            <GitHubIcon onClick={() => window.open(project.link, '_blank')} />
          </div>
          <div className="description">
            <h2>
              {project.details}
            </h2>
          </div>
          
      </div>
  );
}

export default ProjectDisplay;
