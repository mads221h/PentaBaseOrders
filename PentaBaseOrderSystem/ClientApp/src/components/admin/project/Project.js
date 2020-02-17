﻿import React, { Component, Fragment } from 'react';
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
                        <div classname='Container'>
                            <h1>Projeker</h1>
                            <Tabs defaultActiveKey="OverView">
                                <Tab eventKey="OverView" title="Overblik">
                                    <h3>Overblik</h3>
                                    <ProjectList projectList={projectList} />
                                </Tab>
                                <Tab eventKey="Opret" title="Opret">
                                    <h3>Opret nyt projekt</h3>
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