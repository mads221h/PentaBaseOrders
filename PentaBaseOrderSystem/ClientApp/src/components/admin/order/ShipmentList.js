import React, { useState, useEffect } from "react";
import ShipmentListItem from "./ShipmentListItem";

function ShipmentList(props) {
    return (
        
        <table className='table'>

            <thead>
                <tr>
                    <th>Projekter</th>
                </tr>
            </thead>
            {props.shipmentList.map(item =>
                <ShipmentListItem item={item} />
                
            )}
        </table>
    )
}
export default ShipmentList