import React from 'react';
import Item from './Item';



function Listings({ listings }) {



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
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {listings.map(listing =>
                    <Item listing={listing} />
                )}
            </tbody>
        </table>
    )
}

export default Listings