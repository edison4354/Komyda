import React from 'react'
import './Foodcard.css'

const Foodcard = (props) => {
    return (
        <div className="Foodcard">
            <img src={props.img} width="50" height="auto" alt={props.type} />
            <p>{props.type}</p>
        </div>
    )
}

export default Foodcard