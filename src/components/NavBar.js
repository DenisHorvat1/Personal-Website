import {useEffect, useState} from 'react';
import React from "react";
import {Link, useLocation} from "react-router-dom";
import "../styles/NavBar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function NavBar() {
    const[expandNavbar, setExpandNavbar]= useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false)
    },[location])

  return (
    <div className='navbar' id = {expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button 
            onClick={()=>{
                setExpandNavbar((prev) => !prev);
                }}
            >
                <ReorderIcon />
            </button>
        </div>
        <div className="links">
            <Link to="/Personal-Website">Home</Link>
            <Link to="/Personal-Website/projects">Projects</Link>
            <Link to="/Personal-Website/experience">Experience</Link>
        </div>
    </div>
  )
}

export default NavBar