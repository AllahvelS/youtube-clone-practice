import { useState } from "react";
import "./Searchbar.css"
import { useNavigate } from 'react-router-dom'; 
import ModalWindow from "./ModalWindow";

export const SearchBar = ({ setVideos, videos, disableMessage }) => {
 
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate(); 

    let handleSearch = (event) => {
        event.preventDefault();
        let query = searchTerm ? searchTerm : "trending";
     fetch(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${process.env.REACT_APP_API_KEY}&part=snippet&type=video&maxResults=20`)

        .then (response => response.json())   
        .then((response) => {
            console.log("Response:");
            console.log(response.items);
            setVideos(response.items);
            navigate("/search"); 
        }) 
        .catch ((error) => {
            <ModalWindow/>
        } )  

        
    };

    return (
        <div className="search-bar-container">
            <input 
                onChange={event => setSearchTerm(event.target.value)}
                value={searchTerm}
                placeholder="Search Video"
                type="text"
            /> 
       
            <button className="search-button" onClick={handleSearch}>
                <i className="material-icons">Search</i>
            </button>
            
            {!videos?.length && !disableMessage && <p>No Search Results Yet!, Please submit a search above!</p>}
        </div>
    );
};

export default SearchBar;