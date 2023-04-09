import React from 'react'
import DocSidebar from './DocSidebar'
import LineChart from './LineChart'
import SingleLine from './SingleLine'
import { SignalIcon } from '@heroicons/react/24/outline'
import Header from '../../components/Header'
import Barchart from '../../components/Barchart'
import BarChartMedicine from '../../components/BarChartMedicine'
import RadarChart from '../../components/RadarChart'


const Dashboard = () => {
  return (
    <div className='bg-gradient-to-br from-[#e8f2fc] to-white'>
      <Header/>

      <section className='flex gap-5'>
        <DocSidebar/>
        <section className='w-full'>
            <div className=' w-full h-1/3 py-2 my-5 flex justify-around gap-3'>
                <div className='bg-white w-[30%] rounded-lg'>
                    <div className='flex w-full items-center px-3 gap-3'>
                        <p>Patients &uarr;</p>
                        <SingleLine/>
                        
                    </div>
                <p className='text-center'>Days &rarr;</p>
                </div>
                <div className='bg-white w-[30%] rounded-lg'>
                <Barchart/>
                </div>
                <div className='bg-white w-[30%] rounded-lg'>
                  <Barchart/>
                </div>
            </div>
            <div className='h-[60%] w-full flex gap-8 justify-center px-5 py-2'>
                <div className='w-1/2 bg-white rounded-xl '>
                  <LineChart/>
                <p className='text-center'>Age &rarr;</p>
                </div>
                <div className='w-1/2 bg-white rounded-xl'>
                <BarChartMedicine/>
                <p className='text-center'>Drugs &rarr;</p>
                </div>
            </div>
        </section>

      </section>

    </div>
  )
}

export default Dashboard
