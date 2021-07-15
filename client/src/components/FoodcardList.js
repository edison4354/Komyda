import React from 'react'
import Foodcard from './Foodcard'
import './FoodcardList.css'

const FoodcardList = () => {
    return (
        <div className='booklist'>
            <Foodcard type="Korean" img="korean.png" />
            <Foodcard type="Burgers" img="burgers.png" />
            <Foodcard type="Pizza" img="pizza.png" />
            <Foodcard type="Sushi" img="sushi.png" />
            <Foodcard type="Desserts" img="desserts.png" />
            <Foodcard type="Mexican" img="mexican.png" />
            <Foodcard type="Healthy" img="healthy.png" />
            <Foodcard type="Breakfast" img="breakfast.png" />
            <Foodcard type="Chinese" img="chinese.png" />
        </div>
    )
}

export default FoodcardList
