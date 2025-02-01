import React, { useState } from 'react'

const AreaConversions = () => {

    const[formData, setFormData] = useState({
        convertFrom:"",
        convertTo:"",
        entryValue:"",
        result:"",
    })



    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value, // Update only the changed field
        });
    };
    

    const handleSubmit = async(event) => {
        event.preventDefault()

        console.log("sending request:", formData)

        try{
            const response = await fetch("http://localhost:8080/api/area-conversions", {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    convertFrom: formData.convertFrom.toLowerCase(),
                    convertTo: formData.convertTo.toLowerCase(),
                    entryValue: Number(formData.entryValue), // Ensure it's a number
                })
            })
            if (response.ok) {
                const result = await response.json();
                // alert("Conversion result: " + result.convertedValue);

                setFormData((prev) => ({ ...prev, result: result.result }));
             
              } else {
                const errorMessage = await response.text();
                alert('Failed to calculate' + errorMessage);
              }
            } catch (error) {
              console.error('Error:', error);
              alert('An error occurred while calculating');
            }
          };
  
  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <label>
                Convert From
                <br />
                <select name="convertFrom" value={formData.convertFrom}  onChange={handleChange}>
                <option value="">--Select--</option>
                <option value="mm²">Square Millimeter (mm²)</option>
                <option value="cm²">Square Centimeter (cm²)</option>
                <option value="dm²">Square Decimeter (dm²)</option>
                <option value="m²">Square Meter(m²)</option>
                <option value="dam²">Square Decameter (dam²)</option>
                <option value="hm²">Square Hectometer (hm²)</option>
                <option value="km²">Square kilometer(km²)</option>
                
                </select>
            </label>
            <br />
            <label>
                Convert To
                <br />
                <select name='convertTo' value={formData.convertTo} onChange={handleChange}>
                <option value="">--Select--</option>
                <option value="mm²">Square Millimeter (mm²)</option>
                <option value="cm²">Square Centimeter (cm²)</option>
                <option value="dm²">Square Decimeter (dm²)</option>
                <option value="m²">Square Meter(m²)</option>
                <option value="dam²">Square Decameter (dam²)</option>
                <option value="hm²">Square Hectometer (hm²)</option>
                <option value="km²">Square kilometer(km²)</option>
                </select>
            </label>
            <br />
            <label>
                Entry value
                <br />
                <input type="number" 
                name='entryValue' 
                value={formData.entryValue} 
                onChange={handleChange}  />
            </label>
            <br />
            <button type='submit' name='submit'>Submit</button>
            <br />
            <label>
                Result
                <br />
                <input type="text" 
                name='result' 
                value={formData.result} 
                onChange={handleChange}  />
            </label>
        </form>
    </div>
  )
}

export default AreaConversions