import React, { Component } from 'react';
import Filter from '../components/filter';
import Listings from "../components/approvals/Approvallistings";
import {
    OrderListProvider,
    OrderListConsumer
} from '../context/OrderListProvider'

export class Approvals extends Component {
    displayName = Approvals.name
    constructor(props) {
        super(props);
        this.state = {};

    }




    render() {

        return (
            <div>
                <h1>Godkendeler</h1>
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
