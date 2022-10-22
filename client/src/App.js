// import Login from "./components/Login";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import { Routes, Route } from "react-router-dom";
import AppContext from "./AppContext";
import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme } from "./theme/themes";
import React, { useEffect, useState } from "react";

const App = () => {
  const darkMode = useDarkMode(true);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    darkMode.value ? setTheme(darkTheme) : setTheme(lightTheme);
  }, [darkMode]);

  return (
    <div
      style={{ backgroundColor: theme.backGroundColor, color: theme.fontColor }}
      className="App"
    >
      <AppContext.Provider value={{ darkMode }}>
        <Header />
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
};

export default App;
