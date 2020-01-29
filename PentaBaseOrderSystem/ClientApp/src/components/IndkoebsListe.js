import React, { Component } from 'react';
import Filter from './filter';
import Listings from "./Orderlistings";
import {
    OrderListProvider,
    OrderListConsumer
} from '../context/OrderListProvider'

export class IndkoebsListe extends Component {
    displayName = IndkoebsListe.name
  constructor(props) {
      super(props);
      this.state = { Indkoebsliste: []};
      
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
