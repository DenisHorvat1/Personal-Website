import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <InstagramIcon onClick={() => window.open('https://www.google.com', '_blank')} />
            <TwitterIcon onClick={() => window.open('https://www.google.com', '_blank')} />
            <FacebookIcon onClick={() => window.open('https://www.google.com', '_blank')} />
            <LinkedInIcon onClick={() => window.open('https://www.google.com', '_blank')} />
        </div>
        <p> &copy; 2024 site.com</p>
    </div>
  )
}

export default Footer;