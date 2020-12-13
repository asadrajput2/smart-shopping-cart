import React from 'react'

function Item({ item }) {
    return (
        <div className="col d-flex justify-content-center align-center">
            <div className="item-card card border-0 bg-light">
                <div className="card-body">
                    <div className="row">
                        <div className="col text-center item-name">
                            {item.product.name}
                        </div>

                        <div className="col item-weight">
                            {item.product.weight} g
                        </div>

                        <div className="col item-price">
                            <span className="text-secondary">Rs.</span> {item.product.price}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;