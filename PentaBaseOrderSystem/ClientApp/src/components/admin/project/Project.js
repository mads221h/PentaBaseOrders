import React, { Component, Fragment } from 'react';
import ProjectList from './ProjectList';
import CreateProject from './CreateProject'
import { Tabs, Tab } from 'react-bootstrap';
import { AdminConsumer } from '../../../context/AdminProvider';
AdminConsumer



function Project() {

    

    return (
        
        <AdminConsumer>



                {function (value) {
                    const { projectList } = value
                    return (
                        <div className='Container'>
                            <h1>Projeker</h1>
                            <Tabs defaultActiveKey="OverView">
                                <Tab eventKey="OverView" title="Overblik">
                                    
                                    <ProjectList projectList={projectList} />
                                </Tab>
                                <Tab eventKey="Opret" title="Opret">
                                    
                                    <CreateProject />
                                </Tab>
                            </Tabs>
                        </div>
                    )
                }}
        </AdminConsumer>

            

    );
}
export default Project;