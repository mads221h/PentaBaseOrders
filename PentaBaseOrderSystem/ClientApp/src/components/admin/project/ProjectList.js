import React, { useState, useEffect } from "react";
import ProjectListItem from "./ProjectListItem";

function ProjectList(props) {
    //const [projects, setProjects] = useState({ projectList: [] });
    //useEffect(() => {
    //    const fetchData = async () => {
    //        fetch('api/SampleData/GetProjectList')
    //            .then(response => response.json())
    //            .then(data => {
    //                setProjects({ projectList: data });

    //            });
    //    };
    //    fetchData();
    //}, []);
    //const handleDelete = (item) => {
    //    console.log(item)


    //    var json = JSON.stringify(item);
    //    fetch('api/SampleData/Delete', {
    //        method: 'DELETE',
    //        headers: { 'Content-Type': 'application/json' },
    //        body: json,
    //    });
        
    //}
    return (
        //<div></div>
        <table className='table'>
            
            <thead>
                <tr>
                    <th>Projekter</th>
                    <th>Projekt Ejer</th>
                </tr>
            </thead>
            <tbody>
                {props.projectList.map(item =>
                    <ProjectListItem key={item.projectId} item={item} />
                //<tr key={item.id}>
                //    <td>{item.title}</td>
                //    <td><button class="form-control" onClick={(e) => handleDelete(item)}>Delete</button></td>
                //</tr>
                )}
                </tbody>
        </table>
        )
}
export default ProjectList