import React from 'react'
import MyResponsiveLine from '../../components/MyResponsiveLine'
import Sidebar from '../Appointment/Sidebar';
import Personalinfo from './Personalinfo';

const MyDetails = () => {
    const rbc = 6.9;
    const sugar = 999;
    const haemoglobin = 9.7;
    const bmi = 20.5;
    const cholestrol = 175;
    const platelet = 2.38;
    return (
        <div className='bg-gradient-to-br from-[#e8f2fc] to-white'>
            <h1 className='text-3xl text-blue-500 font-semibold mx-10 pt-5'>IntelliHealth</h1>  
            <div className=' h-screen flex justify-between gap-5'>
                <Sidebar/>
                <Personalinfo/>
                <div className='flex flex-row justify-evenly font-Li w-full mr-5'>
                    <div className='flex flex-col gap-6  px-1 pt-2 pb-6 rounded-md mt-'>
                        <div className='flex justify-center'>
                            <div className='bg-green-500 w-fit h-fit rounded-sm px-3 py-1 text-white'>Healthy</div>
                            <div className='bg-red-500 w-fit h-fit rounded-sm px-3 py-1 text-white'>Unhealthy</div>
                        </div>
                        <div></div>
                        <div class="grid grid-cols-2 gap-x-12 gap-y-4 w-full">
                            <div className='w-80 h-20 rounded-lg p-2 bg-[#ffffff] flex justify-between items-center'>
                                <div className='flex flex-col gap-2 items-center '>
                                    <span className={`text-xl flex text-[#3C3D42] ${rbc<6? 'text-green-500':'text-red-600'} `}>{rbc} gm/dl &nbsp;</span>RBC Count
                                </div>
                                <div className='text-sm w-16 text-[#3C3D42]'>4.0-6.0 gm/dl</div>
                            </div>
                            <div className='w-80 h-20 rounded-lg p-2 bg-[#ffffff] flex justify-between items-center '>
                                <div className='flex flex-col gap-2 items-center '>
                                    <span className={`text-xl flex text-[#3C3D42] ${sugar<125? 'text-green-500':'text-red-600'}`}>{sugar} mg/dl &nbsp;</span>Sugar
                                </div>
                                <div className='text-sm w-16 text-[#3C3D42]'>100-125 mg/dl</div>
                            </div>
                            <div className='w-80 h-20 rounded-lg p-2 bg-[#ffffff] flex justify-between items-center'>
                                <div className='flex flex-col gap-2 items-center '>
                                    <span className={`text-xl flex text-[#3C3D42] ${haemoglobin<14? 'text-green-500':'text-red-600'}`}>{haemoglobin} gm/dl &nbsp;</span>Haemoglobin
                                </div>
                                <div className='text-sm w-16 text-[#3C3D42]'>11.0-14.0 gm/dl</div>
                            </div>
                            <div className='w-80 h-20 rounded-lg p-2 bg-[#ffffff] flex justify-between items-center'>
                                <div className='flex flex-col gap-2 items-center '>
                                    <span className={`text-xl flex text-[#3C3D42] ${bmi<25? 'text-green-500':'text-red-600'}`}>{bmi} &nbsp;</span>BMI
                                </div>
                                <div className='text-sm w-16 text-[#3C3D42]'>18.5-25</div>
                            </div>
                            <div className='w-80 h-20 rounded-lg p-2 bg-[#ffffff] flex justify-between items-center'>
                                <div className='flex flex-col gap-2 items-center '>
                                    <span className={`text-xl flex text-[#3C3D42] ${cholestrol<239? 'text-green-500':'text-red-600'}`}>{cholestrol} mg/dl &nbsp;</span>Cholestrol
                                </div>
                                <div className='text-sm w-16 text-[#3C3D42]'>200-239 mg/dl</div>
                            </div>
                            <div className='w-80 h-20 rounded-lg p-2 bg-[#ffffff] flex justify-between items-center'>
                                <div className='flex flex-col gap-2 items-center '>
                                    <span className={`text-xl flex text-[#3C3D42] ${platelet<4? 'text-green-500':'text-red-600'}`}>{platelet} lacs/cmm &nbsp;</span>Platelet
                                </div>
                                <div className='text-sm w-16 text-[#3C3D42]'>1.5-4.0 lacs/cmm</div>
                            </div>
                        </div>
                        <div id='chart' className='bg-[#ffffff] w-full h-80 rounded-xl p-2'>
                            <MyResponsiveLine />
                            <p className='text-center'>Month &rarr;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyDetails