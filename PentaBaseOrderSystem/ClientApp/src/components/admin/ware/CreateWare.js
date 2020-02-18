import React, { Component, Fragment } from 'react';

function CreateWare(props) {

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        var object = {};
        data.forEach(function (value, key) {
            if (key === 'SupplierId' || key === 'Price') {
                object[key] = parseInt(value)
            }
            else {
                object[key] = value;
            }
            //key === 'supplierId' ? object[key] = parseInt(value)
            //    :
            //    object[key] = value;
        });
        var json = JSON.stringify(object);
        fetch('api/SampleData/CreateWare', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: json,
        });
        alert("Din vare er blevet oprettet");
    }
    return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Vare navn:
                </label>
                    <input type="text" name="Name" className="form-control" required />
                </div>
                <div className="form-group">
                    <label>
                        Leverandør:
                        </label>
                    <select className="form-control" name="SupplierId" required>
                    {props.supplierList.map(supplier =>
                        <option key={supplier.supplierId} value={supplier.supplierId} >{supplier.name}</option>
                        )}
                    </select>
                </div>
                <div className="form-group">
                    <label>
                        Pris:
                        </label>
                    <input type="text" name="Price" className="form-control" required />
            </div>
            <div className="form-group">
                <label>
                    Vare info:
                </label>
                <input type="text" name="Info" className="form-control" required />
            </div>
                <input type="submit" className="btn btn-primary" value="Submit" />
            </form>
    );
}
export default CreateWare;