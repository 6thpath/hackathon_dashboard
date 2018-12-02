import React, { Component } from 'react'
import { Icon } from 'antd'

class buyUnit extends Component {
  render () {
    if (this.props.value[0] > this.props.value[1]) {
      return (
        <p>
          <span><Icon type='rise' style={{ color: `green` }} />{this.props.value[0]}%</span>
        </p>
      )
    } else {
      return (
        <p>
          <span><Icon type='fall' style={{ color: `red` }} />{this.props.value[0]}%</span>
        </p>
      )
    }
  }
}

export default buyUnit
