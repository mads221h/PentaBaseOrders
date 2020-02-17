import React from 'react';
import ShipmentList from './ShipmentList';
import { Fragment } from 'react';

function OrderConfirm(props) {

    return (
        <Fragment>

            <h3><b>Din Order:</b> {props.orderState.title}</h3>

            <h4 class="form-control"><b>Projekt:</b> {props.orderState.projectTitle}</h4>
            <h4 class="form-control"><b>Afdeling:</b> {props.orderState.departmentTitle}</h4>
            <h4 class="form-control"><b>Leverandør: </b>{props.orderState.supplierName}</h4>

            <ShipmentList shipmentList={props.orderState} removeShipment={props.removeOneShipment} />
        </Fragment>
        )
}
export default OrderConfirm;