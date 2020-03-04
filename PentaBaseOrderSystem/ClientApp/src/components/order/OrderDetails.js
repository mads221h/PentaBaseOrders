import React, { useState,useEffect} from 'react';
import ShipmentList from './ShipmentList';
import { Fragment } from 'react';
import authService from '../api-authorization/AuthorizeService'

function OrderDetails(props) {
    const [orderState, setOrderState] = useState(props.location.state.orderState);
    const [approvalState, setApprovalState] = useState(props.location.state.orderState.approval);
    const [paymentState, setPaymentState] = useState(props.location.state.orderState.payment);
    const [auth, setAuth] = useState({ isAuthenticated: null, role: null, name: null });
    
    
    useEffect(() => {
        
        const sub = authService.subscribe(() => handleAuth());
        handleAuth();

        setPaymentState(props.location.state.orderState.payment);
        setApprovalState(props.location.state.orderState.approval);
        getOrder(props.location.state.orderState.orderId)

        return function cleaup() {
            authService.unsubscribe(sub);
        }
    }, [props]);

    async function handleAuth() {
        const [isAuthenticated, user] = await Promise.all([authService.isAuthenticated(), authService.getUser()])
        setAuth({
            isAuthenticated: isAuthenticated,
            role: user && user.role,
            name: user && user.name,
        });

    }
    async function getOrder(orderId){
        const token = await authService.getAccessToken();
        const response = await fetch(`api/SampleData/GetOrder/${orderId}`, {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` },
        });
        const data = await response.json();
        setOrderState(data);
    }
    const handlePayment = (listing) => {
        console.log(listing)

        setPaymentState({ payment: true })
        var json = JSON.stringify(listing);
        fetch('api/SampleData/Payment', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: json,
        });
    }
    const handleApproveOrder = async () => {
        var object = { orderId: orderState.orderId, approvedBy: auth.name }
        const token = await authService.getAccessToken();     
        setApprovalState({ approval: true });
        var json = JSON.stringify(object);
        await fetch('api/SampleData/Approval', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: json,
        })
    }

    const roles = auth.role;
    return (
        <Fragment>
            <form >
                <label>Id:</label>
                <h4> {orderState.orderId}</h4>
                <label>Title:</label>
                <input name="Title" disabled value={orderState.title} className="form-control" />
                <label>Projekt:</label>
                <input name="Project" disabled value={orderState.project} className="form-control" />
                <label>Afdeling:</label>
                <input name="Department" disabled value={orderState.department} className="form-control" />
                <label>Leverandør: </label>
                <input name="Supplier" disabled value={orderState.supplierName} className="form-control" />
                <label>Godkendt af: </label>
                <input name="ApprovedBy" disabled value={orderState.approvedBy} placeholder="Ikke godkendt"className="form-control" />
            </form>
            <h3>Vare liste:</h3>

            {orderState.shipments != null
                ? (<ShipmentList shipmentList={orderState.shipments} />)
                : (<p>Ingen vare</p>)
            }
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
                        }

                        {
                            
                            roles && roles.includes("bookkeeping") ? (
                                paymentState ?
                                (<td> </td>)
                                 :
                                    (<td><button class="form-control" onClick={(e) => handlePayment(orderState)}>Betal</button></td>)
                                ) : (<td></td>)
                           
                        }{
                            roles && roles.includes("admin") ? (
                            approvalState ?
                            (<td> </td>)
                            :
                                    (<td><button class="form-control" onClick={(e) => handleApproveOrder()}>Godkend</button></td>)
                            ) : (<td></td>)
                        }

                    </tr>
                </tbody>
            </table>
                </Fragment>
            
                    
    )
}
export default OrderDetails;