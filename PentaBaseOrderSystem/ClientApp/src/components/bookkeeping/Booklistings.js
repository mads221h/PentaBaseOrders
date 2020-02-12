import React from 'react';
import BookItem from './BookItem';



function BookListing({ listings }) {
    
    
    
    if (!listings) {
        return null
    }
    
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
                {listings.map(listing =>
                    <BookItem listing={listing}/>
                )}
            </tbody>
        </table>
        )
}

export default BookListing