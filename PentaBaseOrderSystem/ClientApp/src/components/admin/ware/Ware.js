import React, { Component, Fragment } from 'react';
import WareList from './WareList';
import { AdminConsumer } from '../../../context/AdminProvider';
import CreateWare from './CreateWare';
import WareFilter from './WareFilter';
import { Tabs, Tab } from 'react-bootstrap';



function Project() {
    return (
        <AdminConsumer>
            {function (value) {
                const { filteredWares, supplierList, updateFilter } = value
                return (
                    <div classname='Container'>
                        <h1>Varer</h1>
                        <Tabs defaultActiveKey="OverView">
                            <Tab eventKey="OverView" title="Overblik">
                                <h3>Overblik</h3>
                                <WareFilter updateFilter={updateFilter} supplier={supplierList} />
                                <WareList wareList={filteredWares} />
                            </Tab>

                            <Tab eventKey="Opret" title="Opret">
                                <CreateWare supplierList={supplierList} />
                            </Tab>
                        </Tabs>

                    </div>
                )
            }}
        </AdminConsumer>
    );
}
export default Project;