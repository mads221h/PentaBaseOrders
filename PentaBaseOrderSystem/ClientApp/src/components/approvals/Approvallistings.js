import React from 'react';
import ApprovalItem from './ApprovalItem';



function ApprovalListing(props) {
    
    
    
    if (!props.listings) {
        return null
    }
    console.log(props.userName)
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Dato</th>
                    <th>Vare type</th>
                    <th>Pris</th>
                    <th>Leverandoer</th>
                    <th>Godkendelse</th>
                    <th>Betaling</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.listings.map(listing =>
                    <ApprovalItem key={listing.orderId} listing={listing} handleApproveOrder={props.handleApproveOrder} />
                )}
            </tbody>
        </table>
        )
}

export default ApprovalListing