﻿import React, { useState, useEffect } from "react";
import DepartmentListItem from "./DepartmentListItem";

function DepartmentList(props) {
    return (
        <table className='table'>
            
            <thead>
                <tr>
                    <th>Departments</th>
                    <th>Department Leader</th>
                </tr>
            </thead>
            <tbody>
                {props.departmentList.map(item =>
                    <DepartmentListItem key={item.departmentId} item={item} />
                //<tr key={item.id}>
                //    <td>{item.title}</td>
                //    <td><button class="form-control" onClick={(e) => handleDelete(item)}>Delete</button></td>
                //</tr>
                )}
                </tbody>
        </table>
        )
}
export default DepartmentList