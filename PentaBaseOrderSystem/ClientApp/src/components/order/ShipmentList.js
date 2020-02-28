﻿import React, { useState, useEffect, useReducer } from "react";
import ShipmentListItem from "./ShipmentListItem";

function ShipmentList(props) {

    const [priceState, setPriceState] = useState(0);
    const reducer = function (tally, item) {
        return tally + (item.price * item.count)
    }
    const price = props.shipmentList.reduce(reducer, 0)

    const priceReducer = (state, action) => {
        switch (action.type) {
            case 'Add item':
                return {
                    state: state + action.item.price,
                };
            case 'Remove item':
                return {
                    state: state - action.item.price,
                };
            default:
                throw new Error();
        }
        }
    return (
        
        <table className='table'>

            <thead>
                <tr>
                    <th>Valgte vare:</th>
                    <th>Pris</th>
                    <th> Antal</th>
                </tr>
            </thead>
            {props.shipmentList.map(item =>
                <ShipmentListItem item={item} />,
                
            )}
            <h4> Total Pris: {price} </h4>
        </table>
    )
}
export default ShipmentList