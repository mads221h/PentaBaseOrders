import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Templates } from './pages/Templates';
import { CreateShoppingList } from './components/admin/CreateShoppingList';
import CreateProjekt from './components/admin/CreateProjekt';
import CreateSupplier from './components/admin/CreateSupplier';
import CreateTemplate from './components/admin/CreateTemplate';
import CreateDepartment from './components/admin/CreateDepartment';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'
import { AdminPage } from './pages/AdminPage';
import { Overview } from './pages/Overview';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/Oversigt' component={Overview} />
            <AuthorizeRoute path='/counter' component={Counter} />
            <AuthorizeRoute path='/Skabeloner' component={Templates} />
            <AuthorizeRoute path='/fetch-data' component={FetchData} />
            
            <Route path='/Oprettelser' component={AdminPage} />
            <Route path='/OpretOrdre/:orderId?' component={CreateShoppingList} />
            <Route path='/OpretProjekt' component={CreateProjekt} />
            <Route path='/OpretLeverandoer' component={CreateSupplier} />
            <Route path='/OpretSkabelon' component={CreateTemplate} />
            <Route path='/OpretAfdeling' component={CreateDepartment} />

        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}
