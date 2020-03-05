import React, { Component } from 'react';
import Filter from '../components/filter';
import Listings from "../components/approvals/Approvallistings";
import {
    OrderListProvider,
    OrderListConsumer
} from '../context/OrderListProvider'
import authService from '../components/api-authorization/AuthorizeService';
export class Approvals extends Component {
    displayName = Approvals.name
    constructor(props) {
        super(props);
        this.state = {};

    }

   

    render() {
        return(
            <div>
                <h1>Godkendeler</h1>
                <OrderListProvider>
                    <OrderListConsumer>



                        {function (value) {
                            const { filteredListings, updateFilter, supplierList, handleApproveOrder } = value
                            return (
                                <div className='Container'>
                                    <Filter updateFilter={updateFilter} supplier={supplierList} />

                                    <Listings listings={filteredListings} handleApproveOrder={handleApproveOrder} />
                                </div>
                            )
                        }}
                    </OrderListConsumer>
                </OrderListProvider>
            </div>
        );
    }
}
