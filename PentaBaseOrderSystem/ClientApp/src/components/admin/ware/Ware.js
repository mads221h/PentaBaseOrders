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
                    <div className='Container'>
                        <h1>Varer</h1>
                        <Tabs defaultActiveKey="OverView">
                            <Tab eventKey="OverView" title="Overblik">
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