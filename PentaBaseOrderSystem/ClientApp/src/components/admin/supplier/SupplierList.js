import React, { useState, useEffect } from "react";
import SupplierListItem from "./SupplierListItem";

function SupplierList(props) {
    return (
        <table className='table'>
            
            <thead>
                <tr>
                    <th>Supplier</th>
                </tr>
            </thead>
            <tbody>
                {props.SupplierList.map(item =>
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