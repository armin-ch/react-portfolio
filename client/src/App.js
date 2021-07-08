
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Home from './pages/Home'
import MyNavBar from './components/MyNavBar'

const App = () => {
  return (
    <Router>
      <div>
        <MyNavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App