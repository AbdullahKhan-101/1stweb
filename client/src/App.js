import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navabar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import Error from './components/Error'

import {Route, Switch} from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div>
      <Navabar/>
      <Switch>
      <Route exact path="/">
      <Home/>
      </Route>

      <Route path="/about">
      <About/>
      </Route>

      <Route path="/contact">
      <Contact/>
      </Route>

      <Route path="/login">
      <Login/>
      </Route>

      <Route path="/signup">
      <Signup/>
      </Route>

      <Route component={Error}>
      </Route>
      </Switch>

    </div>
  )
}

export default App
