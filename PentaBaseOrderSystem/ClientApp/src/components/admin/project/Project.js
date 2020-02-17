﻿import React, { Component, Fragment } from 'react';
import ProjectList from './ProjectList';
import CreateProject from './CreateProject'
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

                            <h3>Overblik</h3>
                            

                            <h3>Opret nyt projekt</h3>
                            <CreateProject />

                            <Tabs defaultActiveKey="OverView">
                                <Tab eventKey="OverView" title="Overblik">
                                    <h3>Overblik</h3>
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