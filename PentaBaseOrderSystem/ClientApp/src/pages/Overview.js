import React, { Component } from 'react';
import Filter from '../components/filter';
import Listings from "../components/overview/Listings";
import {
    OrderListProvider,
    OrderListConsumer
} from '../context/OrderListProvider'

export class Overview extends Component {
    displayName = Overview.name
    constructor(props) {
        super(props);

    }




    render() {

        return (
            <div>
                <h1>Ordre Oversigt</h1>
                <OrderListProvider>
                    <OrderListConsumer>



                        {function (value) {
                            const { filteredListings, updateFilter, supplierList } = value
                            return (
                                <div classname='Container'>
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