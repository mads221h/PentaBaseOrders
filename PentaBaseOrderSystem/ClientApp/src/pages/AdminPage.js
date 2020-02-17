import React, { Component } from 'react';
import { Route} from 'react-router';
import { AdminLayout } from '../components/AdminLayout';
import { Order }  from '../components/admin/order/Order';
import Project from '../components/admin/project/Project';
import Ware from '../components/admin/ware/Ware';
import CreateSupplier from '../components/admin/CreateSupplier';
import CreateTemplate from '../components/admin/CreateTemplate';
import CreateDepartment from '../components/admin/CreateDepartment';
import { AdminProvider } from '../context/AdminProvider';
import OrderDetails from '../components/admin/order/OrderDetails';

export class AdminPage extends Component {
    displayName = AdminPage.name
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <AdminProvider>
                <AdminLayout>
                    <Route path='/Admin/Ordre' component={Order} />
                    <Route path='/Admin/OrdreDetails' component={OrderDetails} />
                    <Route path='/Admin/Project' component={Project} />
                    <Route path='/Admin/vare' component={Ware} />
                    <Route path='/Admin/Leverandoer' component={CreateSupplier} />
                    <Route path='/Admin/Skabelon' component={CreateTemplate} />
                    <Route path='/Admin/Afdeling' component={CreateDepartment} />
                </AdminLayout>
            </AdminProvider>
        );
    }
}