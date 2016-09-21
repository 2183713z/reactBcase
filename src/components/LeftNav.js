import React, { PropTypes } from 'react'
import { Link } from 'react-router'
class LeftNav extends React.Component {
  render () {
    return (
      <div className='left-nav'>
        <h3 style={{color:'#fff'}}>Susan@{this.props.title}</h3>
        <Link to='/' onlyActiveOnIndex={true}><span className='glyphicon glyphicon-home'></span>Home</Link>
        <Link to='/blog'><span className='glyphicon glyphicon-bookmark'></span>Blog</Link>
        <Link to='/work' ><span className='glyphicon glyphicon-education' ></span>Work</Link>
        <Link to='/about' ><span className='glyphicon glyphicon-user' ></span>About</Link>
      </div>
    )
  }
}

export default LeftNav;
