import React, { Component } from 'react';
import { Route} from 'react-router';
import { AdminLayout } from '../components/AdminLayout';


export class AdminPage extends Component {
    displayName = AdminPage.name
    constructor(props) {
        super(props);
        

    }

    render() {

        return (
            <AdminLayout>
                
                

            </AdminLayout>
            
        );
    }
}