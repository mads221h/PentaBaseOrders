import React, { Component } from 'react';
import authService from '../../api-authorization/AuthorizeService';


function CreateDepartment() {

    async function handleSubmit(event) {
        console.log('test')
        event.preventDefault();
        const data = new FormData(event.target);
        var object = {};
        data.forEach(function (value, key) {
            object[key] = value;
        });
        var json = JSON.stringify(object);
        const token = await authService.getAccessToken();
        fetch('api/SampleData/CreateDepartment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,},
            body: json,
        });
        alert("Din afdeling er blevet oprettet");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label><h2>Opret din afdeling her</h2></label>
            <div className="form-group">
                <label>
                    Afdelings title
                </label>

                <input type="text" name="Title" className="form-control" required />
            </div>

            <div className="form-group">
                <label>
                    Afdelings leder
                        </label>
                <input type="text" name="Leader" className="form-control" required />
            </div>
            <div className="form-group">
                <label>
                    Afdelings lokation
                        </label>
                <input type="text" name="Location" className="form-control" required />
            </div>




            <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
    );
}
export default CreateDepartment;