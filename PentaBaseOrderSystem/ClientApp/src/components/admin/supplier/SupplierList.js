import React, { useState, useEffect } from "react";
import SupplierListItem from "./SupplierListItem";

function SupplierList(props) {
    return (
        <table className='table'>
            
            <thead>
                <tr>
                    <th>Navn</th>
                    <th>Lokation</th>
                    <th>Sidst købt fra</th>
                    <th>Godkendelse</th>
                </tr>
            </thead>
            <tbody>
                {props.supplierList.map(item =>
                    <SupplierListItem key={item.supplierId} item={item} handleApproveSupplier={props.handleApproveSupplier} />
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