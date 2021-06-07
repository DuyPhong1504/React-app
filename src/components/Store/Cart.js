import React from 'react'

const Cart = props => {
    const add=props.add
    const minus=props.minus
    const remove=props.remove
    return (
        <div class="col-12 border border-dark text-center my-2">
            <p>id: {props.props.idFood}</p>
            <p>name:{props.props.name}</p>
            <p>description:{props.props.description}</p>
            <p>price:{props.props.price}$</p>
            <p>quantity:{props.props.quantity}</p>
            <button className="btn btn-success" onClick={add.bind(this,props.props)}>+</button>
            <button className="btn btn-success" onClick={minus.bind(this,props.props)}>-</button>
            <button className="btn btn-danger" onClick={remove.bind(this,props.props)}>Remove</button>
        </div>
    )
}

export default Cart
