import React from 'react'
import './Header.css'
import CalculationPage from './CalculationPage'
import LengthConversions from './LengthConversions'

const Header = () => {
  return (
    <div className='container'>
        <h1>Welcome to our</h1>
    <h1>Perfect Unit Conversions Calculator</h1>
    <div className='analysis'>
<div>
             <CalculationPage />
        </div>
        <div className='length'>
            <LengthConversions />
        </div>
    
    </div>
    </div>
   
    
  )
}

export default Header
