import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
//import Parts from './components/Parts'
import AddPartsForm from './components/AddPartsForm.js'
import Search from "./components/searchPart"
import Parts from './components/Parts'



function App() {
    const [parts, setParts] = useState([])
    const [filteredPart, setFilteredParts] = useState([])

    const getParts = (() => {
        axios.get('/parts')
            .then(res => setParts(res.data))
            .catch(err => console.log(err))
    })

    const addPart = ((newPart) => {
        axios.post('/parts', newPart)
            .then(res => {
                setParts(prevParts => [...prevParts, res.data])
            })
            .catch(err => console.log(err))
    })

    const deletePart = (partId) => {
        axios.delete(`/parts/${partId}`)
            .then(res => {
                setParts(prevParts => prevParts.filter(part => part._id !== partId))
            })
            .catch(err => console.log(err))
    }

   

    const editPart = ((updates, partId) => {
        axios.put(`/parts/${partId}`, updates)
            .then(res => {
                setParts(prevParts => prevParts.map (part => part._id !== partId ? part : res.data))
            })
            .catch(err => console.log(err))
    })

    const filterPart = (e, query) => {
        e.preventDefault()
        if (!query) {
        }
        axios.get(`/parts/search/type?type=${query}`)
            .then(res => setFilteredParts(res.data))
            .catch(err => console.log(err))
    
     
    };

    

    useEffect(() => {
        getParts();
    }, []);

    

    return (
        <div>
            <h1 
                className="title">Motorcycle Parts Catalog
                
            </h1>
           
            <AddPartsForm 
                submit={addPart}
                btnText="Add Part"
            />
                { 
                parts.map(part => {
                    return<Parts
                    {...part} 
                    key={part._id}
                    name={part.name}
                    condition={part.condition}
                    fitment={part.fitment}
                    quantity={part.quantity}
                    deletePart={deletePart}
                    editPart={editPart}
                    addPart={addPart}
                    
                    />}) 
}



<Search filterPart={filterPart}/>
        
<ul className = "partFiltered">
    {
    filterPart.map(part => {
return<Parts
{...part} 
key={part._id}
name={part.name}
condition={part.condition}
fitment={part.fitment}
quantity={part.quantity}

deletePart={deletePart}
editPart={editPart}
addPart={addPart}

/>})}
</ul>
</div>

)
}



export default App;
