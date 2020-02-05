import React, { Component, Fragment } from 'react';
import WareList from './WareList';
import { AdminConsumer } from '../../../context/AdminProvider';
import CreateWare from './CreateWare';
import WareFilter from './WareFilter';
import { tabs, tab } from 'reactstrap';



function Project() {
    return (
        <AdminConsumer>
            {function (value) {
                const { filteredWares, supplierList, updateFilter } = value
                return (
                    <div classname='Container'>
                        <h1>Varer</h1>
                       
                                <h3>Overblik</h3>
                                <WareFilter updateFilter={updateFilter} supplier={supplierList} />
                                <WareList wareList={filteredWares} />
                            
                                <CreateWare supplierList={supplierList} />
                            
                        

                    </div>
                )
            }}
        </AdminConsumer>
    );
}
export default Project;