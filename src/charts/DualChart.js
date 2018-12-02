import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class DualChart extends Component {
  render () {
    const colData = [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    const splineData = [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    const options = {
      chart: {
        zoomType: 'xy'
      },
      title: {
        text: 'The use of antibiotics in selected region'
      },
      colors: ['#e74c3c', 'black'],
      xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
      }],
      yAxis: [{ // Primary yAxis
        labels: {
            format: '{value} %',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Abuse rate of antibiotics',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
      }, { // Secondary yAxis
        labels: {
          format: '{value} lowest units',
          style: {
              color: Highcharts.getOptions().colors[0]
          }
        },
        title: {
            text: 'Amount of antibiotics used',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
      }],
      tooltip: {
          shared: true
      },
      legend: {
          layout: 'vertical',
          align: 'left',
          x: 120,
          verticalAlign: 'top',
          y: 100,
          floating: true,
          backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255,255,255,0.25)'
      },
      series: [{
          name: 'Abuse rate of antibiotics',
          type: 'column',
          yAxis: 1,
          data: splineData,
          tooltip: {
              valueSuffix: ' %'
          }

      }, {
          name: 'Amount of antibiotics used',
          type: 'spline',
          data: colData,
          tooltip: {
              valueSuffix: 'pills'
          }
      }]
    }
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    )
  }
}
