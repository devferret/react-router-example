import React, { Component } from 'react'
// import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom'

import './Blog.css'
import Posts from './Posts/Posts'
// import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost'

import asyncComponent from '../../hoc/asyncComponent'
const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'))

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true'
                  }}>
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={AsyncNewPost} />
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </div>
    )
  }
}

export default Blog
