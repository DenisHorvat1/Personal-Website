import React from "react";
//import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
          <h2>Hi, my name is Denis Horvat</h2>
          <div className="prompt">
            <p>
            I am a master's student in Software Engineering at Technical University of Cluj Napoca, with a background in Mathematics and Computer sciences.
            </p>
            <div className='links'>
              <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/denis-horvatt/', '_blank')}/>
              <GithubIcon onClick={() => window.open('https://github.com/DenisHorvat1', '_blank')}/>
            </div>
          </div>
      </div>
      <div className="skills">
      <h1>Skills</h1>
      <ol className="list">
        <li className="item">
          <h2>Image Processing and Computer Vision</h2>
          <span>C++, Python, OpenCV</span>
        </li>
        <li className="item">
          <h2>Front-End Development</h2>
          <span>JavaScript, HTML, CSS</span>
        </li>
        <li className="item">
          <h2>Back-End Development</h2>
          <span>Node.js, .NET, Entity Framework Core, MySQL</span>
        </li>
        <li className="item">
          <h2>Mobile Development</h2>
          <span>Swift, UIKit, SwiftUI</span>
        </li>
        <li className="item">
          <h2>Other</h2>
          <span>Java, C# , Python </span>
        </li>
      </ol>




      </div>
    </div>
  )
}

export default Home