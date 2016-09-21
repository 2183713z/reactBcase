import React, { PropTypes } from 'react'

class NavHeader extends React.Component {

  render () {
    return (
      <div className='nav-header'>
        <p><span className='glyphicon glyphicon-menu-left' aria-hidden="true"></span>Back</p>
        <h3>Susan@{this.props.title}</h3>
        <span className='glyphicon glyphicon-piggy-bank pig' aria-hidden="true"></span>
      </div>
    )
  }
}

export default NavHeader;
