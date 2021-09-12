import React, { useState } from 'react'



function AddBountyForm(props){

    const initInputs = { firstName: props.firstName || "", lastName: props.lastName || "", living: props.living || "", reward: props.reward || "", type: props.type || ""  }
        
        const [inputs, setInputs] = useState(initInputs);

        const handleChange = (e) => {
        const {name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    
        const handleSubmit = ((e) => {
            e.preventDefault() 
            if (inputs.living.toLowerCase() === "alive" ) {
                inputs.living = true
            } else {
                inputs.living = false
            }
            props.submit(inputs, props._id)
            setInputs(initInputs)
    })

    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        value={inputs.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={inputs.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                    />
                    <input
                        type="text"
                        name="living"
                        value={inputs.living}
                        onChange={handleChange}
                        placeholder="Dead or Alive"
                    />
                    
                    <input
                        type="number"
                        name="reward"
                        value={inputs.reward}
                        onChange={handleChange}
                        placeholder="Bounty Amount"
                    />
                
                    
                
                    <input
                        type="text"
                        name="type"
                        value={inputs.type}
                        onChange={handleChange}
                        placeholder="Jedi or Sith"
                    />
                    <button className="add-btn">{props.btnText}</button>
                </form>
            </div>
    )
}

export default AddBountyForm;