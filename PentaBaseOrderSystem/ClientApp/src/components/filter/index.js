import * as React from 'react'
import classnames from 'classnames'

import styles from './styles.module.css'

class Filter extends React.Component {
    state = {
        priceFrom: '',
        supplier: '',
        sortOrder: '',
        sortOrders: ['Highest First', 'Lowest First'],
        dateFrom: '',
        dateTo: '',
        approval: '',
        payment: '',
        approvals: ['Er Godkendt', 'Ikke Godkendt'],
        payments: ['Er Betalt', 'Ikke Betalt'],
    }
    render() {
        const containerClasses = classnames('container', 'mb-1', styles.container)
        const formClasses = classnames('form-horizontal', styles.form)
        const suppliers = []

        return (

            <div className={containerClasses}>

                <form className={formClasses} noValidate
                    onChange={() => setTimeout(() => this.props.updateFilter(this.state), 0)}
                >
                    <p className="mb-1">Filtrer listen</p>
                    <div className={styles.formColumns}>
                        <label className="form-label" htmlFor="price-from">
                            Pris Fra
                  </label>

                        <input
                            className="form-input"
                            min="0"
                            max="10000000"
                            type="number"
                            id="price-from"
                            placeholder="5000"
                            value={this.state.priceFrom}
                            onChange={event => this.setState({ priceFrom: Number(event.target.value) })}
                        />
                    </div>
                    <div className={styles.formColumns}>
                        <label className="form-label" htmlFor="supplier">
                            Leverandør
                  </label>

                        <select className="form-select" id="supplier"
                            value={this.state.supplier}
                            onChange={event => this.setState({ supplier: event.target.value })}>
                            <option value="">Choose...</option>
                            {this.props.supplier.map(pc => (
                                <option key={pc.name} value={pc.name.toLowerCase()}>
                                    {pc.name}
                                </option>
                            ))}

                        </select>
                    </div>
                    <div className={styles.formColumns}>
                        <label className="form-label" htmlFor="sortorder">
                            Sorterings rækkefælge
                  </label>

                        <select className="form-select" id="sortorder"
                            value={this.state.sortOrder}
                            onChange={event => this.setState({ sortOrder: event.target.value })}>
                            <option value="">Vælg...</option>
                            {this.state.sortOrders.map(order => (
                                <option key={order} value={order.replace(' ', '').toLowerCase()}>
                                    {order}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.formColumns}>
                        <label>
                            Fra Dato
                      </label>
                        <input
                            type="date"
                            className="dateFrom"
                            value={this.state.dateFrom}
                            onChange={event => this.setState({ dateFrom: event.target.value })}
                        />
                    </div>
                    <div className={styles.formColumns}>
                        <label>
                            Til Dato
                      </label>
                        <input type="date"
                            className="dateTo"
                            value={this.state.dateTo}
                            onChange={event => this.setState({ dateTo: event.target.value })}
                        />
                    </div>
                    <div className={styles.formColumns}>
                        <label className="form-label" htmlFor="approval">
                            Godkendelse
                  </label>

                        <select className="form-select" id="approval"
                            value={this.state.approval}
                            onChange={event => this.setState({ approval: event.target.value })}>
                            <option value="">Vælg...</option>
                            {this.state.approvals.map(approval => (
                                <option key={approval} value={approval.replace(' ', '').toLowerCase()}>
                                    {approval}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.formColumns}>
                        <label className="form-label" htmlFor="payment">
                            Betaling
                  </label>

                        <select className="form-select" id="payment"
                            value={this.state.paymentr}
                            onChange={event => this.setState({ payment: event.target.value })}>
                            <option value="">Vælg...</option>
                            {this.state.payments.map(payment => (
                                <option key={payment} value={payment.replace(' ', '').toLowerCase()}>
                                    {payment}
                                </option>
                            ))}
                        </select>
                    </div>
                </form>

            </div>
        )
    }
}

export default Filter