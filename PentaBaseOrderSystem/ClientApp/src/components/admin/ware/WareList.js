import React, { useState, useEffect } from "react";
import WareListItem from "./WareListItem";

function WareList(props) {

    return (

        <table className='table'>
            
            <thead>
                <tr>
                    <th>Varer</th>
                </tr>
            </thead>
            {props.wareList.map(item =>
                <WareListItem item={item} />
            )}
        </table>
        )
}
export default WareList