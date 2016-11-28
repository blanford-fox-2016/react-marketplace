import React, {Component, PropTypes} from 'react'

class AppTextInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name || '',
            price: this.props.price || '',
            description: this.props.description || ''
        }
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handlePriceChange(e) {
        this.setState({
            price: e.target.value
        })
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        let name = this.state.name.trim()
        let phone = this.state.phone.trim()
        if (!name || !phone) {
            return
        }
        this.props.onSave(name, phone)
        this.setState({
            name: '',
            price: '',
            description: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-sm-2">Name:</label>
                    <div className="col-sm-10">
                        <input type="text" placeholder="Name" className="form-control" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2">Price:</label>
                    <div className="col-sm-10">
                        <input type="number" placeholder="Price" className="form-control" value={this.state.phone} onChange={this.handlePriceChange.bind(this)} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2">Description:</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" rows="10" onChange={this.handleDescriptionChange.bind(this)}>
                            {this.state.description}
                        </textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-success">Save</button>
                    </div>
                </div>
            </form>
        )
    }
}

AppTextInput.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    onSave: PropTypes.func.isRequired
}

export default AppTextInput