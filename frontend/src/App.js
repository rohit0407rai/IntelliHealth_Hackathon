
import './App.css';
import Appointment from './pages/Appointment/Apointment';
import { Routes ,Route } from 'react-router-dom';
import Blogs from './pages/Blogs/Blogs.js';
import Lifestyle from './pages/Lifestyle/Lifestyle';
import Medicines from './pages/Medicines/Medicines';
import Doctors from './pages/Doctors/Doctors';
import Home from './pages/Home/Home';


function App() {
  return (
    <div> 

      <Routes>
        
        <Route path='/'element={<Home/>}></Route>
        <Route path='/appointment'element={<Appointment/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/lifestyle' element={<Lifestyle/>}></Route>
        <Route path='/medicines' element={<Medicines/>}></Route>
        <Route path='/doctors' element={<Doctors/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
