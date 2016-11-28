import React, {Component, PropTypes} from 'react'
import DataItem from './DataItem'
import PageNumber from './PageNumber'

export default class ListItem extends Component {

    render() {

        const {data, pageNumber, actions} = this.props
        let dataFilter = data
        let dataNodes = dataFilter.map(function (item) {
            return(
                <DataItem key={item.dataId} data={item} {...actions} />
            //    deleteData={actions.deleteData} 3 kali
            )
        })

        return(
            <div>
                <div>{dataNodes}</div>
                <div className="text-center"><PageNumber pageNumber={dataNodes.length}/></div>
            </div>
        )

        // return(
        //     <div>
        //         <table className="table table-bordered">
        //             <thead>
        //             <tr>
        //                 <th>Name</th>
        //                 <th>Phone</th>
        //                 <th>Action</th>
        //             </tr>
        //             </thead>
        //
        //             <tbody>
        //             {dataNodes}
        //             </tbody>
        //         </table>
        //     </div>
        // )
    }
}

ListItem.propTypes = {
    data: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}