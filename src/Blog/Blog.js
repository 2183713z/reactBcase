import React, { PropTypes } from 'react'
import Blogcard from '../components/Blogcard'

import { getJson } from '../utils/helpers'
// let data=[
//   {index:1,title:'标题1',desc:'描述1',url:'a'},
//   {index:2,title:'标题2',desc:'描述2',url:'b'},
//   {index:3,title:'标题3',desc:'描述3',url:'c'},
//   {index:4,title:'标题4',desc:'描述4',url:'d'}
// ]
class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    getJson()
      .then((recData)=> {
        this.setState({
          data:recData.getJson,
          wait:false
        })
      })
  }
  render () {
    return(
      <div style={{width:'100%',marginTop:'20px'}}>
        {this.state.data.map( (item,i) => <Blogcard {...item} key={i} />)}
      </div>
    )
  }
}

export default Blog;
