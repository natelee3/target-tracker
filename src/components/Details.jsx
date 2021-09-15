import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'; 

const Details = (props) => {
    const { listingId } = useParams();
    const { listings } = props;
    const [listing, setListing] = useState(null);

    useEffect(() => {
        const found = listings.find(company => {
            return company.id === parseInt(listingId);
        });
        setListing(found);
    },[listings, listingId])

    return (
        <>
            <h1>{listing.company_info.name}</h1>
            <p>The listing ID = {listing.id}</p>
        </>
    )
};

export default Details;