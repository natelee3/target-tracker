import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './components/Details';
import Navigation from './components/Navigation';
import { useState, useEffect } from 'react';
import {data} from './data';
import './components/Dashboard.css';
import SingleResult from './components/SingleResult';
import Modal from "./components/AddTargetModal";

function App() {
  const [listings, setListings] = useState(null);
  const [fetchedData, setFetchedData] = useState(data);
  const [nextId, setNextId] = useState(data.length + 1)
  const [isVisible, setIsVisible] = useState(false);
  const handleModalClick = () => setIsVisible(!isVisible);

  useEffect(() => {
    //With a backend, this would be fetching from the database and updating the page
    setListings(fetchedData);
  },[fetchedData]);

  const _deleteEntry = (id) => {
      //Normally, this would POST to the backend, triggering the useEffect hook
      setFetchedData(fetchedData.filter(listing => listing.id !== id));
  };

  const _addEntry = (lookup_name, lookup_domain, response) => {
    if (!!response) {
      const {id, url, key_contacts, metrics} = response;
    };
    setFetchedData([...fetchedData, {
      id: nextId,
      status: 'researching',
      key_contacts: key_contacts || '',
      company_info: {
        name: response.name || lookup_name,
        url: url || 'https://' + lookup_domain,
        logo: logo || '',
        sector: '',
        description: '',
        geo: {
          city: '',
          stateCode: '',
          streetNumber: '',
          streetName: ''
        }
      },
      metrics: {
        employees: '',
        marketCap: '',
        annualRevenue: ''
      }
    } ]);
    console.log(fetchedData);
    setNextId(nextId + 1);
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
              <div className="card-container">
                  { fetchedData ? 
                  fetchedData.map(entry => (
                      <SingleResult
                          key={entry.id} 
                          listing={entry}
                          delete={_deleteEntry}
                      />
                  ))
                : null}
              </div>
              <Modal 
                isVisible={isVisible}
                handleModalClick={handleModalClick}
                addEntry={_addEntry}
              />
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
