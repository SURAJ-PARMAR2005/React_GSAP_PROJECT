import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Agents from './pages/Agents';
import Navbar from './Components/Navigation/Navbar';


const App = () => {
  return (
    <div >
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route  path='/agency' element={<Agents />} />
      <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
