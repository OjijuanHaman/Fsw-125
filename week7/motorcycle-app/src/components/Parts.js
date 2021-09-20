import React, { useState } from 'react'
import "./Part.css"
import AddPartsForm from './AddPartsForm'


function Parts(props){
    const { deletePart, name, condition, fitment, quantity, _id } = props
    const [editToggle, editPart] = useState(false)

    return (
        <div className= "list-container">
         { !editToggle ?
           
              <div>
                    <h2 className = "partName">{name} {condition}</h2>
                        <h4>Quantity: {quantity}</h4>
                        <p>Fitment: {fitment}</p>
                    
                    
                    <button onClick={() => 
                        deletePart(_id)} 
                        className='delete-btn'>Delete
                    </button>

                    <button onClick={() => 
                        editPart(prevToggle => !prevToggle)} className="edit-btn"> Edit
                    </button>
              </div>
        
        :
        <>
            <AddPartsForm
                key={_id}
                name={name}
                condition={condition}
                fitment={fitment}
                quantity={quantity}
                _id={_id}
                btnText="Submit Edit" 
                submit={props.editPart}
            />
            <button
                className="delete-btn"
                onClick={() => editPart(prevToggle => !prevToggle)}>
                Close
            </button>
            </>
        }
        </div>
    );
}
export default Parts;