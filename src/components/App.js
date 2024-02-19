import '../styles/App.css';

import NavBar from "./NavBar/NavBar";
import AboutMe from './AboutMe/AboutMe';
import Certification from "./Certification/Certification.js";
import Skills from "./Skills/Skills";
import Experience from './Experience/Experience';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Certification />
      <Experience />
      <Skills />
      {/* <Projects />   */}
      {/* <Education /> */}

    </div>
  );
}

export default App;
