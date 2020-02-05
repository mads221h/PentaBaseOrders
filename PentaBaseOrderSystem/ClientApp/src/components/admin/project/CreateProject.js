import React, { Component, Fragment } from 'react';



function CreateProject() {

    function handleSubmit(event) {
        console.log('test')
        event.preventDefault();
        const data = new FormData(event.target);
        var object = {};
        data.forEach(function (value, key) {
            object[key] = value;
        });
        var json = JSON.stringify(object);
        fetch('api/SampleData/CreateProject', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: json,
        });
        alert("Dit Projekt er blevet oprettet");
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                
                <div classname="form-group">

                    <label>
                        Projekt Title
                </label>

                    <input type="text" name="Title" class="form-control" required />
                </div>

                <div class="form-group">
                    <label>
                        Projekt Ejer
                        </label>
                    <input type="text" name="Owner" class="form-control" required />
                </div>
                <input type="submit" class="btn btn-primary" value="Submit" />
            </form>
            
        </Fragment>
    );
}
export default CreateProject;