import React from 'react';
import authService from '../components/api-authorization/AuthorizeService'


const DefaultState = {
    orderList: [],
    filter: {},
    supplierList: [],
    orderState: {},
    role: null,
    userName: null,
    isAuthenticated: false,
}
const OrderListContext = React.createContext(DefaultState)


export const OrderListConsumer = OrderListContext.Consumer

export class OrderListProvider extends React.Component {
    state = DefaultState
    componentDidMount() {
        this._subscription = authService.subscribe(() => this.populateRole());
        this.populateUser();
        this.populateSupplier()
        this.populateOrder()
    }
    componentWillUnmount() {
        authService.unsubscribe(this._subscription);
    }
    async populateUser() {
        const [isAuthenticated, user] = await Promise.all([authService.isAuthenticated(), authService.getUser()])
        this.setState({
            isAuthenticated,
            role: user && user.role,
            userName: user && user.name,
        });

    }
    async populateSupplier() {
        const token = await authService.getAccessToken();
        const response = await fetch('api/SampleData/GetSupplierList', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ supplierList: data });
    }
    async populateOrder() {
        const token = await authService.getAccessToken();
        const response = await fetch('api/SampleData/GetOrderList', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ orderList: data });
    }

    updateFilter = filter => {
        this.setState({
            filter
        })
    }
    handleApproval = listing => {
        var json = JSON.stringify(listing);
        fetch('api/SampleData/Approval', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: json,
        })
    }
    handleApproveOrder = async (listing) => {
        const token = await authService.getAccessToken();
        await this.setState({
            orderState: listing
        })
        await this.setState(prevState => ({
            ...prevState,
            orderState: {
                ...prevState.orderState,
                approvedBy: this.state.userName
            }
        }))
        var json = JSON.stringify(this.state.orderState);
        fetch('api/SampleData/Approval', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: json,
        })
    }
    handlePayment = listing => {

        setPaymentState({ payment: true })
        var json = JSON.stringify(listing);
        fetch('api/SampleData/Payment', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: json,
        });
    }
    static applyFilter(listings, filter) {
        const { priceFrom, supplier, sortOrder, dateFrom, dateTo, approval, payment, search, _orderId } = filter

        let result = listings
        if (search) {
            result = result.filter(item => item.title.toLowerCase().includes(search))
        }
        if (_orderId) {
            result = result.filter(item => item.orderId == _orderId)
        }
        if (priceFrom) {
            const from = priceFrom
            result = result.filter(item => item.price >= from)
        }
        if (supplier) {
            result = result.filter(item => item.supplier.toLowerCase().startsWith(supplier))
        }
        if (sortOrder) {
            if (sortOrder === 'highestfirst') {
                result = result.sort((a, b) => b.price - a.price)
            }
            if (sortOrder === 'lowestfirst') {
                result = result.sort((a, b) => a.price - b.price)
            }
        }
        if (approval) {
            if (approval === 'ergodkendt') {
                result = result.filter(item => item.approval == true)
            }
            if (approval === 'ikkegodkendt') {
                result = result.filter(item => item.approval == false)
            }
        }
        if (payment) {
            if (payment === 'erbetalt') {
                result = result.filter(item => item.payment == true)
            }
            if (payment === 'ikkebetalt') {
                result = result.filter(item => item.payment == false)
            }
        }
        //Does array.filter work with Date?
        //Remember to change item.date type from string to date in API and adjust accordingly in the Orderlistings if needed
        //
        if (dateFrom) {
            result = result.filter(item => new Date(item.date) - new Date(dateFrom) > 0)
        }
        if (dateTo) {
            result = result.filter(item => new Date(dateTo) - new Date(item.date) > 0)
        }
        //

        return result
    }

    render() {
        const { children } = this.props
        const { orderList, filter, supplierList } = this.state
        const filteredListings = OrderListProvider.applyFilter(
            orderList,
            filter
        )
        return (
            <OrderListContext.Provider
                value={{
                    supplierList,
                    allListings: orderList,
                    filteredListings,
                    updateFilter: this.updateFilter,
                    handleApproveOrder: this.handleApproveOrder,
                }}
            >
                {children}
            </OrderListContext.Provider>
        )
    }
}