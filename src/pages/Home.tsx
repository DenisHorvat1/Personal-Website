
//import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
          <h2>Hi, My name is Denis Horvat</h2>
          <div className="prompt">
            <p>
            I a final year Mathematics and Computer Science student that likes learning about programming.
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
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, .NET, MySQL, Apache 
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C++, JavaScript, Java, C# </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home