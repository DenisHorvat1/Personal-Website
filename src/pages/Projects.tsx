import ProjectItem from '../components/ProjectItem';
import "../styles/Project.css";
import {ProjectList} from "../helpers/ProjectList";


function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='projectList'>
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name ={project.name} image={project.image} skills={project.skills}/>
        })}
      </div>
    </div>
  )
}

export default Projects