import React, { Component } from 'react';
import { Route} from 'react-router';
import { AdminLayout } from '../components/AdminLayout';
import { CreateShoppingList } from '../components/admin/CreateOrders';
import Project from '../components/admin/project/Project';
import CreateSupplier from '../components/admin/CreateSupplier';
import CreateTemplate from '../components/admin/CreateTemplate';
import CreateDepartment from '../components/admin/CreateDepartment';
import { AdminProvider } from '../context/AdminProvider';

export class AdminPage extends Component {
    displayName = AdminPage.name
    constructor(props) {
        super(props);
        

    }

    render() {

        return (
            <AdminProvider>
            <AdminLayout>
                
                <Route path='/Admin/Ordre/:orderId?' component={CreateShoppingList} />
                <Route path='/Admin/Project' component={Project} />
                <Route path='/Admin/Leverandoer' component={CreateSupplier} />
                <Route path='/Admin/Skabelon' component={CreateTemplate} />
                <Route path='/Admin/Afdeling' component={CreateDepartment} />
                

            </AdminLayout>
            </AdminProvider>
        );
    }
}