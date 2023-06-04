import { useState } from 'react';

export default function SearchBar() {
    const [inputSearch, setInputSearch] = useState("") 

    let handleSearch = () =>{
        console.log(`Searching for "${inputSearch}`)
        console.log(`API Key: ${process.env.REACT_APP_API_KEY}`)
        // fetch(`https://www.googleapis.com/youtube/v3/videos?`)
        fetch(`https://www.googleapis.com/youtube/v3/search?q=${inputSearch}&key=${process.env.REACT_APP_API_KEY}&part=snippet&kind=video&maxResults=20`)
        .then(response => response.json())
        .then((response)=>{
            console.log("Response...")
            console.log(response)


        })
    }

    // function handleSearch(){

    // }
        return (

            // <form action="">
            <div>
                <input 
                onChange={event => setInputSearch(event.target.value)}
                value = {inputSearch}
                placeholder="Search Video" //find something else for this one
                type = "text"
                /> 
      <button onClick={handleSearch}><i class="material-icons">search</i></button>


            </div>
    
//    </form>
             )
}  