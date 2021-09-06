import React, { Component } from 'react'
// import axios from 'axios';
// import Plot from 'react-plotly.js';
import jsondata from '../data.json';
import Ticket from './Charts/Ticket';
import Cogs from './Charts/Cogs';
import AboutUs from './Charts/AboutUs';
import Target from './Charts/Target';
import Profile from './Charts/Profile';
import Parts from './Main/Parts';
import Repairs from './Main/Repairs';
import Unlock from './Main/Unlock';
import TradIn from './Main/TradIn';
import Welcome from './Main/Welcome';

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: jsondata,
            // please note that I pass the values of xand y for Cogs chart via propes as constant because theere is no data source 
            cogsinfo: [
                { x: ['11/07/2020', '11/23/2020', '12/01/2020'], y: [20, 17, 32] },
                { x: ['11/07/2020', '11/21/2020', '12/7/2020'], y: [15, 20, 31] },
                { x: ['11/07/2020', '11/22/2020', '12/13/2020'], y: [13, 14, 35] }
            ],
        };
    };

    render() {
        return (
            <>

                <div>
                    <div>

                        <Welcome />
                        <Parts />
                        <Repairs />
                        <Unlock />
                        <TradIn />
                        <Profile />
                    </div>
                    <div>


                        <Ticket newData={this.state.data} />
                        <Cogs cogsData={this.state.cogsinfo} />
                        <AboutUs Aboutdata={this.state.data} />
                        <Target totalItmes={this.state.data} totalTarget={this.state.data} />
                    </div>
                </div>
            </>
        )
    }
}

export default Main
