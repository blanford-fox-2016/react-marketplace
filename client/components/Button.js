import React, {Component, PropTypes} from 'react'

class Button extends Component {
    render() {
        const {page} = this.props

        return(
            <button className="btn btn-default">{page}</button>
        )
    }
}

export default Button