import React from 'react'
//import Navbar2 from '../components/Navbar2';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import Comm1 from '../../images/homeopathy.jpg';
import Comm2 from '../../images/chelsea-shapouri-kEF2XCBE4TY-unsplash.jpg';
import Comm3 from '../../images/conscious-design-IbsgfRJslEc-unsplash.jpg';
import Comm4 from '../../images/andres-urena-V7UoMNWsYsg-unsplash.jpg';
import Comm5 from '../../images/jesse-orrico-Us3AQvyOP-o-unsplash.jpg';
import Comm6 from '../../images/laurynas-mereckas-1TL8AoEDj_c-unsplash.jpg';
import { BsSearch } from 'react-icons/bs';

// import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
const Blogs = () => {
    return (
        <>
            <div>
              
                <div className=" bg-gradient-to-br from-[#e8f2fc] to-white">
                    <div className="  top-0">
                        <h1 className="mt-4 mb-4 text-3xl font-bold text-blue-500 ml-7">Blogs</h1>
                        {/* <PhoneIcon />
                        <AddIcon boxSize={6} />
                        <WarningIcon w={8} h={8} color="red.500" /> */}
                        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css" />


                        <div className="max-w-2xl mx-auto top-0">

                            <form >
                                <label for="chat" className="sr-only">Your message</label>
                                <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700 overscroll-y-auto">
                                    <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                                    </button>
                                    <button type="button" className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"></path></svg>
                                    </button>
                                    <section className='flex justify-between bg-white items-center px-5 py-2 w-full rounded-full text-blue-500 hover:border-2 border-blue-300'>
                                        <input type="search" placeholder='Search' className='w-full bg-white border-none active:border-none text-black'/>
                                        <button className='px-2'><BsSearch /></button>              
                                    </section>
                                    <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                                        <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                                    </button>
                                </div>
                            </form>
                            <ul className="space-y-2 flex items-center justify-center mt-5">
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                className="flex items-center p-2 text-base font-normal rounded-lg ">
                                                <svg className="w-6 h-6  transition duration-75  group-hover:text-gray-900 "
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                </svg>
                                                <span className="flex-1 ml-3 whitespace-nowrap">DASHBOARD</span>
                                            </a>
                                        </li>
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                className="flex items-center p-2 text-base font-normal rounded-lg ">
                                                 <svg className="w-6 h-6  transition duration-75  group-hover:text-gray-900 "
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="https://icons8.com/icon/59766/compass">
                                                    <path
                                                        d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                                    </path>
                                                </svg>
                                                <span className="flex-1 ml-3 whitespace-nowrap">Aayurveda Medicines</span>
                                            </a>
                                        </li>
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                className="flex items-center p-2 text-base font-normal rounded-lg ">
                                                <svg className="w-6 h-6  transition duration-75  group-hover:text-gray-900 "
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                </svg>
                                                <span className="flex-1 ml-3 whitespace-nowrap">Chiropractic</span>
                                            </a>
                                        </li>
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                class="flex items-center p-2 text-base font-normal rounded-lg ">
                                                <svg class="w-6 h-6  transition duration-75  group-hover:text-gray-900 "
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Homeopathy</span>
                                            </a>
                                        </li>
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                class="flex items-center p-2 text-base font-normal rounded-lg ">
                                                <svg class="w-6 h-6  transition duration-75  group-hover:text-gray-900 "
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Naturopathy</span>
                                            </a>
                                        </li>
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                class="flex items-center p-2 text-base font-normal rounded-lg ">
                                                <svg class="w-6 h-6  transition duration-75  group-hover:text-gray-900 "
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Accupuncture</span>
                                            </a>
                                        </li>
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                class="flex items-center p-2 text-base font-normal rounded-lg ">
                                                <svg class="w-6 h-6  transition duration-75  group-hover:text-gray-900 "
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Yoga</span>
                                            </a>
                                        </li>
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                class="flex items-center p-2 text-base font-normal rounded-lg ">
                                                <svg class="w-6 h-6  transition duration-75  group-hover:text-gray-900 "
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Message Therapy</span>
                                            </a>
                                        </li>
                                    </ul>

                        </div>

                        {/* cards */}

                        <section className=" rounded-lg ">
                            <div className="container px-6 py-10 mx-auto  ml-1  flex-wrap overscroll-auto">

                                <div className="grid grid-cols-2 gap-8 mt-8 md:mt-16 ml-1  md:grid-cols-2 flex-row ">


                                    <div className="lg:flex flex-row border-2  bg-[#99cccc] rounded-lg">
                                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={Comm1} alt="" />

                                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                                            <a href="#" className="text-xl font-light text-gray-800 hover:underline dark:text-white ">
                                            The healing power of homeopathy
                                            </a>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></svg>
                                            <span className="text-sm text-gray-500 dark:text-gray-300">Dr.Rohit Rai</span>
                                            <div className="flex items-center mx-12 ">
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-500 ml-1">2675</span>
                                                </button>

                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-4l-3 3z" />
                                                    </svg>
                                                    <span className="text-gray-500 ml-1">125</span>
                                                </button>
                                            </div>

                                            <div className=''></div>

                                        </div>
                                    </div>

                                    <div className="lg:flex border-2 bg-[#99cccc] rounded-lg">
                                        <img className="object-cover  w-full h-56 rounded-lg lg:w-64" src={Comm2} alt="" />

                                        <div className="flex flex-col  justify-between py-6 lg:mx-6">
                                            <a href="#" className="text-xl font-light text-gray-800 hover:underline dark:text-white ">
                                            Transform your health with Ayurvedic principles and practices
                                            </a>

                                            <span className="text-sm text-gray-500 dark:text-gray-300">Dr.Krisha Borana</span>
                                            <div className="flex items-center mx-12 mt-2">
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-500 ml-1">2500</span>
                                                </button>

                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-4l-3 3z" />
                                                    </svg>
                                                    <span className="text-gray-500 ml-1">926</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="lg:flex border-2 bg-[#99cccc]  ml-1 rounded-lg">
                                        <img className="object-cover   w-full h-56  rounded-lg lg:w-64" src={Comm3} alt="" />

                                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                                            <a href="#" className="text-xl font-light text-gray-800 hover:underline dark:text-white ">
                                            Find your inner zen: the benefits of a regular yoga practice</a>

                                            <span className="text-sm text-gray-500 dark:text-gray-300">Dr.Aryan Gupta</span>
                                            <div className="flex items-center mx-12 mt-2">
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-500 ml-1">259</span>
                                                </button>

                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-4l-3 3z" />
                                                    </svg>
                                                    <span className="text-gray-500 ml-1">63</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:flex border-2 bg-[#99cccc] rounded-lg ">
                                        <img className="object-cover   w-full h-56 rounded-lg lg:w-64" src={Comm4} alt="" />

                                        <div className="flex flex-col justify-between py-6 lg:px-2">
                                            <a href="#" className="text-xl font-light text-gray-800 hover:underline dark:text-white ">
                                            Get fit, feel great: the many benefits of regular exercise
                                            </a>

                                            <span className="text-sm  text-gray-500 dark:text-gray-300">Dr.Bhavya Poddar</span>
                                            <div className="flex items-center mx-12 mt-2">
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-500 ml-1">253</span>
                                                </button>

                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-4l-3 3z" />
                                                    </svg>
                                                    <span className="text-gray-500 ml-1">97</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:flex bg-[#99cccc] rounded-lg border-2">
                                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={Comm5} alt="" />

                                        <div className="flex flex-col  justify-between py-6 lg:px-2">
                                            <a href="#" className="text-xl font-light text-gray-800 hover:underline dark:text-white ">
                                            Heart disease prevention: tips for reducing your risk
                                            </a>

                                            <span className="text-sm text-gray-500 dark:text-gray-300">Dr.Hari Sanghvi</span>
                                            <div className="flex items-center mx-12 ">
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-500 ml-1">238</span>
                                                </button>

                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-4l-3 3z" />
                                                    </svg>
                                                    <span className="text-gray-500 ml-1">289</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:flex bg-[#99cccc] rounded-lg border-2">
                                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={Comm5} alt="" />

                                        <div className="flex flex-col  justify-between py-6 lg:px-2">
                                            <a href="#" className="text-xl font-light text-gray-800 hover:underline dark:text-white ">
                                            Heart disease prevention: tips for reducing your risk
                                            </a>

                                            <span className="text-sm text-gray-500 dark:text-gray-300">Dr.Hari Sanghvi</span>
                                            <div className="flex items-center mx-12 ">
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-500 ml-1">238</span>
                                                </button>

                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-4l-3 3z" />
                                                    </svg>
                                                    <span className="text-gray-500 ml-1">289</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:flex bg-[#99cccc] rounded-lg border-2">
                                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={Comm5} alt="" />

                                        <div className="flex flex-col  justify-between py-6 lg:px-2">
                                            <a href="#" className="text-xl font-light text-gray-800 hover:underline dark:text-white ">
                                            Heart disease prevention: tips for reducing your risk
                                            </a>

                                            <span className="text-sm text-gray-500 dark:text-gray-300">Dr.Hari Sanghvi</span>
                                            <div className="flex items-center mx-12 ">
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-500 ml-1">238</span>
                                                </button>

                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-4l-3 3z" />
                                                    </svg>
                                                    <span className="text-gray-500 ml-1">289</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:flex bg-[#99cccc] rounded-lg border-2">
                                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={Comm5} alt="" />

                                        <div className="flex flex-col  justify-between py-6 lg:px-2">
                                            <a href="#" className="text-xl font-light text-gray-800 hover:underline dark:text-white ">
                                            Heart disease prevention: tips for reducing your risk
                                            </a>

                                            <span className="text-sm text-gray-500 dark:text-gray-300">Dr.Hari Sanghvi</span>
                                            <div className="flex items-center mx-12 ">
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-500 ml-1">238</span>
                                                </button>

                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-4l-3 3z" />
                                                    </svg>
                                                    <span className="text-gray-500 ml-1">289</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:flex bg-[#99cccc] rounded-lg border-2">
                                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={Comm5} alt="" />

                                        <div className="flex flex-col  justify-between py-6 lg:px-2">
                                            <a href="#" className="text-xl font-light text-gray-800 hover:underline dark:text-white ">
                                            Heart disease prevention: tips for reducing your risk
                                            </a>

                                            <span className="text-sm text-gray-500 dark:text-gray-300">Dr.Hari Sanghvi</span>
                                            <div className="flex items-center mx-12 ">
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-500 ml-1">238</span>
                                                </button>

                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-4l-3 3z" />
                                                    </svg>
                                                    <span className="text-gray-500 ml-1">289</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:flex bg-[#99cccc] rounded-lg border-2">
                                        <img className="object-cover   rounded-lg w-full h-56  lg:w-64" src={Comm6} alt="" />

                                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                                            <a href="#" className="text-xl font-light text-gray-800 hover:underline dark:text-white ">
                                            Alternative treatments when antibiotics aren't necessary
                                            </a>

                                            <span className="text-sm text-gray-500 dark:text-gray-300">Dr.Khushi oshi</span>
                                            <div className="flex items-center align-middle  mx-12 mt-2">
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-500 ml-1">239</span>
                                                </button>

                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-4l-3 3z" />
                                                    </svg>
                                                    <span className="text-gray-500 ml-1">235</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-span-2 w-64 fixed right-0">
                        {/* left side */}


                        <div className="max-w-2xl hover:bg-fixed flex flex-col items-center ml-2">

                            <div className="w-full" aria-label="Sidebar">
                                <div className="px-3 py-4 rounded  ">
                                    <ul className="space-y-2 flex items-center">
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                className="flex items-center p-2 text-base font-normal rounded-lg ">
                                                <svg className="w-6 h-6  transition duration-75  group-hover:text-gray-900 "
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                </svg>
                                                <span className="flex-1 ml-3 whitespace-nowrap">DASHBOARD</span>
                                            </a>
                                        </li>
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                className="flex items-center p-2 text-base font-normal rounded-lg ">
                                                 <svg className="flex-shrink-0 w-6 h-6 text-black transition duration-75 dark:text-black group-hover:text-gray-900 dark:group-hover:text-white"
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="https://icons8.com/icon/59766/compass">
                                                    <path
                                                        d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                                    </path>
                                                </svg>
                                                <span className="flex-1 ml-3 whitespace-nowrap">Aayurveda Medicines</span>
                                            </a>
                                        </li>
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                className="flex items-center p-2 text-base font-normal rounded-lg ">
                                                <svg className="w-6 h-6  transition duration-75  group-hover:text-gray-900 "
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                </svg>
                                                <span className="flex-1 ml-3 whitespace-nowrap">Chiropractic</span>
                                            </a>
                                        </li>
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                class="flex items-center p-2 text-base font-normal rounded-lg ">
                                                <svg class="w-6 h-6  transition duration-75  group-hover:text-gray-900 "
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Homeopathy</span>
                                            </a>
                                        </li>
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                class="flex items-center p-2 text-base font-normal rounded-lg ">
                                                <svg class="w-6 h-6  transition duration-75  group-hover:text-gray-900 "
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Naturopathy</span>
                                            </a>
                                        </li>
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                class="flex items-center p-2 text-base font-normal rounded-lg ">
                                                <svg class="w-6 h-6  transition duration-75  group-hover:text-gray-900 "
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Accupuncture</span>
                                            </a>
                                        </li>
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                class="flex items-center p-2 text-base font-normal rounded-lg ">
                                                <svg class="w-6 h-6  transition duration-75  group-hover:text-gray-900 "
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Yoga</span>
                                            </a>
                                        </li>
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                class="flex items-center p-2 text-base font-normal rounded-lg ">
                                                <svg class="w-6 h-6  transition duration-75  group-hover:text-gray-900 "
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Message Therapy</span>
                                            </a>
                                        </li>
                                        {/* <li  className='text-black hover:text-blue-500'>
                                            <a href="#" target="_blank"
                                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white  ">
                                                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="https://icons8.com/icon/59766/compass">
                                                    <path
                                                        d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                                    </path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Aayurveda Medicines</span>
                                            </a>
                                        </li>
                                        <li  className='text-black hover:text-blue-500'>
                                            <a href="#" target="_blank"
                                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
                                                    </path>
                                                    <path
                                                        d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
                                                    </path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Chiropractic</span>
                                            </a>
                                        </li>
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Homeopathy</span>
                                            </a>
                                        </li>
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Naturopathy</span>
                                            </a>
                                        </li>
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Acupuncture</span>
                                            </a>
                                        </li>
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Yoga</span>
                                            </a>
                                        </li>
                                        <li className='text-black hover:text-blue-500'>
                                            <a href="#"
                                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <span className="flex-1 ml-3 whitespace-nowrap">Massage Therapy</span>
                                            </a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs
