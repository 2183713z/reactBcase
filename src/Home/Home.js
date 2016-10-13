import React, { PropTypes } from 'react'

class Home extends React.Component {
  render () {
    let styles={
      h2:{
        fontSize:'42px',
        fontWeight:'700',
        marginBottom:'20px'
      },
      music:{
        position:'absolute',
        left:0,
        top:0,
        zIndex:'-100'
      }
    }
    return(
        <div className='home-container'>
          <div className='home-cover'>
            <div className='home-item'>
              <h2 style={styles.h2}>I am <span style={{color:'#00bcd4'}}>Susan</span></h2>
              <p style={{marginBottom:'20px'}}>WEB DEVELOPER</p>
              <button className='home-btn'><a href='http://github.com/2183713z' style={{color:'#fff'}} className='click'>Cliclk Me</a></button>
            </div>
            <audio style={styles.music} src="http://newming.github.io/100/9/%E5%BA%84%E5%BF%83%E5%A6%8D%20-%20%E8%B6%8A%E7%AC%91%E8%B6%8A%E9%9A%BE%E8%BF%87.mp3" controls autoPlay loop>
        	 	<p>您的浏览器不支持Html audio</p>
        	 </audio>
          </div>
        </div>
    )
  }
}

export default Home;
