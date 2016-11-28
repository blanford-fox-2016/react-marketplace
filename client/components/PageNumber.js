import React, {Component, PropTypes} from 'react'

class PageNumber extends Component {
    render() {
        const {pageNumber} = this.props
        console.log("ini page number")
        return (
            <div className="row">
                <div className="col-sm-12">
                    <button className="btn btn-default">1</button>
                    <button className="btn btn-default">2</button>
                    <button className="btn btn-default">3</button>
                </div>
            </div>
        )
    }
}

export default PageNumber