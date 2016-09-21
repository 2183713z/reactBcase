import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  constructor(){
    super();
    title:'Home'
  }
  componentWillReceiveProps(){
    this.setTitle()
  }
  componentWillMount(){
    this.setTitle()
  }
  setTitle(){
    this.setState({
      title:this.context.router.isActive('/',true) ? 'Home' :
            this.context.router.isActive('/blog')  ? 'Blog' :
            this.context.router.isActive('/work')  ? 'Work' :
            this.context.router.isActive('/about')  ? 'About' : 'Item'
    })
  }
  render () {
    return (
      <div className='nav-header'>
        <p><span className='glyphicon glyphicon-menu-left' aria-hidden="true"></span>Back</p>
        <h3>Susan @{this.state.title}</h3>
        <span className='glyphicon glyphicon-piggy-bank pig' aria-hidden="true"></span>
      </div>
    )
  }
}
NavHeader.contextTypes={
  router:React.PropTypes.object.isRequired
}
export default NavHeader;
