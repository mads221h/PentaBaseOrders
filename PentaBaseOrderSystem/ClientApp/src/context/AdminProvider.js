import React from 'react';
import authService from '../components/api-authorization/AuthorizeService'


const DefaultState = {
    departmentList: [],
    wareList: [],
    supplierList: [],
    projectList: [],
    shipmentList: [],
    filter: {},
}
const AdminContext = React.createContext(DefaultState)


export const AdminConsumer = AdminContext.Consumer

export class AdminProvider extends React.Component {
    state = DefaultState

    componentDidMount() {
        this.populateSupplier();
        this.populateDepartment();
        this.populateProject();
        this.populateWares();
        this.populateShipment();
    }

    async populateProject() {
        const token = await authService.getAccessToken();
        const response = await fetch('api/SampleData/GetProjectList', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ projectList: data});
    }
    async populateShipment() {
        const token = await authService.getAccessToken();
        const response = await fetch('api/SampleData/GetShipmentList', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ shipmentList: data });
    }
    async populateWares() {
        const token = await authService.getAccessToken();
        const response = await fetch('api/SampleData/GetWareList', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ wareList: data });
    }

    async populateSupplier() {
        const token = await authService.getAccessToken();
        const response = await fetch('api/SampleData/GetSupplierList', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ supplierList: data});
    }

    async populateDepartment() {
        const token = await authService.getAccessToken();
        const response = await fetch('api/SampleData/GetDepartmentList', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ departmentList: data});
    }
    
    updateFilter = filter => {
        this.setState({
            filter
        })
    }
    static getSupplierWares(wares, filter) {
        const { supplier, } = filter
        let result = wares
        if (supplier) {
            result = result.filter(item => item.supplierId == supplier)
            
        }
        return result
        
    }
    render() {
        const { children } = this.props
        const { projectList, filter, supplierList, departmentList, wareList, shipmentList, } = this.state
        const filteredWares = AdminProvider.getSupplierWares(
            wareList,
            filter
        )
        return (
            <AdminContext.Provider
                value={{
                    supplierList,
                    departmentList,
                    projectList,
                    shipmentList,
                    filteredWares,
                    updateFilter: this.updateFilter,
                }}
            >
                {children}
            </AdminContext.Provider>
        )
    }
}