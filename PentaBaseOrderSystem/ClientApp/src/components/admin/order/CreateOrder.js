import React from 'react';
import { useState } from 'react';


function CreateOrder(props) {

    const [templatevalue, settemplatevalue] = useState( props.template );
    
    //const [title, setTitle] = useState({});
    //const [supplier, setSupplier] = useState({});
    //const [price, setPrice] = useState({ });

    //const handleChange = event => settemplatevalue(event.target.value);

    function handleChange(evt) {
        const value = evt.target.value;
        settemplatevalue({
            ...templatevalue,
            [evt.target.name]: value
        });
    }

 


    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        var object = {};
        data.forEach(function (value, key) {
            key === 'price' ? object[key] = parseInt(value)
                :
                object[key] = value;
        });
        var json = JSON.stringify(object);
        fetch('api/SampleData/CreateOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: json,
        });
        alert("Din Ordrer er blevet oprettet");
    }
    return (
        <form className="commentForm" onSubmit={handleSubmit}>
            <div class="form-group">
                <label>
                    Title: {props.template.title}
                    
                        </label>

                <input type="text"
                    name="title"
                    value={templatevalue.title}
                    class="form-control"
                    required
                    onChange={handleChange}
                />
            </div>
            <div class="form-group">
                <label>
                    Leverandør:
                        </label>
                <select class="form-control" name="supplier" required onChange={handleChange}>
                    {
                        props.template.supplier > 0 ?
                            (<option value={props.template.supplier}>{props.template.supplier}</option>)
                            :
                            (<option disabled>Vælg Leverandør</option>)
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
                <select class="form-control" name="project" required>
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
                <select class="form-control" name="department" required>
                    <option>Vælg Afdeling</option>
                    {props.departmentList.map(department =>
                        <option key={department.id} value={department.title} >{department.title}</option>
                    )}
                </select>
            </div>
            <div class="form-group">
                <label>
                    Pris:
                        </label>

                <input type="number" name="price" value={templatevalue.price} class="form-control" required
                    onChange={handleChange}
                />

            </div>


            <input type="submit" class="btn btn-primary" value="Submit" />
        </form>
    );
}
export default CreateOrder;