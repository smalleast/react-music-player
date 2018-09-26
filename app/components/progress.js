import React from 'react'

export default class Progress extends React.Component {
  render() {
    return (
      <div className="components-progress row">
       {this.props.progress}s
      </div>
    )
  }
}