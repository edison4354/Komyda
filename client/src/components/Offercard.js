import React from 'react'
import './Offercard.css'

const type = "location"

const Offercard = (props) => {
    return (
        // <div className="Offercard">
        //     <img src={img} width="300" height="auto" alt={type} />
        //     <p>{type}</p>
        //     <p><button>Order Now</button></p>
        // </div>
        <div class="card">
            <div class="card-horizontal">
                <div class="img-square-wrapper">
                    <img src={props.img} alt="Card image cap" width="320rem" />
                    <p><button>Order Now</button></p>
                </div>
                <div class="card-body">
                    <h4 class="card-title">{props.title}</h4>
                </div>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 1 day ago</small>
            </div>
        </div>
    )
}

export default Offercard;