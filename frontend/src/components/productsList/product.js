import React from 'react'

function Product(props) {

    const { name, manufacturer, weight, price } = props.product

    return (
        <>
            <b>Name</b>: {name}
            <b>Manufacturer</b>: {manufacturer}
            <b>Weight</b>: {weight}
            <b>Price</b>: {price}
        </>
    )
}

export default Product;