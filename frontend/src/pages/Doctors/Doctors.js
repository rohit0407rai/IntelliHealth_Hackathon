import React, { useState } from 'react'
import Navbar from './Navbar';
import Menu from './DoctorApi';
import DoctorCard from './DoctorCard';
import Video from './Video';
import Chat from './Chat';
import './style.css';
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
    <div className='bg-gradient-to-br from-[#e8f2fc] to-white h-screen w-full'>
          <Navbar filterItem={filterItem} menuList={menuList} />

      <DoctorCard menuData={menuData} />
      <Video />
      <Chat />
      </div>
    </>
  );
};

export default Doctors
