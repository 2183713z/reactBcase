import React, { PropTypes } from 'react'
import { Link } from 'react-router'
class NavFooter extends React.Component {
  render () {
    return(
      <div className='nav-footer'>
        <Link  activeStyle={{color:'#7c4dff'}} to='/' onlyActiveOnIndex={true}><span className='glyphicon glyphicon-home'></span><br/>Home</Link>
        <Link  activeStyle={{color:'#7c4dff'}} to='/blog'><span className='glyphicon glyphicon-bookmark'></span><br/>Blog</Link>
        <Link  activeStyle={{color:'#7c4dff'}} to='/work' ><span className='glyphicon glyphicon-education' ></span><br/>Work</Link>
        <Link  activeStyle={{color:'#7c4dff'}} to='/about' ><span className='glyphicon glyphicon-user' ></span><br/>About</Link>
      </div>
    )
  }
}

export default NavFooter;
