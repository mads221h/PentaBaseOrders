import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function ApprovalItem({ listing }) {

    const [approvalState, setApprovalState] = useState(listing.approval);

    useEffect(() => {
        setApprovalState(listing.approval);
    }, [listing]);

    const handleClick = (listing) => {
        console.log(listing)


        setApprovalState({ approval: true })
        var json = JSON.stringify(listing);
        fetch('api/SampleData/Approval', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: json,
        })
    }

    return (
        <tr key={listing.orderId}>
            <td>{listing.date}</td>

            <td>{listing.title}</td>
            <td>{listing.price}</td>
            <td>{listing.supplier}</td>
            {
                approvalState ?
                    (
                        <td style={{ backgroundColor: 'rgba(2, 255, 0, 0.6)' }} >Godkendt</td>
                    )
                    :
                    (<td style={{ backgroundColor: 'rgba(255, 0, 0, 0.6)' }}>Ikke Godkendt</td>)
            }{
                listing.payment ?
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
                        <td><button class="form-control" onClick={(e) => handleClick(listing)}>Godkend</button></td>
                    )
            }
            <td><Link to={{
                pathname: '/OrdreDetails',
                state: {orderState:listing}
            }}>Detaljer</Link></td>
        </tr>
    )

}
export default ApprovalItem