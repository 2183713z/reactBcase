import React, { PropTypes } from 'react'
import Blogcard from '../components/Blogcard'
let data=[
  {index:1,title:'标题1',desc:'描述1'},
  {index:2,title:'标题2',desc:'描述2'},
  {index:3,title:'标题3',desc:'描述3'},
  {index:4,title:'标题4',desc:'描述4'}
]
class Blog extends React.Component {
  render () {
    return(
      <div style={{width:'100%',marginTop:'20px'}}>
        {data.map( (item,i) => <Blogcard {...item} key={i} />)}
      </div>
    )
  }
}

export default Blog;
