import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../action'
import ListItem from '../components/ListItem'
import AppTextInput from '../components/AppTextInput'

class DisplayItem extends Component {


    render() {
        const {data, actions} = this.props
        return(

                <div className="row">
                    <div className="col-sm-12">
                        <div className="jumbotron">
                            <h1>React Hacktiv8</h1>
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <AppTextInput onSave={actions.addPhoneBook}/>
                    </div>

                    <div className="com-sm-12">
                        <ListItem data={data} actions={actions}/>
                    </div>

                </div>
        )
    }
}

DisplayItem.propTypes = {
    data: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {data: state.data}
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(AppActions, dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayItem)

