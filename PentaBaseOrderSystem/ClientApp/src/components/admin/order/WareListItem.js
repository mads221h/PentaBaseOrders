import React, { useState, Fragment } from 'react';



function WareListItem(props) {

    const [itemState, setItemState] = useState(props.item);
    const handleDelete = (item) => {
        
        setItemState();
    }
    return (
        <Fragment>
            {
                itemState ?
                    (
                        <tr>
                            <td>{itemState.name}</td>
                            <td>{itemState.price}</td>
                            <td><button class="form-control" onClick={() => props.addShipment(itemState)}>Add</button></td>
                        </tr>
                    )
                    :
                    (<td>Deleted </td>)
            }
            
            </Fragment>
    )

}
export default WareListItem