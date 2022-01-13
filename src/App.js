import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"

export default function App(){
  return(
    <div>
      <Navbar />
      <SearchBar />
    </div>
  )
}