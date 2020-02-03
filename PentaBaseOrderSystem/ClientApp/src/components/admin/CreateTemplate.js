import React, { Component, useState } from 'react';



function CreateTemplate() {
    const [supplierList, setSupplierList] = useState([]);

    function handleSubmit(event) {
        console.log('test')
        event.preventDefault();
        const data = new FormData(event.target);
        var object = {};
        data.forEach(function (value, key) {
            object[key] = value;
        });
        var json = JSON.stringify(object);
        fetch('api/SampleData/CreateTemplate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: json,
        });
        alert("Din Skabelon er blevet oprettet");
    }
    fetch('api/SampleData/SupplierList')
        .then(response => response.json())
        .then(data => {
            setSupplierList(data);
            ;
        });

    return (
        <form onSubmit={handleSubmit}>
            <label><h2>Opret din skabelon her</h2></label>
            <div class="form-group">
                <label>
                    Projekt Title
                </label>

                <input type="text" name="Title" class="form-control" required />
            </div>
            <div class="form-group">
                <label>
                    Leverandør:
                        </label>
                <select class="form-control" name="supplier" required >

                    
                    {supplierList.map(supplier =>
                        <option value={supplier.name} >{supplier.name}</option>
                    )}
                </select>
            </div>
            <div class="form-group">
                <label>
                    Noter
                </label>

                <input type="text" name="Description" class="form-control" required />
            </div>

            <div class="form-group">
                <label>
                    Pris:
                        </label>

                <input type="number" name="price"  class="form-control" required
                    
                />

            </div>




            <input type="submit" class="btn btn-primary" value="Submit" />
        </form>
    );
}
export default CreateTemplate;