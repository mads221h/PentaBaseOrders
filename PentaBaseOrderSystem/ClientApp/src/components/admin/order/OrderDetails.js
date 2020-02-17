import React, { useState,useEffect} from 'react';
import ShipmentList from './ShipmentList';
import { Fragment } from 'react';

function OrderDetails(props) {
    const [orderState, setOrderState] = useState(props.location.state.orderState);
    const [approvalState, setApprovalState] = useState(props.location.state.orderState.approval);
    const [paymentState, setPaymentState] = useState(props.location.state.orderState.payment);
    useEffect(() => {
        setPaymentState(props.location.state.orderState.payment);
        setApprovalState(props.location.state.orderState.approval);
        setOrderState(props.location.state.orderState);
    }, [props]);
    return (
        <Fragment>
            <h3>Din Order: {orderState.title}</h3>
            <label>Id:</label>
            <h4 class="form-control"> {orderState.orderId}</h4>
            <label>Projekt:</label>
            <h4 class="form-control"> {orderState.project}</h4>
            <label>Afdeling:</label>
            <h4 class="form-control"> {orderState.department}</h4>
            <label>Leverandør: </label>
            <h4 class="form-control">{orderState.supplier}</h4>
            <table class="table">
                <thead>
                    <tr>
                        <th>Godkendelse</th>
                        <th>Betaling</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                
                <tr>
            {approvalState ?
                    (<td style={{ backgroundColor: 'rgba(2, 255, 0, 0.6)' }} >Godkendt</td>)
                    :
                    (<td style={{ backgroundColor: 'rgba(255, 0, 0, 0.6)' }}>Ikke Godkendt</td>)
            }{paymentState ?
                    (<td> <p>Betalt</p></td>)
                    :
                    (<td><p>Mangler betaling</p></td>)
            }{paymentState ?
                    (<td> </td>)
                    :
                    (<td><button class="form-control" onClick={(e) => handlePayment(orderState)}>Betal</button></td>)
            }{approvalState ?
                    (<td> </td>)
                    :
                    (<td><button class="form-control" onClick={(e) => handleClick(orderState)}>Godkend</button></td>)
                    }
                    </tr>
                </tbody>
            </table>

            <h3>Vare liste:</h3>

            {orderState.shipments != null
                ? (<ShipmentList shipmentList={props.orderState} removeShipment={props.removeOneShipment} />)
                : (<p>Ingen vare</p>)
            }

        </Fragment>
    )
}
export default OrderDetails;