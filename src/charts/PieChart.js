import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class PieChart extends Component {
  render () {
    const data = [{
      name: 'Nha Trang',
      y: 61.41
    }, {
      name: 'Khánh Hòa',
      y: 11.84
    }, {
      name: 'Hải Phòng',
      y: 10.85
    }, {
      name: 'Thanh Hóa',
      y: 4.67
    }, {
      name: 'Long An',
      y: 4.18
    }, {
      name: 'Bến Tre',
      y: 1.64
    }, {
      name: 'Tây Ninh',
      y: 1.6
    }, {
      name: 'Bình Phước',
      y: 1.2
    }, {
      name: 'Phú Yên',
      y: 2.61
    }]
    const options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'The use of antibiotics'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: 'Used',
        colorByPoint: true,
        data
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
