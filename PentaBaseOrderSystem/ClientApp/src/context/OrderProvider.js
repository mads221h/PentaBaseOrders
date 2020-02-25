//import React from 'react';
//import authService from '../components/api-authorization/AuthorizeService'


//const DefaultState = {
//    departmentList: [],
//    wareList: [],
//    supplierList: [],
//    projectList: [],
//    filter: {},
//    orderState: {
//        title: "",
//        supplierName: "",
//        project: "",
//        department: "",
//        price: 0,
//        shipments: [],
//    },
//    shipmentListState: [],
//}
//const OrderContext = React.createContext(DefaultState)


//export const OrderConsumer = OrderContext.Consumer

//export class OrderProvider extends React.Component {
//    state = DefaultState

//    componentDidMount() {
//        this.populateSupplier();
//        this.populateDepartment();
//        this.populateProject();
//        this.populateWares();
//        //this.populateShipment();
//    }

//    async populateProject() {
//        const token = await authService.getAccessToken();
//        const response = await fetch('api/SampleData/GetProjectList', {
//            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
//        });
//        const data = await response.json();
//        this.setState({ projectList: data });
//    }
//    async populateShipment() {
//        const token = await authService.getAccessToken();
//        const response = await fetch('api/SampleData/GetShipmentList', {
//            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
//        });
//        const data = await response.json();
//        this.setState({ shipmentList: data });
//    }
//    async populateWares() {
//        const token = await authService.getAccessToken();
//        const response = await fetch('api/SampleData/GetWareList', {
//            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
//        });
//        const data = await response.json();
//        this.setState({ wareList: data });
//    }

//    async populateSupplier() {
//        const token = await authService.getAccessToken();
//        const response = await fetch('api/SampleData/GetSupplierList', {
//            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
//        });
//        const data = await response.json();
//        this.setState({ supplierList: data });
//    }

//    async populateDepartment() {
//        const token = await authService.getAccessToken();
//        const response = await fetch('api/SampleData/GetDepartmentList', {
//            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
//        });
//        const data = await response.json();
//        this.setState({ departmentList: data });
//    }

//    updateFilter = filter => {
//        this.setState({
//            filter
//        })
//    }
//    updateOrderState = orderState => {
//        this.setState({
//            orderState
//        })
//    }
//    handleOrderChange = e => {
//        e.persist()
//        const value = e.target.value;

//        if (e.target.name == "price") {
//            this.setState(prevState => ({
//                ...prevState,
//                orderState: {
//                    ...prevState.orderState,
//                    [e.target.name]: parseInt(value)
//                }
//            }))
//        }
//        else if (e.target.name == "supplierId") {
//            const _supplier = this.state.supplierList.find(item => item.supplierId == value);
//            this.setState(prevState => ({
//                ...prevState,
//                orderState: {
//                    ...prevState.orderState,
//                    [e.target.name]: parseInt(value),
//                    supplier: _supplier,
//                    supplierName: _supplier.name,
//                }

//            }))
//        }
//        else {
//            this.setState(prevState => ({
//                ...prevState,
//                orderState: {
//                    ...prevState.orderState,
//                    [e.target.name]: value
//                }

//            }))
//        }
//    }
//    getOrder = async (orderId) => {
//    const token = await authService.getAccessToken();

//        const response = await fetch('api/SampleData/GetOrder/' + orderId, {
//        headers: !token ? {} : { 'Authorization': `Bearer ${token}` },
//    });

//    const data = await response.json();
//    setShipmentState(data);
//}
//    handleCreate = async () => {
//        const token = await authService.getAccessToken();
//        const object = this.state.orderState;
//        var json = JSON.stringify(object);
//        fetch('api/SampleData/CreateOrder', {
//            method: 'POST',
//            headers:
//            {
//                'Content-Type': 'application/json',
//                'Authorization': `Bearer ${token}`
//            },
//            body: json,
//        })
//        alert("Din Ordrer er blevet oprettet");
//    }

//    static getSupplierWares(wares, filter) {
//        const { supplier, } = filter
//        let result = wares
//        if (supplier) {
//            result = result.filter(item => item.supplierId == supplier)

//        }
//        return result

//    }
//    static getOrderShipment(shipments, filter) {
//        const { order, } = filter
//        let result = shipments
//        if (order) {
//            result = result.filter(item => item.orderId == order)

//        }
//        return result

//    }
//    addShipment = (item) => {
//        if (this.state.orderState.shipments.some(i => (i.name === item.name))) {
//            this.setState(prevState => ({
//                ...prevState,
//                orderState: {
//                    ...prevState.orderState,
//                    shipments: prevState.orderState.shipments.map((shipment) => {
//                        if (shipment.name == item.name) {
//                            return {
//                                ...shipment,
//                                count: shipment.count + 1,
//                            }
//                        }
//                        return shipment
//                    })
//                }
//            }))
//        }
//        else {
//            this.setState(prevState => ({
//                ...prevState,
//                orderState: {
//                    ...prevState.orderState,
//                    shipments: prevState.orderState.shipments.concat({ count: 1, price: item.price, name: item.name }),
//                    //supplier: prevState.orderState.supplier: item.supplier
//                }

//            }))
//        }
//        this.setState({
//            shipmentListState: this.state.shipmentListState.concat(item)
//        })

//    }
//    removeShipment = (item) => {
//        if (this.state.orderState.shipments != null) { }
//        this.setState(prevState => ({
//            ...prevState,
//            orderState: {
//                ...prevState.orderState,
//                shipments: prevState.orderState.shipments.filter(el => el.wareId != item.wareId)
//            }
//        }))
//    }
//    removeOneShipment = (item) => {
//        if (item.count > 1) {
//            this.setState(prevState => ({
//                ...prevState,
//                orderState: {
//                    ...prevState.orderState,
//                    shipments: prevState.orderState.shipments.map((shipment) => {
//                        if (shipment.wareId == item.wareId) {
//                            return {
//                                ...shipment,
//                                count: shipment.count - 1,
//                            }
//                        }
//                        return shipment
//                    })
//                }
//            }))
//        }
//        else {
//            this.removeShipment(item)
//        }

//    }
//    render() {
//        const { children } = this.props
//        const { projectList, filter, supplierList, departmentList, wareList, shipmentList, shipmentListState, orderState, template } = this.state
//        const filteredWares = AdminProvider.getSupplierWares(
//            wareList,
//            filter
//        )
//        return (
//            <OrderContext.Provider
//                value={{
//                    supplierList,
//                    departmentList,
//                    projectList,
//                    shipmentList,
//                    filteredWares,
//                    template,
//                    shipmentListState,
//                    orderState,
//                    updateFilter: this.updateFilter,
//                    addShipment: this.addShipment,
//                    updateOrderState: this.updateOrderState,
//                    handleCreate: this.handleCreate,
//                    removeShipment: this.removeShipment,
//                    removeOneShipment: this.removeOneShipment,
//                    handleOrderChange: this.handleOrderChange,
//                    getOrder: this.getOrder,

//                }}
//            >
//                {children}
//            </OrderContext.Provider>
//        )
//    }
//}