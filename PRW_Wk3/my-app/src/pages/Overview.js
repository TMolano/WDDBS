import React, {Component} from 'react';
import { Chart } from 'react-google-charts';

import Income from './Income';
import Expenses from './Expenses';

class Overview extends Component {
    //Render pie chart
    state = {
        chartImageURI: ""
    };
    render() {
        return (
            <section>
                <h1>Overview</h1>
            <div className="expenses">
                <Chart
                    chartType="PieChart"
                    data={[["Saved", "Spent"], ["Income", 10], ["Expenses", 6]]}
                    options={pieOptions}
                    graph_id="PieChart"
                    width={"100%"}
                    height={"400px"}
                    legend_toggle
                />
            </div>
            </section>
        );
    }
}

const pieOptions = {
    title: "",
    pieHole: 0.6,
    slices: [
        {
            color: "#2BB673"
        },
        {
            color: "#d91e48"
        },
        {
            color: "#007fad"
        },
        {
            color: "#e9a227"
        }
    ],
    legend: {
        position: "bottom",
        alignment: "center",
        textStyle: {
            color: "233238",
            fontSize: 14
        }
    },
    tooltip: {
        showColorCode: true
    },
    chartArea: {
        left: 0,
        top: 0,
        width: "100%",
        height: "80%",
    },
    fontName: "Roboto"
};

export default Overview;