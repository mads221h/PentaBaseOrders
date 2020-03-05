import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function ApprovalItem(props) {

    const [approvalState, setApprovalState] = useState(props.listing.approval);
    useEffect(() => {
        setApprovalState(props.listing.approval);
    }, [props]);

   
    const handleClick = (listing) => {
        setApprovalState({ approval: true })
        props.handleApproveOrder(listing)
        
    }

    return (
        <tr key={props.listing.orderId}>
            <td>{props.listing.date}</td>

            <td>{props.listing.title}</td>
            <td>{props.listing.price}</td>
            <td>{props.listing.supplier}</td>
            {
                approvalState ?
                    (
                        <td style={{ backgroundColor: 'rgba(2, 255, 0, 0.6)' }} >Godkendt</td>
                    )
                    :
                    (<td style={{ backgroundColor: 'rgba(255, 0, 0, 0.6)' }}>Ikke Godkendt</td>)
            }{
                props.listing.payment ?
                    (
                        <td> <p>Betalt</p></td>)
                    :
                    (
                        <td><p>Mangler betaling</p></td>
                    )
            }{
                approvalState ?
                    (
                        <td> </td>
                    )
                    :
                    (
                        <td><button className="form-control" onClick={(e) => handleClick(props.listing)}>Godkend</button></td>
                    )
            }
            <td><Link to={{
                pathname: '/OrderDetails',
                state: { orderState: props.listing },
            }}>Detaljer</Link></td>
        </tr>
    )

}
export default ApprovalItem