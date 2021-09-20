import React, { useState } from 'react'



function AddPartsForm(props){

    const initInputs = { name: props.name || "", condition: props.condition || "", fitment: props.fitment || "", quantity: props.quantity || ""  }
        
        const [inputs, setInputs] = useState(initInputs);

        const handleChange = (e) => {
        const {name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    
        const handleSubmit = ((e) => {
            e.preventDefault() 
            if (inputs.condition.toLowerCase() === "new" ) {
                inputs.condition = true
            } else {
                inputs.condition = false
            }
            props.submit(inputs, props._id)
            setInputs(initInputs)
    })

    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>add to your parts collection</h2>
                    <input
                        type="text"
                        name="name"
                        value={inputs.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        name="condition"
                        value={inputs.condition}
                        onChange={handleChange}
                        placeholder="Condition"
                    />
                    <input
                        type="text"
                        name="fitment"
                        value={inputs.fitment}
                        onChange={handleChange}
                        placeholder="Fitment"
                    />
                    
                    
                
                    <input
                        type="number"
                        name="quantity"
                        value={inputs.quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                    />
                    <button className="add-btn">{props.btnText}</button>
                </form>
            </div>
    )
}

export default AddPartsForm;