import React from 'react'
import './Card.css'

function Card() {
    return (
        <div className="Card">
            <img src="melt.jpeg" width="200" height="auto" alt="John" />
            <h3>The Melt</h3>
            <p>Feed your employees</p>
            {/* <p>Harvard University</p> */}
            <p><button>Order Now</button></p>
        </div>

    )
}

export default Card;