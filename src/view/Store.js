import React, { useState } from 'react'
import Cart from '../components/Store/Cart'

const Store = () => {
    var store = sessionStorage.getItem('cart');
    if (!store) { // check if an item is already registered
        store = []; // if not, we initiate an empty array
    } else {
        store = JSON.parse(store); // else parse whatever is in
    }

    const [state, setstate] = useState(store)
    
    const [stateTotal, setStateTotal] = useState(total)

    const addMore = food => {

        const newCart = state.map(index => {
            if (index.idFood === food.idFood) index.quantity++
            return index
        })
        sessionStorage.setItem('cart', JSON.stringify(newCart))
        setstate(newCart)
        setStateTotal(total)
    }
    const minus = food => {
        var count = 0;
        var temp = sessionStorage.getItem('cart');
        temp = JSON.parse(temp);
        temp.forEach(index => {
            if (index.idFood === food.idFood) {
                if (index.quantity <= 1) {
                    temp.splice(count, 1)
                }
                else {
                    index.quantity--
                }
            }
            count++
        })
        sessionStorage.setItem('cart', JSON.stringify(temp))
        setstate(temp)
        setStateTotal(total)
    }

    const remove = food => {
        const temp = state.filter(index => {
            return index.idFood !== food.idFood;
        })
        sessionStorage.setItem('cart', JSON.stringify(temp))        
        setstate(temp)
        setStateTotal(total)
    }
    function total  ()  {
        var temp = sessionStorage.getItem('cart');
        temp = JSON.parse(temp);
        var total=0
        if (state.length === 0){
            return 0
        }
        temp.forEach(index => {
            total += index.quantity * index.price
        })   
        return total
    }

    



    console.log(store)
    return (
        <div className="container">
            <h1 className='text-center text-danger'>Your cart</h1>
            <div className="row">
                {state.map(index => {
                    return <Cart key={index.idFood} props={index} add={addMore} minus={minus} remove={remove}  ></Cart>
                })}
            </div>
            <h2 className="text-danger">Total:{stateTotal}</h2>
        </div>
    )
}

export default Store
