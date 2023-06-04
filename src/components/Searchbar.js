
// import { useState } from "react";
// import "./Searchbar.css"
// import { useNavigate } from 'react-router-dom'; // import useNavigate instead of useHistory


// export const SearchBar = ({ setVideos, videos }) => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [maxResults, setMaxResults] = useState(10); // Default to 10 results
//     const navigate = useNavigate(); // use useNavigate instead of useHistory


//     let handleSearch = (event) => {
//         event.preventDefault();
//         let query = searchTerm ? searchTerm : "trending";
//         fetch(`https://www.googleapis.com/youtube/v3/search?q=${query}&maxResults=${maxResults}&key=${process.env.REACT_APP_API_KEY}&part=snippet&type=video`)
//         .then(response => response.json())
//         .then((response) => {
//             console.log("Response:");
//             console.log(response.items);
//             setVideos(response.items);
//             navigate("/search"); // use navigate instead of history.push

//         });
//     };

//     return (
//         <div className="search-bar-container">
//             <input 
//                 onChange={event => setSearchTerm(event.target.value)}
//                 value={searchTerm}
//                 placeholder="Search Video"
//                 type="text"
//             /> 
//             <input
//                 onChange={event => setMaxResults(event.target.value)}
//                 value={maxResults}
//                 type="number"
//                 min="0"
//                 max="50"
//                 placeholder="Max Results"
//             />
//             <button className="search-button" onClick={handleSearch}>
//                 <i className="material-icons">Search</i>
//             </button>
            
//             {!videos?.length && <p>No Search Results Yet!, Please submit a search above!</p>}
//         </div>
//     );
// };

// export default SearchBar;




import { useState } from "react";
import "./Searchbar.css"
import { useNavigate } from 'react-router-dom'; // import useNavigate instead of useHistory


export const SearchBar = ({ setVideos, videos }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [maxResults, setMaxResults] = useState(10); // Default to 10 results
    const navigate = useNavigate(); // use useNavigate instead of useHistory


    let handleSearch = (event) => {
        event.preventDefault();
        let query = searchTerm ? searchTerm : "trending";
        fetch(`https://www.googleapis.com/youtube/v3/search?q=${query}&maxResults=${maxResults}&key=${process.env.REACT_APP_API_KEY}&part=snippet&type=video`)
        .then(response => response.json())
        .then((response) => {
            console.log("Response:");
            console.log(response.items);
            setVideos(response.items);
            navigate("/search"); // use navigate instead of history.push

        });
    };

    return (
        <div className="search-bar-container">
            <input 
                onChange={event => setSearchTerm(event.target.value)}
                value={searchTerm}
                placeholder="Search Video"
                type="text"
            /> 
            <input
                onChange={event => setMaxResults(event.target.value)}
                value={maxResults}
                type="number"
                min="0"
                max="50"
                placeholder="Max Results"
            />
            <button className="search-button" onClick={handleSearch}>
                <i className="material-icons">Search</i>
            </button>
            
            {!videos?.length && <p>No Search Results Yet!, Please submit a search above!</p>}
        </div>
    );
};

export default SearchBar;


















