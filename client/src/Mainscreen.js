import React from 'react'
import './Mainscreen.css'
import Title from './Title'
import Card from './Card'

const Mainscreen = () => {
    return (
        <div>
            <div className="Mainscreen">
                <Title />
                <div className="wrap">
                    <div className="search">
                        <button type="submit" className="locationButton"/>
                        <input type="text" className="searchTerm" placeholder="Enter delivery address"/>
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                    
                </div>
                <div className="Motto">
                    <h2>Find the best food deals,
                        with us.
                    </h2>
                </div>
            </div>
            {/* <Card /> */}
        </div>
    )
}

export default Mainscreen;


