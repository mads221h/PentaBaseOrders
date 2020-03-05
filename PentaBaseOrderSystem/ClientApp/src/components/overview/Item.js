import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Item({ listing }) {

    const [approvalState] = useState({ approval: listing.approval });
    const [paymentState] = useState({ payment: listing.payment });


    return (
        <tr key={listing.orderId}>
            <td>{listing.date}</td>
            <td>{listing.orderId}</td>
            <td>{listing.title}</td>
            <td>{listing.price}</td>
            <td>{listing.supplierName}</td>
            {
                approvalState.approval ?
                    (
                        <td style={{ backgroundColor: 'rgba(2, 255, 0, 0.6)' }} >Godkendt</td>
                    )
                    :
                    (<td style={{ backgroundColor: 'rgba(255, 0, 0, 0.6)' }}>Ikke Godkendt</td>)
            }{
                paymentState.payment ?
                    (
                        <td> <p>Betalt</p></td>)
                    :
                    (
                        <td><p>Mangler betaling</p></td>
                    )
            }
            <td><Link to={{
                pathname: '/OrderDetails',
                state: { orderState: listing }
            }}>Detaljer</Link></td>
        </tr>

    )

}
export default Item