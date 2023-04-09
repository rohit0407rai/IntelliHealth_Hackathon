import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"

const Payment = () => {
  return (
    <div>
        <PayPalScriptProvider>
            <PayPalButtons />
        </PayPalScriptProvider>
    </div>
  )
}

export default Payment