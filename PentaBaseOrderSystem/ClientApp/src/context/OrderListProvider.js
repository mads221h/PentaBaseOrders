import React from 'react';


const DefaultState = {
    orderList: [],
    filter: {},
    supplierList:[],
}
const OrderListContext = React.createContext(DefaultState)


export const OrderListConsumer = OrderListContext.Consumer

export class OrderListProvider extends React.Component {
    state = DefaultState

    componentDidMount() {
        fetch('api/SampleData/GetOrderList')
            .then(res => res.json())
            .then(res => {
                this.setState({ orderList: res })
            })
        fetch('api/SampleData/GetSupplierList')
            .then(response => response.json())
            .then(data => {
                this.setState({ supplierList: data })
                
            })
    }
    updateFilter = filter => {
        this.setState({
            filter
        })
    }
    static applyFilter(listings, filter) {
        const { priceFrom, supplier, sortOrder, dateFrom, dateTo } = filter

        let result = listings
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
                }}
            >
                {children}
            </OrderListContext.Provider>
        )
    }
}