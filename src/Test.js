import React, { PropTypes } from 'react'
import TestChild from './TestChild'
class Test extends React.Component {
  getChildContext(){
    return (color:'purple')
  }
  componentDidMount(){
    console.log(this.context);
  }
  render () {
    return(
      <div>
        我是爷爷
        <TestChild />
      </div>
    )
  }
}
Test.childContextTypes = {
  color: React.PropTypes.string
};
export default Test;
