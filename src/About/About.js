import React, { PropTypes } from 'react'
import bg2 from '../images/2.jpg'
class About extends React.Component {
  render () {
    return(
      <div className='about-container'>
        <div className='backgroundimg'></div>
        <img src={bg2} className='avatar'/>
        <h2 className='info'>个人信息</h2>
        <div className='hobby'>
          <p>喜欢为了得到自己想要的付出一切，更喜欢体验其中的快乐</p>
          <p>喜欢为实现自己的梦想的执着，更喜欢享受成功的喜悦</p>
          <p>喜欢一个人静静地发呆，幻想着......</p>
          <p>喜欢逛街，喜欢购物</p>
        </div>
        <h2 className='info'>联系方式</h2>
        <div className='hobby'>
          <p>QQ：1489616091</p>
          <p>手机号：18712799109</p>
          <p>邮箱：18712799109@163.com</p>
        </div>
      </div>
    )
  }
}

export default About;
