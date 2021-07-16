import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './Feed.css'
import axios from 'axios';
import FoodcardList from './FoodcardList'
import DataTable from './Offercard';

// export default function Feed() {
//     return (
//         <form>
//             <div>
//                 <Navibar />
//                 <OffercardList />
//             </div>
//         </form>
//     )
// }

function Navibar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand id="home" href="#home">KOMYDA</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <div className="delivery">
                        <Nav.Link href="#delivery">Delivery</Nav.Link>
                    </div>
                    <Nav.Link href="#pickup">Pick Up</Nav.Link>
                </Nav>
                <Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav.Link eventKey={2} href="#memes">
                        Sign in
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

// const OffercardList = () => {
//     return (
//         <div className='offerlist'>
//           {this.dataTable()}
//         </div>
//     )
// }

export default class Users extends Component {

  constructor(props) {
      super(props);
      this.state = { usersCollection: [] };
  }

  componentDidMount() {
      axios.get('http://localhost:3000/restaurants')
          .then(res => {
              this.setState({ usersCollection: res.data });
          })
          .catch(function (error) {
              console.log(error);
          })
  }

  dataTable() {
      return this.state.usersCollection.map((data, i) => {
          return <DataTable obj={data} key={i} />;
      });
  }

  render() {
      return (
          <div>
            <Navibar />
            <FoodcardList />
            {this.dataTable()}
          </div>
      )
  }
}