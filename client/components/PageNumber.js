import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectPage} from '../action'

class PageNumber extends Component {

    componentDidMount() {
        this.props.selectPage(1)
    }

    render() {

        var paginations = this.props.pagination.map((page) => {
        //    page = {active: true, label: 1}
            return(
                <button
                    className={page.active ? "btn btn-default active" : "btn btn-default"}
                    onClick={() => this.props.selectPage(page.label)} key={page.label}
                >
                    {page.label}
                    </button>
            )
        })

        return (
            <div className="row">
                <div className="col-sm-12">
                    {paginations}
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return{
        pagination: state.pagination
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectPage: selectPage
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PageNumber)