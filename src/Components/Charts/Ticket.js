import React, { Component } from 'react'

let PriorityArrang = [];
export class Ticket extends Component {

    constructor(props) {
        super(props);
        this.state = {

            newArray: [],
        };
    };

    componentDidMount = () => {
        PriorityArrang = this.props.newData.sort((a, b) => {
            return a.Priority - b.Priority
        });

        PriorityArrang.map((info) => {
            if (info.Priority == 1) {
                info.Priority = 'High';
            }
            if (info.Priority == 2) {
                info.Priority = 'Mid';
            }
            if (info.Priority == 3) {
                info.Priority = 'Low';
            }

        })

        this.setState({
            newArray: PriorityArrang
        })
    }

    render() {
        return (
            <div className='TicketCard'>
                <h1>Ticket</h1>

                <table key={'head'} id='customers'>
                    <tr key={'idx'}>
                        <th>Ticket#</th>
                        <th>Task</th>
                        <th>Pick up time</th>
                        <th>Assign To</th>

                        <th>Customer</th>
                        <th>Status</th>
                        <th>Priority</th>

                    </tr>
                    {this.state.newArray.map((info, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{info.task}</td>
                                <td>{info.time}</td>
                                <td>{info.AssignTo}</td>
                                <td>{info.customer}</td>
                                <td>{info.status}</td>
                                <td>{info.Priority}</td>


                            </tr>)
                    })}

                </table>
            </div>
        )
    }
}

export default Ticket
