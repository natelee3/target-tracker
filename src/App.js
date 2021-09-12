import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Navigation from './components/Navigation';

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path='/'>
            <Dashboard/>
          </Route>
          <Route path={'/:listingId'}>
            <Details />
          </Route>
          <Route path='*'>
            <Redirect to='/'/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
