
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/portfolio'>
              Portfolio
            </Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App