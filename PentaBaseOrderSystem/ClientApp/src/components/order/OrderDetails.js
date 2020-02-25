import React, { useState,useEffect} from 'react';
import ShipmentList from './ShipmentList';
import { Fragment } from 'react';
import authService from '../api-authorization/AuthorizeService'

function OrderDetails(props) {
    const [orderState, setOrderState] = useState(props.location.state.orderState);
    const [approvalState, setApprovalState] = useState(props.location.state.orderState.approval);
    const [paymentState, setPaymentState] = useState(props.location.state.orderState.payment);
    useEffect(() => {
        setPaymentState(props.location.state.orderState.payment);
        setApprovalState(props.location.state.orderState.approval);
        getOrder(props.location.state.orderState.orderId)
    }, [props]);

    async function getOrder(orderId){
        const token = await authService.getAccessToken();
        const response = await fetch(`api/SampleData/GetOrder/${orderId}`, {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` },
        });
        const data = await response.json();
        setOrderState(data);
    }
    return (
        
        <Fragment>
            <form >
                <label>Id:</label>
                <h4 class="form-control"> {orderState.orderId}</h4>
                <label>Title:</label>
                <input name="Title" disabled value={orderState.title} class="form-control" />
                <label>Projekt:</label>
                <input name="Project" disabled value={orderState.project} class="form-control" />
                <label>Afdeling:</label>
                <input name="Department" disabled value={orderState.department} class="form-control" />
                <label>Leverandør: </label>
                <input name="Supplier" disabled value={orderState.supplierName} class="form-control" />
            </form>
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
                ? (<ShipmentList shipmentList={orderState.shipments} />)
                : (<p>Ingen vare</p>)
            }

                </Fragment>
            
                    
    )
}
export default OrderDetails;