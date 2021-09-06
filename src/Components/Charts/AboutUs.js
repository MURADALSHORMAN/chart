import React, { Component } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
let youtube, friend, facebook, googleAds, total
export class AboutUs extends Component {



    constructor(props) {
        super(props);
        this.state = {
            youtube: 0,
            friend: 0,
            facebook: 0,
            googleAds: 0,
            total: 0,

        };
    };


    componentDidMount = () => {
        this.props.Aboutdata.map((info) => {
            if (info.HearAboutUs == 'youtube') {
                this.setState({
                    youtube: this.state.youtube++,
                    total: this.state.total++
                })
            }

            if (info.HearAboutUs == 'friend') {
                this.setState({
                    friend: this.state.friend++,
                    total: this.state.total++
                })
            }
            if (info.HearAboutUs == 'facebook') {
                this.setState({
                    facebook: this.state.facebook++,
                    total: this.state.total++
                })
            }
            if (info.HearAboutUs == 'googleAds') {
                this.setState({
                    googleAds: this.state.googleAds++,
                    total: this.state.total++
                })
            }
        })
        youtube = this.state.youtube;
        friend = this.state.friend;
        facebook = this.state.facebook;
        googleAds = this.state.googleAds;
        total = this.state.total;

    }

    render() {
        return (
            <div className='AboutUsCard'>
                <PieChart
                    radius={30}
                    paddingAngle={2}
                    data={[
                        { title: 'youtube', value: youtube, color: '#E38627' },
                        { title: 'friend', value: friend, color: '#C13C37' },
                        { title: 'facebook', value: facebook, color: '#6A2135' },
                        { title: 'googleAds', value: googleAds, color: '#00FFFF' },
                    ]}


                />
            </div>
        )
    }
}

export default AboutUs
