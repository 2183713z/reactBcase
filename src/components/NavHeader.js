import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  handleBack(){
    this.context.router.goBack();
    console.log(this.context.router);
  }
  render () {
    return (
      <div className='nav-header'>
        <p  onClick={this.handleBack.bind(this)}><span className='glyphicon glyphicon-menu-left' aria-hidden="true"></span>Back</p>
        <h3>Susan@{this.props.title}</h3>
        <span className='glyphicon glyphicon-piggy-bank pig' aria-hidden="true"></span>
      </div>
    )
  }
}
NavHeader.contextTypes={
  router:React.PropTypes.object.isRequired
}
export default NavHeader;
