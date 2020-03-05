import React, { Component } from 'react';
import Filter from '../components/filter';
import Listings from "../components/bookkeeping/Booklistings";
import {
    OrderListProvider,
    OrderListConsumer
} from '../context/OrderListProvider'

export class BookKeeping extends Component {
    displayName = BookKeeping.name
    constructor(props) {
        super(props);
        this.state = { };

    }




    render() {

        return (
            <div>
                <h1>Bookkeeping</h1>
                <OrderListProvider>
                    <OrderListConsumer>



                        {function (value) {
                            const { filteredListings, updateFilter, supplierList } = value
                            return (
                                <div className='Container'>
                                    <Filter updateFilter={updateFilter} supplier={supplierList} />

                                    <Listings listings={filteredListings} />
                                </div>
                            )
                        }}
                    </OrderListConsumer>
                </OrderListProvider>
            </div>
        );
    }
}
