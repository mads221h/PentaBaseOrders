import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../components/api-authorization/AuthorizeService'

export class Templates extends Component {
    displayname = Templates.name
    constructor(props) {
        super(props);
        this.state = { SavedOrderList: [], loading: true };

        //fetch('api/SampleData/GetTemplateList')
        //    .then(response => response.json())
        //    .then(data => {
        //        this.setState({ SavedOrderList: data, loading: false });
        //    });
    }

    componentDidMount(){
        this.populateData();
}

    static renderSavedOrderlistTable(SavedOrderList) {
        let _savedOrderList;

        _savedOrderList =

            SavedOrderList.map(SavedOrder =>
            <tr key={SavedOrder.id}>
                <td>{SavedOrder.title}</td>
                <td>{SavedOrder.supplier}</td>
                <td>{SavedOrder.description}</td>
                <td>{SavedOrder.price}</td>
                <td>
                    <Link to={`/Adminpage/CreateOrder/${SavedOrder.id}`} key={SavedOrder.id}
                    >Brug skabelon</Link>
                </td>
                </tr>
            )


        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Leverandør</th>
                        <th>Noter</th>
                        <th>Pris</th>
                    </tr>
                </thead>
                <tbody>
                    {_savedOrderList}
                </tbody>
            </table>
        );
    }
    async populateData() {
        const token = await authService.getAccessToken();
        const response = await fetch('api/SampleData/GetTemplateList', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ SavedOrderList: data, loading: false });
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Templates.renderSavedOrderlistTable(this.state.SavedOrderList);

        return (
            <div>
                <h1>Skabeloner</h1>
                {contents}
            </div>
        );
    }
}
