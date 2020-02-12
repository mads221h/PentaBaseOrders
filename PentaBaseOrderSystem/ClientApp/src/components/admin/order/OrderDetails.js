import React from 'react';
import ShipmentList from './ShipmentList';
import { Fragment } from 'react';

function OrderDetails(props) {

    return (
        <Fragment>

            <h3>Din Order: {props.orderState.title}</h3>

            <h4 class="form-control">Projekt: {props.orderState.project}</h4>
            <h4 class="form-control">Afdeling: {props.orderState.department}</h4>
            <h4 class="form-control">Leverandør: {props.orderState.supplier}</h4>

            <ShipmentList shipmentList={props.orderState} removeShipment={props.removeOneShipment} />
        </Fragment>
        )
}
export default OrderDetails;