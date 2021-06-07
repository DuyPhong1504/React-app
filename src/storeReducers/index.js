
import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import axios from 'axios'

const allFood = createSlice({
    name: 'allfood',
    initialState: {
        allFood: []
        // { idFood: "1", name: "French fries", description: null, image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fries_2.jpg", price: 20000 }

    },
    reducers: {
        add(state, action) {
            state.allFood.unshift({
                idFood: "2",
                name: action.payload,
                description: null, image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fries_2.jpg",
                price: 30000
            })
        },
        getAllFood(state,action){
            state.allFood=action.payload
        }

    }

})

const allFoodReducer = allFood.reducer

const store = configureStore({
    reducer: {
        allFoodReducer
    }
})

export const getFood = () => {
    const getFoodAsync = async dispatch => {
        try {
            const res = await axios.get(
                `http://localhost:8080/food/getall`,
                {
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }
            );
            dispatch(getAllFood(res.data))

        } catch (error) {
            console.log(error.message)
        }
    }
    return getFoodAsync
}

export const allFoodSelector = state => state.allFoodReducer.allFood


export const { add, getAllFood } = allFood.actions




export default store
