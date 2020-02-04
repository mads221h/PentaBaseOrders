import React, { Component, Fragment } from 'react';
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
                            <ProjectList projectList={projectList}/>

                            <h3>Opret nyt projekt</h3>
                            <CreateProject />
                        </div>
                    )
                }}
        </AdminConsumer>

            

    );
}
export default Project;