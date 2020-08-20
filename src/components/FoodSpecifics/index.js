import React, { useEffect, useState } from 'react'

import api from '../../services/api.js'

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
        <>           
            <h1>Hello World</h1>
        </>
    );
}

export default FoodSpecifics;

