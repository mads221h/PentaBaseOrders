import React, { useState, Fragment } from 'react';



function ShipmentListItem(props) {
    const handleDelete = (item) => {
        //props.removeShipment(item)
    }
    return (
        <Fragment>
            {
                
                    (
                        <tr key={props.item.wareId}>
                            <td>{props.item.name}</td>
                        <td>{props.item.price} kr</td>
                        <td>{props.item.count}</td>
                            <td><button class="form-control" onClick={(e) => handleDelete(props.item)}>Delete</button></td>
                        </tr>
                    )

            }
        </Fragment>
    )

}
export default ShipmentListItem