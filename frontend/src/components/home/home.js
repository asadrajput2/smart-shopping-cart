import React from 'react';
import { useEffect } from 'react';

export default function Home() {

    useEffect(() => {
        // get orders list
    })

    return (
        <div className="col d-flex h-100 justify-content-center align-self-center">
            <div>
                <h1 className="header-1">Welcome!</h1>
                <div className="checkout-btn">
                    <a href='/items' className="float-right btn btn-success rounded-0 btn-lg btn-block">
                        Start Shopping
                    </a>
                </div>
            </div>
        </div>
    )
}