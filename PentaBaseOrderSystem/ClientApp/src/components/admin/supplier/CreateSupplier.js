import React, { Component } from 'react';
import authService from '../../api-authorization/AuthorizeService';
function CreateSupplier() {

    async function handleSubmit(event) {

        event.preventDefault();
        const data = new FormData(event.target);
        var object = {};
        data.forEach(function (value, key) {
            object[key] = value;
        });
        var json = JSON.stringify(object);
        const token = await authService.getAccessToken();
        fetch('api/SampleData/CreateSupplier', {
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${token}`,
            },
            body: json,
        });
        alert("Din Leverandør er blevet oprettet");
    }

            return (
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label>
                            Navn
                        </label>

                        <input type="text" name="Name" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label>
                            Location:
                        </label>

                        <input type="text" name="Location" class="form-control" required />

                    </div>
                    <div class="form-group">
                        <label>
                            Mail:
                        </label>
                        <input type="email" name="Email" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label>
                            Beskrivelse:
                        </label>
                        <input type="Textarea" name="Description" class="form-control" required />
                    </div>
                    


                    <input type="submit" class="btn btn-primary" value="Submit" />
                </form>
            );
        }
        export default CreateSupplier;