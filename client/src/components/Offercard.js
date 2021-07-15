import React, { Component } from 'react'
import './Offercard.css'

// const img = "melt.jpeg"
// const type = "location"

// const Offercard = (props) => {
//     return (
//         // <div className="Offercard">
//         //     <img src={img} width="300" height="auto" alt={type} />
//         //     <p>{type}</p>
//         //     <p><button>Order Now</button></p>
//         // </div>
//         <div class="card">
//             <div class="card-horizontal">
//                 <div class="img-square-wrapper">
//                     <img class="" src="melt.jpeg" alt="Card image cap" />
//                 </div>
//                 <div class="card-body">
//                     <h4 class="card-title">{props.title}</h4>
//                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 </div>
//             </div>
//             <div class="card-footer">
//                 <small class="text-muted">Last updated 3 mins ago</small>
//             </div>
//         </div>
//     )
// }

// export default Offercard;

class DataTable extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-horizontal">
          <div class="img-square-wrapper">
              <img class="img-restaurant" src={this.props.obj.picture} alt="Card cap" />
          </div>
          <div class="card-body">
              {/* <h4 class="card-title">{props.title}</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <h3 class="card-text">{this.props.obj.title}</h3>
            <p class="card-text">Cheapest option: {this.props.obj.platform}</p>
            <p class="card-text">Delivery fee: {this.props.obj.price}</p>
            <small>Est. Time: {(this.props.obj.time).replace('Est. Time', '')}</small>
          </div>
        </div>
        {/* <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
        </div> */}
      </div>
    );
  }
}
  

export default DataTable;