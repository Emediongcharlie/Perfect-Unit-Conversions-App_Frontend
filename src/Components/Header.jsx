import React from 'react'
import './Header.css'
import CalculationPage from './CalculationPage'
import LengthConversions from './LengthConversions'

const Header = () => {
  return (
    <div className='container'>
        <div>
            <h1>Welcome to our Perfect Unit Conversions Calculator</h1>
        </div>
        
    <div>
        <CalculationPage />
    </div>
    </div>
   
    
  )
}

export default Header
