import React, { useState, useEffect } from "react";
import WareListItem from "./WareListItem";

function WareList(props) {
    
    return (

        <table className='table'>

            <thead>
                <tr>
                    <th>Varer</th>
                    <th>Pris</th>
                </tr>


            </thead>
            <tbody>
            {props.wareList.map(item =>
                <WareListItem key={item.wareId} item={item} addShipment={props.addShipment} />
                )}
                </tbody>
        </table>
    )
}
export default WareList