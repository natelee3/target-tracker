import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from 'react'; 
import { Button, Card, Col } from 'react-bootstrap';
import EditTargetModal from './EditTargetModal';
import ReactImageFallback from 'react-image-fallback';
import './Details.css';


const Details = ({listings, updateEntry}) => {
    const { listingId } = useParams();
    const history = useHistory();
    const [listing, setListing] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const handleModalClick = () => setIsVisible(!isVisible);
    

    useEffect(() => {
        if (!!listings) {
            const found = listings.find(company => {
                return company.id === parseInt(listingId);
            });
            setListing(found);
        };
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
                                        <b>Sector: </b>{listing.company_info.sector}<br/>
                                        <b>HQ Location: </b>{ !!listing.company_info.geo.city ? 
                                        `${listing.company_info.geo.city}, ${listing.company_info.geo.stateCode}`
                                        : null}<br/>
                                        <b>Employees: </b>{listing.metrics.employees}<br/>
                                        <b>Market Cap: </b>{listing.metrics.marketCap}<br/>
                                        <b>Annual Revenue: </b>{listing.metrics.annualRevenue}<br/>
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
                <EditTargetModal 
                    listing={listing}
                    handleModalClick={handleModalClick}
                    isVisible={isVisible}
                    updateEntry={updateEntry}/>
                <Button type="button" id="backButton" className="btn btn-secondary" onClick={()=> {history.goBack()}}>Back</Button>
            </div>
        </div>
    )
};

export default Details;