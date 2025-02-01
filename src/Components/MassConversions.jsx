import React, { useState } from 'react'

const MassConversions = () => {

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
            const response = await fetch("http://localhost:8080/api/mass-conversions", {
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
                <option value="mg">Milligram (mg)</option>
                <option value="cg">Centigram (cg)</option>
                <option value="dg">Decigram (dg)</option>
                <option value="g">gram (g)</option>
                <option value="dag">Decagram (dag)</option>
                <option value="hg">Hectogram (hg)</option>
                <option value="kg">kilogram (kg)</option>
                
                </select>
            </label>
            <br />
            <label>
                Convert To
                <br />
                <select name='convertTo' value={formData.convertTo} onChange={handleChange}>
                <option value="">--Select--</option>
                <option value="mg">Milligram (mg)</option>
                <option value="cg">Centigram (cg)</option>
                <option value="dg">Decigram (dg)</option>
                <option value="g">Grams (g)</option>
                <option value="dag">Decagram (dag)</option>
                <option value="hg">Hectogram (hg)</option>
                <option value="kg">kilogram (kg)</option>
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

export default MassConversions