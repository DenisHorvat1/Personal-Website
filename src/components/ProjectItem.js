import { useNavigate } from "react-router-dom";
import React from "react";



function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();

  return (
    <div
      className='projectItem'
      onClick={() => {
        navigate("/Personal-Website/project/" + id);
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
