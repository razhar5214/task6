import React from "react"
import ReactDOM from "react-dom"
import '../index.css';
import logo from "../zipcode-logo.jpg";

export default function Navbar(){
    return(
        <div className="app--navbar">
            <img className="app--logo" src={logo}/>
            <h3 className="app--name">Zipcode Search</h3>
            <h3 className="team--names">Awais. Shakhram. Rashad</h3>
        </div>
    )
}