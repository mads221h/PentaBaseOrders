import React, { Component, Fragment, useState } from 'react';
import CreateOrder from './CreateOrder'
import { AdminConsumer } from '../../../context/AdminProvider';
AdminConsumer



function Order(props) {
    const [templateState, setTemplateState] = useState({
        title: "",
        price: 0,
        supplier: "",
    })
    if (props.match.params.orderId === undefined) {
        
    }
    else {
        fetch(`api/SampleData/GetTemplate/${this.props.match.params.orderId}`)
            .then(response => response.json())
            .then(data => {
                setTemplateState({ data });

            });
    }


    return (

        <AdminConsumer>



            {function (value) {
                const { supplierList,
                    departmentList,
                    projectList,
                    filteredWares,
                    shipmentList,
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
                            template={templateState}
                            shipmentList={shipmentList}
                        />
                        
                    </div>
                )
            }}
        </AdminConsumer>



    );
}
export default Order;