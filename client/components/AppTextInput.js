import React, {Component, PropTypes} from 'react'

class AppTextInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name || '',
            price: this.props.price || '',
            description: this.props.description || '',
            image: this.props.image || ''
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

    handleImageChange(e) {
        this.setState({
            image: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        let dataId = Date.now().toString()
        let name = this.state.name.trim()
        let price = this.state.price.trim()
        let description = this.state.description.trim()
        let image = this.state.image.trim()
        if (!name || !price || !description || !image) {
            return
        }
        this.props.onSave(dataId, name, price, description, image)
        this.setState({
            name: '',
            price: '',
            description: '',
            image: ''
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
                        <input type="number" placeholder="Price" className="form-control" value={this.state.price} onChange={this.handlePriceChange.bind(this)} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2">Description:</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" rows="10" value={this.state.description} onChange={this.handleDescriptionChange.bind(this)}>

                        </textarea>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2">Image:</label>
                    <div className="col-sm-10">
                        <input type="text" placeholder="Image" className="form-control" value={this.state.image} onChange={this.handleImageChange.bind(this)} />
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
    price: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string,
    onSave: PropTypes.func.isRequired
}

export default AppTextInput