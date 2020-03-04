import React, { useState, Fragment, useEffect } from 'react';
import authService from '../../api-authorization/AuthorizeService';



function SupplierListItem(props) {

    const [itemState, setItemState] = useState( props.item );
    const [approvalState, setApprovalState] = useState(props.item.approval);
    //useEffect(() => {
    //    setApprovalState(props.item.approval);
    //}, [props]);

    const handleDelete = async(item) => {
        console.log(item)
        const token = await authService.getAccessToken();
        var json = JSON.stringify(item);
        fetch('api/SampleData/DeleteSupplier', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: json,
        });
       
        setItemState();
    }
    const handleApprove = (item) => {
        setApprovalState({ approval: true })
        
        props.handleApproveSupplier(item)
        
    }
    return (
        <Fragment>
            {
                itemState ?
                    (
                        <tr key={itemState.SupplierId}>
                            <td>{itemState.name}</td>
                            <td>{itemState.location}</td>
                            <td>{itemState.lastBoughtFrom}</td>
                            {
                                approvalState ?
                                    (
                                        <td style={{ backgroundColor: 'rgba(2, 255, 0, 0.6)' }} >Godkendt</td>
                                    )
                                    :
                                    (<td style={{ backgroundColor: 'rgba(255, 0, 0, 0.6)' }}>Ikke Godkendt</td>)
                            }{
                                approvalState ?
                                    (
                                        <td> </td>
                                    )
                                    :
                                    (
                                        <td><button class="form-control" onClick={(e) => handleApprove(itemState)}>Godkend</button></td>
                                    )
                            }
                            <td><button class="form-control" onClick={(e) => handleDelete(itemState)}>Delete</button></td>
                            
                        </tr>
                    )
                    :
                    (<td>Deleted </td>)
            }
            
            </Fragment>
    )

}
export default SupplierListItem