import React from "react";
import "../styles/ManimProject.css"
import GitHubIcon from "@mui/icons-material/GitHub"

function ManimProject(){

    return(
        <div className='project'>
          <h1>Bezier curves and surfaces animations</h1>
          <div class="video-grid">

            <div class="video-container">
                <h2>Bezier curves</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6RhkMxYRd2I" frameborder="0" allowfullscreen></iframe>
            </div>

            
            <div class="video-container">
                <h2>De Casteljau's Algorithm</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aRwNU7iec1w" frameborder="0" allowfullscreen></iframe>
            </div>
            
            <div class="video-container">
                <h2>Composite Bezier curve</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/kXabhIJiPPU" frameborder="0" allowfullscreen></iframe>
            </div>
            
            <div class="video-container">
                <h2>Three Bezier Surfaces</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/JLHRcZ5BXNY" frameborder="0" allowfullscreen></iframe>
            </div>
            
            <div class="video-container">
                <h2>Composite Bezier Surface</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/TmDJYA62uCQ" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
          <div className="description">
            <h2 >
            Manim-powered Bezier Curves & Surfaces: Visualize elegant mathematical constructs with precision. Craft smooth, customizable curves and surfaces for stunning animations.
        
            </h2>
           </div>
          <p>
              <b>Skills :</b> Python, Manim library
          </p>
          <div className="socialMedia">
            <GitHubIcon onClick={() => window.open("https://github.com/DenisHorvat1/Bezier-curves-and-surfaces-animations-Python", '_blank')} />
          </div>
          
      </div>
    );
}

export default ManimProject;