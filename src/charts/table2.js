import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react'
// import * as Web3 from 'web3'
// import abi from './abi'

import 'ag-grid/dist/styles/ag-grid.css'
import 'ag-grid/dist/styles/theme-bootstrap.css'

import 'antd/dist/antd.css'

import ytdRdr from '../renderer/ytd'
// const web3 = new Web3(new Web3.providers.HttpProvider('http://10.20.0.86:8545'))
// const ABI = abi
// const BLOCK = `0x0bfaa3567b7dd73da5163c7748a0421081f3815c`

class Table2 extends Component {
  constructor(props) {
    super(props)
    this.onGridReady1 = this.onGridReady1.bind(this)
  }

  // async componentDidMount () {
  //   let _list = await web3.eth.getAccounts()
  //   let acc = _list[0]
  //   let ConTract = new web3.eth.Contract(ABI, BLOCK, {
  //     from: acc,
  //     gasPrice: `20000000000`
  //   })
  //   console.log(ConTract.methods)

  //   // POST data
  //   // ConTract.methods.___().send({
  //   //   from: acc,
  //   //   gasPrice: `30000000000000`,
  //   //   gas: 2000000
  //   // }).then(v => console.log(v))

  //   // GET data
  //   ConTract.methods.GetAllNhapKho().call({
  //     from: acc,
  //     gasPrice: `30000000000000`,
  //     gas: 2000000
  //   }).then(v => console.log(v))
  // }

  onGridReady1 = (params) => {
    this.api = params.api
    this.columnApi = params.columnApi
    this.api.sizeColumnsToFit()
  }

  render() {
    const columnDefs1 = [
      {
        headerName: 'Drug name',
        field: 'name',
        pinned: true
      },
      {
        headerName: 'Last Week',
        field: 'lw',
        cellRendererFramework: ytdRdr
      },
      {
        headerName: 'Last Month',
        field: 'lm',
        cellRendererFramework: ytdRdr
      },
      {
        headerName: 'Last Season',
        field: 'ls',
        cellRendererFramework: ytdRdr
      },
      {
        headerName: 'Last Year',
        field: 'ly',
        cellRendererFramework: ytdRdr
      }
    ]

    let frameworkComponents1 = {
      // ytdRdr
      // buyUnitRenderer,
    }

    let rowData1 = [
      {
        name: 'Amikacin',
        lw: [0.6,0],
        lm: [0.8,0],
        ls: [1.2,0],
        ly: [1.4,0]
      },
      {
        name: 'Ertapenem',
        lw: [1,0],
        lm: [0.9,2],
        ls: [1.1,0],
        ly: [1.2,0]
      },
      {
        name: 'Cefadroxil',
        lw: [1.5,2],
        lm: [1.4,2],
        ls: [1.2,2],
        ly: [0.9,2]
      },
      {
        name: 'Cefixime',
        lw: [0.8,0],
        lm: [0.9,0],
        ls: [0.8,2],
        ly: [1.0,0]
      },
      {
        name: 'Levofloxacin',
        lw: [0.6,0],
        lm: [0.8,0],
        ls: [1.2,0],
        ly: [1.4,0]
      },
      {
        name: 'Tigecycline',
        lw: [1,0],
        lm: [0.9,2],
        ls: [1.1,0],
        ly: [1.2,0]
      },
      {
        name: 'Azithromycin',
        lw: [1.5,2],
        lm: [1.4,2],
        ls: [1.2,2],
        ly: [0.9,2]
      },
      {
        name: 'Aztreonam',
        lw: [0.8,0],
        lm: [0.9,0],
        ls: [0.8,2],
        ly: [1.0,0]
      },
      {
        name: 'Mafenide',
        lw: [0.6,0],
        lm: [0.8,0],
        ls: [1.2,0],
        ly: [1.4,0]
      },
      {
        name: 'Clindamycin',
        lw: [1.5,2],
        lm: [1.4,2],
        ls: [1.2,2],
        ly: [0.9,2]
      }
    ]

    return (
      <div style={{
        width: '100%',
        height: 400,
        textAlign: 'center'
      }}>
        <AgGridReact
          columnDefs={columnDefs1}
          rowData={rowData1}
          onGridReady={this.onGridReady1}
          frameworkComponents={frameworkComponents1}
          rowSelection="multiple"
          enableColResize
          animateRows={true}
          enableSorting={true}
          enableColResize={true}
          enableFilter={true}
        />
      </div>
    )
  }
}

export default Table2
