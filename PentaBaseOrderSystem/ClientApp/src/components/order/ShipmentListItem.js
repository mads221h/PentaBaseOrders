import React, { useState, Fragment } from 'react';



function ShipmentListItem(props) {

    return (
        <Fragment>
            {
                    (
                        <tr key={props.item.wareId}>
                            <td>{props.item.name}</td>
                            <td>{props.item.price} kr</td>
                            <td>{props.item.count}</td>
                        </tr>
                    )
            }
        </Fragment>
    )

}
export default ShipmentListItem