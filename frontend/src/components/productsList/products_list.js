import React, { useEffect } from 'react'
import Product from './product'
import { connect } from 'react-redux'
import { getProductList } from '../../reducers/productsListSlice'

function UnconnectedProductsList({ product_list, getProductList }) {

    console.log(product_list)

    useEffect(() => {
        getProductList();
    }, [products_list])

    const products_list = product_list.map(product => (
        <li key={product.id}>
            <Product product={product} />
        </li>
    ))

    return (
        <div className="products-list">
            {products_list}
        </div>
    )

}

function selector(state) {
    return { product_list: state.products.product_list }
}

const ProductsList = connect(selector, { getProductList })(UnconnectedProductsList);

export default ProductsList;