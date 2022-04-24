import '../styles/App.css';

import NavBar from "./NavBar/NavBar";
import AboutMe from './AboutMe/AboutMe';
import Education from './Education/Education';
import Certification from "./Certification/Certification.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Education />
      <Certification />
    </div>
  );
}

export default App;
