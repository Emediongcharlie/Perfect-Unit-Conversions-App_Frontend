import React, { useState } from 'react'

const VolumeConversions = () => {

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
            const response = await fetch("http://localhost:8080/api/volume-conversions", {
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
                alert("Conversion result: " + result.convertedValue);

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
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Convert form
                <select name="convertFrom" value={formData.convertFrom}  onChange={handleChange}>
                <option value="">--Select--</option>
                <option value="l">liters</option>
                <option value="cl">centiliters</option>
                </select>
            </label>
            <br />
            <label>
                Convert to
                <select name='convertTo' value={formData.convertTo} onChange={handleChange}>
                <option value="">--Select--</option>
                <option value="l">liters</option>
                <option value="cl">centiliters</option>
                </select>
            </label>
            <br />
            <label>
                Entry value
                <input type="number" 
                name='entryValue' 
                value={formData.entryValue} 
                onChange={handleChange}  />
            </label>
            <br />
            <label>
                Result
                <input type="text" 
                name='result' 
                value={formData.result} 
                onChange={handleChange}  />
            </label>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default VolumeConversions