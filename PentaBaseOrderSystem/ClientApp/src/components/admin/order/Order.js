﻿import React, { Component, Fragment, useState } from 'react';
import CreateOrder from './CreateOrder'
import ShipmentList from './ShipmentList';
import WareList from './WareList';
import WareFilter from '../ware/WareFilter';
import OrderConfirm from './OrderConfirm';
import { AdminConsumer, AdminProvider } from '../../../context/AdminProvider';
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
                    <AdminProvider>    
                <AdminConsumer>
                    


                    {function (value) {
                        const { supplierList,
                            departmentList,
                            projectList,
                            filteredWares,
                            template,
                            orderState,
                            RoleBaseSuppliers,
                            shipmentListState,
                            addShipment,
                            //shipmentList,
                            updateOrderState,
                            handleCreate,
                            removeShipment,
                            removeOneShipment,
                            handleOrderChange,
                            updateFilter, } = value
                        return (
                            <div className='Container'>
                               
                                <h2 className="blue" >Opret Ordre</h2>
                                <Tabs defaultActiveKey="Info">
                                    <Tab eventKey="Info" title="1: Indtast info">
                                        <CreateOrder
                                            supplierList={RoleBaseSuppliers}
                                            projectList={projectList}
                                            departmentList={departmentList}
                                            filteredWares={filteredWares}
                                            updateFilter={updateFilter}
                                            template={template}
                                            orderState={orderState}
                                            updateOrderState={updateOrderState}
                                            handleOrderChange={handleOrderChange}
                                            
                                        />
                                    </Tab>
                                    <Tab eventKey="AddWares" title="2: Tilføj vare">
                                        <WareList wareList={filteredWares}
                                            addShipment={addShipment}
                                            orderStateSupplier={orderState.supplier}
                                        />
                                        <ShipmentList shipmentList={orderState} removeShipment={removeOneShipment} />
                                    </Tab>
                                    <Tab eventKey="Confirm" title="3: Godkend og opret">
                                        <OrderConfirm orderState={orderState} removeShipment={removeOneShipment}/>

                                        <button className="form-control" onClick={handleCreate} > Opret Order</button>
                                    </Tab>
                                </Tabs>
                                
                            </div>
                        )
                    }}
                        </AdminConsumer>
                        </AdminProvider> 
                    </Fragment>


            );
        }
}