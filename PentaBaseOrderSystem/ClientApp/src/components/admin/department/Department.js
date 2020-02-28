import React, { Component, Fragment } from 'react';
import DepartmentList from './DepartmentList';
import CreateDepartment from './CreateDepartment'
import { Tabs, Tab } from 'react-bootstrap';
import { AdminConsumer } from '../../../context/AdminProvider';
AdminConsumer
function Department() {
    return (
        <AdminConsumer>
                {function (value) {
                const { departmentList } = value
                    return (
                        <div className='Container'>
                            <h1>Department</h1>
                            <Tabs defaultActiveKey="OverView">
                                <Tab eventKey="OverView" title="Overblik">
                                    <DepartmentList departmentList={departmentList} />
                                </Tab>
                                <Tab eventKey="Opret" title="Opret">
                                    <CreateDepartment />
                                </Tab>
                            </Tabs>
                        </div>
                    )
                }}
        </AdminConsumer>
    );
}
export default Department;