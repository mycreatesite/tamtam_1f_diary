import React from 'react'
import './scss/base.scss'
import Navigation from './navigation'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="rootContainer">
				<Navigation siteTitle={this.props.siteTitle}/>
        {children}
      </div>
    )
  }
}

export default Template
