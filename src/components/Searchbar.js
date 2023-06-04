import { useState } from 'react';
import './Searchbar.css'

export default function SearchBar() {
    const [inputSearch, setInputSearch] = useState("") 

    let handleSearch = () => {
        console.log(`Searching for "${inputSearch}`)
        console.log(`API Key: ${process.env.REACT_APP_API_KEY}`)
        fetch(`https://www.googleapis.com/youtube/v3/search?q=${inputSearch}&key=${process.env.REACT_APP_API_KEY}&part=snippet&kind=video&maxResults=20`)
        .then(response => response.json())
        .then((response)=>{
            console.log("Response...")
            console.log(response)
        });
    }

    return (
        <div className="search-bar-container">
            <input 
                onChange={event => setInputSearch(event.target.value)}
                value={inputSearch}
                placeholder="Search Video" 
                type="text"
            /> 
            <button className="search-button" onClick={handleSearch}>
                <i className="material-icons">Search</i>
            </button>
        </div>
    );
}

