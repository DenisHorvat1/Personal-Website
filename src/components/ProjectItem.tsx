import { useNavigate } from "react-router-dom";

interface ProjectItemProps {
  image: string | undefined; // Assuming image is a URL
  name: string;
  id: number; // Assuming id is a string
  skills: string | undefined; // Assuming skills is an array of strings
}

function ProjectItem({ image, name, id }: ProjectItemProps) {
  const navigate = useNavigate();

  return (
    <div
      className='projectItem'
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>
        {name}
      </h1>
    </div>
  );
}

export default ProjectItem;
