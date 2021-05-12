import { PieChart } from 'react-minimal-pie-chart';
import './App.css';
import Banner from './Components/Banner/Banner';
import Chart from './Components/Chart/Chart';
import Languages from './Components/Languages/Languages';
import Projects from './Components/Projects/Projects';



function App() {

  


  return (
    <div className="App">
      <Banner />
      <Languages />
      <Projects />
    </div>
  );
}

export default App;
