import React, { PropTypes } from 'react'

class Item extends React.Component {
  render () {
    console.log(this.props);
    return (
      <div>
        {this.props.params.url}
      </div>
    )
  }
}

export default Item;
