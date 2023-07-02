import './App.css'

import {Switch, Route} from 'react-router-dom'

import Header from './Header'

import Home from './Home'

import CourseItemDetails from './CourseItemDetails'

import NotFound from './NotFound'

// Replace your code here
const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
