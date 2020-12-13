import React from 'react';
import { useSelector } from 'react-redux';


export default function Total() {

    const total_weight = useSelector(state => state.itemsList.total_weight);
    const total_price = useSelector(state => state.itemsList.total_price);


    return (
        <div className="col d-flex justify-content-center align-center">
            <div className="total-card card bg-light border-0">
                <div className="card-body">
                    <div className="row">
                        <div className="col text-center total-name">
                            TOTAL
                        </div>

                        <div className="col total-weight">
                            {total_weight} g
                        </div>

                        <div className="col total-price">
                            <span className="text-secondary">Rs.</span> {total_price}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}