import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaList } from 'react-icons/fa';

export class AdminNav extends Component {
    displayName = AdminNav.name

    render() {
        return (


            <Nav>
                        
                        

                        <LinkContainer to={'/AdminPage/CreateOrder'}>
                            <NavItem>
                        <FaList /> Ordre
                        </NavItem>
                        </LinkContainer>
                <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/Oprettelser/OpretOrdre">Opret Ordre</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/Oprettelser/OpretOrdre">Opret Ordre</NavLink>
                </NavItem>
                        <LinkContainer to={'/Admin/Projekt'}>
                            <NavItem>
                                 Project
                        </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/Admin/Supplier'}>
                            <NavItem>
                                 Leverandør
                        </NavItem>
                </LinkContainer>
                <LinkContainer to={'/Admin/Template'}>
                    <NavItem>
                        skabelon
                        </NavItem>
                </LinkContainer>
                <LinkContainer to={'/Admin/Department'}>
                    <NavItem>
                         Afdeling
                        </NavItem>
                </LinkContainer>


                        
                        
                    </Nav>
                
        );
    }
}
