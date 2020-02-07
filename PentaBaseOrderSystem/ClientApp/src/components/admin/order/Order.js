import React, { Component, Fragment, useState } from 'react';
import CreateOrder from './CreateOrder'
import ShipmentList from './ShipmentList';
import WareList from './WareList';
import WareFilter from '../ware/WareFilter';
import { AdminConsumer } from '../../../context/AdminProvider';
import { Tabs, Tab } from 'react-bootstrap';
AdminConsumer

export class Order extends Component {
    displayName = Order.name

        //const [templateState, setTemplateState] = useState({
        //    title: "",
        //    price: 0,
        //    supplier: "",
        //})

        //const [shipmentListState, setShipmentListState] = useState([]);
        //const [shipmentState, setShipmentState] = useState([{ wareId: 0 }]);
        //const [orderState, setOrderState] = useState(
        //    {
        //        title: "",
        //        supplier: "",
        //        project: "",
        //        department: "",
        //        price: 0,
        //        shipments: [],
        //    }
        //)


        //if (props.match.params.orderId === undefined) {

        //}
        //else {
        //    fetch(`api/SampleData/GetTemplate/${this.props.match.params.orderId}`)
        //        .then(response => response.json())
        //        .then(data => {
        //            setTemplateState({ data });

        //        });
        //}
    

    render() {
        //const _template = this.state.template;
        //const _orderState = this.state.orderState;
        //const _shipmentListState = this.state.shipmentListState;
            return (
                <Fragment>
                    
                <AdminConsumer>
                    


                    {function (value) {
                        const { supplierList,
                            departmentList,
                            projectList,
                            filteredWares,
                            template,
                            orderState,
                            shipmentListState,
                            addShipment,
                            //shipmentList,
                            updateOrderState,
                            handleCreate,
                            updateFilter, } = value
                        return (
                            <div classname='Container'>

                                <h2 class="blue" >Opret Ordre</h2>
                                <Tabs defaultActiveKey="Info">
                                    <Tab eventKey="Info" title="Info">
                                        <CreateOrder
                                            supplierList={supplierList}
                                            projectList={projectList}
                                            departmentList={departmentList}
                                            filteredWares={filteredWares}
                                            updateFilter={updateFilter}
                                            template={template}
                                            orderState={orderState}
                                            updateOrderState={updateOrderState}
                                            
                                        />
                                    </Tab>
                                    <Tab eventKey="AddWares" title="tilføj vare">
                                        <WareFilter updateFilter={updateFilter} supplier={supplierList} />

                                        <WareList wareList={filteredWares}
                                            addShipment={addShipment}
                                        />
                                        <ShipmentList shipmentList={shipmentListState} />
                                    </Tab>
                                    <Tab eventKey="Confirm" title="Godkend og opret">

                                        <button class="form-control" onClick={handleCreate} > Opret Order</button>
                                    </Tab>
                                </Tabs>
                                
                            </div>
                        )
                    }}
                    </AdminConsumer>
                    </Fragment>


            );
        }
}