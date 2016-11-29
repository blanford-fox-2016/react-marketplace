import React, {Component, PropTypes} from 'react'
import DisplayItem from '../components/DisplayItem'
import PageNumber from '../components/PageNumber'

export default class App extends Component {



    render() {
        return(
            <div className="container">
                <DisplayItem />
                <div className="text-center">
                    <PageNumber />
                </div>
            </div>
        )
    }
}


