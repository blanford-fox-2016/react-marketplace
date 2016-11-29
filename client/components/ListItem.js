import React, {Component, PropTypes} from 'react'
import DataItem from './DataItem'
import PageNumber from './PageNumber'

export default class ListItem extends Component {

    render() {

        const {data, actions} = this.props

        let dataFilter = data
        let dataNodes = dataFilter.map(function (item) {
            return(
                <DataItem key={item.dataId} data={item} {...actions} />
            //    deleteData={actions.deleteData} 3 kali
            )
        })


        var buttons = [

        ]

        return(
            <div>
                <div>{dataNodes}</div>
            </div>
        )
    }
}

ListItem.propTypes = {
    data: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}