import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function Home() {
  return <div>Home sweet home</div>;
}
function About() {
  return <div>About</div>;
}
function Skills() {
  return <div>Skills</div>;
}
function Education() {
  return <div>Education</div>;
}
function Experience() {
  return <div>Experience</div>;
}
function Projects() {
  return <div>Projects</div>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
