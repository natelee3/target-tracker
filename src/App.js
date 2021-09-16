import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './components/Details';
import Navigation from './components/Navigation';
import { useState, useEffect } from 'react';
import {data} from './data';
import './components/Dashboard.css';
import SingleResult from './components/SingleResult';

function App() {
  const [listings, setListings] = useState(null);
  const [fetchedData, setFetchedData] = useState(data);

  useEffect(() => {
    setListings(fetchedData);
  })

  const _deleteEntry = (id) => {
      console.log('deleteEntry is being run')
      setFetchedData(fetchedData.filter(listing => listing.id !== id));
  };

  const _addEntry = () => {
      //TODO: add new entry to listings by running a fetch and setting all the information into state.
  };

  const _updateEntry = (id, status, notes) => {
      //TODO: allow users to add notes, update status
  };


  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path='/'>
            <div className="content">
              <h1>Target Tracker</h1>
              <div className="card-container">
                  {fetchedData.map(entry => (
                      <SingleResult
                          key={entry.id} 
                          listing={entry}
                          delete={_deleteEntry}
                      />
                  ))}
              </div>
            </div>
          </Route>
          <Route path={'/:listingId'}>
            <Details 
              listings={listings}/>
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
