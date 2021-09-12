import { useState } from 'react';
import {data} from '../data';
import './Dashboard.css';

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
        <>
            <h1>Target Tracker</h1>
            {data.map(entry => (
                <h2>{entry.company_info.name}</h2>
            ))}
        </>
    );
}

   


export default Dashboard;