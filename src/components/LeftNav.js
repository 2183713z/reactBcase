import React, { PropTypes } from 'react'
import { Link } from 'react-router'
class LeftNav extends React.Component {
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
      <div className='left-nav'>
        <h3 style={{color:'#fff'}}>Susan@{this.state.title}</h3>
        <Link to='/' onlyActiveOnIndex={true}><span className='glyphicon glyphicon-home'></span>Home</Link>
        <Link to='/blog'><span className='glyphicon glyphicon-bookmark'></span>Blog</Link>
        <Link to='/work' ><span className='glyphicon glyphicon-education' ></span>Work</Link>
        <Link to='/about' ><span className='glyphicon glyphicon-user' ></span>About</Link>
      </div>
    )
  }
}
LeftNav.contextTypes={
  router:React.PropTypes.object.isRequired
}
export default LeftNav;
