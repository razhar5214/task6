import React from "react";
import ReactDOM from "react-dom";
import '../zipSearchBar.css';

export default function SearchBar(){
    return(
    <form className="search-bar"> 
        <label className="search-bar-name">
          Zip Code:
          <input className="search-bar-input" type="number" name="Zip-Code" placeholder="XXXXX" />
        </label>
        <input className="search-bar-submit-btn" type="submit" value="Submit" />
    </form>
    )
}