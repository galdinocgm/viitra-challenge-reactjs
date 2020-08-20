import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api.js'
import { FoodSpecificsContainer, FoodSpecificsCard } from './styles.js'

import pizzaImg from './imgs/pizza.png'
import cookImg from './imgs/cook.png'
import goBack from './imgs/goback.png'

const FoodSpecifics = (props) => {

    const id = parseInt(props.match.params.number);

    const [food, setFood] = useState({});

    // Using the useEffect hook to update the food state after the component mounts.
    useEffect(() => {

        function getFoodById(foods){
            for(let food of foods){
                if(food.id === id){
                    return food;
                }
            }
        }

        async function fetchFood(){
            let foods = await api.get('/foods/').then(res => res.data);
            return getFoodById(foods);
        }

        async function updateFoodState(){
            let currentFood = await fetchFood();
            setFood(currentFood);
        }

        updateFoodState();
    } , []);

    return(
        <FoodSpecificsContainer>
            <Link to='/'>
                <img src={goBack} className="go-back-arrow" />
            </Link>
            <FoodSpecificsCard>
                <div className="img-top-container">
                    <img src={food.image} alt=""/>
                </div>
                <div className="middle-container">
                    <h1>{food.name}</h1>
                    <h2>
                        <img src={pizzaImg}/>
                        Quantidade: {food.quantity}
                    </h2>
                    <h2>
                        <img src={cookImg} />
                        Tempo para cozinhar: {food.timeToCook}
                    </h2>
                </div>
            </FoodSpecificsCard>
        </FoodSpecificsContainer>
    );
}

export default FoodSpecifics;

