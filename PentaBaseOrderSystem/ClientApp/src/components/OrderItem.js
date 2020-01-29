import React, { useState } from 'react';



function OrderItem({ listing }) {    

    const [approvalState, setApprovalState] = useState({ approval: listing.approval });
    const [paymentState, setPaymentState] = useState({ payment: listing.payment });
    
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
    const handlePayment = (listing) => {
        console.log(listing)

        setPaymentState({ payment: true })
        var json = JSON.stringify(listing);
        fetch('api/SampleData/Payment', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: json,
        });
    }

    return(
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
            }{
                paymentState.payment ?
                                (
                                    <td> </td>)
                                :
                                (
                                    <td>
                                        <button class="form-control" onClick={(e) => handlePayment(listing)}>Betal</button>
                                    </td>
                                )
            }{
                approvalState.approval ?
                                (
                                    <td> </td>
                                )
                                :
                                (
                                    <td><button class="form-control" onClick={(e) => handleClick(listing)}>Godkend</button></td>
                                )
                        }
        </tr>
        )
                
}
export default OrderItem