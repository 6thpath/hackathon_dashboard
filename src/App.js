import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { Button, Row, Col, Select, DatePicker, Icon } from 'antd'
import moment from 'moment'
import Iframe from 'react-iframe'
import * as Web3 from 'web3'
import abi from './abi'

import 'ag-grid/dist/styles/ag-grid.css'
import 'ag-grid/dist/styles/theme-bootstrap.css'

import 'antd/dist/antd.css'

import './custom.css'

import DualChart from './charts/DualChart'
import PieChart from './charts/PieChart'
import Table2 from './charts/table2'

const web3 = new Web3(new Web3.providers.HttpProvider('http://10.20.0.86:8545'))
const ABI = abi
const BLOCK = `0x0bfaa3567b7dd73da5163c7748a0421081f3815c`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rowData: []
    }
    this.onGridReady = this.onGridReady.bind(this)
  }

  async componentDidMount () {
    let _list = await web3.eth.getAccounts()
    let acc = _list[0]
    let ConTract = new web3.eth.Contract(ABI, BLOCK, {
      from: acc,
      gasPrice: `30000000000000`,
      gas: 2000000
    })

    // GET data
    let BanHang = await ConTract.methods.GetAllBanHang().call({
      from: acc,
      // gasPrice: `30000000000000`,
      // gas: 2000000
    })
    let NhapKho = await ConTract.methods.GetAllNhapKho().call({
      from: acc
    })
    let log = []
    for (let i = 0; i < BanHang[0].length; i++) {
      log.push({
        location: BanHang[0][i].region,
        sellUnit: BanHang[2][i].count + ` đơn vị nhỏ nhất`,
        buyUnit: NhapKho[2][i].count + ` đơn vị nhỏ nhất`,
        drugName: BanHang[2][i].name,
        shipmentId: BanHang[2][i].partNumber,
        date: moment(+BanHang[2][i].timestamp).format('DD-MM-YYYY')
      })
    }
    this.setState({
      rowData: log
    })
  }

  onGridReady = (params) => {
    this.api = params.api
    this.columnApi = params.columnApi
    this.api.sizeColumnsToFit()
  }

  render() {
    const columnDefs = [
      {
        headerName: 'Regions',
        field: 'location'
      },
      {
        headerName: 'Seller',
        field: 'sellUnit'
      },
      {
        headerName: 'Buyer',
        field: 'buyUnit'
      },
      {
        headerName: 'Drug name',
        field: 'drugName'
      },
      {
        headerName: 'Lot',
        field: 'shipmentId'
      },
      {
        headerName: 'Date',
        field: 'date'
      }
    ]

    let locationData =[{_id: 1, name: 'Khánh Hòa'}]
    // let rowData = []

    // for (let n = 0; n < 100; n++) {
    //   rowData.push({
    //     location: 'abc',
    //     sellUnit: 'a',
    //     buyUnit: 'b',
    //     drugName: 'aaa'+n,
    //     amount: n,
    //     shipmentId: n,
    //     date: Date.now()
    //   })
    // }

    const headerStyle = {
      fontSize: 20,
      textAlign: 'center',
      margin: '5px 0'
    }

    return (
      <div
        className='ag-theme-balham'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            width: '95vw',
            height: '95vh'
          }}
        >
          <Row>
            <Col span={4} style={headerStyle}>
              <Select style={{ width: 200 }} placeholder='Chọn khu vực' defaultValue={1}>
                {
                  locationData.map(loc => <Select.Option value={loc._id}>{loc.name}</Select.Option>)
                }
              </Select>
            </Col>
            <Col span={5} style={headerStyle}>
              <DatePicker.RangePicker
                defaultValue={[moment(), moment()]}
                style={{ width: 300 }}
              />
            </Col>
            <Col span={2} style={headerStyle}>
              <Button
              ><Icon type='redo' />Cập nhật</Button>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div style={{
                width: '95%',
                height: 400,
                textAlign: 'center'
              }}>
                <AgGridReact
                  columnDefs={columnDefs}
                  rowData={this.state.rowData}
                  onGridReady={this.onGridReady}
                  rowSelection="multiple"
                  enableColResize
                  animateRows={true}
                  enableSorting={true}
                  enableColResize={true}
                  enableFilter={true}
                />
              </div>
            </Col>
            <Col span={12}>
              <Iframe
                url="./index1.html"
                styles={{
                  overflow: 'hidden'
                }}
                width="100%"
                height="400px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                allowFullScreen
              />
            </Col>
          </Row>
          <Row>
            <Col span={12} style={{ margin: '10px 0' }}>
              <div style={{ width: '95%' }}>
                <DualChart />
              </div>
            </Col>
            <Col span={12} style={{ margin: '10px 0' }}>
              <Table2 />
            </Col>
          </Row>
          <Row>
            <Col span={12} style={{ margin: '10px 0' }}>
              <div style={{ width: '95%' }}>
                <PieChart />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default App
