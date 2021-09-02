import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Chart extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        label:'Population',
                        data:[ 15, 10, 5, 2, 20, 30, 45 ],
                        backgroundColor:[ 'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)' ]
                    }
                ]
            },
         }
    }  

    render(){
        return (
            <div className="chart">
            <Bar
                data={this.state.chartData}
                options={{ maintainAspectRatio: true }}
            />
            </div>
        )
    }
}

export default Chart;