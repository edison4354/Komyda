import React from 'react'
import './Mainscreen.css'
import Card from './Card'

// Variables
const title = 'Komyda';
const motto = 'Find the best food deals, with us.';


const Mainscreen = () => {
    return (
        <div>
            <div className="Mainscreen">
                <h1>{title.toUpperCase()}</h1>
            </div>
            <Searchbar />
            <Card />
            <p>hi</p>
        </div>
    )
}

export default Mainscreen;


function Searchbar() {
    return(
        <div className="wrap">
                    <div className="Motto">
                        <h2>{motto}</h2>
                    </div>
                    <div className="search">
                        <button type="submit" className="locationButton"/>
                        <input type="text" className="searchTerm" placeholder="Enter delivery address"/>
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
    )
}

