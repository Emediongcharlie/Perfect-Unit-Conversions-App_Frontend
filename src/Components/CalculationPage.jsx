import React, { useState } from 'react'
import "./CalculationPage.css"

const CalculationPage = () => {

    const[options, setOption] = useState('')

    const handleChange = (event) => {
        setOption(event.target.value)
    }
  return (
    <div>
        <h1>Calculation Page</h1>
        <div>
        <ul className='conversion-list'>
        <li onChange={handleChange}>Length Unit Conversions</li>
        <li>Volume unit Conversions</li>
        <li>Mass Unit Conversions</li>
        <li>Time Unit Conversions</li>
        <li>Area Unit Conversions</li>
      </ul>
        </div>
      
    </div>
  )
}

export default CalculationPage