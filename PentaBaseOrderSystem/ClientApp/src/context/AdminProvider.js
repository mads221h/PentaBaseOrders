import React from 'react';
import authService from '../components/api-authorization/AuthorizeService'


const DefaultState = {
    departmentList: [],
    wareList: [],
    supplierList: [],
    projectList: [],
    filter: {},
}
const AdminContext = React.createContext(DefaultState)


export const AdminConsumer = AdminContext.Consumer

export class AdminProvider extends React.Component {
    state = DefaultState

    componentDidMount() {
        //fetch('api/SampleData/GetOrderList')
        //    .then(res => res.json())
        //    .then(res => {
        //        this.setState({ orderList: res })
        //    })
        //fetch('api/SampleData/GetSupplierList')
        //    .then(response => response.json())
        //    .then(data => {
        //        this.setState({ supplierList: data })

        //    })
        this.populateSupplier();
        this.populateDepartment();
        this.populateProject();
        this.populateWares();
    }

    async populateProject() {
        const token = await authService.getAccessToken();
        const response = await fetch('api/SampleData/GetProjectList', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ projectList: data});
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
            result = result.filter(item => item.supplier.toLowerCase().startsWith(supplier))
            
        }
        return result
        
    }
    //static applyFilter(listings, filter) {
    //    const { priceFrom, supplier, sortOrder, dateFrom, dateTo } = filter

    //    let result = listings
    //    if (priceFrom) {
    //        const from = priceFrom
    //        result = result.filter(item => item.price >= from)
    //    }
    //    if (supplier) {
    //        result = result.filter(item => item.supplier.toLowerCase().startsWith(supplier))
    //    }
    //    if (sortOrder) {
    //        if (sortOrder === 'highestfirst') {
    //            result = result.sort((a, b) => b.price - a.price)
    //        }
    //        if (sortOrder === 'lowestfirst') {
    //            result = result.sort((a, b) => a.price - b.price)
    //        }
    //    }
    //    //Does array.filter work with Date?
    //    //Remember to change item.date type from string to date in API and adjust accordingly in the Orderlistings if needed
    //    //
    //    if (dateFrom) {
    //        result = result.filter(item => new Date(item.date) - new Date(dateFrom) > 0)
    //    }
    //    if (dateTo) {
    //        result = result.filter(item => new Date(dateTo) - new Date(item.date) > 0)
    //    }
    //    //

    //    return result
    //}

    render() {
        const { children } = this.props
        const { projectList, filter, supplierList, departmentList, wareList } = this.state
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
                    //allListings: orderList,
                    filteredWares,
                    updateFilter: this.updateFilter,
                }}
            >
                {children}
            </AdminContext.Provider>
        )
    }
}