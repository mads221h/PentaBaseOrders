import React, { useState } from 'react';



function Item({ listing }) {

    const [approvalState] = useState({ approval: listing.approval });
    const [paymentState] = useState({ payment: listing.payment });


    return (
        <tr key={listing.orderId}>
            <td>{listing.date}</td>

            <td>{listing.title}</td>
            <td>{listing.price}</td>
            <td>{listing.supplier}</td>
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
        </tr>
    )

}
export default Item