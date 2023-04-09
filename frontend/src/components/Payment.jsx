import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"

const Payment = () => {
  return (

    <div className='h-screen w-screen flex justify-center align-middle mt-1/2 items-center'>

    <div>

        <PayPalScriptProvider>
            <PayPalButtons />
        </PayPalScriptProvider>
    </div>
  )
}

export default Payment