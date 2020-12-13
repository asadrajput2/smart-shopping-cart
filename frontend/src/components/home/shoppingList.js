import React from 'react';


function ShoppingList({ order_name, items_list }) {
    return (
        <div className="card">
            <div className="card-head">
                {order_name}
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {items_list.map(item =>
                        <li className="list-group-item">
                            {item}
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}