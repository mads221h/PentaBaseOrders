import React from 'react';
import { useState } from 'react';


function CreateOrder(props) {

    const [templatevalue, settemplatevalue] = useState(
        {
            title: template.title,
            supplier: template.supplier,
            price: template.price,

        }
        
    );
    
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
        console.log('test')
        event.preventDefault();
        const data = new FormData(event.target);
        var object = {};
        data.forEach(function (value, key) {
            object[key] = value;
        });
        var json = JSON.stringify(object);
        fetch('api/SampleData/CreateOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: json,
        });
    }
    
    return (
        <form className="commentForm" onSubmit={handleSubmit}>
            <div class="form-group">
                <label>
                    Title: {template.title}
                    
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
                    
                    <option value={template.supplier}>{template.supplier}</option>
                    {supplierList.map(supplier =>
                        <option key={supplier.id} value={supplier.name} >{supplier.name}</option>
                    )}
                </select>
            </div>
            <div class="form-group">
                <label>
                    Projekt:
                </label>
                <select class="form-control" name="Projekt" required>
                    <option>Projekt 1</option>
                    <option>Projekt 2</option>
                    <option>Projekt 3</option>
                </select>
            </div>
            <div class="form-group">
                <label>
                    Afdeling:
                </label>
                <select class="form-control" name="Department" required>
                    <option>Department 1</option>
                    <option>Department 2</option>
                    <option>Department 3</option>
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