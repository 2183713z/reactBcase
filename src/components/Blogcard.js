import React, { PropTypes } from 'react'

class Blogcard extends React.Component {
  render () {
    let styles={
      root:{
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
        width:'96%',
        borderRadius:'10px',
        margin:'0 auto',
        marginBottom:'20px',
      },
      index:{
        height:'80px',
        backgroundColor:'#00bcd4',
        borderRadius:'10px 10px 0 0',
        textAlign:'center',
        paddingTop:'10px'
      },
      num:{
        display:'block',
        fontSize:'20px',
        borderRadius:'50%',
        width:'60px',
        height:'60px',
        margin:'0 auto',
        lineHeight:'60px',
        border:'2px solid #fff',
        color:'#fff',
      },
      content:{
        padding:'16px',
        color:'#727272'
      },
      title:{
        fontSize:'18px',
        marginBottom:'20px',
        fontWeight:'700'
      },
      desc:{
        fontSize:'16px',
        marginBottom:'20px'
      },
      btn:{

      }
    }
    return (
      <div style={styles.root}>
        <div style={styles.index}><span style={styles.num}>{this.props.index}</span></div>
        <div style={styles.content}>
          <p style={styles.title}>{this.props.title}</p>
          <p style={styles.desc}>{this.props.desc}</p>
          <p><a href='#' className='blog-btn'>阅读更多</a></p>
        </div>
      </div>
    )
  }
}
Blogcard.defaultProps={
  index:1,
  title:'我是标题',
  desc:'我是描述',
}
Blogcard.propTypes={
  index:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  desc:PropTypes.string.isRequired
}
export default Blogcard;
