import '../styles/App.css';

import NavBar from "./NavBar/NavBar";
import AboutMe from './AboutMe/AboutMe';
// import Education from './Education/Education';
import Certification from "./Certification/Certification.js";
import Skills from "./Skills/Skills";
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Certification />
      <Skills />
      <Projects />
      <Experience />
      {/* <Education /> */}
    </div>
  );
}

export default App;
