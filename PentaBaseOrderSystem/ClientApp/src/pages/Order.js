import React, { Component } from 'react';
import { Route } from 'react-router';
import { AdminLayout } from '../components/AdminLayout';
import { Order } from '../components/admin/order/Order';
import Project from '../components/admin/project/Project';
import Ware from '../components/admin/ware/Ware';
import Supplier from '../components/admin/supplier/Supplier';
import CreateTemplate from '../components/admin/CreateTemplate';
import Department from '../components/admin/department/Department';
import { AdminProvider } from '../context/AdminProvider';
import OrderDetails from '../components/order/OrderDetails';
import AuthorizeRoute from '../components/api-authorization/AuthorizeRoute';
import authService from '../components/api-authorization/AuthorizeService';

export class AdminPage extends Component {
    displayName = AdminPage.name
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            role: null
        };
    }
    componentDidMount() {
        this._subscription = authService.subscribe(() => this.populateState());
        this.populateState();
    }

    componentWillUnmount() {
        authService.unsubscribe(this._subscription);
    }
    async populateState() {
        const [isAuthenticated, user] = await Promise.all([authService.isAuthenticated(), authService.getUser()])
        this.setState({
            isAuthenticated,
            role: user && user.role
        });

    }
    render() {
        const role = this.state.role;
        return (
            <OrderProvider>


                 

                <AuthorizeRoute path='/order/OrderDetails' component={OrderDetails} />
                                

                    


            </OrderProvider>
        );
    }
}