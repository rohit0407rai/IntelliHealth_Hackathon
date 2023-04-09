
import './App.css';
import Appointment from './pages/Appointment/Apointment';
import { Routes ,Route } from 'react-router-dom';
import Blogs from './pages/Blogs/Blogs.js';
import Lifestyle from './pages/Lifestyle/Lifestyle';
import Medicines from './pages/Medicines/Medicines';
import Doctors from './pages/Doctors/Doctors';
import Home from './pages/Home/Home';
import Chatbot from   './components/Chatbot';
import Payment from './components/Payment';
import Predict from './pages/prediction/Prdeict';


function App() {
  return (
    <div> 

      <Routes>
        
        <Route path='/'element={<Home/>}></Route>
        <Route path='/appointment'element={<Appointment/>}></Route>
        <Route path='/payment'element={<Payment/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/lifestyle' element={<Lifestyle/>}></Route>
        <Route path='/medicines' element={<Medicines/>}></Route>
        <Route path='/doctors' element={<Doctors/>}></Route>
        <Route path='/predict' element={<Predict/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
