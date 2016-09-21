import React, { PropTypes } from 'react'

class TestChildren extends React.Component {
  componentDidMount(){
    console.log(this.context);
  }
  render () {
    return(
      <div>
        孙子辈
      </div>
    )
  }
}
TestChildren.ContextTypes = {
  color: React.PropTypes.string
};
export default TestChildren;
