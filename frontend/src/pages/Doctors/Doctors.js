import React, { useState } from 'react'
import Navbar from './Navbar';
import Menu from './DoctorApi';
import DoctorCard from './DoctorCard';
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
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
      <div className='left-2 mt-4'>
                    
                        <button>
                            <Link to='/'>
                            <MdArrowBack className='w-5 h-5' />

                            </Link>
                        </button>
                    
      </div>
          <Navbar filterItem={filterItem} menuList={menuList} />

      <DoctorCard menuData={menuData} />
      <Chat />
      <Video />
      </div>
      
    </>
  );
};

export default Doctors
