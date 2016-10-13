import React, { PropTypes } from 'react'
import bg2 from '../images/1.jpg'
class Work extends React.Component {
  render () {
    return(
      <div className='work-container'>
          <div className='work-card'>
            <a href='https://2183713z.github.io/jquery--exercise'>
              <img src="http://7xopqp.com1.z0.glb.clouddn.com/contain-none.jpg"/>
              <div className='work-text'>
                <h3>Jquery--demo</h3>
                <p>2016-5-16</p>
              </div>
            </a>
          </div>
        <div className='work-card'>
          <a href='http://2183713z.github.io/9-18-Demo'>
            <img src="http://7xopqp.com1.z0.glb.clouddn.com/contain4.jpg"/>
            <div className='work-text'>
              <h3>React--demo</h3>
              <p>2016-9-18</p>
            </div>
          </a>
        </div>
        <div className='work-card'>
          <a href='#'>
            <img src="http://7xopqp.com1.z0.glb.clouddn.com/contain1.jpg"/>
            <div className='work-text'>
              <h3>express && React</h3>
              <p>2016-9-22</p>
            </div>
          </a>
        </div>
        <div className='work-card'>
          <a href='https://2183713z.github.io/small-case' >
            <img src="http://7xopqp.com1.z0.glb.clouddn.com/contain3.jpg"/>
            <div className='work-text'>
              <h3>small-case</h3>
              <p>2016-6-19</p>
            </div>
          </a>
        </div>

      </div>
    )
  }
}

export default Work;
