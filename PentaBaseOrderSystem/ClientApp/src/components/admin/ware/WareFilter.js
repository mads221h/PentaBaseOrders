import * as React from 'react'
import classnames from 'classnames'
import styles from './styles.module.css'

class WareFilter extends React.Component {
    state = {
        supplier: '',
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
                    <p className="mb-1">Vælg Leverandør</p>
                    
                    <div className={styles.formColumns}>
                        <label className="form-label" htmlFor="supplier">
                            Leverandør
                  </label>

                        <select className="form-select" id="supplier"
                            value={this.state.supplier}
                            onChange={event => this.setState({ supplier: event.target.value })}>
                            {this.props.supplier.map(pc => (
                                <option key={pc.id} value={pc.id}>
                                    {pc.name}
                                </option>
                            ))}

                        </select>
                    </div>
                    
                </form>

            </div>
        )
    }
}

export default WareFilter