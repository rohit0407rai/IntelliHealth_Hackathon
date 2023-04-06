
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { Routes ,Route } from 'react-router-dom';
import Blogs from './pages/Blogs/Blogs.js';
import Lifestyle from './pages/Lifestyle/Lifestyle';
import Medicines from './pages/Medicines/Medicines';
import Doctors from './pages/Doctors/Doctors';


function App() {
  return (
    <div>

      <Routes>
        <Route path='/'element={<Dashboard/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/lifestyle' element={<Lifestyle/>}></Route>
        <Route path='/medicines' element={<Medicines/>}></Route>
        <Route path='/doctors' element={<Doctors/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
