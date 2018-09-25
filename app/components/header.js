import React from 'react'
import './header.less'

export default class Header extends React.Component {
  render() {
    return (
      <div className="component-Header row row-center">
        <div className="mr20">
          <img src="/static/images/logo.png" width="40" alt="" />
        </div>
        <h1 className="caption">
          React Music Player
        </h1>
      </div>
    )
  }
}