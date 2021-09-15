import { useState } from 'react';
import {data} from '../data';
import './Dashboard.css';
import SingleResult from './SingleResult';

const Dashboard = () => {
    const [listings, setListings] = useState(data)

    const _deleteEntry = (id) => {
        //TODO: remove entry from listings
        setListings(listings.filter(listing => listing.id !== id));
    };

    const _addEntry = () => {
        //TODO: add new entry to listings by running a fetch and setting all the information into state.
    };

    const _updateEntry = (id, status, notes) => {
        //TODO: allow users to add notes, update status
    };
    
    
    return (
        <div className="content">
            <h1>Target Tracker</h1>
                <div className="card-container">
                    {data.map(entry => (
                        <SingleResult 
                            listing={entry}
                            delete={_deleteEntry}
                        />
                    ))}
                </div>
        </div>
    );
}

   


export default Dashboard;