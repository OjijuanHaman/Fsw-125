import React ,{useState} from 'react';



const SearchBar = (props) => {
    
    const [input, setInput]=useState("")
    return (
     <form onSubmit={(e)=>props.filterPart(e, input)}>
        <label htmlFor="header-search">
            <div>
                <h2>Search Parts by name </h2> 
            </div>
        </label>
        <ol><li>
        <input
            type="text"
            _id="uuid"
            onChange={(e)=> setInput(e.target.value)}
            value={input}
            placeholder="name of part?"
            name="name"
        />
        </li>
        </ol>
        <button type="submit">Search</button>
    </form>
)};
export default SearchBar ;