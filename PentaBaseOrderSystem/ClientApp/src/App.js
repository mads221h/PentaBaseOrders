import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Templates } from './pages/Templates';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import authService from './components/api-authorization/AuthorizeService';

import './custom.css'
import { AdminPage } from './pages/AdminPage';
import { Overview } from './pages/Overview';
import { BookKeeping } from './pages/Bookkeeping';
import { Approvals } from './pages/Approvals';
import OrderDetails from './components/order/OrderDetails';
import { Order } from './components/admin/order/Order';

export default class App extends Component {
  static displayName = App.name;
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
        <Layout>
            {
                role && role.includes("bookkeeping") ?
                    <span>
                        <AuthorizeRoute path='/Bookkeeping' component={BookKeeping} />
                    </span>
                    : null
            }
            {
                role && role.includes("admin") ?
                    <span>
                        <AuthorizeRoute path='/Godkendelser' component={Approvals} />
                        <AuthorizeRoute path='/Admin' component={AdminPage} />
                    </span>
                    : null
            }
            <Route exact path='/' component={Home} />
            <AuthorizeRoute path='/Ordre' component={Order} />
            <AuthorizeRoute path='/OrderDetails' component={OrderDetails} />

            <AuthorizeRoute path='/Oversigt' component={Overview} />

            <AuthorizeRoute path='/counter' component={Counter} />
            <AuthorizeRoute path='/Skabeloner' component={Templates} />
            <AuthorizeRoute path='/fetch-data' component={FetchData} />
            
            

        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}
