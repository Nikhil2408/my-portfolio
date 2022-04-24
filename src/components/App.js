import '../styles/App.css';

import NavBar from "./NavBar/NavBar";
import AboutMe from './AboutMe/AboutMe';
import Education from './Education/Education';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Education />
    </div>
  );
}

export default App;
