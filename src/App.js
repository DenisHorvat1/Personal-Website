import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import ProjectDisplay from "./pages/ProjectDisplay"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Database from "./pages/Database"

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Personal-Portofolio" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDisplay />} />
        <Route path='/project/2' element={<Database /> } />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
