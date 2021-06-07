import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../storeReducers'


const Add = () => {


    const dispatch = useDispatch()


    const addMore = event => {
        event.preventDefault()
        dispatch(add("French fries big"))
    }
    return (
        <div>
            <button className="btn btn-success" onClick={addMore}>Add more</button>
        </div>
    )
}

export default Add