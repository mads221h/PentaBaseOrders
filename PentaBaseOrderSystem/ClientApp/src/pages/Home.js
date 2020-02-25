import React, { Component } from 'react';
import { Login } from '../components/api-authorization/Login'

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <h3>Welcome to PentaBase OrderSystem</h3>
      </div>
    );
  }
}
