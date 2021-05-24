import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Languages from './Components/Languages/Languages';
import ProjectNavbar from './Components/ProjectNavbar/ProjectNavbar';
import Projects from './Components/Projects/Projects';
import SocialBanner from './Components/SocialBanner/SocialBanner';



function App() {

  


  return (
    <div className="App">
      <Banner />
      <SocialBanner />
      <Languages />
      <ProjectNavbar />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
