import './App.css';
import Banner from './Components/Banner/Banner';
import Languages from './Components/Languages/Languages';
import ProjectNavbar from './Components/ProjectNavbar/ProjectNavbar';
import Projects from './Components/Projects/Projects';



function App() {

  


  return (
    <div className="App">
      <Banner />
      <ProjectNavbar />
      <Projects />
      <Languages />
    </div>
  );
}

export default App;
