import React, { useEffect } from 'react'
//  import axios from 'axios'
import Items from '../components/dashboard/Items'
import CarouselComponent from '../components/dashboard/CarouselComponent'

import { useSelector,useDispatch } from 'react-redux'
import { allFoodSelector, getFood } from '../storeReducers'
import Add from '../components/Add'
const DashBoard = () => {
    /// get all food from reducers
    const allFood = useSelector(allFoodSelector)

     const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFood())
    },[dispatch])
    

    


    const addToCart = food => {
        var store = sessionStorage.getItem('cart');
        if (!store) { // check if an item is already registered
            store = []; // if not, we initiate an empty array
        } else {
            store = JSON.parse(store); // else parse whatever is in
        }
        var check = true
        store.forEach(index => {
            if (index.idFood === food.idFood) {
                check = false
                index.quantity++;
                sessionStorage.setItem('cart', JSON.stringify(store))
                console.log(sessionStorage.getItem("cart"))
            }
        })
        if (check) {
            store.push({ idFood: food.idFood, name: food.name, description: null, price: food.price, quantity: 1 })
            sessionStorage.setItem('cart', JSON.stringify(store))
            console.log(sessionStorage.getItem("cart"))
        }
    }


    return (
        <div className='container'>
            <CarouselComponent></CarouselComponent>
            <Add></Add>
            <add></add>
            <h1 class='text-center text-danger'>List of all food</h1>
            <div class="row">
                {allFood.map(index => {
                    return <Items key={index.idFood} props={index} add={addToCart} ></Items>
                })}


            </div>
        </div>
    )
}

export default DashBoard
