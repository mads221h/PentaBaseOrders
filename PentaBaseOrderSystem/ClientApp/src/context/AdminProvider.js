import React from 'react';
import authService from '../components/api-authorization/AuthorizeService'


const DefaultState = {
    departmentList: [],
    wareList: [],
    supplierList: [],
    projectList: [],
    //shipmentList: [],
    filter: {},
    template: {
        title: "",
        price: 0,
        supplier: "",
        description: "",

    },
    orderState: {
        title: "",
        supplierName:"",
        project: "",
        department: "",
        price: 0,
        shipments: [],
    },
    shipmentListState: [],
}
const AdminContext = React.createContext(DefaultState)


export const AdminConsumer = AdminContext.Consumer

export class AdminProvider extends React.Component {
    state = DefaultState

    componentDidMount() {
        this.populateAll();
    }
    async populateAll() {
        const token = await authService.getAccessToken();

        this.populateSupplier(token);
        this.populateDepartment(token);
        this.populateProject(token);
        this.populateWares(token);
        //this.populateShipment();
    }
    async populateProject(token) {
        const response = await fetch('api/SampleData/GetProjectList', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ projectList: data});
    }
    async populateShipment(token) {
        
        const response = await fetch('api/SampleData/GetShipmentList', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ shipmentList: data });
    }
    async populateWares(token) {
        const response = await fetch('api/SampleData/GetWareList', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ wareList: data });
    }

    async populateSupplier(token) {
        const response = await fetch('api/SampleData/GetSupplierList', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ supplierList: data});
    }

    async populateDepartment(token) {
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
    updateOrderState = orderState => {
        this.setState({
            orderState
        })
    }
    handleOrderChange = e => {
        e.persist()
        const value = e.target.value;
        
        if (e.target.name == "price") {
            this.setState(prevState => ({
                ...prevState,
                orderState: {
                    ...prevState.orderState,
                    [e.target.name]: parseInt(value)
                }
            }))
        }
        else if (e.target.name == "supplierId") {
            const _supplier = this.state.supplierList.find(item => item.supplierId == value);
            this.setState(prevState => ({
                ...prevState,
                orderState: {
                    ...prevState.orderState,
                    [e.target.name]: parseInt(value),
                    supplier: _supplier,
                    supplierName: _supplier.name,
                }

            }))
        }
        //else if (e.target.name == "projectId") {
        //    const _project = this.state.projectList.find(item => item.projectId == value);
        //    this.setState(prevState => ({
        //        ...prevState,
        //        orderState: {
        //            ...prevState.orderState,
        //            [e.target.name]: parseInt(value),
        //            project: _project,
        //            projectTitle: _project.title,
        //        }

        //    }))
        //}
        //else if (e.target.name == "departmentId") {
        //    const _department = this.state.departmentList.find(item => item.departmentId == value);
        //    this.setState(prevState => ({
        //        ...prevState,
        //        orderState: {
        //            ...prevState.orderState,
        //            [e.target.name]: parseInt(value),
        //            department: _department,
        //            departmentTitle: _department.title,
        //        }

        //    }))
        //}
    else {
            this.setState(prevState => ({
                ...prevState,
                orderState: {
                    ...prevState.orderState,
                    [e.target.name]: value
                }

            }))
    }
}
     handleCreate = async () => {
        const token = await authService.getAccessToken();
        const object = this.state.orderState;
        var json = JSON.stringify(object);
        fetch('api/SampleData/CreateOrder', {
            method: 'POST',
            headers:
                { 'Content-Type': 'application/json' ,
                 'Authorization': `Bearer ${token}` },
            body: json,
        })
            //.then(response => response.json())
            //.then(json => { console.log(json) })


        alert("Din Ordrer er blevet oprettet");
    }

    static getSupplierWares(wares, filter) {
        const { supplier, } = filter
        let result = wares
        if (supplier) {
            result = result.filter(item => item.supplierId == supplier)
            
        }
        return result
        
    }
    static getOrderShipment(shipments, filter) {
        const { order, } = filter
        let result = shipments
        if (order) {
            result = result.filter(item => item.orderId == order)

        }
        return result

    }
    addShipment = (item) => {
        if (this.state.orderState.shipments.some(i => (i.name === item.name))) {
            this.setState(prevState => ({
                ...prevState,
                orderState: {
                    ...prevState.orderState,
                    shipments: prevState.orderState.shipments.map((shipment) => {
                        if (shipment.name == item.name) {
                            return {
                                ...shipment,
                                count: shipment.count + 1,
                            }
                        }
                        return shipment
                    })
                }
            }))
        }
        else {
            this.setState(prevState => ({
                ...prevState,
                orderState: {
                    ...prevState.orderState,
                    shipments: prevState.orderState.shipments.concat({
                        count: 1, price: item.price, name: item.name, wareId: item.wareId,
                        info: item.info
                    }),
                    //supplier: prevState.orderState.supplier: item.supplier
                }

            }))
        }
        this.setState({
            shipmentListState: this.state.shipmentListState.concat(item)
        })

    }
    removeShipment = (item) => {
        if (this.state.orderState.shipments != null) {}
        this.setState(prevState => ({
            ...prevState,
            orderState: {
                ...prevState.orderState,
                shipments: prevState.orderState.shipments.filter(el => el.wareId != item.wareId)
            }
        }))
    }
    removeOneShipment = (item) => {
            if (item.count > 1) {
                this.setState(prevState => ({
                    ...prevState,
                    orderState: {
                        ...prevState.orderState,
                        shipments: prevState.orderState.shipments.map((shipment) => {
                            if (shipment.wareId == item.wareId) {
                                return {
                                    ...shipment,
                                    count: shipment.count - 1,
                                }
                            }
                            return shipment
                        })
                    }
                }))
            }
            else {
                this.removeShipment(item)
            }
        
    }
    render() {
        const { children } = this.props
        const { projectList, filter, supplierList, departmentList, wareList, shipmentList, shipmentListState, orderState, template } = this.state
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
                    template,
                    shipmentListState,
                    orderState,
                    updateFilter: this.updateFilter,
                    addShipment: this.addShipment,
                    updateOrderState: this.updateOrderState,
                    handleCreate: this.handleCreate,
                    removeShipment: this.removeShipment,
                    removeOneShipment: this.removeOneShipment,
                    handleOrderChange: this.handleOrderChange,
                    
                }}
            >
                {children}
            </AdminContext.Provider>
        )
    }
}