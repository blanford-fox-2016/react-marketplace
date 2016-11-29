import React, {Component, PropTypes} from 'react'

class DataItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showClass: this.props.name || 'panel-body hide'
        }
    }

    showDetail() {
        this.setState({
            showClass: 'panel-body'
        })
    }

    hideDetail() {
        console.log(this.state.showClass)
        this.setState({
            showClass: 'panel-body hide'
        })
    }

    render() {
        const {data} = this.props
        return (
            <div>
                <div className="row">
                    <div className="col-sm-2">
                        <img className="image-item" src={data.image} alt=""/>
                    </div>
                    <div className="col-sm-10">
                        <div className="panel panel-success">
                            <div onMouseEnter={this.showDetail.bind(this)} onMouseLeave={this.hideDetail.bind(this)} className="panel-heading">
                                {data.name}
                            </div>
                            <div className={this.state.showClass}>
                                <p>{data.price}</p>
                                <p>{data.description}</p>
                            </div>
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