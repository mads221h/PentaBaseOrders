import React, { Component, Fragment } from 'react';
import CreateOrder from './CreateOrder'
import { AdminConsumer } from '../../../context/AdminProvider';
AdminConsumer



function Order() {



    return (

        <AdminConsumer>



            {function (value) {
                const { supplierList,
                    departmentList,
                    projectList,
                    filteredWares,
                    updateFilter, } = value
                return (
                    <div classname='Container'>
                        <h1>Ordre</h1>
                        <CreateOrder
                            supplierList={supplierList}
                            projectList={projectList}
                            departmentList={departmentList}
                            filteredWares={filteredWares}
                            updateFilter={updateFilter}
                        />
                        
                    </div>
                )
            }}
        </AdminConsumer>



    );
}
export default Order;