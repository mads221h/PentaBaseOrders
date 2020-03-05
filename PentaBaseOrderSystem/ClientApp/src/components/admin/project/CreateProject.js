import React, { Component, Fragment } from 'react';
import authService from '../../api-authorization/AuthorizeService';


function CreateProject() {

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
        fetch('api/SampleData/CreateProject', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, },
            body: json,
        });
        alert("Dit Projekt er blevet oprettet");
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                
                <div className="form-group">

                    <label>
                        Projekt Title
                </label>

                    <input type="text" name="Title" className="form-control" required />
                </div>

                <div className="form-group">
                    <label>
                        Projekt Ejer
                        </label>
                    <input type="text" name="Owner" className="form-control" required />
                </div>
                <input type="submit" className="btn btn-primary" value="Submit" />
            </form>
            
        </Fragment>
    );
}
export default CreateProject;