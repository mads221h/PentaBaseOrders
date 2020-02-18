import React, { useState, Fragment } from 'react';



function DepartmentListItem(props) {

    const [itemState, setItemState] = useState( props.item );

    const handleDelete = (item) => {
        console.log(item)


        var json = JSON.stringify(item);
        fetch('api/SampleData/Delete', {
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
                        <tr key={itemState.DepartmentId}>
                            <td>{itemState.name}</td>
                            <td>{itemState.leader}</td>
                            <td><button class="form-control" onClick={(e) => handleDelete(itemState)}>Delete</button></td>
                        </tr>
                    )
                    :
                    (<td>Deleted </td>)
            }
            
            </Fragment>
    )

}
export default DepartmentListItem