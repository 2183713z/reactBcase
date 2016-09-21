import React, { PropTypes } from 'react'
import { Router,Route,hashHistory,IndexRoute} from 'react-router'
import App from './App'
import Home from './Home/Home'
import About from './About/About'
import Work from './Work/Work'
import Blog from './Blog/Blog'
class Routers extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path='/' component={App} >
          <IndexRoute component={Home} />
          <Route path='/work' component={Work} />
          <Route path='/about' component={About} />
          <Route path='/blog' component={Blog} />
        </Route>
      </Router>
    )
  }
}

export default Routers;