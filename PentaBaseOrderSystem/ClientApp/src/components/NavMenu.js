import React, { Component } from 'react';
import {
    Collapse, Container, Navbar, NavbarBrand, NavbarToggler,
    NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Dropdown } from 'bootstrap';
import { LoginMenu } from './api-authorization/LoginMenu';
import './NavMenu.css';
import authService from './api-authorization/AuthorizeService';
import { Fragment } from 'react';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
        collapsed: true,
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

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

    render() {
        const role = this.state.role;
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">PentaBaseOrderSystem</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/Oversigt">Oversigt</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/Ordre">Opret Ordre</NavLink>
                            </NavItem>
                            {
                                role && role.includes("admin") ?
                                    <Fragment>
                            
                                       <NavItem>
                                            <NavLink tag={Link} className="text-dark" to="/Godkendelser">Godkendelser</NavLink>
                                        </NavItem>
                                    
                            <UncontrolledDropdown>
                                <DropdownToggle nav caret>
                                        Admin
                                  </DropdownToggle>

                                <DropdownMenu>
                                    <DropdownItem>
                                        <NavLink tag={Link} className="text-dark" to="/Admin/Afdeling">Afdeling</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink tag={Link} className="text-dark" to="/Admin/vare">Vare</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink tag={Link} className="text-dark" to="/Admin/Skabelon">Skabelon</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink tag={Link} className="text-dark" to="/Admin/Leverandoer">Leverandør</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink tag={Link} className="text-dark" to="/Admin/Project">Projekt</NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </Fragment>
                                    : null}
                            {
                                role && role.includes("bookkeeping") ?
                                        <NavItem>
                                            <NavLink tag={Link} className="text-dark" to="/Bookkeeping">Bookkeeping</NavLink>
                                        </NavItem>
                                    : null
                            }
                
                <LoginMenu>
                </LoginMenu>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
