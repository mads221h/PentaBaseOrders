import React, { Component, Fragment } from 'react';
import CreateSupplier from './CreateSupplier'
import SupplierList from './SupplierList'
import { Tabs, Tab } from 'react-bootstrap';
import { AdminConsumer } from '../../../context/AdminProvider';
AdminConsumer



function Supplier() {

    

    return (
        
        <AdminConsumer>



                {function (value) {
                    const { supplierList } = value
                    return (
                        <div classname='Container'>
                            <h1>Supplier</h1>
                            <Tabs defaultActiveKey="OverView">
                                <Tab eventKey="OverView" title="Overblik1">
                                    <h3>Overblik</h3>
                                    <SupplierList supplierList={supplierList} />
                                </Tab>

                                <Tab eventKey="Opret" title="Opret">
                                    <h3>Create new Supplier</h3>
                                    <CreateSupplier />
                                </Tab>
                            </Tabs>
                        </div>
                    )
                }}
        </AdminConsumer>

            

    );
}
export default Supplier;