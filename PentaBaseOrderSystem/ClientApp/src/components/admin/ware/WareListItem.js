import React, { useState, Fragment } from 'react';



function WareListItem(props) {

    const [itemState, setItemState] = useState(props.item);
    const handleDelete = (item) => {
        console.log(item)


        var json = JSON.stringify(item);
        fetch('api/SampleData/DeleteWare', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: json,
        });
        setItemState();
    }
    return (
        <Fragment>
            {
                itemState ?
                    (
                        <tr key={itemState.wareId}>
                            <td>{itemState.name}</td>
                            <td>{itemState.price}</td>
                            
                            <td><button className="form-control" onClick={(e) => handleDelete(itemState)}>Delete</button></td>
                        </tr>
                    )
                    :
                    (<td>Deleted </td>)
            }
            
            </Fragment>
    )

}
export default WareListItem