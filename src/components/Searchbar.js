
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

















// import { useState } from 'react'
// import './Searchbar.css'

// export default function SearchBar() {
//     const [inputSearch, setInputSearch] = useState("");
//     const [searchResults, setSearchResults] = useState([]);
    
//     let handleSearch = () => {
//         console.log(`Searching for "${inputSearch}`);
//         console.log(`API Key: ${process.env.REACT_APP_API_KEY}`);
//         fetch(`https://www.googleapis.com/youtube/v3/search?q=${inputSearch}&key=${process.env.REACT_APP_API_KEY}&part=snippet&kind=video&maxResults=20`)
//         .then(response => response.json())
//         .then((response) => {
//             console.log("Response...");
//             console.log(response);
//             setSearchResults(response.items); // Assuming the response contains an array of items
//         });
// }

//     // let handleVideo = () =>{
//     //         return `https://www.youtube.com/watch?v=${result.id.videoId}`
//     // }
// return (
//     <div className="search-bar-container">
//         <input
//             onChange={event => setInputSearch(event.target.value)}
//             value={inputSearch}
//             placeholder="Search Video"
//             type="text"
//         />
//         <button className="search-button" onClick={handleSearch}>
//                 <i className="material-icons">Search</i>
//         </button>

//         <div className="search-results">
//             {searchResults.map((result, index) => (
//                 <div key={index}>
//                     {/* Display search result */}
//                     <h3>{result.snippet.title}</h3>
//                     <a href = {`https://www.youtube.com/watch?v=${result.id.videoId}`} rel='this-video-id' />
//                         <img src={result.snippet.thumbnails.high.url} alt = {result.snippet.title} />
//                     <p>{result.snippet.description}</p>
//                     {/* Add more content based on the required display */}
//                 </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

