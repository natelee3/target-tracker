import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from 'react'; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import ReactImageFallback from 'react-image-fallback';
import './Details.css';


const Details = (props) => {
    const { listingId } = useParams();
    const { listings } = props;
    const [listing, setListing] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const found = listings.find(company => {
            return company.id === parseInt(listingId);
        });
        setListing(found);
    },[listings, listingId]);


    return (
        <div className="content"> 
            {!!listing ? 
                <>
                <h1>{listing.company_info.name}</h1>
                <h4>Status: {listing.status}</h4>
                    <Card key={listingId} style={{ width: '90vw' }}>
                        <div className="row justify-content-center">
                            <Col xs={3} className="d-flex align-self-center justify-content-center">
                                <div className="img-wrapper d-block">
                                    <ReactImageFallback
                                                    src={listing.company_info.logo} 
                                                    fallbackImage="/logo192.png"
                                                    className="card-img" 
                                    />
                                </div>
                            </Col>
                            <Col xs={9}>
                                <Card.Body className="align-left">
                                    <Card.Text>
                                        <p>
                                            <b>Sector: </b>{listing.company_info.sector}
                                        </p>
                                        <p>
                                            <b>HQ Location: </b>{`${listing.company_info.geo.city}, ${listing.company_info.geo.stateCode}`}
                                        </p>
                                        <p>
                                            <b>Employees: </b>{listing.metrics.employees}
                                        </p>
                                        <p>
                                            <b>Market Cap: </b>{listing.metrics.marketCap}
                                        </p>
                                        <p>
                                            <b>Annual Revenue: </b>{listing.metrics.annualRevenue}
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                
                        </div>    
                    </Card>
                    {/* //Notes card */}
                    <Card style={{ width: '90vw' }}>
                        <div className="row justify-content-center">
                        
                        </div>
                    </Card>
                </> : null }
            <div>
                <button type="button" id="backButton" className="btn btn-primary" onClick={()=> {history.goBack()}}>Back</button>
            </div>
        </div>
    )
};

export default Details;