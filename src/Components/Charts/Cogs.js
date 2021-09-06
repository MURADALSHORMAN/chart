// import React from 'react';
import Plot from 'react-plotly.js';
import React, { Component } from 'react'


export class Cogs extends Component {


    // constructor(props) {
    //     super(props);
    //     this.state = {

    //         chartCogs: [],
    //     };
    // };

    cogsData() {
        this.props.cogsData.map((info) => {

            return (
                {
                    x: info.x,
                    y: info.y,
                    type: 'scatter'
                }
            )
        })
    }

    render() {
        return (
            <div className='COGSCard'>
                <Plot
                    data={
                        this.props.cogsData.map((info) => {

                            return (
                                {
                                    x: info.x,
                                    y: info.y,
                                    type: 'scatter'
                                }
                            )
                        })


                    }
                    layout={{ width: 1000, height: 400, title: 'SALES VS COGS' }}
                />

        {/* <h3>NUMBER OF INVOICE </h3>
        <h3>{this.props.INVOICES} </h3>
        <h3>SALSE </h3>
        <h3>{this.props.SALES} </h3>
        <h3>COGS </h3>
        <h3>{this.props.COGS} </h3> */}

            </div>
        )
    }
}

export default Cogs
