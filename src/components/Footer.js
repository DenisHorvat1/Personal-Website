import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHub from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <GitHub onClick={() => window.open('https://github.com/DenisHorvat1', '_blank')} />
            <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/denis-horvatt/', '_blank')} />

        </div>
        <p> &copy; 2024 site.com</p>
    </div>
  )
}

export default Footer;