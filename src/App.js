import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import React, {useEffect} from "react";
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import ProjectDisplay from "./pages/ProjectDisplay"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Database from "./pages/Database"
import ManimProject from "./pages/ManimProject"

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <Router>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/Personal-Website" element={<Home />} /> 
        <Route path="/Personal-Website/Personal-Portofolio" element={<Home />} />
        <Route path="/Personal-Website/projects" element={<Projects />} />
        <Route path="/Personal-Website/project/:id" element={<ProjectDisplay />} />
        <Route path='/Personal-Website/project/2' element={<ManimProject /> } />
        <Route path='/Personal-Website/project/8' element={<Database /> } />
        <Route path="/Personal-Website/experience" element={<Experience />} /> 
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
