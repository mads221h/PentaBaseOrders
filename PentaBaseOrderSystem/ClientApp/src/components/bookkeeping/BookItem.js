import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function BookItem({ listing }) {
    const [paymentState, setPaymentState] = useState(listing.payment);
    useEffect(() => {
        setPaymentState(listing.payment);
    }, [listing]);
    
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
                listing.approval ?
                                (
                                    <td style={{ backgroundColor: 'rgba(2, 255, 0, 0.6)' }} >Godkendt</td>
                                )
                                :
                                (<td style={{ backgroundColor: 'rgba(255, 0, 0, 0.6)' }}>Ikke Godkendt</td>)
            }{
                paymentState ?
                                (
                                    <td> <p>Betalt</p></td>)
                                :
                                (
                                    <td><p>Mangler betaling</p></td>
                                )
            }{
                paymentState ?
                                (
                                    <td> </td>)
                                :
                                (
                                    <td>
                                        <button className="form-control" onClick={(e) => handlePayment(listing)}>Betal</button>
                                    </td>
                                )
            }
            <td><Link to={{
                pathname: '/OrderDetails',
                state: { orderState: listing }
            }}>Detaljer</Link></td>
        </tr>
        )
                
}
export default BookItem