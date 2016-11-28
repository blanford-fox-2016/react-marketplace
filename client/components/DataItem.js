import React, {Component, PropTypes} from 'react'

class DataItem extends Component {

    render() {
        const {data} = this.props

        return (
            <div className="row">
                <div className="col-sm-2">
                    <img className="image-item" src={data.image} alt=""/>
                </div>
                <div className="col-sm-10">
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            {data.name}
                        </div>
                        <div className="panel-body">
                            <p>{data.price}</p>
                            <p>{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

DataItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default DataItem