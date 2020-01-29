import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { SavedOrders } from './components/SavedOrders';
import { CreateShoppingList } from './components/CreateShoppingList';
import CreateProjekt from './components/CreateProjekt';
import CreateSupplier from './components/CreateSupplier';
import CreateTemplate from './components/CreateTemplate';
import CreateDepartment from './components/CreateDepartment';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'
import { AdminPage } from './pages/AdminPage';
import { IndkoebsListe } from './components/IndkoebsListe';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/Oversigt' component={IndkoebsListe} />
            <Route path='/counter' component={Counter} />
            <Route path='/Skabeloner' component={SavedOrders} />
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
