import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ws_send_message, ws_connect, ws_disconnect } from '../../reducers/itemsSlice';
import Item from "./item"
import Total from "./total"
import CheckoutButton from './checkout';


// This is a demo page meant to demonstrate the backend working of products live update 
// mechanism
// This is not meant to be the final page




function Items() {

    const dispatch = useDispatch();
    const items = useSelector(state => state.itemsList.items);

    console.log("items: ", items.length);
    useEffect(() => {

        dispatch(ws_connect(`ws://${window.location.host}/ws/order/5/`));


        return () => {
            dispatch(ws_disconnect());
        }
    })

    return (
        <div className="asdf">
            {items.length ?
                <>
                    <div className="col d-flex justify-content-center align-center">
                        <div>
                            <h1 className="header-1">Shopping List</h1>
                            <p className="desc-p text-center">Scan to add more</p>
                        </div>
                    </div>
                    <br />
                    <ItemsList />
                    <Total />
                    <CheckoutButton />
                </> :
                <div className="col d-flex justify-content-center align-center">
                    <div><h1 className="header-1"><i className="fa fa-warn">No Items</i></h1>
                        <p className="desc-p text-center">Scan to add more</p>
                    </div>
                </div>
            }
        </div>
    );
}


const ItemsList = () => {

    const items = useSelector(state => state.itemsList.items);
    console.log(items)

    return (
        <>
            {
                items.map((item) => (
                    <Item item={item} />
                ))
            }
        </>

    )

}

export default Items;
