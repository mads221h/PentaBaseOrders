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
            <div class="form-group">
                    <label>
                        Title: {props.orderState.title}
                    
                        </label>

                <input type="text"
                    name="title"
                        value={props.orderState.title}
                    class="form-control"
                    required
                        onChange={props.handleOrderChange}
                />
            </div>
            <div class="form-group">
                <label>
                    Leverandør:
                        </label>
                    <select class="form-control" name="supplier" value={props.orderState.supplier} required onChange={props.handleOrderChange}>
                    {
                            props.orderState.supplier > 0 ?
                                (<option value={props.orderState.supplier}>{props.orderState.supplier}</option>)
                            :
                            (<option>Vælg Leverandør</option>)
                    }
                    
                    {props.supplierList.map(supplier =>
                        <option key={supplier.id} value={supplier.name} >{supplier.name}</option>
                    )}
                </select>
            </div>
            <div class="form-group">
                <label>
                    Projekt:
                </label>
                    <select class="form-control" name="project" value={props.orderState.project} onChange={props.handleOrderChange} required>
                    <option>Vælg Projekt</option>
                    {props.projectList.map(project =>
                        <option key={project.id} value={project.title} >{project.title}</option>

                    )}
                </select>
            </div>
            <div class="form-group">
                <label>
                    Afdeling:
                </label>
                    <select class="form-control" name="department" value={props.orderState.department} onChange={props.handleOrderChange} required>
                    <option>Vælg Afdeling</option>
                    {props.departmentList.map(department =>
                        <option key={department.id} value={department.title} >{department.title}</option>
                    )}
                </select>
            </div>
            </form>

        </Fragment>
    );
}
export default CreateOrder;