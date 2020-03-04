import React, { useState, Fragment } from 'react';
import authService from '../../api-authorization/AuthorizeService';



function DepartmentListItem(props) {

    const [itemState, setItemState] = useState( props.item );

    const handleDelete = async(item) => {
        console.log(item)
        const token = await authService.getAccessToken();

        var json = JSON.stringify(item);
        fetch('api/SampleData/DeleteDepartment', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
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
                            <td>{itemState.title}</td>
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