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
                const { supplierList, handleApproveSupplier } = value
                    return (
                        <div className='Container'>
                            <h1>Supplier</h1>
                            <Tabs defaultActiveKey="OverView">
                                <Tab eventKey="OverView" title="Overblik">

                                    <SupplierList supplierList={supplierList} handleApproveSupplier={handleApproveSupplier} />
                                </Tab>

                                <Tab eventKey="Opret" title="Opret">
                                    
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