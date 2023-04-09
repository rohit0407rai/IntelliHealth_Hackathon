import React, { useState } from 'react'
import axios from "axios"
//import doc1 from '../assets/doc1.jpg'

const Predict = () => {
    const [prediction, setPrediction] = useState("")
    const [answer, setAnswer] = useState("")

    const handleChange = (event) => {
        setPrediction(event.target.value);
    };

    console.log(prediction)
    const handleClick= async (e) => {
        console.log(prediction);
        try {
            const response = await axios.post('http://127.0.0.1:5000/process',{
                input: prediction,
            },{
                headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                },
              })
            console.log(response.data)
            setAnswer(response.data.final_prediction)
        }
        
         catch (error) {
            console.log(error)
        }
    }
  return (
    <>
        <div className='flex justify-center items-center h-screen'>
        {/* <div className="flex lg:w-1/4 lg:h-1/4 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden align-middle items-center">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={doc1}
            />
          </div> */}
          <div>
            <div className='flex justify-center '>
                <div className='container mx-auto px-4'>
                    <h3 className='text-4xl font-serif '>Enter your Diseases as a string</h3>
                    <div className='flex justify-center'>
                    <input type='text' name='symptoms' id='symptoms' value={prediction} className='  px-auto mx-8 py-4 my-6 flex justify-center   align-middle' onChange={handleChange} placeholder='         Enter Symptoms'/>
                    </div>
                </div>
          </div>
            <button type='submit' onClick={handleClick} className='lg bg-gray-950 rounded-full align-middle flex justify-middle items-center hover:border-white hover:text-black text-white px-4 py-4 mx-auto' placeholder='Helllllloooo'>Submit Your input</button>
            { answer ? (
                <div className=' font-sans'>
                The prediction according to your inputs is that you have: <h1 className='font-semibold text-[#FF0000] underline'>{answer}</h1>
            </div>
            ) : ( <div>
                Nothing Here
                </div>
            )

            }
          </div>
        </div>
    </>
  )
}

export default Predict