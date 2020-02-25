﻿import React, { Component } from 'react';



function CreateDepartment() {

    function handleSubmit(event) {
        console.log('test')
        event.preventDefault();
        const data = new FormData(event.target);
        var object = {};
        data.forEach(function (value, key) {
            object[key] = value;
        });
        var json = JSON.stringify(object);
        fetch('api/SampleData/CreateDepartment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
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

            <div class="form-group">
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