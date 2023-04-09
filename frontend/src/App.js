
import './App.css';
import Appointment from './pages/Appointment/Apointment';
import { Routes ,Route } from 'react-router-dom';
import Blogs from './pages/Blogs/Blogs.js';
import Lifestyle from './pages/Lifestyle/Lifestyle';
import Medicines from './pages/Medicines/Medicines';
import Doctors from './pages/Doctors/Doctors';
import Home from './pages/Home/Home';
import MyDetails from './pages/Mydetails/MyDetails';
import Signup from './pages/Signup/Signup';
import Dashboard from './pages/DocSide/Dashboard';
import DoctorInfo from './pages/DocSide/DoctorInfo'
import DocAppointment from './pages/DocSide/DocAppointment';
import Predict from './pages/prediction/Predict';
import Payment from './components/Payment';



function App() {
  return (
    <div> 

      <Routes>
        
        <Route path='/'element={<Signup/>}></Route>
        <Route path='/home'element={<Home/>}></Route>
        <Route path='/dashboard'element={<Dashboard/>}></Route>
        <Route path='/appointment'element={<Appointment/>}></Route>
        <Route path='/docappointment'element={<DocAppointment/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/mydetails' element={<MyDetails/>}></Route>
        <Route path='/docdetails' element={<DoctorInfo/>}></Route>
        <Route path='/lifestyle' element={<Lifestyle/>}></Route>
        <Route path='/medicines' element={<Medicines/>}></Route>
        <Route path='/doctors' element={<Doctors/>}></Route>
        <Route path='/predict' element={<Predict/>}></Route>
        
        <Route path='/payment' element={<Payment/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
