import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class DualChart extends Component {
  render () {
    const colData = [49.9, 71.5, 64.4, 59.2, 44.0, 57.0, 55.6, 48.5, 46.4, 54.1, 45.6, 54.4]
    const splineData = [1253, 1453, 1653, 1475, 1812, 2125, 2282, 2625, 2313, 1843, 1329, 1916]
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
