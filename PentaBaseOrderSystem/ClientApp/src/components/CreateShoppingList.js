import React, { Component } from 'react';
import CreateOrder from './CreateOrder';

export class CreateShoppingList extends Component {
    displayName = CreateShoppingList.name
    constructor(props) {
        super(props);
        this.state = {
            SupplierList: [],
            ProjectList: [],
            DepartmentList: [],
            loading: true,
            Template: {
                Title: "",
                Price: 0,
                Supplier: "",
                Description: "",

            },
            test123: {title:"test"}

        }
        this.handleChange = this.handleChange.bind(this);
        
        if (this.props.match.params.orderId === undefined) {
            this.setState({ loading: false });
        }
        else {
            fetch(`api/SampleData/GetTemplate/${this.props.match.params.orderId}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({ Template: data, loading: false });

                });
        }
        fetch('api/SampleData/GetSupplierList')
            .then(response => response.json())
            .then(data => {
                this.setState({ SupplierList: data, loading: false });
                
            });
        fetch('api/SampleData/GetProjectList')
            .then(response => response.json())
            .then(data => {
                this.setState({ ProjectList: data, loading: false });

            });
        fetch('api/SampleData/GetDepartmentList')
            .then(response => response.json())
            .then(data => {
                this.setState({ DepartmentList: data, loading: false });

            });
        
       
    }
    handleChange(evt) {
        const value = evt.target.value;
       
        const Template = {
            ...this.state.Template,
            [evt.target.name]:  value
        }
        this.setState({
            Template
    });
}
    

    render() {
        




        function handleSubmit(event) { 
            event.preventDefault();
            const data = new FormData(event.target);
            var object = {};
            data.forEach(function (value, key) {
                key === 'Price' ? object[key] = parseInt(value)    
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
            <form className="commentForm"
                onSubmit={handleSubmit}
            >
                <label><h2>Opret din ordre her</h2></label>
                <div class="form-group">
                    <label>
                        Title:
                        
                    </label>

                    <input type="text"
                        name="Title"
                        value={this.state.Template.title}
                        class="form-control"
                        required
                        onChange={this.handleChange}
                    />
                </div>
                <div class="form-group">
                    <label>
                        Leverandør:
                        </label>
                    <select class="form-control" name="Supplier" required
                        onChange={this.handleChange}
                    >

                        <option value={this.state.Template.supplier}>{this.state.Template.supplier}</option>
                        {this.state.SupplierList.map(supplier =>
                            <option key={supplier.id} value={supplier.name} >{supplier.name}</option>
                            
                        )}
                        <option value="Leverandør1">Leverandør1</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>
                        Projekt:
                </label>
                    <select class="form-control" name="Projekt" required>
                        <option value="Projekt1">Projekt1</option>
                        {this.state.ProjectList.map(project =>
                            <option key={project.id} value={project.title} >{project.title}</option>
                            
                        )}
                    </select>
                </div>
                <div class="form-group">
                    <label>
                        Afdeling:
                </label>
                        <select class="form-control" name="Department" required>
                            {this.state.DepartmentList.map(department =>
                                <option key={department.id} value={department.title} >{department.title}</option>
                            )}
                            <option>test123</option>
                        </select>
                    
                </div>
                <div class="form-group">
                    <label>
                        Pris:
                        </label>

                    <input type="number" name="Price" value={this.state.Template.price} class="form-control" required
                        onChange={this.handleChange}
                    />

                </div>


                <input type="submit" class="btn btn-primary" value="Submit" />
            </form>
        );
            
         //let contents = this.state.loading
         //    ? <p><em>Loading...</em></p>
         //    : CreateShoppingList.renderOrderFrom(this.state.SupplierList, this.state.Template);

        //return (
        //    <div>
        //        <h1>Opret Ordre her</h1>
        //        <p>Her kan du oprette din ordre</p>
        //        <CreateOrder supplierList={this.state.SupplierList} template={this.state.Template} test123={this.state.test123} />
        //    </div>
            

        //);
    }
}