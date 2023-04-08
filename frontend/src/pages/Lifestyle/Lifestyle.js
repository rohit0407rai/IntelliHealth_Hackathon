import React from 'react'
import MyResponsiveLine from '../../components/MyResponsiveLine'

const Lifestyle = () => {
    return (
        <div>
            <div className='mt-12 bg-gradient-to-br from-[#e8f2fc] to-white h-[3000px]'>

                <div className='flex flex-row justify-evenly font-Li'>
                    <div className='flex flex-col gap-6 bg-blue-500 px-1 pt-2 pb-6 rounded-md  mt-16'>
                        <div class="grid grid-cols-2 gap-x-12 gap-y-4 w-full">
                            <div className='w-80 h-20 rounded-lg p-2 bg-[#ffffff] flex justify-between items-center'>
                                <div className='flex flex-col gap-2 items-center '>
                                    <span className='text-xl flex text-[#3C3D42]'>3.9 gm/dl &nbsp;</span>RBC Count
                                </div>
                                <div className='text-sm w-16 text-[#3C3D42]'>4.0-6.0 gm/dl</div>
                            </div>
                            <div className='w-80 h-20 rounded-lg p-2 bg-[#ffffff] flex justify-between items-center'>
                                <div className='flex flex-col gap-2 items-center '>
                                    <span className='text-xl flex text-[#3C3D42]'>99 mg/dl &nbsp;</span>Sugar
                                </div>
                                <div className='text-sm w-16 text-[#3C3D42]'>100-125 mg/dl</div>
                            </div>
                            <div className='w-80 h-20 rounded-lg p-2 bg-[#ffffff] flex justify-between items-center'>
                                <div className='flex flex-col gap-2 items-center '>
                                    <span className='text-xl flex text-[#3C3D42]'>9.7 gm/dl &nbsp;</span>Haemoglobin
                                </div>
                                <div className='text-sm w-16 text-[#3C3D42]'>11.0-14.0 gm/dl</div>
                            </div>
                            <div className='w-80 h-20 rounded-lg p-2 bg-[#ffffff] flex justify-between items-center'>
                                <div className='flex flex-col gap-2 items-center '>
                                    <span className='text-xl flex text-[#3C3D42]'>20.5 &nbsp;</span>BMI
                                </div>
                                <div className='text-sm w-16 text-[#3C3D42]'>18.5-24.9</div>
                            </div>
                            <div className='w-80 h-20 rounded-lg p-2 bg-[#ffffff] flex justify-between items-center'>
                                <div className='flex flex-col gap-2 items-center '>
                                    <span className='text-xl flex text-[#3C3D42]'>175 mg/dl &nbsp;</span>Cholestrol
                                </div>
                                <div className='text-sm w-16 text-[#3C3D42]'>200-239 mg/dl</div>
                            </div>
                            <div className='w-80 h-20 rounded-lg p-2 bg-[#ffffff] flex justify-between items-center'>
                                <div className='flex flex-col gap-2 items-center '>
                                    <span className='text-xl flex text-[#3C3D42]'>2.38 lacs/cmm &nbsp;</span>Platelet
                                </div>
                                <div className='text-sm w-16 text-[#3C3D42]'>1.5-4.0 lacs/cmm</div>
                            </div>
                        </div>
                        <div id='chart' className='bg-[#ffffff] w-full h-80 rounded-xl p-2'>
                            <MyResponsiveLine />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lifestyle