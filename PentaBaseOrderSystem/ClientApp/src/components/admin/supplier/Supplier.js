import React, { Component, Fragment } from 'react';
import SupplierList from './SupplierList';
import CreateSupplier from './CreateSupplier'
import { AdminConsumer } from '../../../context/AdminProvider';
AdminConsumer



function Supplier() {

    

    return (
        
        <AdminConsumer>



                {function (value) {
                    const { SupplierList } = value
                    return (
                        <div classname='Container'>
                            <h1>Projeker</h1>

                            <h3>Overblik</h3>
                            

                            <h3>Opret nyt projekt</h3>
                            <CreateProject />

                            <Tabs defaultActiveKey="OverView">
                                <Tab eventKey="OverView" title="Overblik">
                                    <h3>Overblik</h3>
                                    <SupplierList SupplierList={SuplierList} />
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