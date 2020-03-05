import React from 'react';

import { useState } from 'react';

import { Fragment } from 'react';


function CreateOrder(props) {

    const [templatevalue, settemplatevalue] = useState(props.template);
    //const [shipmentListState, setShipmentListState] = useState([]);
    const [orderState, setOrderState] = useState(props.orderState)
    //const addShipment = (item) => {
        
    //    setShipmentListState(shipmentListState.concat(item));
    //    setOrderState(orderState.shipments.concat({ wareId: item.wareId }));

    //}
    //const [title, setTitle] = useState({});
    //const [supplier, setSupplier] = useState({});
    //const [price, setPrice] = useState({ });

    //const handleChange = event => settemplatevalue(event.target.value);

    function handleChange(evt) {
        const value = evt.target.value;
        if (evt.target.name == "price") {
            setOrderState({
                ...orderState,
                [evt.target.name]: parseInt(value)
            });
        }
        else {
            setOrderState({
                ...orderState,
                [evt.target.name]: value
            });
        }
    }



    //function handleSubmit(event) {
    //    event.preventDefault();
    //    const data = new FormData(event.target);
    //    var object = {};
    //    data.forEach(function (value, key) {
    //        key === 'price' ? object[key] = parseInt(value)
    //            :
    //            object[key] = value;
    //    });
    //    var json = JSON.stringify(object);
    //    fetch('api/SampleData/CreateOrder', {
    //        method: 'POST',
    //        headers: { 'Content-Type': 'application/json' },
    //        body: json,
    //    }).then(response => response.json())
    //        .then(json => { console.log(json) })
            
        
    //    alert("Din Ordrer er blevet oprettet");
    //}
    return (
        <Fragment>
            <form className="commentForm"
                //onChange={() => props.updateOrderState(orderState)}
            >
            <div className="form-group">
                    <label>
                        Title: 
                    
                        </label>

                <input type="text"
                    name="title"
                        value={props.orderState.title}
                    className="form-control"
                    required
                        onChange={props.handleOrderChange}
                />
            </div>
            <div className="form-group">
                <label>
                    Leverandør:
                        </label>
                    <select className="form-control" name="supplierId" value={props.orderState.supplierId} required onChange={props.handleOrderChange}>
                        <option >Vælg Leverandør</option>
                    
                        {props.supplierList.map(supplier =>
                            <option key={supplier.supplierId} value={supplier.supplierId} >{supplier.name}</option>
                    )}
                </select>
            </div>
            <div className="form-group">
                <label>
                    Projekt:
                </label>
                    <select className="form-control" name="project" value={props.orderState.project.projectId} onChange={props.handleOrderChange} required>
                    <option>Vælg Projekt</option>
                        {props.projectList.map(project =>
                            <option key={project.projectId} value={project.title} >{project.title}</option>

                    )}
                </select>
            </div>
            <div className="form-group">
                <label>
                    Afdeling:
                </label>
                    <select className="form-control" name="department" value={props.orderState.department.projectId} onChange={props.handleOrderChange} required>
                    <option>Vælg Afdeling</option>
                        {props.departmentList.map(department =>
                            <option key={department.departmentId} value={department.title} >{department.title}</option>
                    )}
                </select>
            </div>
            </form>

        </Fragment>
    );
}
export default CreateOrder;