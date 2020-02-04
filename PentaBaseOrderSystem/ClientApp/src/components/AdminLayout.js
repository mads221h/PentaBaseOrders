import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { AdminNav } from './AdminNav';

export class AdminLayout extends Component {
    displayName = AdminLayout.name

    render() {
        return (
            
            <div>

                        

                <Container>
                        {this.props.children}
                    </Container>
            </div>
                
        );
    }
}