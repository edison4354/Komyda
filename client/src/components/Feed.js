import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './Feed.css'
import FoodcardList from './FoodcardList'
import Offercard from './Offercard';

export default function Feed() {
    return (
        <form>
            <div>
                <Navibar />
                <FoodcardList />
                <OffercardList />
            </div>
        </form>
    )
}

function Navibar() {
    return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
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

const OffercardList = () => {
    return (
        <div className='offerlist'>
            <Offercard img="yelp-melt.jpeg" title="Special Offers for you" />
            <Offercard img="yelp-healthy.jpeg" title="Ready for the Summer Fun" />
            <Offercard img="yelp-breakfast.jpeg" title="Discover Local Favorites" />
        </div>
    )
}