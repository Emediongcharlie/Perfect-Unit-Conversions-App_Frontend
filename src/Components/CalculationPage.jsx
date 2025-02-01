import React, { useState } from 'react'
import "./CalculationPage.css"
import LengthConversions from './LengthConversions';
import VolumeConversions from './VolumeConversions';
import TimeConversions from './TimeConversions';
import MassConversions from './MassConversions';
import AreaConversions from './AreaConversions';
import TemperatureConversions from './TemperatureConversions';

const CalculationPage = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleItemClick = (option) => {
        setSelectedOption(selectedOption === option ? '' : option);
    };
  return (
    <div className='container'>
        <h1>Calculation Page</h1>
        <div className='container'> 
           <div className='option-list'>      
        <ul className='conversion-list'>
        <li onClick={() => handleItemClick("LENGTH CONVERSION")}>Length Unit Conversions</li>
        <li onClick={() => handleItemClick("VOLUME CONVERSIONS")}>Volume unit Conversions</li>
        <li onClick={() => handleItemClick('MASS CONVERSIONS')}>Mass Unit Conversions</li>
        <li onClick={() => handleItemClick("TIME CONVERSIONS")}>Time Unit Conversions</li>
        <li onClick={() => handleItemClick('AREA CONVERSIONS')}>Area Unit Conversions</li>
        <li onClick={() => handleItemClick('TEMPERATURE CONVERSIONS')}>Temperature Unit Conversions</li>
      </ul>
        </div>
        <div className='display'>
            <div>
            {selectedOption && <p>{selectedOption}</p>}
                {selectedOption === 'LENGTH CONVERSION' && <LengthConversions />}
                {selectedOption === 'VOLUME CONVERSIONS' && <VolumeConversions />}
                {selectedOption === 'TIME CONVERSIONS' && <TimeConversions />}
                {selectedOption === 'MASS CONVERSIONS' && <MassConversions />}
                {selectedOption === 'AREA CONVERSIONS' && <AreaConversions />}
                {selectedOption === 'TEMPERATURE CONVERSIONS' && <TemperatureConversions />}

            </div>
                
        </div> 
        </div>  
      
    </div>
  )
}

export default CalculationPage