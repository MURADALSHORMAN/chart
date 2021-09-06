import React, { Component } from 'react';
import Donut from 'react-donut';

export class Target extends Component {

    
    render() {
        return (
            <div className='TargetCard'>
                <Donut
                    chartData={[
                        { name: 'SOLD', data: this.props.totalItmes.length, },
                        // please note that i will suppose the fix number as  total target price for testing 
                        { name: 'Available', data: 20- this.props.totalTarget.length,  },
                    ]}
                    chartWidth={300}
                    chartHeight={300}
                    title="SALES TARGET"
                    chartThemeConfig={{
                        series: {
                            colors: ['#ffe0bd', '#670303'],
                        },
                    }}
                />
            </div>
        )
    }
}

export default Target
