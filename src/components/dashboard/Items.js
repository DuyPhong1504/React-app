import React from 'react'



const Items = props => {
    const add=props.add
    var img = 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FEdit%2F2019-06-French-Chicken-Recipes%2FFrench-Chicken-Casserole-12-Edit'
    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3 py-4 border border-dark my-4">
            <img src={props.props.image}   style={{width: "100%"}} height={200} alt="123" />
            <p>id: {props.props.idFood}</p>
            <p>name:{props.props.name}</p>
            <p>description:{props.props.description}</p>
            <p>price:{props.props.price}$</p>
            <button className="btn btn-danger" onClick={add.bind(this,props.props)}>Add to cart</button>
           

        </div>
    )
}

export default Items
