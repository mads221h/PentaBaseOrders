import React, { useState, useEffect } from "react";
import SupplierListItem from "./SupplierListItem";

function SupplierList(props) {
    return (
        <table className='table'>
            
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Last Bought From</th>
                </tr>
            </thead>
            <tbody>
                {props.supplierList.map(item =>
                    <SupplierListItem item={item} />
                //<tr key={item.id}>
                //    <td>{item.title}</td>
                //    <td><button class="form-control" onClick={(e) => handleDelete(item)}>Delete</button></td>
                //</tr>
                )}
                </tbody>
        </table>
        )
}
export default SupplierList