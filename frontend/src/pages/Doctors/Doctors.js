import React, { useState } from 'react'
import Navbar from './Navbar';
import Menu from './DoctorApi';
import DoctorCard from './DoctorCard';
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import Video from './Video';
import Chat from './Chat';
import './style.css';
import Sidebar from '../Appointment/Sidebar';
const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const Doctors = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };


    
  return (
    <>
    <div className='bg-gradient-to-br from-[#e8f2fc] to-white h-full w-full'>
      <div className='left-2 mt-2'>
                    
      </div>
          <Navbar filterItem={filterItem} menuList={menuList} />
        <div className='flex justify-between gap-5'>
          <Sidebar/>
          <DoctorCard menuData={menuData} />
        </div>
      <Chat />
      <Video />
      </div>
      
    </>
  );
};

export default Doctors
