import React,  { useState } from 'react';
import magnify from './images/magnify.jpg';
import mic from './images/mic.png';
import camera from './images/camera.png';

const Search = () => {
    const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setSearchKeyword(event.target.value);
    }
  };
    return(
        <div className="search-div">
            <img style={{height: 15}} src={magnify}></img>
            <form>
                <input id="gsearch"ty onKeyPress={handleSearch}></input>
            </form>
            <div>
            <img style={{height: 20}} src={mic}></img>
            <img style={{height: 27}} src={camera}></img>
            </div>
        </div>     
    )
}
 export default Search;