import React, { PropTypes } from 'react'

class Home extends React.Component {
  render () {
    let styles={
      h2:{
        fontSize:'42px',
        fontWeight:'700',
        marginBottom:'20px'
      }
    }
    return(
        <div className='home-container'>
          <div className='home-cover'>
            <div className='home-item'>
              <h2 style={styles.h2}>I am <span style={{color:'#00bcd4'}}>Susan</span></h2>
              <p style={{marginBottom:'20px'}}>WEB DEVELOPER</p>
              <button className='home-btn'><a href='http://github.com/2183713z' style={{color:'#fff'}}>Cliclk Me</a></button>
            </div>
          </div>
        </div>
    )
  }
}

export default Home;
